# aqua-frutiger-aero-blog
Frutiger Aero y2k Static website built with HTML CSS and JS only. For nekoweb, neocities, etc

<img width="1913" height="950" alt="brave_screenshot (13)" src="https://github.com/user-attachments/assets/5326f06b-dbd1-4e71-a50a-0830f080bda7" />

Live preview: https://aquafrutiger.netlify.app/

Download: https://ko-fi.com/s/df52250b4a

# 💧 Aqua Blog

> A handmade, fully functional Frutiger Aero / Y2K glassmorphism blog template.
> No frameworks. No build tools. Just HTML, CSS, and JS.

![License](https://img.shields.io/badge/license-personal%20use-44a8e8)
![HTML](https://img.shields.io/badge/HTML-5-2888d8)
![CSS](https://img.shields.io/badge/CSS-3-28b098)
![JavaScript](https://img.shields.io/badge/JavaScript-ES5-189880)
![Hosting](https://img.shields.io/badge/hosting-Nekoweb%20%7C%20Neocities%20%7C%20any%20static-1878c8)

---


## 💧 About

Aqua Blog is a personal blog template with a **Frutiger Aero / Y2K glassmorphism**
aesthetic — the dreamy blue-green style of early-2000s Windows Vista, MSN Messenger
bubbles, and nature-meets-technology web design.

This is **not a generic template**. Every detail was hand-coded from scratch:
the glassy browser-style header, floating animated bubbles and leaves, MSN-style
profile orbs, iridescent CD music player, breadcrumb navigation, image lightbox,
and mobile layout.

It is **fully functional as a visual shell** — tabs switch, the music player plays,
images load with emoji fallbacks, the lightbox works, bubbles float. What is not
included yet are real blog posts. See the [editing guide](#-editing-guide) to start
publishing.

---

## 💧 Features

- **Frutiger Aero browser-style header** — glassy titlebar, traffic-light buttons,
  animated mascot, badge pills, breadcrumb bar
- **Tab navigation** — Home (posts), About, Art gallery, Diary, Music, Links
- **Sidebar** — MSN-style profile card with status dots, about blurb, animated
  SoundCloud player with iridescent CD disc + EQ bars
- **Animated floating bubbles and drifting leaves** in the background
- **Image support everywhere** — every slot accepts a URL with automatic emoji fallback
- **Lightbox popup** — click any image to view it full size
- **Visitor counter, category orbs, recent posts, tag cloud**
- **Breadcrumb navigation** that updates automatically when switching tabs
- **Mobile-friendly layout**
- **Pure HTML + CSS + JS** — no npm, no build step, no dependencies

---

## 💧 File Structure

```
aqua-blog/
├── index.html           ← all content: header, tabs, sidebar, footer
├── style.css            ← all styles (CSS variables at the top for easy theming)
├── blog.js              ← tab switching, SC player, lightbox, image fallbacks
└── AQUA-BLOG-GUIDE.txt  ← full editing guide
```

---

## 💧 Quick Start

1. Download or clone this repo
2. Open `index.html` in your browser to preview locally
3. Edit following the guide below
4. Upload all three files (`index.html`, `style.css`, `blog.js`) to your hosting

> All three files must be in the **same folder** for links to work correctly.

---

## 💧 Editing Guide

Every editable spot in `index.html` is marked with a `★ change` comment.
Use `Ctrl+F` to search for it.

### Text & name

| What | Where in index.html |
|---|---|
| Site title | `<div class="site-name">` |
| URL in titlebar | `<div class="hdr-tb-url">` |
| Header description | `<div class="site-desc">` |
| Badge labels | `<span class="aero-badge ab-blue">` — ab-blue / ab-aqua / ab-green / ab-sky / ab-teal |
| Breadcrumb tab labels | `tabLabels` object in `blog.js` |
| Footer text | `<div class="footer-copy">` and `<div class="footer-made">` |

### Colors

Open `style.css`. At the very top, edit the `:root { }` variables:

```css
:root {
  --sky3:       #44a8e8;   /* main blue — links, accents, panel headers */
  --aqua3:      #28b098;   /* deep aqua — status dots, highlights */
  --text-dark:  #0e3858;   /* main text */
  --text-mid:   #1e6080;   /* secondary text */
  --text-light: #4898b8;   /* subtle text, dates */
  /* ...and more — all labeled in the file */
}
```

Change any value and the whole site updates automatically.

**Background gradient** — search for `linear-gradient(160deg` in `style.css`.

**Header gradient** — search for `header {` in `style.css`.

**Glass panel color** — search for `.glass {` in `style.css`.

**Bubble color** — search for `.bubble {` in `style.css`.

### Images

Every image uses this pattern — replace `src`, the emoji is the fallback:

```html
<img class="icon-img" src="YOUR-IMAGE-URL" alt="description"
     onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
<span class="icon-fallback">🌊</span>
```

| Image | Search for in index.html |
|---|---|
| Mascot (left header) | `class="hdr-mascot"` |
| Avatar (sidebar) | `class="sb-avatar"` |
| Social icon buttons | `class="msn-icon"` |
| Post thumbnails | `class="post-thumb thumb-1"` (thumb-1 / 2 / 3) |
| About hero banner | `class="about-hero"` |
| Art gallery (6 slots) | `class="art-item"` |
| Diary thumbnails | `class="diary-thumb"` |

> **Tip:** Get a direct image URL from Imgur — upload your image, right-click it,
> and copy the image address (must end in `.jpg`, `.png`, or `.gif`).

### Music player

The player uses the **SoundCloud Widget API** — no audio files needed.

1. Go to the SoundCloud track you want
2. Copy its URL (e.g. `https://soundcloud.com/artist/track`)
3. URL-encode it at [urlencoder.org](https://www.urlencoder.org/)
4. In `index.html`, find `id="sc-player-fa"` and replace the URL in `src=`
5. Find `id="mp-track-fa"` and update the track name text

> Some SoundCloud tracks are restricted from embedding. If silence plays,
> try a different upload of the same track.

### Tabs — where each section lives

| Tab ID | Content |
|---|---|
| `tab-blog` | Blog post cards (home) |
| `tab-about` | About hero banner, text, facts list |
| `tab-art` | Art gallery — 6 image slots (lightbox enabled) |
| `tab-diary` | Diary entry cards |
| `tab-music` | Favorite songs list |
| `tab-links` | Social / external links |

To add a new tab:
1. Duplicate a `<a class="nav-tab">` line in the nav and change the text + `switchTab('NAME')`
2. Duplicate a `<div class="tab-pane">` block and change its `id` to `tab-NAME`
3. In `blog.js`, add the label: `var tabLabels = { ..., yourname: 'Your Label' }`

### Adding a new post

Find `id="tab-blog"` in `index.html`. Copy one existing `<div class="glass post">` block
and paste it above the others (newest posts first). Edit:

- Date in `<span class="gh-count">`
- Category class: `pt-art` / `pt-life` / `pt-game` / `pt-music`
- Icon color class: `gh-icon aqua` / `green` / `blue` / `pink`
- Post image `src` + thumbnail class (`thumb-1` / `thumb-2` / `thumb-3`)
- Title inside `<div class="post-title"><a href="#">`
- Excerpt inside `<div class="post-excerpt">`

Also update the **Recent Posts** list in the sidebar — search for `class="recent-body"`.

---

## 💧 .shtml for Nekoweb (optional)

Nekoweb supports **Server Side Includes (.shtml)**, which lets you write the
header, sidebar, and footer once and reuse them across all pages automatically.

The full step-by-step conversion guide is in `AQUA-BLOG-GUIDE.txt`.

**Recommended folder structure for .shtml:**

```
your-site/
├── index.shtml
├── style.css
├── blog.js
├── _parts/
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
└── posts/
```

In each `.shtml` page, the shared parts become include directives:

```html
<!--#include virtual="/_parts/header.html" -->

<div class="body-wrap">
  <div class="main-col">
    <!-- page-specific content here -->
  </div>
<!--#include virtual="/_parts/sidebar.html" -->
<!--#include virtual="/_parts/footer.html" -->
```

---

## 💧 Automation Scripts (optional)

Two optional Python 3 scripts are available on request:

| Script | What it does |
|---|---|
| `post-generator.py` | Reads a `.txt` post file → generates the HTML card → inserts it into your index |
| `feed-generator.py` | Scans your `posts/` folder → generates/updates `feed.xml` (RSS 2.0) |

Both scripts work with plain HTML and `.shtml`.

**Post file format** (`posts/my-post-title.txt`):

```
---
title: My Post Title
date: 2025-06-20
category: art
icon: aqua
thumb: 1
image: https://i.imgur.com/your-image.jpg
emoji: 🎨
---
Your post excerpt text. This is what shows on the blog index.
```

> Scripts are provided as-is. Due to frequent platform and Python updates,
> minor adjustments may occasionally be needed.
> **Contact:** greciavalentinapv@gmail.com

---

## 💧 Hosting

This is a **static website** — it runs entirely in the browser with no server,
database, or backend. Compatible with any static hosting:

| Platform | Notes |
|---|---|
| [Nekoweb](https://nekoweb.org) | Supports `.shtml` for free — recommended |
| [Neocities](https://neocities.org) | Free static hosting, widely used |
| GitHub Pages | Free, good for versioned projects |
| Any static host | Netlify, Vercel, Cloudflare Pages, etc. |

---

## 💧 Keywords

frutiger aero, frutiger aero blog, frutiger aero template, frutiger aero website,
frutiger aero aesthetic, y2k blog, y2k website template, glassmorphism blog,
glassmorphism template, aqua aesthetic, static website template, static blog template,
nekoweb template, nekoweb blog, neocities template, neocities blog, personal blog
template, html css js template, indie web, indieweb blog, personal website,
web design y2k, early 2000s aesthetic, windows vista aesthetic, msn messenger aesthetic,
kawaii blog, kawaii website, vtuber website, digital artist blog, music player website,
soundcloud player html, tab navigation html, lightbox html, blog without wordpress,
no cms blog, handcoded blog, handcoded website, free website template 2025

---

## 💧 License

Personal use only. You may edit and use this template for your own site.
Do not redistribute or resell the base template.
Credit appreciated but not required — a link back or a mention is always lovely ♡

---

## 💧 Contact

For custom setups, extra pages, automation help, or a fully built blog:

**Email:** greciavalentinapv@gmail.com

I'm a freelance web designer and developer. I can build a fully automated,
custom version of this blog for you.

---

<p align="center">made with ♡ · Aqua Blog · Frutiger Aero / Y2K glassmorphism aesthetic</p>
