# Med Global Design System

A design system for **Med Global** (Med Global Deutschland) — a membership-based
health company — rendered in the **Superpower** atmospheric visual direction: a
serious clinical promise wrapped in cinematic, command-center UI. Full-bleed dark
photography heroes resolve into crisp white content surfaces, with one rationed
sunrise-coral accent pulsing through the system.

> **Source materials provided**
> - `uploads/WhatsApp Image 2026-06-13 at 12.25.35 PM.jpeg` — the Med Global Deutschland
>   circular badge logo (blue/green clasped-hands mark). Copied to `assets/med-global-logo.jpeg`.
> - A written **style reference** ("Superpower — bioluminescent health command center")
>   with full color, type, spacing, component, and do/don't specs. This is the
>   authoritative definition the tokens and components below are built from.
>
> ⚠️ **Palette tension:** the supplied logo is blue/green, but the style reference is
> deliberately dichromatic (coral + neutrals). The system follows the style reference;
> the logo is preserved as-is in `assets/`. See *Caveats* — confirm desired direction.

---

## Content fundamentals

How Med Global writes copy, in this direction:

- **Voice:** calm, declarative, clinical-but-warm. Short sentences. States facts, then a
  benefit. *"100+ biomarkers, twice a year, read by clinicians who actually call you back."*
- **Person:** speaks to **you** ("your whole picture of health", "pick a lab near you").
  First-person plural for the company ("we'll book your first lab visit").
- **Casing:** sentence case for headlines and UI. The wordmark **"med global"** is set
  lowercase. Mono microcopy and trust labels often go UPPERCASE for an instrumented feel
  (`HSA/FSA ELIGIBLE`, `BIOMARKER · 0042`).
- **Headlines:** terse and poster-like — *"Health, decoded."*, *"Everything in one membership."*
  The whisper-weight type does the heavy lifting; copy stays minimal.
- **Numbers as proof, not decoration:** figures appear only when they're evidence
  (`100+ biomarkers`, `$17/month`). No invented stats.
- **No emoji.** Reassurance is carried by tiny carbon check glyphs + factual trust labels,
  never by emoji or exclamation.
- **Tone words:** decoded, command, protocol, biomarker, clinician, membership.

---

## Visual foundations

- **Color:** deliberately **dichromatic** — Sunrise Coral `#fc5f2b` + a zinc neutral ramp
  (carbon → zinc → ash → mist → fog → paper). Coral is **rationed**: filled action buttons,
  the brand mark, feature checkmarks, and the membership card only — never body text, icons,
  or decorative fills. No other chromatic colors enter the system.
- **Type:** one family does everything — **NB International Pro** (substituted with
  **Inter Tight**). Signature move: aggressively tight **negative tracking that scales with
  size** (−0.025em at 66px → −0.005em at body) and **line-heights that compress as sizes grow**
  (1.0 at display, 1.4–1.5 at body), giving headlines a monolithic, poster-like density.
  **Display headlines are weight 400, not 700** — the whisper-weight is the single most
  distinctive decision. 700 is reserved for small labels and button text. **NB International
  Mono Pro** (→ JetBrains Mono) appears sparingly for tabular metadata and technical labels.
- **Spacing:** 4px base, **compact** density. Scale: 4 / 8 / 16 / 24 / 28 / 60. Page max-width
  1200px, 75px section gaps, 19px card padding, 11px element gap.
- **Backgrounds:** two modes only. Full-bleed **dark cinematic photography** for heroes
  (intentionally dark/teal for text legibility, always under a scrim), and crisp **white**
  content surfaces below. Surface stack is white → fog → carbon — no mid-tone chromatic surfaces.
- **The one decorative element:** the marbled coral **membership card** (lava-lamp wash of the
  coral-glow gradient). It belongs *only* on that card — never stretched across backgrounds or
  dividers.
- **Borders & dividers:** hairline **Mist Gray** `#e4e4e7`, 1px. FAQ and content blocks often
  use whitespace + type size for separation instead of any border at all.
- **Elevation:** almost entirely flat. A single **subtle shadow** exists
  (`rgba(0,0,0,0.05) 0 2px 2px`); most cards have none.
- **Corner radii:** buttons & pills `9999px` (everything actionable is a pill), cards & nav `15px`,
  icon tiles `7.5px` (soft squircle), small cards/thumbnails `5px`. No square corners.
- **The floating pill nav:** a dark Carbon Black capsule that hovers *over* hero imagery with
  generous internal padding — never a flat top bar flush to the viewport edge. Signature layout move.
- **Hover states:** filled buttons drop to ~85% opacity; ghost links gain an underline; nav links
  go from white/60 to full white. No scale/bounce. Transitions are short fades (~.15s ease).
- **Imagery vibe:** cool, moody, cinematic for heroes; tight contained product crops (the card,
  app screenshots) elsewhere. No illustrations, no 3D, no abstract graphics — the photographic
  contrast *is* the identity.

---

## Iconography

- **Style:** thin-stroke, **line-based** icons in Carbon Black, sitting on a 7.5px-radius soft
  squircle tile when filled (e.g. the coral checkmark). Checkmarks used for trust/feature rows
  are drawn as a simple stroked polyline.
- **Source / substitution:** no proprietary icon set was supplied. The system uses small inline
  SVG check glyphs (stroke-width ~2.5–3, round caps) that match the thin-stroke spec. **For a
  fuller icon set, use [Lucide](https://lucide.dev)** — its stroke weight and round line-caps are
  the closest CDN match. Flag any swap to a different set.
- **No emoji, no unicode-as-icon.** Glyphs are always SVG.
- **Logo:** `assets/med-global-logo.jpeg` — circular badge mark. Place on white with clear space.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/` — `med-global-logo.jpeg`.
- `readme.md` (this file) · `SKILL.md` (Agent-Skill manifest).

**Components** (`window.MedGlobalDesignSystem_fc3d99`)
- `components/core/` — **Button**, **Card**, **Badge**, **Input**
- `components/navigation/` — **FloatingNav**
- `components/marketing/` — **FeatureList**, **MembershipCard**, **TrustBadgeRow**

Each directory has a `*.card.html` thumbnail; each component has `.d.ts` + `.prompt.md`.

**Foundation cards** (`guidelines/`) — Colors (accent, neutrals, surfaces), Type (display,
scale, mono), Spacing (scale, radius/shadow), Brand (logo). Rendered in the Design System tab.

**UI kits**
- `ui_kits/marketing-site/` — interactive landing page (Hero · Membership · FAQ · join flow).

---

## Caveats / open questions
- **Logo vs. palette:** confirm whether the coral Superpower direction is intended for Med Global,
  given the blue/green logo. If the brand should stay blue/green, the accent token and components
  need re-coloring.
- **Fonts:** NB International Pro / Mono Pro are proprietary; substituted with Inter Tight /
  JetBrains Mono from Google Fonts. Provide the licensed woff2 files to swap in.
- **Hero imagery:** the hero uses a placeholder dark-teal gradient. Provide licensed cinematic
  photography to complete the identity.
