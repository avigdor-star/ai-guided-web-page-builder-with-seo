# Test and audit

A page isn't done when the code is written. It is done when you've looked at it at phone size and checked the numbers. Do this in a bounded way: build, run one round of checks, fix everything found in one batch, run one confirming round, then stop. Don't polish in an endless loop.

## 1. See it

1. **Serve the site folder locally** if you have a shell (for example `python3 -m http.server 8000` run inside the site folder), so links between pages behave as they will online.
2. **Render at these widths** and look at real screenshots, not just the code:

| Width | Why |
| --- | --- |
| 320 | stress test: no sideways scroll, nothing cut off |
| 375 (or 390) | the typical phone: this is the main one |
| 768 | tablet |
| 1280 | desktop |

3. **On the 375 screenshot, answer these:**
   - Is there a real visual and the main action in the first screen, with no scrolling?
   - Is the header compact (one row)?
   - Is all text comfortably readable?
   - Does anything look cramped, cut off, or overlapped?
4. Scroll the full page at 375 and at 1280. Look at every section.

If you can't render a page (no browser tool), say so: "Not verified at phone size yet." Give the user the quick phone check at the end of this guide.

## 2. Run the phone audit

[starter/mobile-audit.js](starter/mobile-audit.js) checks the rendered page for the problems that most often slip through. Paste it into the browser console at 375px wide (or run it with a browser tool), and read the result. It reports:

- viewport tag missing or blocking zoom
- horizontal overflow, and which elements cause it
- text under 12px, and body-size paragraphs under 16px
- tap targets under 44px
- header taking too much of the first screen, or a wrapped nav
- no real image in the first screen, and no main button in the first screen
- images missing `alt`, `width`, or `height`
- form fields under 16px or without labels
- heading problems (not exactly one h1) and missing `lang`
- fixed or sticky elements covering too much of the screen

It cannot judge design quality, contrast, or how it *feels*. It is a floor, not proof.

## 3. Check what the script can't

- **Contrast:** use a contrast checker on text and button pairs, including text over photos.
- **Keyboard:** tab through the page. Can you see and use everything?
- **Zoom:** 200% still works.
- **Reduced motion:** with the setting on, nothing large moves.
- **Gestures:** if there's a swipe or drag, test it with touch if you can, and say how it was tested (emulated viewport, real device, or not tested).
- **Design:** compare the result to the design plan from 01. Still distinctive, with the template tells removed?

## 4. Score it (short version)

Rate each 0 to 4 and write the one most important finding for each:

| Dimension | 4 means |
| --- | --- |
| Accessibility | meets WCAG AA, keyboard and screen reader friendly |
| Performance | small images, few scripts, no layout jumps |
| Responsive / mobile | clean at 320 to 1280, comfortable taps, strong first phone screen |
| Design integrity | looks made for this business, consistent system, no template tells |
| Theming | colors and sizes come from variables, not scattered values |

18 to 20 is excellent. 14 to 17 is good with a few fixes. Below 14 needs real work before you call it finished.

## 5. Report honestly

Tell the user, in plain language:

- what you looked at and **how** (emulated phone width in a browser, not a real phone)
- what the audit found and what you fixed
- what you did **not** check
- the one thing most worth looking at on their own phone

Never write "mobile-friendly" or "SEO-ready" without having done at least steps 1 and 2.

## Quick phone check for the user (if you can't render it)

Ask them to open the preview on their phone and answer:

1. Can you see a photo and a big button without scrolling?
2. Can you read the text without zooming?
3. Can you tap every button and link without hitting the wrong thing?
4. Does anything slide sideways or get cut off?
5. Does it load in a couple of seconds?
6. Do the menu, gallery, and form all work with a thumb?

Fix what they report, then ask them to check again.
