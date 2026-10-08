# Accessibility

The target is WCAG 2.2 level AA. It also makes pages easier for everyone: someone on a phone in sunlight, someone with a broken wrist using only a keyboard, someone who zooms text. It helps SEO too, because clear structure is easy for search engines to read.

## Structure

- One `<h1>` per page. Headings go in order (h1, h2, h3), never skipped for looks.
- Use landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`. Give a second `<nav>` an `aria-label`.
- Set `<html lang="en">` to the real language (and `dir="rtl"` when needed).
- Each page has a unique, meaningful `<title>`.
- Use real elements: `<button>` for actions, `<a>` for links, `<ul>` for lists, `<label>` for form fields.
- Do not use ARIA to fix what native HTML already does. If a native element exists, use it.

## Keyboard and focus

- Everything that can be clicked can be reached and used with the keyboard, in a logical order.
- **Focus must be visible.** Never remove outlines without replacing them. Use `:focus-visible` with a clear 3px ring that has 3 to 1 contrast against its surroundings.
- Add a skip link as the first focusable item.
- Menus, dialogs, and accordions manage focus: dialogs trap it and give it back, and Esc closes them.
- Sticky headers must not hide the focused element (`scroll-padding-top`).

## Targets and gestures

- Targets are at least 24 by 24 CSS px (AA), and 44 by 44 or larger is the standard to aim for on touch.
- Anything done with a swipe, drag, or multi-finger gesture also has a plain tap or button alternative.

## Text, color, and zoom

- Contrast: 4.5 to 1 for body text, 3 to 1 for large text and for UI parts (see 03).
- Never rely on color alone.
- The page works at 200% text zoom, and at 320px wide it reflows without sideways scrolling (400% zoom equivalent).
- Never block pinch-zoom.
- Don't justify long text, and don't set it in italics or all caps for paragraphs.

## Images and media

- Every `<img>` has an `alt` attribute: a short, accurate description of what matters, or `alt=""` for purely decorative images.
- Informative images are never the only place the information appears. Text in an image is also in the page.
- Video has captions; audio has a transcript. Nothing autoplays with sound. Anything that moves for more than 5 seconds can be paused.
- Give embeds and iframes a `title`.

## Forms

- Every field has a visible `<label>` connected with `for`/`id`.
- Mark required fields in the label text, not only by color.
- Errors say what is wrong and how to fix it, appear near the field, and are announced (`aria-live="polite"` on a message region, or move focus to the first error).
- Use `autocomplete` and correct `type`s so the browser can help.
- Don't use a placeholder as the label.

## Motion

- Respect `prefers-reduced-motion`. Replace large movement with a gentle fade or no movement, and keep useful feedback (see 09).
- Nothing flashes more than three times per second.

## Links and wording

- Link text makes sense on its own ("Read the pricing guide", not "click here").
- Buttons name their result.
- Say what opens in a new tab if you open one, and prefer not to.

## Quick check (do these)

1. Tab through the whole page with the keyboard: can you reach and use everything, and see where you are?
2. Zoom to 200%, and view at 320px wide: still usable, no sideways scroll?
3. Is there exactly one h1, with headings in order?
4. Do all images have the right `alt`?
5. Do the text and button colors pass contrast?
6. Do the forms have labels, and does the error text help?

Automated checkers catch only part of this. Say what you checked and what you could not.
