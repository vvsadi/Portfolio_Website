# Handoff: Personal Portfolio Modernization (Aditya Vemparala)

## Overview

A visual and structural redesign of an existing personal portfolio site. The target repo is a **React 18 + Vite + Tailwind CSS** app (`stitch/`) using `react-router-dom` for routing. This handoff covers a redesigned home page and a completely restructured blog section that now includes a photography gallery.

## About the design files

`Aditya VVS.dc.html` in this bundle is a **design reference created in HTML** — a working prototype that shows the intended look and behavior. It is **not production code to copy directly**. It renders via a runtime React shim with inline styles; the target repo uses `.jsx` components with Tailwind utility classes.

**The task is to recreate this design inside the existing Vite/React/Tailwind codebase using its established patterns** — component files under `src/components/`, Tailwind classes rather than inline styles, existing routing conventions.

`Current Site (recreation).dc.html` is a faithful recreation of the site as it exists today, included only as a before/after reference.

## Fidelity

**High fidelity.** Colors, typography, spacing, and interactions are final. Recreate pixel-accurately using Tailwind utilities.

---

## Design tokens

Add to `tailwind.config.js` under `theme.extend`. The design uses CSS-variable-driven theming in the prototype; in Tailwind, express it with the existing `darkMode: "class"` strategy.

### Colors

| Token | Light | Dark | Usage |
|---|---|---|---|
| `paper` | `#f2f1ed` | `#100f0e` | Page background |
| `ink` | `#0f0f0f` | `#f3f1ec` | Primary text, filled buttons, dark panels |
| `card` | `#ffffff` | `#1a1917` | Card surfaces |
| `line` | `#e3e1db` | `#2b2a26` | Borders, dividers |
| `muted` | `#57544e` | `#98948b` | Secondary text |
| `signal` | `#c4622d` | `#e08a52` | Accent: status dot, link hover, signature underline |
| `chip` | `#ebe9e3` | `#232220` | Tag backgrounds, striped placeholders |

On-ink surfaces (the contact panel, which is `ink` background in both themes, i.e. cream in dark mode):
- `onInkLine`: `rgba(255,255,255,.32)` light / `rgba(0,0,0,.28)` dark — input borders, link underlines
- `onInkMuted`: `rgba(255,255,255,.62)` light / `rgba(0,0,0,.6)` dark — placeholder text

The old `primary: #135bec` blue is **removed entirely**.

### Typography

| Family | Source | Usage |
|---|---|---|
| **Archivo** (400–900) | Google Fonts | All headings and body copy |
| **JetBrains Mono** (400–700) | Google Fonts | Small uppercase labels, dates, tags, chips, back links, footer |
| **Lucida Calligraphy** (fallback `Lucida Handwriting`, `cursive`) | System | "VVS" signature logo only |

Replace the current Inter + Material Symbols + Sacramento imports in `index.html`.

Scale:
- Hero name: `clamp(56px, 8.2vw, 104px)` / weight 700 / `letter-spacing: -0.045em` / `line-height: .92`
- Page titles (Writing, Photography, blog banner): `clamp(44px, 7vw, 88px)` (blog) or `clamp(38px, 5vw, 64px)` (sidebar pages) / weight 700 / `-0.04em`
- Section headings: `clamp(34px, 4.4vw, 52px)` / weight 700 / `-0.035em`
- Post title: `clamp(38px, 5.5vw, 64px)` / weight 700 / `-0.04em`
- Card titles: 23–26px / weight 700 / `-0.025em` to `-0.03em`
- Hero sub-headline: 22px / 600
- Body: 17px / `line-height: 1.65`; card body 15px / 1.55; post body 18px / 1.7
- Mono labels: 13px / 600 / `letter-spacing: .14em` / uppercase
- Mono dates: 15px / 500 / full `ink` color
- Tags/chips: 10–11px mono

### Spacing, radius, shadow

- Content max width: `1180px`, horizontal padding `28px`
- Section vertical rhythm: `76px`–`110px` top padding
- Card radius `10px`; contact panel `14px`; pills `999px`; **photography tiles have no radius**
- Card shadow: none by default; hover `translateY(-4px)` + border color to `ink`
- Standard easing: `cubic-bezier(.2,.8,.3,1)`; reveal easing `cubic-bezier(.16,.84,.24,1)`

---

## Screens / views

Routing (extend `App.jsx`):

| Route | View |
|---|---|
| `/` | Home |
| `/projects/:id` | Project or case-study detail |
| `/blog` | Blog overview (landing) |
| `/blog/writing` | Writing index |
| `/blog/writing/:slug` | Post |
| `/blog/photography` | Photography gallery |

### 1. Home (`/`)

Sticky header, 72px tall, `paper` background, 1px `line` bottom border, max-width 1180px inner.
- **Left**: "VVS" in Lucida Calligraphy 32px, animated (see Interactions). Links home.
- **Center**: nav links at 14px/500 in this order — About, Experience, Projects, Blog. Hover → `signal`. First three smooth-scroll to sections; Blog routes to `/blog`.
- **Right**: 40px circular theme toggle (☀/☾), and a "Contact" pill — `ink` background, `paper` text, 11px×20px padding.

**Hero** — 2-column grid `minmax(0,1.15fr) minmax(0,.85fr)`, 56px gap, bottom-aligned, padding `76px 28px 88px`.
- Availability badge: inline-flex pill, `ink` background, `paper` text, 13px/700 uppercase, `.08em` tracking, 9px×16px padding, with an 8px `signal` dot. (Do **not** put white text on the orange — it fails contrast.)
- `<h1>`: "Aditya" / "Vemparala" on two lines.
- Sub-headline 22px/600: "Product owner building intelligent products at the seam of AI, data, and business."
- Body 17px `muted`: "Consulting, business analysis, and product ownership — translating complex business problems into practical digital solutions."
- Two pills: "Download résumé" (`ink` fill) and "LinkedIn" (1px `line` border). Both lift 2px on hover.
- **Right column**: portrait at `aspect-ratio: 4/5`, `object-fit: cover`, 8px radius, with a solid `ink` rectangle behind it — absolutely positioned, `right:-14px; bottom:-14px; width:78%; height:78%`, radius 8px.

**Worked-with strip** — full-width band with 1px `line` top and bottom borders. Single row: "Worked with" mono label on the left (flex-shrink 0), then the three logos in a `flex-1` container with `justify-content: space-between` so they span to the right edge. Heights: Oracle **64px**, BMO 48px, Radiant 48px, all `opacity: .85`.

**Projects** — heading "Projects", 3-column grid, 20px gap. Cards are text-only (no images), `card` background, 1px `line` border, 10px radius, 26px padding, 14px gap:
1. Category chip — mono 10px uppercase, `.12em` tracking, `chip` background, 5px×10px, pill
2. Title 26px/700, links to detail
3. Description 15px `muted`, flex-1
4. Tech tags — mono 10px, 1px `line` border, pill
5. Footer row above a 1px `line` top border: "View project →" and "View GitHub ↗" (`muted`), 14px/600

Categories: FeastIT = Academic, SkySolve = Academic, Financial Time-Series = Personal, AirSync = Academic, AI Governance = Academic. GitHub URLs are placeholders (`#`) except FeastIT (`https://github.com/vvsadi/FeastIT-Customer`).

**Case studies** — heading "Case studies", 3-column grid. Cards keep the **live Canva iframe embeds** in-grid (user must be able to scroll the deck inside the card): title 23px/700, then `<iframe aspect-ratio: 16/10>` with 1px `line` border and 8px radius, then description and tags. URLs are in the prototype's `CASES` array.

**About** — 2-column grid, 64px gap.
- Left: heading "I sit between technology, data, and business." + two paragraphs (verbatim from current site).
- Right: "Education & honors" mono subhead, then UTD and VIT entries with 40px logos. Honors tags are mono **11px**, `chip` background, **1px `line` border**, full `ink` text, weight 500, pill — the previous low-contrast grey version was illegible. Below, "Certifications" subhead and a 3-column grid of cert cards (56px badge + 12px/600 label), each lifting 3px on hover. **Write these as static markup with literal `src` paths** — do not map over an array with the src in a template hole.

**Experience** — heading "Where I've worked". Rows in a `180px minmax(0,1fr)` grid, 40px gap, 30px vertical padding, 1px `line` top border each. Left column: date range in mono 15px/500 full `ink`, employment type mono 13px `muted`. Right: role 24px/700, company 16px `muted`, then a bulleted list at 15px `muted`. Rows indent `padding-left: 14px` on hover. The old vertical timeline with alternating cards is gone.

**Skills** — heading "Skills", 3 cards in a grid. Each: title 20px/700, then items as 15px `muted` rows with 10px vertical padding and 1px `line` top borders. No icons.

**Contact** — full-width panel, `ink` background, `paper` text, 14px radius, 64px padding, 2-column grid.
- Left: "Let's talk." + intro + three contact lines with `onInkLine` bottom borders.
- Right: Name/Email inputs side by side, textarea, and a "Send message" pill in `paper` with `ink` text. Inputs are transparent with 1px `onInkLine` borders and `onInkMuted` placeholders — **not hard-coded white alphas**, which invert wrongly in dark mode.

**Footer** — 1px `line` top border, mono copyright left, Email / LinkedIn / GitHub links right.

### 2. Project detail (`/projects/:id`)

Max width 900px. Mono "← Back to projects" link, title `clamp(40px,6vw,72px)`, 20px `muted` description, tag row, then the Canva iframe at 16:9. **If a project has no embed, render a dashed-border striped placeholder instead — never an `<iframe>` with an empty `src`.** Below: "View repository" pill.

### 3. Blog overview (`/blog`)

The main site header is **hidden** on this page.

Full-viewport banner: `height: 100vh; min-height: 560px`, content bottom-aligned.
- Background: currently a striped placeholder div, meant to be replaced with a cover-fitted image. Slow zoom from `scale(1.06)` to `scale(1)` over 1.6s on load.
- Scrim: `linear-gradient(to top, rgba(8,8,7,.92) 0%, rgba(8,8,7,.6) 38%, rgba(8,8,7,.1) 72%, rgba(8,8,7,.28) 100%)`, `pointer-events: none`.
- Top-left: white "VVS" signature, links home. Top-right: hamburger — 46px, 1px `rgba(255,255,255,.5)` border, `rgba(15,15,15,.38)` background, `backdrop-filter: blur(8px)`, 10px radius, three 18–20px×1.5px white bars. Opens a dropdown (paper background, `line` border, 12px radius, 24px shadow) with **About, Experience, Projects, Blog** — the first three navigate to `/` and scroll to that section.
- Bottom content, max-width 1180px, 86px bottom padding: `<h1>` "Notes & frames" in white; intro paragraph 20px at `rgba(255,255,255,.9)`, max 60ch — exact copy: "Hi! Welcome to my Blog! I share my thoughts, learnings, experiences, and.... some photography skills!"; then two **identical** outlined pills, "Writing" and "Photography" — transparent with `1.5px rgba(255,255,255,.8)` border and white text, filling **solid white with `#0f0f0f` text** on hover, lifting 3px.

No footer on this page.

### 4. Writing (`/blog/writing`), Photography, and post pages

Shared chrome — a 2-column CSS grid, `<sidebar-width> minmax(0,1fr)`, with `transition: grid-template-columns .3s`:

**Sidebar** (`position: sticky; top: 0; height: 100vh`, 1px `line` right border, `paper` background, `box-sizing: border-box`, `overflow: hidden`):
- Expanded: **220px** wide, 34px/26px padding. Collapsed: **74px**, 28px/18px padding. **Default expanded.** Because it's a grid column, collapsing shifts the content pane left rather than overlapping it.
- Header row: "VVS" signature (hidden when collapsed) and a 34px ‹ / › toggle button.
- Nav (hidden when collapsed): Overview, Writing, Photography — 11px×14px padding, 8px radius, 15px/500. Active item is `ink` background with `paper` text; inactive is `muted`. Post pages mark Writing active.
- Bottom: 34px circular theme toggle, and "← Main site" in mono 14px/600 full `ink`, hovering to `signal`.

**Hamburger** — `position: fixed; top: 22px; right: 24px`, 46px, `paper` background, 1px `line` border, 10px radius, soft shadow. Always visible on these three pages. Same four-item dropdown as the overview page.

Content pane padding: `72px 40px 0`.

**Writing index**: `<h1>` "Writing", intro paragraph, then post rows in a `150px minmax(0,1fr) 96px` grid with 28px gap, 30px padding, 1px `line` top borders. Date in mono 15px/500 full `ink`; title 28px/700; excerpt 16px `muted`; "Read →" right-aligned. Rows indent 14px on hover. Posts come from the existing `src/data/blogPosts.js` markdown pipeline — keep it.

**Post page**: banner first — full content-pane width, `height: clamp(280px, 42vh, 420px)`, striped placeholder to be replaced with a per-post image, 1px `line` bottom border. Below it, in a 760px column with `44px 40px 0` padding: "← All writing" (mono 14px/600, `ink`, hover `signal`), title, publication date (mono 17px/500 full `ink`) with a 32px bottom padding and 1px `line` divider, then body paragraphs at 18px/1.7 with 22px gaps.

**Photography**: `<h1>` "Photography", intro, a dashed-border mono note about placeholders, then a **CSS multi-column masonry**: `columns: 3; column-gap: 4px`, tiles `break-inside: avoid; margin-bottom: 4px`. Tiles are **square-cornered, borderless**, varying heights (190–360px).

Each tile:
- Image fills the tile; scales to `1.04` over 0.5s on hover.
- A full-tile overlay, `opacity: 0` → `1` on hover, with `linear-gradient(to top, rgba(10,10,9,.88), rgba(10,10,9,.55) 45%, rgba(10,10,9,.05))`.
- Bottom-left: title 17px/700 white, caption 13px `rgba(255,255,255,.8)`.
- Top-right corner: 👍 and 👎 buttons with counts — square (no radius), 7px×12px padding, 12px/700, `backdrop-filter: blur(6px)`. Unselected: `rgba(255,255,255,.14)` background, white text, `rgba(255,255,255,.45)` border. Selected: white background, `#0f0f0f` text. Clicking the active one clears the vote; the two are mutually exclusive.

---

## Interactions & behavior

**Signature logo animation** (on mount): the "VVS" text wipes in left-to-right via `clip-path: inset(0 100% 0 0)` → `inset(0)` over 1.25s `cubic-bezier(.55,.05,.25,1)`; a 5px `signal` dot travels 74px across on the same timing and fades out at the end; a 1.5px `signal` underline scales in from the left over 0.55s at a 1.1s delay.

**Hero entrance**: badge, h1, sub-headline, body, buttons, and portrait each animate `translateY(16px)` + fade over 0.7–0.9s, staggered at 0.05 / 0.15 / 0.28 / 0.38 / 0.48s (portrait 0.3s).

**Scroll reveals**: elements start at `opacity: 0; translateY(22px)` and transition over 0.75s `cubic-bezier(.16,.84,.24,1)` when they enter the viewport. Applied to sections plus individual project cards, case cards, skill cards, cert cards, experience rows, writing rows, and photo tiles. Items revealed together in the same parent are staggered 70ms apart (capped at 420ms).

> Implementation note: in the prototype, `IntersectionObserver` proved unreliable inside the preview host, so reveals are driven by a scroll/resize listener plus a 400ms interval that marks anything above 90% of viewport height as shown, with elements more than 1.5 viewports above instantly shown with transitions disabled. **In a normal browser, a plain `IntersectionObserver` is fine** — just make sure elements already above the fold on load are revealed immediately.

All reveals are disabled under `prefers-reduced-motion: reduce`.

**Page transitions**: route changes fade + rise (`translateY(10px)`, 0.45–0.5s). Dropdown menus animate from `translateY(-8px) scale(.98)`.

**Hover states**: cards lift 4px and border to `ink`; experience/writing rows indent 14px; nav links go `signal`; photo tiles zoom 1.04; buttons lift 2–3px.

**Scrolling**: header nav items scroll to `#about`, `#experience`, `#work`, `#contact` with an 88px offset for the sticky header. From a non-home route, navigate to `/` first, then scroll.

---

## State management

| State | Default | Purpose |
|---|---|---|
| `theme` | light | `dark` class on `<html>`; persist to localStorage |
| `sidebarOpen` | `true` | Sidebar expanded/collapsed |
| `menuOpen` | `false` | Hamburger dropdown; closes on any navigation |
| `votes` | `{}` | Per-photo `'up' \| 'down'`; clicking the active one clears it |

In the prototype, routing and the current project/post are also component state; in the repo these become router params. Photo vote counts are derived from a deterministic hash of the photo id — replace with real data or drop the counts.

---

## Assets

All already in the repo at `src/assets/`: `Aditya Picture.jpeg`, `UTD.png`, `VIT.png`, `CSPO.png`, `OCI AI.png`, `OCI Foundations.png`, `oracle.png`, `bmo-blue-on-transparent-en.png`, `radiant-logo.png`, plus the résumé and certificate PDFs.

**No longer needed**: `linkedin_logo.jpg`, `Github.png`, `Gmail_icon.png`, `Whatsapp.png`, `react.svg` — the redesign uses text links instead of icon tiles. Material Symbols is dropped entirely; the design uses no icon font.

**Still needed from the owner**: a blog banner image, per-post banner images, and the photography set. All are striped placeholders in the prototype.

## Files in this bundle

- `Aditya VVS.dc.html` — the redesign (all views; use the in-page nav to reach blog, writing, photography, and detail pages)
- `Current Site (recreation).dc.html` — faithful recreation of the existing site, for before/after comparison
