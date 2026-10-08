# Color and contrast

Color sets mood, but its first job is to be readable. Pick a small palette with clear roles, then check contrast.

## Build the palette from roles

Name 4 to 6 core colors and decide each one's job:

| Role | Job |
| --- | --- |
| Background | the page surface |
| Surface | slightly different panels or sections |
| Text | main reading color |
| Text soft | secondary text (must still pass contrast) |
| Accent | buttons, links, one highlight; used sparingly |
| Line | borders and dividers |

Add only what's needed: a focus ring color, plus success and error colors if the page has forms.

Put them in CSS custom properties (see [starter/base.css](starter/base.css)) so one change updates the whole page. Never scatter loose hex values through the stylesheet.

**Use the user's brand colors.** If a brand color fails contrast as text, keep it for large shapes and make a darker or lighter text version of the same hue. Name it, e.g. `--accent-ink`.

## How much of each

Mostly neutral, a smaller amount of a supporting color, and a little accent. If everything is accented, nothing is. A single strong accent used on the main action is easier to follow than five competing ones.

Choose light or dark from the situation: who is looking, where, and in what light. A late-night bar and a morning yoga studio don't share a default. Don't pick by category habit.

## Contrast: the numbers to meet

These are WCAG 2.2 level AA, the usual legal and quality target:

| What | Minimum contrast ratio |
| --- | --- |
| Normal body text and placeholder text | 4.5 to 1 |
| Large text (about 24px, or 19px bold, and up) | 3 to 1 |
| Icons, input borders, focus rings, button edges (parts needed to understand the UI) | 3 to 1 against what's next to them |

Check pairs for real, using a contrast checker or a computed ratio. Colors that "look fine" on your screen often fail on a phone in sunlight.

Rules that go with this:

- **Don't use color alone to carry meaning.** Errors get an icon or text as well as red. Links inside text are underlined or otherwise clearly different.
- **Text on photos:** add a gradient or solid overlay behind the text, or place text on a plain area. Check the contrast over the busiest part of the image.
- **On colored surfaces,** tint secondary text from that surface's hue instead of using a flat gray.
- **Disabled controls** may be lighter, but still must be recognizable as controls.
- **Visible focus:** every keyboard-focusable control gets a clear focus ring (see 07).

## Dark mode (optional)

Only offer it if it is wanted. If you do, define two sets of the same role names and switch them with `prefers-color-scheme`. Don't just invert colors. Re-check contrast in both. Large pure-white areas on dark backgrounds are harsh; use softer near-whites.

## Things to avoid

- Gradient text, and gradient washes used as decoration
- Soft gray shadows copied onto every element
- A palette of many similar muted tones that all fight for attention
- Red and green as the only difference between two states

## Check

- Each pair of text and background passes the numbers above.
- The palette fits in six names, with one clear accent.
- Meaning never depends on color alone.
- If dark mode exists, both modes pass contrast.
