# Motion

Motion should explain something: what just changed, where to look, or how things relate. It should never be the same decoration on every section.

## Principles

- **One authored moment.** One memorable entrance or reveal does more than twenty small effects. If every section fades and slides up, the page reads as generated.
- **Motion that answers a person's action is welcome.** A menu that opens, an accordion that expands, a button confirming a tap: show what changed.
- **Don't animate for its own sake** on first-screen content that people are trying to read.
- **Content is visible without JavaScript and without animation.** Never start elements at `opacity: 0` and rely on a script to reveal them. If the script fails, the content is gone.
- **No scroll-jacking, no auto-advancing carousels, no looping decorative animation near text.**
- **Parallax and large moving backgrounds** are usually not worth it on phones. Skip them unless the brief calls for them.

## Timing and feel

| Kind | Duration |
| --- | --- |
| Small feedback (button press, color change) | 100 to 200ms |
| Opening and closing (menu, accordion, dialog) | 200 to 350ms |
| A single page-load or reveal moment | 400 to 700ms |

Use ease-out for things entering and ease-in for things leaving, or a gentle `cubic-bezier(.2, .7, .2, 1)`. Avoid bouncing or elastic effects unless the subject demands them.

## Keep it smooth

Animate `transform` and `opacity` where possible. They run on the graphics hardware. Avoid animating `width`, `height`, `top`, or `left`, which force layout. Use effects such as blur and shadows sparingly. Use `will-change` only on an element that is about to animate, and remove it afterward.

## Respect reduced motion

Some people get dizzy or sick from movement. Honor the setting, but don't throw away every transition. Remove large movement (sliding, zooming, parallax, auto-play), and keep gentle, useful feedback like a quick fade or color change.

```css
.reveal { animation: rise .6s cubic-bezier(.2,.7,.2,1) both; }
@keyframes rise { from { opacity: 0; transform: translateY(1rem); } to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { animation: fade .3s ease both; }
  @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
}
```

## Loading and waiting states

If something takes more than about a second (a form sending, a gallery loading), show a simple state and tell the visitor what's happening. No spinner on a page that loads instantly.

## Check

- The page has one deliberate motion moment, not many.
- Content shows with scripts and animation turned off.
- With "reduce motion" on, nothing large moves, and buttons and menus still give feedback.
- Nothing animates `width`, `height`, `top`, or `left`.
