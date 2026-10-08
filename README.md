# AI Guided Web Page Builder with SEO

An AI skill that helps non-technical people build a web page or small website, handle their own photos and logos, and put it online for free on Netlify, with a domain they already own if they have one.

It asks a few plain-English questions, builds clean, search-friendly HTML, and walks the user through each step of going live. It never asks for passwords and doesn't publish anything without a clear yes.

## What it does

- Short interview about your brand, audience, goal, style, and search words (skippable)
- Builds or edits SEO-ready pages: titles, descriptions, headings, alt text, sitemap, robots file
- **Pictures made easy:** you hand over photos in any form; it resizes, renames, and cleans them, removes hidden location data, and keeps them inside the website folder. No separate image hosting.
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
        └── NETLIFY_LAUNCH_GUIDE.md  ← going live on Netlify
```

## Install

**Claude Code:** download this repo, then copy the inner `guided-page-builder` folder (the one containing `SKILL.md`) into `~/.claude/skills/` (all projects) or `.claude/skills/` inside a project.

**Claude app:** zip the inner `guided-page-builder` folder (not the whole repo) and upload it in the app's Skills settings.

**Other tools that support `SKILL.md` skills:** place the folder where that tool looks for skills.

## Try it

- "Build me a one-page website for my dog-walking business."
- "I have an HTML file and some photos. Help me put it online on Netlify."
- "Add an About page to my site and make sure it's search-friendly."

## Notes

- Netlify's screens and wording change over time. The skill tells the assistant to follow what the user actually sees and to use the DNS values Netlify shows for their site.
- The skill can prepare pages for search engines, but it never promises rankings, traffic, or indexing.
- Privacy and cookie notices can be legally required. The skill flags this and drafts nothing as legal advice.

## License

MIT. See [LICENSE](LICENSE).
