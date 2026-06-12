# Srikar Katta — Academic Website

A clean, multi-page personal website. **All your content lives in one
file: `content.js`.** Edit that file, save, refresh — done.

## Pages

```
index.html      Home — hero, brief bio, selected work, recent news
research.html   Research statement, areas, full publications list
teaching.html   Teaching, notes, courses
cv.html         Brief CV (Education, Industry Research, Selected Awards) + PDF download
```

A shared header (with active-page nav) and footer are injected into each
page automatically by `scripts/site.js`.

## Files

```
content.js              ← YOUR CONTENT lives here. Edit this.
assets/headshot.jpg     Your photo
uploads/cv.pdf          Your CV PDF
styles/site.css         Shared stylesheet for all pages
scripts/site.js         Shared renderer (you should not need to touch)
```

## Editing content

Open **`content.js`** in any text editor. Sections inside:

- **Identity** — name, title, links, photo path
- **Bio** — short paragraphs for the home page
- **Research statement** — longer text for the Research page
- **Areas** — research-area cards
- **News** — most-recent first
- **Publications** — `published`, `submitted`, `inPrep` groups
- **Teaching** — intro + notes (each with `url`) + courses
- **Awards**, **Experience**, **Talks**, **Service**, **Education**

### Featured publications on the home page

Add `featured: true` and a short `blurb:` to any publication you want
showcased on the home page. Publications without `featured` only appear
on the Research page.

### Teaching notes

In `content.js`, find `teaching.notes` and replace the placeholder
`url: "#"` with real links to your notes (Notion, GitHub Pages, PDF,
whatever). Each note has `title`, `blurb`, `url`, `date`.

### Adding a publication

```js
{
  authors: "<strong>S. Katta</strong>, A. Coauthor",
  title: "Your new paper title",
  venue: "NeurIPS",
  year: 2026,
  awards: ["Best Paper Award"],   // optional
  featured: true,                  // optional — surface on home page
  blurb: "One-sentence summary",   // optional — only shown if featured
  links: { pdf: "https://...", code: "https://github.com/..." },
},
```

Wrap your own name in `<strong>…</strong>`. Use `*` after authors for
joint authorship.

### Adding a news item

```js
{ date: "May 2026", text: `Gave a talk at <strong>ICML 2026</strong>.` },
```

Add at the top of the `news` array. You can use HTML inside `text`.

### Replacing the photo / CV

Drop new files at `assets/headshot.jpg` and `uploads/cv.pdf`. The links
pick them up automatically.

## Deploying to GitHub Pages

1. Push these files to a repo named `<your-username>.github.io`
   (or any repo with Pages enabled).
2. The site is live at `https://<your-username>.github.io/`.

No build step. No framework. Plain HTML/CSS/JS that works in any modern
browser.
