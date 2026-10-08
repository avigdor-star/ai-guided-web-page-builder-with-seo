# Design direction

Good design is a set of deliberate choices made for this specific business. Generated pages tend to look alike because the assistant takes the safest default on every choice. This guide is how you make real choices.

## 1. The brief wins

If the user named a style, colors, fonts, an era, or example sites, follow that exactly, even when it matches a "tell" listed below. A tell is only a problem when you reach for it without deciding. Where the user left something open, spend that freedom on a choice, not a default.

## 2. Ground it in the subject

Before any design, write down in one line each:

- **Subject:** what the business or project really is, in its own vocabulary and materials
- **Audience:** who visits, on what device, in what mood
- **Primary job:** the one thing the page must get a visitor to do

Distinct design comes from the subject. A mountain wedding planner, an emergency plumber, a children's dentist, and a tax adviser should not share a layout. Use their real words, textures, and imagery as the source of the look. If you don't know the subject, ask or propose one and confirm it.

## 3. Pick the visitor mode

| Mode | The visitor wants to... | Design leans toward |
| --- | --- | --- |
| Persuade | decide and act (landing pages, services, pricing) | strong first screen, voice, imagery, one clear action |
| Operate | finish a task (tools, dashboards, booking) | clarity, consistency, speed |
| Read | understand something (articles, docs, guides) | comfortable text, structure, navigation |
| Experience | be inside the work (portfolios, galleries) | the work leads; the interface steps back |

Choose by the page being built, not the business. A plumber's homepage is Persuade. A plumber's maintenance guide is Read.

## 4. Plan, check, then build

Write a short plan first (keep it to what fits on half a page):

- **Palette:** 4 to 6 named colors with hex values and the job of each (see 03).
- **Type:** one or two families and the role of each (see 02).
- **Layout idea:** one sentence in plain prose, plus a rough sketch of the phone view and the desktop view in text:

```text
PHONE              DESKTOP
[logo   menu]      [logo      nav...  call]
[ big photo ]      [ headline   |  photo  ]
 Headline           [ main button        ]
 [Main button]
```

- **Principles:** the one memorable thing, and what stays quiet around it.

Then **challenge the plan**: if you asked for this same page for a different business, would you have produced the same plan? If yes, change the parts that feel generic, and say in one line what you changed and why. Only then write code.

Tell the user the plan in three to five plain sentences. Do not ask for approval unless there is a real fork; keep moving.

## 5. The first screen

The first screen is the page's handshake. Open with the most characteristic thing in the subject's world, in the form that fits: a striking photo, a strong headline, a short demo, a real number. Do not default to "big stat, small label, accent color."

On a phone the first screen must show: a compact header, a headline, a real visual, and the main action. If the main image sits below the first scroll, the layout has failed (see 05).

## 6. Template tells to avoid

Pages made without a point of view cluster around these. Treat each as "needs a reason":

- Warm cream background with a high-contrast serif and a terracotta accent
- Near-black background with one neon accent
- Newspaper layout with hairline rules and no rounded corners everywhere
- Content chopped into identical rounded cards with the same soft shadow
- A tiny, wide-spaced ALL-CAPS label above every heading (a "kicker" or "eyebrow")
- Section numbers like 01, 02, 03 on content that isn't a sequence
- Meta text joined with middle dots (A · B · C), or spaced em-dash labels
- An arrow (→) added to every link and button
- Gradient text, gradient washes as decoration, glass-blur as decoration
- One word in the headline made italic or colored for emphasis
- Emoji or random symbols in place of a proper icon set
- Hard offset "block" shadows in a design that is not deliberately that style
- The same fade-and-slide-up entrance on every section
- Hover transitions on every card

If the page still has several, it will read as generated.

## 6b. Placeholder pages still need to look designed

When photos are placeholders, compose the layout around the real aspect ratios and give each placeholder a calm, consistent treatment so the page shows the intended design. Don't let blank gray boxes make the design look unfinished.

## 7. Structure should carry meaning

Borders, dividers, numbering, labels, and boxes tell people how things relate. Use them only when they encode something real: steps in order, a group of equals, a boundary between topics. Otherwise use space.

## 8. Spend boldness in one place

Pick one memorable thing: a typeface, a photo treatment, a color, a layout move. Keep everything around it quiet and disciplined. Before delivering, remove one decoration.

## 9. Words are design

Write for what the visitor needs to understand or do. Plain, active, specific. A button names its result ("Book a free call", not "Submit"). The same action keeps the same name through the flow. Errors say what happened and how to fix it. Empty states invite the next step. Sentence case. No filler.

## 10. Quality floor (build it in, don't announce it)

Works at phone width, visible keyboard focus, readable contrast, reduced-motion respected, real content, every control working, hover and focus and disabled and error states designed. Details are in 05, 07, and 10.
