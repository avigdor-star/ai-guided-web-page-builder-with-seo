# Performance

A slow page loses visitors and hurts search results. On a phone over mobile data, every kilobyte counts. A simple static site can be very fast if you avoid the common mistakes.

## The numbers that matter (Core Web Vitals)

Google measures these on real visits. "Good" means:

| Measure | What it is | Good |
| --- | --- | --- |
| LCP (Largest Contentful Paint) | how fast the main thing (usually the hero image or headline) appears | 2.5 seconds or less |
| INP (Interaction to Next Paint) | how quickly the page reacts to a tap | 200 milliseconds or less |
| CLS (Cumulative Layout Shift) | how much things jump around while loading | 0.1 or less |

You can't fully test these before the site is live, but you can design to pass them.

## Make LCP fast

- The hero image is the likeliest LCP element. Make it small (see the images guide), sized right, in WebP or JPEG, **not** lazy-loaded, and give it `fetchpriority="high"`.
- Put headline text and key content in the HTML itself. Don't build it with JavaScript.
- Keep the stylesheet small and in the `<head>`. Avoid chains of imports.
- Preload the one font used in the first screen (see 02) and use `font-display: swap`.

## Prevent layout shift (CLS)

- Every `<img>`, `<video>`, and `<iframe>` has `width` and `height` (or `aspect-ratio`).
- Reserve space for anything that loads late (maps, embeds, banners).
- Don't insert content above what the visitor is already reading.
- A fallback font with similar metrics keeps text from jumping when the web font arrives.

## Keep taps responsive (INP)

- Ship little JavaScript. A static site often needs only a menu toggle, a lightbox, and a form check.
- Don't load big libraries for small jobs. Native HTML and CSS handle accordions, dialogs, smooth anchors, and sticky positioning.
- Avoid scripts that run heavy work on scroll or tap. Keep third-party scripts (chat widgets, trackers, pixels) to the ones that are truly needed, and load them late.

## Image budget (rules of thumb)

| Asset | Aim for |
| --- | --- |
| Hero (phone version) | under about 150 to 200 KB |
| Ordinary photo | under about 300 KB, never over 1 MB |
| Whole first screen's downloads | under about 500 KB |
| Typical small-business page, everything | under roughly 1.5 to 2 MB |

These are guidelines, not guarantees. Use `srcset` and `sizes` so phones get small files, `loading="lazy"` for images below the fold, and modern formats (WebP, AVIF where convenient). See the images guide for how to prepare them.

## Fonts and CSS

- Limit fonts to one or two families and two or three weights, or one variable font.
- Self-host WOFF2 in the site folder.
- Remove CSS you don't use. One file is fine for a small site.
- Animate only `transform` and `opacity` where you can (see 09).

## Hosting basics (Netlify)

Netlify serves static files from a global network and handles HTTPS. A site made of simple files is already well suited. Don't add a build step the user doesn't need.

## After launch

Run the live address through PageSpeed Insights (pagespeed.web.dev) or Lighthouse in Chrome's developer tools, on mobile settings. Report the actual numbers you saw and from which tool. Don't claim a score you didn't measure.

## Check

- The hero image is small, sized, and not lazy-loaded.
- All images have dimensions.
- The page loads no unneeded libraries or fonts.
- There is no heavy script, video, or tracker the page doesn't need.
