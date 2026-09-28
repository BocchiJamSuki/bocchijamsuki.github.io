# Bocchi Jam

Personal homepage, served by GitHub Pages at https://bocchijamsuki.github.io/.

Plain HTML, CSS and JavaScript — no framework, no build step.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | Page structure. Text is referenced by key (`data-i18n`). |
| `assets/js/i18n.js` | All copy, in English, 简体中文, 繁體中文 and 日本語. Edit text here. |
| `assets/js/main.js` | Language menu, navigation, reveal on scroll, guestbook, copy button. |
| `assets/css/style.css` | Site styles (light mode only). |
| `assets/css/giscus.css` | Guestbook theme, loaded by Giscus on the live site. |
| `giscus.json` | Lets only this site (and local previews) embed the guestbook. |
| `avatar.jpg` | Avatar, also used as the site icon. |

## Preview locally

```sh
python -m http.server 8080
```

Then open http://localhost:8080.

## Guestbook

The guestbook uses [Giscus](https://giscus.app) (GitHub Discussions).
Fill in `repoId` and `categoryId` at the top of `assets/js/main.js`.
