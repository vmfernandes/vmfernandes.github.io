# vmfernandes.github.io
Personal academic website for Dr Victoria Milanez Fernandes — geomorphologist, Monash University.

## To add a publication, talk, or abstract

All of these live in **one file**: `assets/js/publications-data.js`.

Open it, copy an existing entry, paste it at the top of the relevant list (`publications`, `talks`, or `abstracts`), and edit the fields:

```js
{
  year: 2026,
  authors: "Fernandes, V. M., ...",
  title: "Your paper title",
  venue: "Journal Name",
  doi: "https://doi.org/...",      // omit or "" if none
  themes: ["terraces"],             // any of: terraces, dynamic-topo, sediment
  student: false,                   // true if student-led
  status: "published"               // or "in review", "in prep"
},
```

Save, commit, push. The Research page re-sorts (newest first) and re-filters automatically.

---

## To add a blog post

1. Duplicate any `post-*.html` (e.g. `cp post-terraces.html post-mynewpost.html`).
2. Edit the title, date, and body inside the new file.
3. Open `blog.html` and `beyond.html`, copy one of the existing post tiles, and point its link at your new filename.

---

