# AI Guided Web Page Builder with SEO

An AI skill, written to work with any AI assistant, that helps non-technical people build a web page or small website, handle their own photos and logos, and put it online for free on Netlify, with a domain they already own if they have one.

It asks a few plain-English questions, builds clean, search-friendly HTML, and walks the user through each step of going live. It never asks for passwords and doesn't publish anything without a clear yes.

## What it does

- Short interview about your brand, audience, goal, style, and search words (skippable)
- Builds or edits SEO-ready pages: titles, descriptions, headings, alt text, sitemap, robots file
- **Pictures made easy:** you hand over photos in any form; it resizes, renames, and cleans them, removes hidden location data, and keeps them inside the website folder. No separate image hosting.
- **Front-end know-how built in:** a design-direction process that avoids generic template looks, phone-first rules, type, color, layout, accessibility, speed, and motion guides, ready-made parts (menu, gallery, FAQ, forms), a starter stylesheet, and a phone audit script that checks the rendered page
- Clearly labeled placeholders for anything missing, plus a final check that none go live by accident
- Optional step-by-step Netlify publishing, domain connection, and later updates, with safeguards for email and DNS

## What's inside

```text
ai-guided-web-page-builder-with-seo/
├── README.md
├── LICENSE
└── guided-page-builder/             ← the skill folder (this is what you install)
    ├── SKILL.md                     ← the skill itself
    └── references/
        ├── IMAGES_GUIDE.md          ← pictures, step by step
        ├── NETLIFY_LAUNCH_GUIDE.md  ← going live on Netlify
        └── frontend/                ← front-end design and mobile reference
            ├── 00_START_HERE.md     ← index and the rules that always apply
            ├── 01 to 10 guides      ← design, type, color, layout, mobile, parts, a11y, speed, motion, testing
            ├── SOURCES.md           ← credits and licenses
            └── starter/             ← base.css and mobile-audit.js
```

## How to use it with any AI assistant

This is plain Markdown. It isn't tied to one company's AI. It works with any assistant that can follow written instructions. It works best with one that can also create and edit files, because then it can build the site folder for you.

**The universal method (works anywhere):**

1. Start a new chat with your AI assistant.
2. Give it `guided-page-builder/SKILL.md`: paste the text, or attach the file.
3. Attach the two files in `guided-page-builder/references/`: `IMAGES_GUIDE.md` and `NETLIFY_LAUNCH_GUIDE.md`.
4. Say: *"Follow the instructions in SKILL.md to help me build a web page."*

**If your tool has a "skills", "custom instructions", or "rules" feature,** install it there instead, so it's always available:

| Your tool | What to do |
| --- | --- |
| Tools that load `SKILL.md` skills from a folder (several coding assistants and desktop apps do) | Copy the inner `guided-page-builder` folder, the one containing `SKILL.md`, into that tool's skills folder. Check your tool's docs for where that is. |
| Tools with an upload screen for skills | Zip the inner `guided-page-builder` folder (not the whole repo) and upload it. |
| Custom chatbots, GPTs, Gems, or assistants with an instructions box | Put one line in the instructions: "Follow SKILL.md." Then upload `SKILL.md` and the two guides as knowledge files. Instruction boxes often have a length limit, and `SKILL.md` is long. |
| Editors with project rules or agent files (such as `AGENTS.md`-style files) | Save `SKILL.md` into the rules location, or point the rules file to it. Keep the `references/` folder beside it. |

**What the assistant needs:** nothing special. If it can't make files, it will give you the code and plain-English steps instead. If it can't browse the web, it will ask you to paste any example pages you want it to look at.

## Try it

- "Build me a one-page website for my dog-walking business."
- "I have an HTML file and some photos. Help me put it online on Netlify."
- "Add an About page to my site and make sure it's search-friendly."

## Notes

- Netlify's screens and wording change over time. The skill tells the assistant to follow what the user actually sees and to use the DNS values Netlify shows for their site.
- The skill can prepare pages for search engines, but it never promises rankings, traffic, or indexing.
- Privacy and cookie notices can be legally required. The skill flags this and drafts nothing as legal advice.

## Credits

The front-end section draws on ideas from two Apache-2.0 projects, Anthropic's `frontend-design` skill and Paul Bakaus's Impeccable, plus public web standards. Everything is rewritten in this skill's own words. Details and links are in [SOURCES.md](guided-page-builder/references/frontend/SOURCES.md).

## License

MIT. See [LICENSE](LICENSE).
