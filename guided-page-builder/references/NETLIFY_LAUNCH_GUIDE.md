# Go live on Netlify — a plain-English walkthrough

Use this reference **after** the user has picked Netlify for a static HTML website, or when they ask how to publish, republish, connect a domain, or prepare SEO. Deliver instructions **one action or small group at a time**, wait for confirmation when interacting with account settings, and avoid jargon. The main skill still controls brand, content, visual style, user approval, and platform choice.

## What the user needs to know, in plain English

- **HTML files** contain pages and SEO settings such as page titles and descriptions.
- **Site folder** contains *all* pages, images, CSS, JavaScript, and SEO helper files. The **folder**, not just one HTML file, goes to Netlify.
- **Netlify** serves those files online. A free tier may be sufficient for small sites, but limits/pricing can change; check the current plan if relevant.
- **Domain name** is an address the user already bought; it does not store the website.
- **DNS** is the address book that points that name at Netlify. DNS records are edited wherever the DNS is currently hosted, **often but not always at the registrar**.
- **HTTPS** is the secure padlock connection. Check it works after the domain is pointed correctly.

Do not require GitHub, command-line tools, a special image host, or paid services for this simple workflow. For a nontechnical user, prefer **Netlify manual upload + local site folder**. Do not suggest a Git-based deploy unless requested. Do not ask them to share passwords.

## Start here: choose the right path

Ask only what is unknown:

> Do you already have a folder with your HTML and pictures, or do you have only one HTML file? Have you published this site on Netlify before?

Then:
- **New site from a file/folder:** follow Steps A–E below.
- **Already live; update the site:** follow Step F, not the new-site route.
- **Netlify site already works, only domain missing:** start at Step D.
- **User has a different host/platform:** ask before switching to Netlify.

If domain is known, also ask which exact version they want visitors to see: `example.com` or `www.example.com`. If not known, ask when connecting the domain. The user can choose either; the other should route to it as supported by Netlify.

## Step A — put everything into one uploadable site folder

A small multi-page example:

```text
my-website/                    ← drag this folder into Netlify
├── index.html                 ← homepage: example.com/
├── about/
│   └── index.html             ← second page: example.com/about/
├── services/
│   └── index.html             ← third page: example.com/services/
├── images/
│   ├── hero.webp
│   └── team.webp
├── styles/
│   └── style.css
├── scripts/
│   └── main.js
├── sitemap.xml
├── robots.txt
└── 404.html                   ← optional friendly not-found page
```

A one-page site needs only `index.html` plus whichever assets it actually uses. If the user provides `homepage.html`, rename or copy the homepage as `index.html`. Confirm CSS, scripts, font files, and local image references point to files **inside** the site folder, not Desktop paths such as `/Users/Alice/Desktop/photo.jpg` or `file:///...`.

Paths matter on subpages. For pictures, styles, and scripts, use **relative** paths that match each page's depth (`images/hero.webp` from the homepage, `../images/hero.webp` from `about/index.html`) so they also show when the user double-clicks `index.html` on their own computer. Links between pages use clean addresses such as `<a href="/about/">About</a>`; those work once the site is online or when previewed through a local server. Double-clicking a file can't follow them, which is expected. Verify on the deployed site.

Do not include passwords, private client data, draft invoices, local `.env` secrets, or unused private documents anywhere in the upload folder. Publishing makes these assets publicly reachable.

### Pictures

**Pictures go in the same folder as the pages, in `images/`. They need no separate hosting; uploading the folder uploads them.** Follow [IMAGES_GUIDE.md](IMAGES_GUIDE.md) for gathering, resizing, naming, removing hidden location data, alt text, and checking. Keep pictures modest in size so the page loads quickly on phones. If Netlify reports an upload as too large, shrink the pictures rather than looking for another host.

## Step B — prepare the SEO *inside* the HTML

The skill should implement these items itself when it has file-editing tools. For a user without file-edit access, provide the corrected HTML files or exact edits; do not ask them to learn code just to set basic SEO.

**Every page (not only the homepage)** needs:

1. A meaningful, **unique** `<title>` in the `<head>`.
2. A clear, **unique** `<meta name="description" content="...">` in the `<head>`.
3. A correct `<html lang="en">` (or actual language) and viewport tag.
4. One principal, visible `<h1>` with a sensible hierarchy below it.
5. Content written for actual visitor needs, not repetitive keywords.
6. Accurate `alt` on useful images; correct and descriptive link text.
7. A correct absolute HTTPS `<link rel="canonical" href="...">` **only after the preferred live domain/path is known**. Each page points to its own preferred URL, not every page to the home page.
8. Mobile readability, fast-loading assets, and links among related pages.
9. Accurate structured data **only when supported by real facts**, e.g. `LocalBusiness` or a more specific subtype, with verified name, address, telephone, opening hours when included. Never invent reviews, star ratings, credentials, prices, or opening hours.

A minimal homepage `<head>` example once the domain is confirmed (replace the sample name and content):

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Acupuncture in Example City | Example Practice</title>
  <meta name="description" content="Learn about acupuncture appointments at Example Practice in Example City, including services, location and how to book.">
  <link rel="canonical" href="https://www.example.com/">
</head>
```

The visible page still needs its own `<h1>`. Titles and descriptions should be concise, compelling, true, and different across pages, **not mechanically stuffed** with keywords. Google can choose different snippets; writing metadata does not guarantee the search result display, ranking, indexing, or traffic.

### SEO helper files, in the folder root

After the domain and URL structure are known, generate `sitemap.xml` containing **only the site's actual indexable canonical pages**. Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.example.com/</loc></url>
  <url><loc>https://www.example.com/about/</loc></url>
  <url><loc>https://www.example.com/services/</loc></url>
</urlset>
```

Generate `robots.txt` for a public site:

```text
User-agent: *
Allow: /
Sitemap: https://www.example.com/sitemap.xml
```

Do not put `Disallow: /` or `noindex` on the final live pages unless the user explicitly wants them excluded. For unpublished/private work, avoid sharing confidential material online: `robots.txt` and `noindex` are **not privacy or access controls**. Update sitemap and links whenever pages are added or removed.

### Check before upload

- `index.html` is at the *top level* of the folder that will be uploaded, not hidden one folder deeper.
- All page files and image/style/script files are in the same upload folder tree, and the picture checks in the image guide are done (files exist, names match exactly, location data removed).
- Search the whole folder for `PLACEHOLDER` and `placeholder-` and resolve or get approval for each hit.
- Every site page is readable on mobile and desktop; links, calls-to-action, gallery controls, and any real forms work. If a form has no working submission service, label it as preview or replace with a genuine contact link. Netlify Forms require actual setup/testing; HTML by itself does not make a backend.
- User-approved content only; no unapproved placeholder testimonials or fake claims.
- No stray `noindex`; canonicals and sitemap reflect the intended domain when known.

If the custom domain is not yet decided, launch a preview first and return to finish canonicals/sitemap before calling it “SEO-ready.”

## Step C — upload a new site (first time)

Say something like:

> Your site is ready to upload. You're going to move one folder, not copy HTML code. This creates a public preview web address. We'll connect your domain next.

1. Open **https://app.netlify.com/** and sign in (or create a free account). Stay signed in to the account that should own and maintain the site.
2. Visit **https://app.netlify.com/drop** (or Netlify **Projects → Add new project → Deploy manually**; UI labels can change).
3. Drag the complete **publish-ready folder** (the one whose root contains `index.html`) to the upload/drop area. A ZIP may also be supported by Netlify Drop; a folder is easiest to explain.
4. Wait for the published project URL ending in `.netlify.app`, and open it. Confirm text, images, links, and any extra page paths.
5. Write down or bookmark **the existing site/project** in their Netlify account. They'll return to **this** project for all future updates.

**Important:** Creating a Netlify Drop project is already publishing publicly at the preview URL. Ask permission before publishing on the user's behalf. Don't tell users to drag `SKILL.md`, their whole computer project with secrets, or an HTML file by itself if it depends on other assets. For compiled apps, publish the build/output folder or use the deliberate logged-in framework build feature; don't assume raw React/Vite source files work as plain HTML.

## Step D — connect the domain the client already owns

Say:

> The website is on Netlify now. Next we'll point your domain name at it. Your domain stays registered where it is; you usually don't need to transfer or buy it again.

1. Open **the exact site you just published** in the Netlify dashboard.
2. Choose **Domain management → Add a domain → Add a domain you already own** (Netlify may change wording).
3. Enter the domain (for example, `example.com`) and follow the prompts to add/verify it. Select or confirm your **primary** version (`example.com` versus `www.example.com`). Expect Netlify to account for both apex and `www` when appropriate.
4. Choose how DNS will be managed:

   **Recommended for simple client setups: keep external DNS.** Use this especially when email or other services already run through the domain.
   - Netlify shows customized instructions for the domain; look for **Domain management → Production domains → Pending DNS verification**.
   - Ask where the domain's DNS is actually hosted. Login to that provider's **DNS management / DNS records** page (often their registrar, but possibly Cloudflare or another DNS host).
   - Copy **exactly** the record types, names/hosts, and targets Netlify currently provides. A typical `www` is a **CNAME** to the project's `.netlify.app` name; the root/apex (`@`) normally needs an **ALIAS/ANAME/flattened CNAME** if available or a Netlify-specified **A** record. **Do not make up or hardcode DNS targets**; premium/edge setups may differ.
   - Change only the relevant, conflicting *web-hosting* records with the user's approval. Existing old A/CNAME records for the same host may need replacement. Do not casually remove unrelated records.
   - Save and return to Netlify. Wait for DNS verification and the HTTPS/SSL certificate to become ready.

   **Alternative: move DNS to Netlify.** Do this only with informed consent and a reliable inventory of existing DNS records.
   - Copy **all** existing records needed by email and other services into Netlify DNS **before** switching nameservers. Include MX, SPF/DKIM/DMARC TXT, verification, subdomains, and other live services as needed.
   - Follow Netlify's **Set up Netlify DNS** instructions; update nameservers **at the registrar** to exactly the nameserver values Netlify assigned.
   - Changing nameservers hands *all* DNS control to Netlify and can break email or other integrations if records are missed. If the user doesn't know whether email is configured, **stop and ask before switching**.

5. Explain the wait. Updates can be quick but DNS propagation may require **24–48 hours**, sometimes longer. Netlify's status or third-party propagation tools can help check. Avoid repeatedly changing records while waiting.
6. Check **HTTPS** works without certificate warnings and that both `example.com` and `www.example.com` reach the site. Ensure the non-primary variation redirects to the chosen primary domain as expected. If HTTPS isn't ready, check Netlify domain/DNS status; don't tell them to disable browser security.

> **Important distinction:** Changing the domain's DNS is not the same as buying the domain, transferring the registration, or uploading the HTML. Netlify hosts the site. DNS connects the address to that site.

### Client-friendly DNS vocabulary

| Word they may see | Meaning |
| --- | --- |
| Root/apex / `@` | Your bare domain, e.g. `example.com` |
| `www` | The address `www.example.com` |
| A | Points a name to a server IP address |
| CNAME | Points a name like `www` to another hostname |
| ALIAS / ANAME / flattened CNAME | DNS-provider feature for pointing the bare domain to another hostname |
| Nameservers (NS) | Decide who manages *all* DNS for the domain; don't change them casually |
| MX / TXT | Often used for business email, verification, and email authentication; preserve them |

If the user is unsure what to enter at their specific registrar, ask for the provider name and a screenshot of its DNS screen with secrets redacted, and walk through the visible fields. Never ask for login credentials.

## Step E — confirm everything works on the actual domain

Separate these checks; a successful file upload does *not* mean DNS or SEO is finished.

- **Site:** open `https://PRIMARY-DOMAIN/`; verify home page, images, CSS, mobile view, every important action and working forms.
- **Extra pages:** open `https://PRIMARY-DOMAIN/about/` and other actual paths; no unexpected 404s.
- **Domain:** try root and `www`; expected primary URL behavior; working HTTPS/padlock.
- **SEO in live source:** verify individual page titles, unique descriptions, one meaningful H1 per page, accurate alt text, correct absolute HTTPS canonical for each page.
- **Crawl helpers:** open `https://PRIMARY-DOMAIN/sitemap.xml` and `/robots.txt`; verify their URLs and ensure no accidental blocking/noindex for a public website.
- **Links:** internal navigation, social/contact, and calls to action work. Open a nonsense path to check 404 behavior.
- **Search discoverability (optional):** help them verify Google Search Console ownership (via DNS TXT or other supported method), submit `/sitemap.xml`, and review inspection/indexing. This is not required to host the site and doesn't promise indexing or ranking.

If a test cannot be run from available tools, say “Not verified yet” and give the user a simple visual step. Do not claim their website has been indexed.

## Step F — edit and republish the *same* website

Explain this distinction clearly:

> You don't need to reconnect your domain every time. Make changes in your saved local site folder, then upload that entire updated folder to the **existing Netlify project**.

1. Back up the current working site folder locally.
2. Ask your assistant to edit HTML, create a new page or replace local image assets **inside the existing site folder**. Keep the original path structure.
3. For new pages, use a folder such as `new-service/index.html`, add links to it, assign unique metadata and canonical, update sitemap.xml, and verify images and URLs. For removed pages, update links/sitemap and consider appropriate redirects where warranted.
4. Review locally, fix issues, and make sure any prior unapproved placeholders remain excluded.
5. Sign in to Netlify, open the **same** project, and find **Deploys** (sometimes the **Production deploys** area). Drag the **whole updated publish/output folder** into that site's deploy dropzone. This makes a new production deployment with the same custom domain.
6. Refresh the actual domain and check the new changes and important pages. Keep a last-good folder and consider using Netlify's deploy rollback options if needed.

**Do not** return to the generic new-project Drop page to republish a site that already has a custom domain: that can create a second unrelated project while the domain keeps pointing to the original one.

## Common stumbling blocks

| Symptom | Plain-English diagnosis and next action |
| --- | --- |
| Netlify shows a listing/404 instead of homepage | Confirm `index.html` sits at the top of the folder uploaded; reupload correct folder to correct project. |
| Page appears but pictures/styles are missing | Verify image and CSS files are inside folder, relative paths work on all pages, and filename capitalization matches. |
| New second page gives 404 | Add `about/index.html` for `/about/`; upload entire folder again and verify link paths. |
| `.netlify.app` works but custom domain does not | Check the domain was added to the **correct** project, copy the **exact** DNS records Netlify shows, allow propagation, and inspect Domain management verification status. |
| Business email stops working after changing DNS | Check MX/TXT/DKIM/DMARC and whether nameservers changed; restore records with the domain/email provider before making further unrelated changes. |
| Domain loads with certificate warning | Wait for correct DNS and Netlify-managed certificate issuance; investigate Domain management/HTTPS status. Don't bypass security warnings. |
| Uploading changes has no effect on their domain | Make sure they used the **existing site's Deploys** dropzone, not a new Netlify Drop project. Check the newest production deploy status and cache/refresh. |
| Changes don't appear in Google | Google indexing is separate from publishing; confirm the live page is indexable, sitemap submitted, canonical correct; allow time and inspect Search Console. |
| Contact form displays but no leads arrive | An HTML form needs a configured backend or a working third-party/form service; test an actual safe submission. |

## Reference docs (check for UI changes)

- Netlify manual upload and updates: https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/
- Netlify deploy types/drag-and-drop: https://docs.netlify.com/deploy/create-deploys/
- Adding an already-owned domain: https://docs.netlify.com/manage/domains/manage-domains/assign-a-domain-to-your-site-app/
- External DNS records: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/
- Netlify DNS nameserver delegation (email warning): https://docs.netlify.com/manage/domains/set-up-netlify-dns/

## What to report at handoff

Use short sentences the client can act on; separate statuses:

- **Site files:** created / updated / uploaded / awaiting your upload.
- **Public preview:** `...netlify.app` address, if verified.
- **Custom domain:** connected and working / DNS changes pending / not started.
- **HTTPS:** verified / waiting / not tested.
- **SEO:** titles, descriptions, headings, alt text, canonicals, sitemap, robots, mobile checked — or explicitly note missing items.
- **Next step:** give just the next relevant click or action.

Always distinguish **prepared** from **actually published**, **DNS instructions given** from **DNS actually updated**, and **SEO implemented** from **search indexed**.
