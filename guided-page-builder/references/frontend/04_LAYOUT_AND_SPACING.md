# Layout and spacing

Layout turns what matters most into reading order, grouping, and rhythm. Diagnose the structure before moving boxes around.

## State the spatial idea first

Before writing CSS, name:

- the main path the eye and thumb should follow
- what belongs together and what must be separated
- which element leads and which supports
- how the structure changes from phone to desktop

Choose the simplest structure that expresses this.

## The squint test

Blur your eyes (or imagine the page blurred). You should still see the main element, the second element, and the major groups, in that order. If everything has the same weight, the hierarchy has failed.

## Group by meaning, using space

- **Closeness means "related."** Put related things near each other and unrelated things far apart before you add boxes or lines.
- **Rhythm comes from contrast** between tight and generous gaps. If every gap is the same, everything has the same weight.
- **More space above a heading than below it,** so the heading attaches to its own content.
- Don't put every group in its own card. Cards are for items that really are equals. Nested cards are almost always wrong.

## Use a spacing scale

Pick one scale and use it for all padding, margin, and gaps. A 4-unit base works well:

```text
4  8  12  16  24  32  48  64  96  128   (px; define as CSS variables)
```

Section padding should flex with the screen: `padding-block: clamp(3rem, 8vw, 8rem);`.

## Make containers do the work

```css
.container { width: min(100% - 2 * var(--gutter), var(--max)); margin-inline: auto; }
```

- Pick a max content width (about 1100 to 1280px) and a gutter that grows with the screen. On phones, side gutters of about 16 to 24px.
- **Reading text** gets its own narrower limit (about 65 characters).
- Never use fixed pixel widths for layout. Use `%`, `fr`, `min()`, `max()`, and `clamp()`.

## Pick the right tool

- **Grid** for two-dimensional layouts. **Flex** for one row or one column.
- `gap` for spacing between siblings, instead of margins on each child.
- A card grid that adapts without media queries:

```css
.grid { display: grid; gap: var(--space-5);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); }
```

- `aspect-ratio` for image and video frames so layout doesn't jump.
- **Container queries** (`container-type: inline-size`) when the same component appears in different-width spots.
- Use logical properties (`margin-inline`, `padding-block`) so right-to-left languages work.

## Vary the structure to match the content

Three equal cards under every heading is a framework default. Use a different structure when the content is different: a feature image with text beside it, a single strong statement, a simple list, a timeline, a table, a pull quote. Repeat a pattern only where the items are truly equivalent.

## Keep order and focus in agreement

The order in the HTML must match the visual reading order, so keyboard, screen-reader, and touch users get the same sequence. Don't reorder with CSS in ways that make keyboard focus jump around.

## Edge cases that break layouts

Test with:

- long words, long names, and translated text that is 30 to 40% longer
- no image loaded, no content in a section, one item or twenty
- sticky headers hiding anchored sections (fix with `scroll-padding-top`)
- text zoom at 200%
- flex children that refuse to shrink (add `min-width: 0`)
- images wider than the screen (`max-width: 100%; height: auto;`)
- iPhone notches and home bars (`env(safe-area-inset-*)`, with `viewport-fit=cover` if you go edge to edge)

## Check

- The squint test passes at phone and desktop.
- Spacing comes from the scale, with visible rhythm.
- Nothing scrolls sideways at 320px wide.
- Every section's structure was chosen, not copied.
