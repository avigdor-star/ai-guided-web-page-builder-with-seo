# Components

Small, robust patterns that work on phones, with keyboards, and without breaking when JavaScript fails. Adapt the styling to the project's design plan; keep the behavior. Prefer native HTML (`<details>`, `<dialog>`, `<button>`, `<a>`) over custom scripts.

## Skip link (first thing in `<body>`)

```html
<a class="skip-link" href="#main">Skip to content</a>
<main id="main"> ... </main>
```

Styles are in [starter/base.css](starter/base.css).

## Header and phone menu

The links are visible without JavaScript. When JavaScript runs, phones get a Menu button.

```html
<header class="site-header">
  <a class="brand" href="/">Brand name</a>
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
  <nav id="site-nav" class="site-nav" aria-label="Main">
    <a href="/services/">Services</a>
    <a href="/about/">About</a>
    <a href="/contact/">Contact</a>
  </nav>
</header>
```

```css
.site-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;
  padding: .5rem var(--gutter); min-height: 4rem; }
.menu-btn { display: none; min-height: var(--tap); padding-inline: 1rem; }
.site-nav a { display: block; padding: .9rem 0; min-height: var(--tap); }       /* big tap rows */
.js .menu-btn { display: inline-flex; align-items: center; }
.js .site-nav { display: none; flex-basis: 100%; }
.js .site-nav.is-open { display: block; }
@media (min-width: 48em) {
  .js .menu-btn { display: none; }
  .site-nav, .js .site-nav { display: flex; flex-basis: auto; gap: 1.5rem; }
  .site-nav a { padding: .5rem 0; }
}
```

```html
<script>
  document.documentElement.classList.add('js');           /* put this in <head> */
  const btn = document.querySelector('.menu-btn'), nav = document.querySelector('#site-nav');
  btn?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); } });
</script>
```

Keep the first-screen header to one compact row. Mark the current page with `aria-current="page"`.

## Hero

```html
<section class="hero">
  <div class="hero-text">
    <h1>Specific headline about this business</h1>
    <p>One or two sentences. What, for whom, where.</p>
    <a class="btn" href="/book/">Book a free call</a>
  </div>
  <picture>
    <source media="(min-width: 48em)" srcset="images/hero-wide.webp">
    <img src="images/hero-tall.webp" width="800" height="1000" alt="Describe what the photo shows" fetchpriority="high">
  </picture>
</section>
```

On phones the picture stays in the first screen (put it above or beside the text as the design needs, and keep the button visible). One H1 per page. The hero image is never lazy-loaded.

## Buttons and links

- A **link** goes somewhere (`<a href>`). A **button** does something on this page (`<button>`).
- Buttons are at least 48px tall, with a clear label that names the result. The primary button appears once per view.
- Phone and email links: `<a href="tel:+15555550100">`, `<a href="mailto:hello@example.com">`. Show the number as text too.

## Sticky action bar (phones only)

For sites whose main goal is a call or booking.

```html
<div class="action-bar">
  <a class="btn btn-quiet" href="tel:+15555550100">Call</a>
  <a class="btn" href="/book/">Book</a>
</div>
```

```css
.action-bar { position: fixed; inset: auto 0 0 0; display: flex; gap: .75rem; z-index: 20;
  padding: .75rem var(--gutter) calc(.75rem + env(safe-area-inset-bottom)); background: var(--bg);
  border-top: 1px solid var(--line); }
.action-bar .btn { flex: 1; }
body { padding-bottom: 5rem; }                       /* so it never covers the footer */
@media (min-width: 48em) { .action-bar { display: none; } body { padding-bottom: 0; } }
```

Hide it while a form field is focused if it covers inputs, and never stack it with another sticky element.

## FAQ / accordion (no JavaScript)

```html
<details>
  <summary>How far ahead should I book?</summary>
  <p>Specific, honest answer.</p>
</details>
```

```css
summary { min-height: var(--tap); display: flex; align-items: center; cursor: pointer; padding-block: .5rem; }
details + details { border-top: 1px solid var(--line); }
```

The browser handles open/close, keyboard, and state announcements. Use `name="faq"` on the `<details>` elements to make them exclusive if wanted.

## Gallery and lightbox

Start with a plain grid of links to full-size images. This works without JavaScript.

```html
<ul class="gallery">
  <li><a href="images/gallery/patio-01.jpg"><img src="images/gallery/patio-01-thumb.jpg" width="600" height="400" alt="Stone patio at dusk" loading="lazy"></a></li>
</ul>

<dialog class="lightbox" aria-label="Photo viewer">
  <button class="lb-close" type="button" aria-label="Close photo">&times;</button>
  <img alt="">
</dialog>
```

```js
const dlg = document.querySelector('.lightbox'), big = dlg.querySelector('img');
document.querySelectorAll('.gallery a').forEach(a => a.addEventListener('click', e => {
  e.preventDefault(); big.src = a.href; big.alt = a.querySelector('img').alt; dlg.showModal();
}));
dlg.querySelector('.lb-close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });   /* click outside closes */
```

`<dialog>.showModal()` traps focus, closes on Esc, and returns focus. Make the close target at least 44px, the image `max-width: 100%; max-height: 90dvh; object-fit: contain`, and allow pinch-zoom. Add previous/next buttons only if the user asked for browsing; give them accessible names.

## Forms

```html
<form action="..." method="post">
  <label for="name">Your name</label>
  <input id="name" name="name" autocomplete="name" required>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required>
  <label for="msg">How can we help?</label>
  <textarea id="msg" name="msg" rows="5"></textarea>
  <button class="btn" type="submit">Send message</button>
</form>
```

A form needs a real destination (a form service, Netlify Forms with setup, or an email link). Without one, label it as a preview and offer a working alternative (phone or email). Never collect sensitive information in an unconnected form.

## Icons

Use one consistent set (inline SVG), same stroke weight and size. Decorative icons get `aria-hidden="true" focusable="false"`. An icon-only button gets an accessible name: `<button aria-label="Open menu">`. Do not use emoji as icons.

## Maps and videos

Put the address, hours, and phone number in text first. Embed a map or video below it, with `loading="lazy"` on the iframe, or show a still image that loads the embed on tap. Always give the embed a `title`.

## Testimonials and proof

Only real, approved quotes, with attribution. Otherwise a clearly labeled placeholder. Don't invent stars, counts, or logos.

## Footer

Name, contact, key links, legal/privacy links, and the same action as the header. Links get tap-friendly padding.
