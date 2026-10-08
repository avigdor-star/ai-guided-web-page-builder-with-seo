/* Phone audit. Run at a phone-sized viewport (375px wide).
   - Paste into the browser console, or run through a browser tool.
   - It only reads the page. It changes nothing.
   Returns { viewport, summary, issues[] }. Each issue has a rule, severity, and detail.
   It is a floor, not proof: it cannot judge contrast, design quality, or feel. */
(() => {
  const issues = [];
  const add = (rule, severity, detail, count) => issues.push({ rule, severity, detail, ...(count != null ? { count } : {}) });
  const vw = window.innerWidth, vh = window.innerHeight;
  const label = e => (e.id ? '#' + e.id : '') + (e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/)[0] : '') || e.tagName.toLowerCase();
  const visible = e => {
    const r = e.getBoundingClientRect(), s = getComputedStyle(e);
    return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && s.opacity !== '0';
  };
  const all = [...document.body.querySelectorAll('*')].filter(visible);

  // 1. Viewport tag and zoom
  const meta = document.querySelector('meta[name="viewport"]');
  if (!meta) add('viewport-meta', 'high', 'Missing <meta name="viewport" content="width=device-width, initial-scale=1">');
  else if (/user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/i.test(meta.content))
    add('zoom-blocked', 'high', 'Viewport blocks pinch-zoom: ' + meta.content);

  // 2. Horizontal overflow
  const sw = document.documentElement.scrollWidth;
  if (sw > vw + 1) {
    const wide = all.filter(e => e.getBoundingClientRect().right > vw + 1).slice(0, 8).map(label);
    add('horizontal-overflow', 'high', `Page is ${sw}px wide in a ${vw}px viewport. Likely culprits: ${wide.join(', ') || 'unknown'}`);
  }

  // 3. Text size
  const small = [], bodySmall = [];
  all.forEach(e => {
    const own = [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
    if (!own) return;
    const fs = parseFloat(getComputedStyle(e).fontSize);
    if (fs < 12) small.push(`${label(e)} ${fs.toFixed(1)}px`);
    else if (e.tagName === 'P' && fs < 16) bodySmall.push(`${label(e)} ${fs.toFixed(1)}px`);
  });
  if (small.length) add('text-under-12px', 'high', [...new Set(small)].slice(0, 8).join('; '), small.length);
  if (bodySmall.length) add('paragraph-under-16px', 'medium', [...new Set(bodySmall)].slice(0, 6).join('; '), bodySmall.length);

  // 4. Tap targets (links inside running sentences are exempt; menu and list links are not)
  const targets = all.filter(e => e.matches('a[href], button, summary, input:not([type=hidden]), select, textarea, [role=button]'));
  const smallTaps = targets.filter(e => {
    if (e.matches('a') && getComputedStyle(e).display === 'inline') {
      const host = e.closest('p, li, figcaption, dd, blockquote');       /* only skip links inside running text */
      if (host && host.textContent.trim().length > e.textContent.trim().length + 15) return false;
    }
    const r = e.getBoundingClientRect();
    return r.width < 44 || r.height < 44;
  });
  if (smallTaps.length) add('tap-target-under-44px', 'medium',
    smallTaps.slice(0, 8).map(e => { const r = e.getBoundingClientRect(); return `${(e.textContent || e.getAttribute('aria-label') || label(e)).trim().slice(0, 20)} ${Math.round(r.width)}x${Math.round(r.height)}`; }).join('; '),
    smallTaps.length);

  // 5. First screen: header size, wrapped nav, real visual, main action
  const header = document.querySelector('header, [role=banner]');
  if (header && visible(header)) {
    const h = header.getBoundingClientRect().height;
    if (h > vh * 0.22) add('header-too-tall', 'high', `Header is ${Math.round(h)}px, ${Math.round(h / vh * 100)}% of the screen (aim for under about 20%).`);
  }
  const nav = document.querySelector('header nav, nav');
  if (nav && visible(nav)) {
    const tops = new Set([...nav.querySelectorAll('a')].filter(visible).map(a => Math.round(a.getBoundingClientRect().top / 8)));
    if (tops.size > 1) add('nav-wraps', 'high', `Navigation links wrap onto ${tops.size} rows. Use a menu button or fewer links on phones.`);
  }
  const inFirst = e => { const r = e.getBoundingClientRect(); return r.top < vh && r.bottom > 0; };
  const visuals = all.filter(e => e.matches('img, picture, video, svg, canvas') && inFirst(e) && e.getBoundingClientRect().width >= 160 && e.getBoundingClientRect().height >= 120);
  if (!visuals.length) add('no-visual-in-first-screen', 'high', 'No image or visual of at least 160x120 appears before scrolling.');
  const cta = all.filter(e => e.matches('a.btn, a[class*=button], a[class*=cta], button, [role=button]') && inFirst(e) && e.getBoundingClientRect().height >= 40);
  if (!cta.length) add('no-action-in-first-screen', 'high', 'No clear button or main action is visible before scrolling.');

  // 6. Images
  const imgs = [...document.images];
  const noAlt = imgs.filter(i => !i.hasAttribute('alt'));
  if (noAlt.length) add('img-missing-alt', 'high', noAlt.slice(0, 5).map(i => i.getAttribute('src')).join('; '), noAlt.length);
  const noDim = imgs.filter(i => visible(i) && !((i.getAttribute('width') && i.getAttribute('height')) || getComputedStyle(i).aspectRatio !== 'auto'));
  if (noDim.length) add('img-no-dimensions', 'medium', 'Images without width/height or aspect-ratio can cause layout jumps: ' + noDim.slice(0, 5).map(i => i.getAttribute('src')).join('; '), noDim.length);
  const lazyHero = imgs.find(i => i.loading === 'lazy' && inFirst(i) && i.getBoundingClientRect().width > vw * 0.6);
  if (lazyHero) add('hero-image-lazy', 'medium', 'A large first-screen image is lazy-loaded: ' + lazyHero.getAttribute('src'));

  // 7. Form fields
  const fields = [...document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]), select, textarea')].filter(visible);
  const smallField = fields.filter(f => parseFloat(getComputedStyle(f).fontSize) < 16);
  if (smallField.length) add('field-under-16px', 'medium', 'iPhones zoom in on fields under 16px.', smallField.length);
  const noLabel = fields.filter(f => !(f.labels && f.labels.length) && !f.getAttribute('aria-label') && !f.getAttribute('aria-labelledby'));
  if (noLabel.length) add('field-without-label', 'high', noLabel.slice(0, 5).map(label).join(', '), noLabel.length);

  // 8. Document basics
  const h1s = document.querySelectorAll('h1').length;
  if (h1s !== 1) add('h1-count', 'medium', `Found ${h1s} <h1> elements (should be exactly 1).`);
  if (!document.documentElement.lang) add('html-lang-missing', 'medium', '<html> has no lang attribute.');
  if (!document.title.trim()) add('title-missing', 'high', 'Page has no <title>.');
  if (!document.querySelector('meta[name="description"]')) add('meta-description-missing', 'medium', 'No meta description.');

  // 9. Fixed or sticky elements eating the screen
  const stuck = all.filter(e => ['fixed', 'sticky'].includes(getComputedStyle(e).position));
  const stuckH = stuck.reduce((sum, e) => sum + Math.min(e.getBoundingClientRect().height, vh), 0);
  if (stuckH > vh * 0.3) add('sticky-covers-screen', 'medium', `Fixed/sticky elements use about ${Math.round(stuckH / vh * 100)}% of the screen height: ${stuck.map(label).join(', ')}`);

  const rank = { high: 0, medium: 1 };
  issues.sort((a, b) => rank[a.severity] - rank[b.severity]);
  return {
    viewport: { width: vw, height: vh, dpr: window.devicePixelRatio },
    note: vw > 480 ? 'Viewport is wider than a phone. Re-run at 375px wide for phone results.' : undefined,
    summary: { high: issues.filter(i => i.severity === 'high').length, medium: issues.filter(i => i.severity === 'medium').length },
    issues
  };
})();
