# Sources and credits

The guides in this folder are original writing. They restate widely taught practice and ideas from the openly licensed projects below. No text was copied verbatim, and no code was copied from those projects. The starter files are original.

## Openly licensed design skills (ideas restated, with credit)

| Source | License | What we drew on |
| --- | --- | --- |
| [Anthropic `frontend-design` skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design), Copyright 2025 Anthropic, PBC | Apache-2.0 (LICENSE.txt in the skill folder) | Ground the design in the subject; plan the palette, type, and layout before coding and challenge the plan against the brief; the list of common "template tells"; spend boldness in one place; structure as information; writing as design; reduced-motion and quality-floor reminders |
| [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus | Apache-2.0 | Visitor modes (persuade, operate, read, experience); the spatial thesis and squint test; spacing scale and rhythm ideas; the quality "floor" and what to refuse; a bounded verify-fix-confirm loop; the dimensions used in the short scorecard |

Apache-2.0 notice: these projects are licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0). This repository does not redistribute their files.

## Standards and public references (facts and thresholds)

- W3C **WCAG 2.2**: contrast ratios (4.5:1, 3:1), target size (24px minimum, 44px enhanced), reflow at 320px, text resize, focus, motion. https://www.w3.org/TR/WCAG22/
- **web.dev**: Core Web Vitals thresholds (LCP, INP, CLS), image and font loading guidance. https://web.dev/
- **MDN Web Docs**: HTML and CSS features used here (`<details>`, `<dialog>`, `clamp()`, container queries, `dvh`, `prefers-reduced-motion`, `@font-face`). https://developer.mozilla.org/
- **Apple Human Interface Guidelines** (44pt touch targets) and **Material Design** (48dp touch targets).
- **SIL Open Font License** fonts through Google Fonts and Fontsource.

The numbers above come from those specifications and guidelines and may be revised. Re-check them when updating these guides.

## Recommended companions (not included)

These are good places to go deeper. Check each project's own license before copying anything from it.

- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): style, palette, and font-pairing data and UX rules (MIT license on the repository)
- [Vercel Web Interface Guidelines / agent-skills](https://github.com/vercel-labs/agent-skills): a long checklist of interface, accessibility, and performance rules (the repository declares no top-level license, and the skill reads the guidelines live)
- [Impeccable](https://github.com/pbakaus/impeccable): the full design-direction skill with automated checks

Last reviewed: October 2026.
