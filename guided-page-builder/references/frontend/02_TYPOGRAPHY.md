# Typography

Type carries the page's personality and its readability. Get it right and a simple page looks professional.

## Set roles first

Decide the roles the page needs, then give each one a distinct look: display headline, section heading, body, small/meta, button/label. Use the fewest families that make the hierarchy obvious: **one family, or two that are clearly different.** A second family needs a job the first can't do.

Combine size, weight, spacing, and color to separate roles. Don't ask size alone to do all the work.

## Sizes that work on phones and desktops

| Role | Phone | Notes |
| --- | --- | --- |
| Body | 16 to 20px (1rem to 1.25rem) | **Never below 16px for main text.** |
| Small / captions | 14px or more | Nothing under 12px, ever. |
| Buttons, nav | 16px | Easy to read and tap |
| Section headings | about 26 to 36px | Scales up on wide screens |
| Page headline | about 34 to 48px | Display text above about 6rem is rarely needed |

Use `rem`, not `px`, for text so browser zoom and the user's font setting still work. Make type fluid with `clamp()` that mixes `rem` and `vw`, so it never gets too small or too big:

```css
h1 { font-size: clamp(2.1rem, 1.4rem + 3.2vw, 3.8rem); }
```

Keep one type scale (each step a consistent ratio bigger, around 1.2 on phones to 1.333 on desktop) and reuse it everywhere. Repeated roles look identical on every page.

## Readable text

- **Line length:** 45 to 75 characters per line for paragraphs (`max-width: 65ch`). Serif body can run slightly longer.
- **Line height:** about 1.5 to 1.7 for body, 1.05 to 1.25 for large headings. Wider lines need more line height. Serif body wants a little more than sans.
- **Headings:** `text-wrap: balance` avoids awkward one-word last lines. `text-wrap: pretty` helps paragraphs.
- **Light text on dark backgrounds:** use slightly more line height, a touch more letter-spacing, and sometimes one weight heavier. Light-on-dark looks thinner than it is.
- **Paragraph rhythm:** use space between paragraphs, or first-line indents, not both.
- **Letter-spacing:** keep headings from being tightened past about -0.04em. Wide tracking is for very short labels only.
- **ALL CAPS:** only for short labels where it truly helps, and not as the default style for every small line of text. Wide-spaced tiny caps are one of the biggest "template" tells and hurt readability on phones.
- **Numbers:** `font-variant-numeric: tabular-nums` for prices and tables so columns line up.
- **Long words and zoom:** `overflow-wrap: break-word` on text containers. Test at 200% zoom.

## Choosing fonts

Choose by the personality the subject needs, not by habit. Ask: what does this business feel like to be around? Then pick families whose character matches. Avoid the defaults you would reach for on every project.

| Feeling | Look for | Examples to consider (free, SIL Open Font License) |
| --- | --- | --- |
| Warm, human, editorial | softened serifs | Fraunces, Newsreader, Source Serif 4, Literata |
| Calm, trustworthy | clear humanist sans | Figtree, Public Sans, Nunito Sans, Mulish |
| Crisp, modern | neutral grotesques | DM Sans, Manrope, Work Sans |
| Distinctive display | a characterful headline face, used sparingly | Bricolage Grotesque, Gloock, Young Serif, Cormorant |
| Technical | a plain sans plus a mono for real code or data only | IBM Plex Sans and Plex Mono |

Check that each family is available and licensed for web use (the SIL Open Font License covers the above) at fonts.google.com or fontsource.org before you commit. The list is a starting point, not a mandate.

If you cannot download fonts, use a deliberate system stack and design around it. A good system stack beats a broken font load.

## Add fonts the easy way (and host them in the site folder)

Put font files in the site's `fonts/` folder and load them from there, like images. No third-party font service is needed, nothing breaks if that service is down, and visitors' details are not sent to an outside company (some regions treat loading fonts from a third-party server as a privacy issue).

```css
@font-face {
  font-family: "Brand Serif";
  src: url("../fonts/brand-serif-var.woff2") format("woff2");
  font-weight: 300 800;        /* variable font: one file, many weights */
  font-style: normal;
  font-display: swap;          /* show text immediately, swap when loaded */
}
:root { --serif: "Brand Serif", Georgia, "Times New Roman", serif; }
```

- Use **WOFF2** files. Prefer a variable font (one file, many weights) or load only the 2 to 3 weights the page uses.
- Subset to the languages needed if the tool allows it (smaller files).
- Add a `<link rel="preload" as="font" type="font/woff2" crossorigin href="fonts/...">` for the one headline or body font that appears in the first screen.
- Choose a fallback with similar widths so the page doesn't jump when the font loads. `size-adjust`, `ascent-override` and similar `@font-face` descriptors can match the fallback's metrics.
- Never let text stay invisible while a font loads.

## Check

- You can tell headline, subheading, body, and small text apart at a glance.
- Body is at least 16px and nothing is under 12px.
- Paragraph width reads comfortably on phone and desktop.
- Fonts come from the site folder, with a sensible fallback.
- At 200% zoom and at 320px wide, nothing overlaps or gets cut off.
