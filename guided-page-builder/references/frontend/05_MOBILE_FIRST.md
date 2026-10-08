# Mobile first

For many small-business sites most visits come from phones, and a phone is the harshest place to show a page: small screen, thumbs, bad light, slow connection, one hand. Design for that first. A desktop layout is the phone layout given more room, not the other way around.

## The rules

### 1. Design at 375px wide, then widen

Start the CSS with the phone layout and add `min-width` media queries only where the content needs more room. Break where the layout breaks, not at device names. Test at 320 (stress), 375 or 390 (typical phone), 768 (tablet), 1280 (desktop).

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Never add `user-scalable=no` or `maximum-scale=1`. Visitors must be able to pinch-zoom. At 320px wide, content must reflow with no sideways scrolling (WCAG 1.4.10).

### 2. The first screen does the job

What fits on a phone before any scrolling is what most visitors judge you on. In order:

1. A **compact header** (logo, plus a menu button or one action). It should take roughly 56 to 72px, not a quarter of the screen.
2. A **headline** that says what this is and who it is for.
3. A **real visual** (photo, illustration, or composed placeholder). If the picture only appears after scrolling, the layout has failed.
4. The **main action**, a large button.

A full-screen hero is not required. If you use one, cap it with `min-height: min(85svh, 40rem)` so the next section peeks in and invites scrolling. Use `svh` or `dvh`, not `vh`, because `vh` ignores the phone browser's moving address bar and can hide your button.

### 3. Navigation

Do not let a row of links wrap into two or three lines on a phone. Pick one:

- Logo plus a **Menu button** that opens the links as a full-width list (pattern in 06).
- For very short sites (up to about 3 links): logo plus a few short links on one row, with the main action as the only button.

When the main goal is contact, add a **sticky action bar** at the bottom with *Call* and *Book* (pattern in 06). Respect the iPhone home bar with `env(safe-area-inset-bottom)` and make sure it never covers content or form fields.

### 4. Thumb-friendly sizes

- **Tap targets at least 44 by 44 CSS px** (the AA minimum is 24, but 44 is the common comfortable standard and Apple's; Material uses 48). Leave at least 8px between targets.
- Links in nav lists, footers, and cards get padding so the whole row taps. Links inside a paragraph can stay inline.
- Put the main action where a thumb reaches it: lower on the screen, centered or full width.
- A small icon can have a big hit area: pad the button, not the icon.

### 5. Text

- Body at least 16px. Nothing under 12px. See 02.
- Headlines sized so they don't need six lines on a phone. Shorten the copy before shrinking the type.
- No tiny wide-spaced all-caps labels. They are hard to read on phones.

### 6. Forms

- One column, big fields, visible labels (never placeholder-only).
- The right keyboard: `type="email"`, `type="tel"`, `type="url"`, `inputmode="numeric"`, plus `autocomplete` values (`name`, `email`, `tel`, `postal-code`).
- Input text at 16px or more, or iPhones will zoom in when a field is focused.
- A full-width submit button that names the result. Errors appear next to the field and say how to fix it.
- Ask for as little as you need.

### 7. Nothing depends on hover

Phones have no hover. Anything revealed on hover must also work on tap or be visible by default. Wrap pure-polish hover styles in `@media (hover: hover)`.

### 8. Images and media

- Serve the right size: `srcset` and `sizes` so phones don't download desktop images (see the images guide).
- Crop for the screen with `<picture>`: a portrait or square crop on phones, a wide crop on desktop.
- Always set `width` and `height` (or `aspect-ratio`) so nothing jumps.
- Hero image: no lazy loading, and add `fetchpriority="high"`. Images lower down get `loading="lazy"`.
- No autoplay video with sound, and no heavy background video on phones.
- Embeds (maps, videos): provide the essential info in text too (the address, the phone number). Load heavy embeds only after the visitor taps.

### 9. Galleries and sliders

A simple 2-column grid usually beats a carousel on a phone. If you do use a swipeable row, use native scrolling with `scroll-snap`, show a peek of the next item, and avoid auto-advance. A lightbox opens full-screen with a large close button, keeps pinch-zoom working, and closes with Back or Esc.

### 10. Tables, long words, wide content

Tables scroll inside their own container or restack into labeled rows. Add `overflow-wrap: break-word` to text. Nothing may push the page wider than the screen.

### 11. Content priority

Phones reward shorter, clearer copy. Lead with what matters. Put detail behind a `<details>` toggle or a link. Cut decoration before you cut content. The page can show less than desktop, but the main action and key facts (what, where, how much, how to contact) are always one tap away.

### 12. Speed on cellular

Phones are often on slow connections. Keep photos small, fonts few, and scripts minimal (see 08).

## Quick breakpoints

| Name | Width | Typical change |
| --- | --- | --- |
| Phone | 320 to 480 | single column, menu button, big buttons |
| Large phone / small tablet | 560 to 767 | 2-column grids start to fit |
| Tablet | 768 to 1023 | inline nav may fit, 2 to 3 columns |
| Laptop / desktop | 1024+ | multi-column, side-by-side hero, wider gutters |

Use `em` or `rem` in media queries so they respect text size settings, e.g. `@media (min-width: 48em)` for 768px.

## Typical mistakes (seen in real test pages)

- The navigation wraps onto two rows and pushes everything down.
- The hero photo sits below the first screen, so the first view is all text.
- Tiny letter-spaced labels under 12px.
- Many tap targets 20 to 34px tall.
- Hover-only effects with no tap equivalent.
- A 100vh hero hiding its button behind the browser bar.

Verify all of these with the checks in 10.
