# WithinEHR — Design System

WithinEHR is a modern, all-in-one **Electronic Health Record (EHR) and practice-management platform built specifically to run independent private practices**. One place for a practice owner and their staff to manage the schedule, patient roster, secure messaging, appointment requests, payments, insurance, insights and growth.

This repository is the design system that backs that product: brand foundations (color, type, spacing), reusable React UI primitives, foundation specimen cards, and a high-fidelity recreation of the practice app.

> The product voice is warm, plain-spoken and reassuring — built for busy clinicians, not IT departments. The visual language is clean, soft and clinical-but-friendly: white panels floating on a pale grey page, a calm teal brand, generous rounding, and quiet line iconography.

---

## Sources

These are the materials this system was built from. You may not have access; they are recorded for provenance.

- **Figma:** `DESIGN SYSTEM.fig` (page “Page-1”, guid `0:1`) — contains the Color theory ramps, Typography specimen, Iconography sheet, Buttons, Input fields, Side Nav Bar, Top Navbar, Dashboard Layout, Pop-up template, and an iPhone card frame. Figma Variables supplied the semantic token names (`--surface-*`, `--text-*`, `--border-*`, etc.).
- **Uploaded asset:** `uploads/Layer_x0020_1.png` — the withinEHR logo lockup (mark + wordmark), 64×64.
- The brand mark vector was extracted from the Figma side-nav (`assets/logo-mark.svg`).

### Substitutions to confirm
- **Icons:** the Figma uses the **Streamline Core** line-icon set (≈1,000 glyphs). That library isn’t freely CDN-hosted, so this system substitutes **[Lucide](https://lucide.dev)** — a near-identical 24×24 / 2px-stroke open line set — loaded from CDN. The look matches closely; **please confirm** Lucide is acceptable, or share the licensed Streamline export to swap in.
- **Fonts:** **Nunito** and **Inter** are the real product fonts and are open-source, so they load from Google Fonts with **no visual substitution**.

---

## Content fundamentals

How WithinEHR writes. Copy is the product’s bedside manner — keep it human.

- **Voice:** warm, direct, confidence-building. Speak to the practice owner as a peer who’s busy. Reduce anxiety; never add jargon.
- **Person:** address the user as **“you”** (“Your day at a glance”, “Manage your roster”). Refer to the practice as “your practice”. The app speaks in first person sparingly (“We’ll notify the patient”).
- **Casing:** **Sentence case** for body, descriptions, field labels, menu items and buttons (“New appointment”, “Add patient”, “Select plan”). **Title Case** only for proper product surface names / page titles (“Appointment Requests”). SHORT ALL-CAPS with wide tracking is used only for tiny section eyebrows in the sidebar (“CLINICAL”, “REVENUE”).
- **Buttons = verbs:** actions start with a verb — “Book appointment”, “Approve”, “Decline”, “Propose time”, “Export”, “Select plan”. Keep to 1–3 words.
- **Page headers:** a bold **Title** + a quiet one-line **subtitle** that says what you can do here (“View and manage requests”, “Secure patient messages”).
- **Numbers & clinical data:** rendered in **Inter** with tabular figures — currency (`$4,820`), times (`9:30 AM`), MRNs (`MRN-04821`), dates (`05/14/2025`). Precise, never rounded for show.
- **Empty / success states:** kind and brief — “All caught up · No pending appointment requests.”, “Appointment confirmed”.
- **Tone of marketing nudges:** benefit-first and low-pressure (“Get advanced features and exclusive access for a better experience.”).
- **Emoji:** **not used** in product UI. Status is communicated with color, dots and badges, not emoji.

---

## Visual foundations

The motifs that make a screen look like WithinEHR.

- **Layout — floating panels:** the app is a pale-grey page (`--surface-page` #F8F8F8) with **white rounded panels floating on it**, separated by a consistent **20px gutter**. The shell is a rounded side-nav (15px radius) + a rounded top bar (10px radius) + a content area. No hard full-bleed edges; everything is an inset card.
- **Color vibe:** calm and clinical. **Teal `#014952`** is the brand anchor — used for the primary action, the active nav row, links and emphasis. **Cyan `#BFF7FF / #60ECFF`** is the bright secondary for soft surfaces (the Premium card) and accents. Semantic green / red / orange handle success / danger / warning. Everything else is neutral grey. Backgrounds are flat color — **no gradients**, no photographic hero washes inside the app.
- **Type:** **Nunito** throughout — friendly, rounded humanist sans. Headings are **Bold (700)** with **tight negative tracking** (−0.5px at 16, −1px at 20, −2px at the 72px display). The marketing display weight is **Light (300)**. **Inter** is reserved for dense tabular data. Default UI text is small (12px) and body is 14px.
- **Corner radii:** a deliberate ladder — chips/avatars **3px**, buttons & inputs & menu rows **5px**, dialogs & top bar & banners **10px**, content cards **12px**, the app shell / side-nav **15px**, pills/badges fully round.
- **Cards:** white surface, **12px radius**, hairline `#E7E7E7` border, **soft low-contrast shadow** (`0 2px 5.6px rgba(72,72,72,.15)`). Shells/top-bar use a wider, very soft drop shadow (`0 4px 30px rgba(183,183,183,.2)`). Shadows are grey-tinted and low-spread — never harsh black.
- **Borders:** 1px hairlines do most of the structural work (`#E7E7E7` subtle, `#DBDBDB` default, `#CFCFCF` strong). Inputs use an inset 1px border that turns **teal on focus** with a soft teal **focus ring** (`0 0 0 3px rgba(1,73,82,.18)`).
- **Buttons:** filled **teal** primary with **bold white** label and 5px radius; secondary is a **teal outline** on white; ghost is quiet; destructive is filled red. Hover **darkens** the fill (teal-600 → 700 → 800); press nudges down ~0.5px. No glow, no gradient.
- **Iconography:** monochrome **thin line icons at 16px**, inheriting text color — see Iconography below.
- **Status:** small **red counter pills** (`#B60505`) for unread/pending counts; soft tinted **badges** with an optional leading dot for record states.
- **Motion:** subtle and quick. Color/background transitions ~120–180ms on a standard ease; the switch knob and focus rings ease in ~180ms. **No bounces, no decorative looping animation.** Reduced-motion friendly.
- **Transparency / blur:** used sparingly — only the dialog overlay (`rgba(14,14,14,.45)` dim). No glassmorphism inside the app.
- **Imagery:** photography appears as patient/staff **avatars** (rounded-square, 3px radius) — warm, natural. There is no heavy illustrative or stock-photo system in-app; the product leans on clean layout and the line-icon set instead.

---

## Iconography

- **System:** **Lucide** line icons (CDN), substituting the Figma’s Streamline Core set (see Substitutions above). Same visual DNA: **outline, ~2px stroke, rounded joins, 24px grid**, rendered at **16px** in product UI (20px for emphasis).
- **Color:** icons are **monochrome and inherit `currentColor`** (`--icon-default` #6D6D6D in the sidebar, `--icon-strong` for emphasis, white on filled teal). They are never multicolor and never filled illustrations.
- **Usage:** every nav item, button affordance, field adornment (search, chevron) and status row uses a line icon. Common glyphs: `calendar`, `users`, `message-square`, `user-plus`, `wallet`, `hand-heart`, `git-branch`, `store`, `activity`, `settings`, `search`, `bell`, `chevron-down`, `chevrons-up-down`, `chevron-right`, `plus`, `check`, `x`, `video`, `phone`, `clock`, `gem` (Premium).
- **How to use:** the `Icon` component wraps Lucide — `<Icon name="calendar" size={16} />`. Any page that uses `Icon` (or the components built on it) must include the Lucide UMD script:
  `<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>`
- **No emoji, no unicode glyphs** as icons.
- **Logo:** the “ew” swirl mark lives at `assets/logo-mark.svg` (single path, `currentColor`-friendly) and `assets/logo-lockup.png` (full raster lockup). In code, use the `Logo` / `LogoMark` helpers in the UI kit. Wordmark: **within** in teal-600, **EHR** in teal-500.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry point (import-only). Consumers link this.
- `tokens/colors.css` — ramps (teal, cyan, green, red, orange, neutral + blue/purple/maroon accents) and **semantic aliases** (`--surface-*`, `--text-*`, `--border-*`, `--icon-*`, `--color-*`).
- `tokens/typography.css` — families, weights, sizes, tracking + `.wehr-*` specimen classes.
- `tokens/spacing.css` — 4px spacing scale, radius ladder, elevation, focus rings, motion.
- `tokens/fonts.css` — Nunito + Inter (Google Fonts).
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`window.WithinEHRDesignSystem_f87792.*`)
- core: `Icon`
- forms: `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Switch`
- feedback: `Badge`, `Counter`, `Tag`, `Avatar`, `Dialog`, `Toast`
- layout: `Card`
- navigation: `SidebarItem`, `Tabs`

Each component dir has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and a `@dsCard` HTML spec.

**UI kit**
- `ui_kits/withinehr-app/` — interactive recreation of the practice app. Shell (`Sidebar`, `TopBar`, `Logo`) + four working screens: **Schedule** (KPI strip + appointment timeline + New-appointment dialog), **Patients** (searchable roster table), **Messaging** (two-pane secure chat), **Requests** (approve / decline with toast). Other nav targets show a labelled placeholder. Open `index.html`.

**Assets** (`assets/`)
- `logo-mark.svg`, `logo-lockup.png`, `avatar-sample.png`.

**Other**
- `SKILL.md` — makes this folder usable as an Agent Skill.
