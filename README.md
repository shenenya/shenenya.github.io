# 沈恩亚 · Enya Shen — Academic Homepage

Minimal, bilingual (中/EN) static homepage for an academic. Zero build step — plain HTML / CSS / JS.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing content

All text lives in `assets/js/data.js`:

- `profile` — name, title, affiliation, bio, email, avatar path, research tags
- `recruiting` — highlighted news card (year + bullet list + CTA)
- `experience` — work / education timeline
- `research.areas` — three area cards
- `publications` — papers (the list is shown as-is in both languages)
- `books` — books with `{ zh, en }` strings
- `patents` — `{ authors, title, id, date }`
- `projects` — `{ zh, en, period }`
- `students` — current & alumni, grouped by role
- `honors` — student awards, each as `{ zh, en }`
- `service`, `contact` — as shown

Every bilingual field uses the shape `{ zh: "…", en: "…" }`. To add a publication teaser image, drop it under `assets/img/teasers/` and set `teaser: "assets/img/teasers/foo.jpg"` on the entry.

## Replacing the avatar

Replace `assets/avatar.jpg` with any image (600×800 recommended, under 200 KB).

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings → Pages, select the default branch, root folder.
3. The site will be served at `https://<user>.github.io/<repo>/`.

For a user site (`<user>.github.io` repo), it lives at the domain root and no base path adjustment is needed. For a project site, relative paths in this repo already work.

## File structure

```
index.html              single-page entry
assets/
  avatar.jpg
  css/style.css
  js/data.js            all content
  js/main.js            i18n + rendering + scroll-spy
  img/teasers/          optional publication thumbnails
```
