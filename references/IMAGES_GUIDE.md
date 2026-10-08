# Pictures made easy — a plain-English guide

Use this reference whenever the user shares, mentions, or needs pictures: photos, logos, icons, gallery images, a favicon, or "my pictures are on Instagram / Google Drive / my old website." Handle pictures **for** the user. They should never need to know what a path, a format, or an image host is.

## The one idea to give the user

> **Your pictures live in a folder next to your web page. When you upload the folder, the pictures go with it. There is no separate place to host pictures, and nothing extra to sign up for.**

Say this early, in these words or close to them. Most confusion comes from people believing pictures need their own hosting service.

## What you do vs. what the user does

| You (the assistant) | The user |
| --- | --- |
| Put pictures into the site folder's `images/` folder | Share pictures, or say "I don't have any yet" |
| Rename, resize, and compress them | Approve how they look |
| Remove hidden location data | Nothing |
| Write the HTML and the alt text | Confirm descriptions of important pictures |
| Check every picture shows up | Drag the whole folder to Netlify later |

If you cannot process files (no file tools), say so plainly and give the user the matching free option from "No tools?" below.

## Step 1 — Get the pictures in, whatever shape they're in

Ask only: *"Send me whatever pictures you have, in any way that's easy."* Then handle what arrives:

| What the user gives you | What to do |
| --- | --- |
| Files uploaded in chat or already on their computer | Copy them into the site folder's `images/` folder. Keep the originals untouched somewhere safe. |
| A link to a Google Drive, Dropbox, or iCloud picture | **Do not paste that link into the page.** Those links are for viewing, not for showing a picture on a website, and they stop working. Ask the user to download the picture and share the file. |
| "They're on my Instagram / Facebook / Wix / Squarespace site" | Don't copy the link, because it will break later. Ask for the original files. If they only have the online version, ask them to save it from their account, and say the quality may be lower. |
| A picture from a Google search or someone else's website | Don't use it unless they confirm they own it or have permission. Offer a labeled placeholder, or ask for their own photo. |
| Nothing yet | Use a labeled placeholder (see "Missing pictures"). The page still gets built. |
| A huge batch (dozens of files) | Ask which 5–10 matter most for the first version. More can be added later. |

Never ask for a login to any account. Never use another site's picture address as the source of a picture on the user's page ("hotlinking"), because it can vanish, slow down, or break without warning.

## Step 2 — Get them web-ready (do this for the user)

Do these things yourself when you have file tools:

1. **Name them clearly.** Lowercase, words joined by hyphens, no spaces: `garden-patio-front.jpg`, not `IMG_4032 (1).JPG`. Name for what is shown. Capital letters and spaces cause missing pictures after upload, because the web is case-sensitive.
2. **Make them a sensible size.** Phone photos are often 4000+ pixels wide and several megabytes. Aim for:
   - Full-width banner/hero: about 1600–2000 px wide
   - Normal in-page photo or gallery image: about 1000–1400 px wide
   - Logo: as small as it displays, ideally a vector logo (`.svg`) or a transparent `.png`
   - Typical target: **under about 300 KB per photo** and clearly under 1 MB. A page full of multi-megabyte photos loads slowly on phones, which hurts visitors and search results.
3. **Pick a friendly format.** JPG for photos, PNG for logos and anything with transparency, SVG for icons and vector logos, WebP when you can produce it. Convert formats that browsers can't show: **HEIC/HEIF (iPhone), TIFF, RAW, PSD** all need converting to JPG or PNG first.
4. **Remove hidden location data from photos.** Phone photos usually contain the exact GPS spot where they were taken, the device, and the time. Publishing them shares that with the public. Strip it from every photo you publish, especially pictures taken at a home, a home studio, or a client site. If you have a shell, check for and remove it with an available tool (for example `exiftool -all= file.jpg`, or ImageMagick's `-strip`). Check that it worked when you can. If you cannot strip it, tell the user, and recommend the free tool below.
5. **Keep the page's look stable.** Put `width` and `height` on each `<img>` so the page doesn't jump while pictures load. Pictures below the first screen get `loading="lazy"`. The main top picture does not.

Keep a copy of the original, full-size files in a separate folder **outside** the site folder (for example `originals/`), so full-size, location-carrying files are never uploaded by accident.

## Step 3 — Put them where the page can find them

```text
my-website/                ← the folder that gets uploaded
├── index.html
├── images/
│   ├── logo.svg
│   ├── hero-garden.jpg
│   └── gallery/
│       ├── patio-01.jpg
│       └── patio-02.jpg
└── about/
    └── index.html
```

In the HTML, use **relative** paths so the page also works when the user double-clicks `index.html` on their own computer:

- From `index.html` (top level): `images/hero-garden.jpg`
- From `about/index.html` (one folder down): `../images/hero-garden.jpg`
- Two folders down: `../../images/hero-garden.jpg`

Count the folders for every page and get it right. Never use paths that start with `C:\`, `/Users/...`, or `file:///`. Those only work on the user's own computer and show broken pictures to everyone else.

## Step 4 — Write good alt text (the short description)

Alt text is a short description for people who can't see the picture and for search engines.

- Describe what's actually shown and why it matters: `Stone patio with built-in fire pit at dusk`, not `IMG_4032` or `patio garden landscaping best`.
- Skip "image of…" and "picture of…".
- Purely decorative picture (a divider, a background flourish): use empty alt text, `alt=""`.
- Logo: the business name, e.g. `Example Practice logo`.
- If you can't tell what a picture shows, ask the user in one short question rather than guessing.

## Step 5 — Check every picture before upload

Do this yourself and report the result in one line.

- Every `<img>` and every CSS background picture points to a file that exists in the site folder.
- File names match exactly, including capitalization.
- Nothing points outside the folder.
- Every published photo has been checked for hidden location data, or the user was told it was not checked.
- Total site folder size is reasonable. Netlify will tell the user if a drag-and-drop upload is too big; if so, reduce picture sizes rather than looking for a separate host.
- No private files in the folder: no ID scans, invoices, or client photos the user hasn't approved for the public.

If you can't open the page to look, say "Not verified yet" and name the one picture the user should check first.

## Missing pictures

When the user has no picture yet:

- Use a plain placeholder with a visible label, such as a neutral gray box with the words "PLACEHOLDER: team photo".
- Name the file `placeholder-…` (for example `placeholder-team-photo.svg`) and keep `PLACEHOLDER` in a comment next to the `<img>` tag so it can be found later.
- Add each one to the placeholder list. Before publishing, replace it or remove it. See the main skill for the final check.
- Never fill in a stand-in "real-looking" photo of a person, a client, a result, or a testimonial.

## Updating pictures later

To swap a picture, put the new file in `images/`, keep the same file name if you can, and upload the **whole updated folder** to the **existing** Netlify site (see the Netlify guide, Step F). Browsers sometimes keep showing the old picture. A hard refresh (hold Shift while clicking reload) usually fixes it.

## No tools? Free options to give the user

If you can't edit files, give the user one simple instruction at a time:

- **Shrink and convert a picture:** squoosh.app (free, in the browser, no account). Open the picture, choose JPG or WebP, set the width, save. Re-saving there normally drops hidden location data too.
- **Check for location data (Mac):** open the picture in Preview, then Tools → Show Inspector → the "i" tab → GPS. **(Windows):** right-click the file → Properties → Details.
- **Convert an iPhone HEIC picture:** open it in Preview (Mac) or Photos (Windows) and export as JPG.

## Plain-English glossary

| Word | Meaning |
| --- | --- |
| Hosting a picture | Putting it somewhere the public can see it. Here, that's just the site folder on Netlify. |
| Hotlinking | Showing a picture directly from someone else's website. Avoid it. |
| Alt text | A short description of a picture, used by screen readers and search engines. |
| Compress / optimize | Make the file smaller so the page loads quickly. |
| Metadata / EXIF | Hidden details inside a photo, including where and when it was taken. |
| Placeholder | A clearly labeled stand-in until the real picture arrives. |
