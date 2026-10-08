# Front-end reference: start here

This section is the skill's front-end brain. Use it whenever you design or build any page, and always before writing HTML or CSS for a new page. It exists because a page can be technically valid and still look generic, feel cramped on a phone, or be hard to tap. Open only the guides you need.

The user is usually not a developer. Everything here is for you to apply. Show the user the result and a few plain sentences, not this jargon.

## Order of work

1. **Design direction** ([01_DESIGN_DIRECTION.md](01_DESIGN_DIRECTION.md)). Write a short design plan, check it is not a template, then build.
2. **Build phone-first** ([05_MOBILE_FIRST.md](05_MOBILE_FIRST.md)), using the foundations: [02_TYPOGRAPHY.md](02_TYPOGRAPHY.md), [03_COLOR_AND_CONTRAST.md](03_COLOR_AND_CONTRAST.md), [04_LAYOUT_AND_SPACING.md](04_LAYOUT_AND_SPACING.md). Start from [starter/base.css](starter/base.css).
3. **Parts** ([06_COMPONENTS.md](06_COMPONENTS.md)): menu, hero, gallery, accordion, forms, sticky action bar.
4. **Quality floor**: [07_ACCESSIBILITY.md](07_ACCESSIBILITY.md), [08_PERFORMANCE.md](08_PERFORMANCE.md), [09_MOTION.md](09_MOTION.md).
5. **Test before you say it's done** ([10_TEST_AND_AUDIT.md](10_TEST_AND_AUDIT.md)), using [starter/mobile-audit.js](starter/mobile-audit.js).

Pictures are covered separately in [../IMAGES_GUIDE.md](../IMAGES_GUIDE.md).

## What to read for what

| If the task is... | Read |
| --- | --- |
| New page or redesign | 01, then 05 |
| "Looks generic / plain / boring" | 01, 02, 03 |
| "Doesn't work well on my phone" | 05, 06, 10 |
| Fonts, text size, readability | 02 |
| Colors, brand palette, dark mode | 03 |
| Spacing, sections, grids | 04 |
| Menu, gallery, FAQ, form, call button | 06 |
| Accessibility or SEO review | 07, 08 |
| Animation | 09 |
| Final check | 10 |

## Rules that always apply

1. **The user's brief wins.** Their stated style, colors, fonts, and references override anything here. Defaults in this section are for the choices they left open.
2. **Phone first.** Design at 375px wide, then widen. If the phone view is an afterthought, the page is not done.
3. **The first phone screen earns its place.** Brand, one clear headline, a real visual, and the main action, all visible without scrolling. Navigation never eats a quarter of the screen.
4. **Text is at least 16px, nothing is under 12px, and taps are at least 44px.**
5. **No template tells.** The page should look made for this business, not for any business. See 01.
6. **Prove it.** Render it at phone size and look at it. Never claim "mobile-friendly" without doing that. If you cannot render, say "Not verified yet."
7. **Keep it honest and simple.** No fake reviews, no fake stats, no decoration that hides weak content.

## Where this came from

Built from public web standards (W3C, web.dev, MDN) and ideas from two openly licensed design skills, rewritten in this skill's own words. See [SOURCES.md](SOURCES.md).
