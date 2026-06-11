# Whiskey Investments — Design System

**"The future of whiskey investing."**

A modern, digital-first fintech brand for a platform that lets people invest in
whiskey. This design system codifies the **"Future-Led Thinking" (Concept 2)**
direction from the brand exploration: clean, friendly, confidence-building, and
highly scalable — *inspired by contemporary fintech platforms* (Monzo, savings
apps, modern dashboards) but with a distinct whiskey-cask mark and a teal /
coral / indigo palette.

---

## Source material

This system was built from a single attached source:

- **Figma file:** *"Branding Concepts (Copy).fig"* — Page 1, frame **"Concept 2 — Future-Led Thinking"** (node `0:203`).
  It is a **brand concept board**, not a built product. It contains: a mood
  board (third-party fintech references — *not* brand assets), the colour
  palette, typography specimens, the logo mark + wordmark, and logo treatments
  on light/dark.

There is **no product codebase or live UI** in scope. Everything beyond the
foundations (the logo, colours, type) is a faithful *forward application* of the
brand to fintech surfaces — see the "UI kit" caveat below.

---

## Content fundamentals — voice & copy

The board gives one authoritative paragraph of brand copy, plus headline and
tagline. The voice that emerges:

- **Lowercase, calm, plain-spoken.** The wordmark itself is lowercase
  (`whiskey.` / `investments`) and the tagline is lowercase: *"the future of
  whiskey investing."* Mirror that — sentence case for UI, lowercase for
  taglines and the logo lockup.
- **Reassuring and clear, never hype.** The brand promise is to *"make investing
  feel simple and intuitive"* and guide users *"through the journey with
  confidence and ease."* Copy should reduce anxiety: short sentences, concrete
  nouns, no jargon walls.
- **British English.** "prioritises", "colour", "behaviour". Keep it.
- **Second person, light first-person-plural.** Speak to the user ("your
  portfolio", "track your casks"); the brand refers to itself as "we" sparingly.
- **Confident headlines, friendly body.** Headlines are short and declarative
  ("Future-Led Thinking", "Manage your finances seamlessly"); body is warm and
  explanatory.
- **No emoji.** The brand uses none. Energy comes from colour and the faceted
  mark, not emoji.
- **Eyebrow labels are SHOUTED + spaced.** Section kickers are uppercase Roboto
  with very wide tracking (`COLOUR PALETTE`, `TYPOGRAPHY`, `LOGO DEVELOPMENT`).
  Reserve all-caps for these small labels only — never for headlines.

**Example voice:**
> *Eyebrow:* `YOUR PORTFOLIO`
> *Headline:* "Whiskey that works for you."
> *Body:* "Buy fractional shares of rare casks, track their value as they age,
> and sell when the time is right — all in one place."

---

## Visual foundations

**Palette.** A cool teal core, warmed by coral, sharpened by indigo, grounded in
deep navy ink.
- **Teal `#33B6B1`** is the primary brand colour (deep teal `#269497`, bright
  mint `#62D4C5`). Used for primary actions, brand fills, and the mint app
  background `#EEF5F3`.
- **Coral `#FF784E`** is the energy / action accent — high-emphasis CTAs,
  highlights, the dot on the `whiskey.` wordmark.
- **Indigo `#624DEF`** is a secondary accent for variety and data viz.
- **Navy `#283D4F`** is the ink for text and dark surfaces.
- Each hue ships as a **4-step ramp** (500 → 200) plus tints; see `tokens/colors.css`.

**Type.** Two families.
- **Poppins** — everything structural. Bold/SemiBold for display & headings
  (geometric, friendly, confident), Regular for body. Display tracking is
  slightly open (~0.02–0.05em on the largest sizes).
- **Roboto** — *only* for the uppercase, wide-tracked eyebrow labels
  (`letter-spacing: 0.185em`). Never for body.

**Spacing & layout.** 8pt grid. Generous whitespace; content sits on a
`~1200px` max container with comfortable gutters. Section dividers are thin
`#C3C3C3` hairlines under wide-tracked eyebrow labels — a signature of the board.

**Backgrounds.** Flat colour, never busy. The default app canvas is the pale
mint `#EEF5F3`; cards are pure white; hero / footer bands use deep teal
`#33B6B1` or navy `#283D4F`. **No gradients** as a rule (the mark itself supplies
all the colour drama). No photographic textures or patterns — surfaces are clean
and solid.

**Corners & cards.** Soft, modern radii — `14px` default for cards & inputs,
`20–28px` for large feature panels, full pills for tags & some buttons. Cards are
white with a **soft, cool, teal-tinted shadow** (`0 8px 24px rgba(40,61,79,.10)`)
and little or no border. Avoid hard 1px boxes; lean on shadow + radius.

**Shadows.** Low-spread, cool-tinted, navy-based. Brand and action buttons get a
coloured glow (`--shadow-brand`, `--shadow-action`) to feel tactile.

**Motion.** Quick and gentle. `200ms` standard transitions on a soft ease;
buttons/cards may use a subtle overshoot ease (`--ease-emphasis`) for a friendly
spring. No long or looping decorative animation.

**Interaction states.**
- *Hover:* darken brand fills one ramp step (`teal-500 → teal-700`), or lift a
  card 1–2px with a deeper shadow.
- *Press:* scale down to `~0.98` and drop the shadow — a soft "push".
- *Focus:* a `2px` teal focus ring (`--ring`), never a default browser outline.
- *Disabled:* drop to `--text-subtle` / reduced opacity, no shadow.

**Imagery vibe.** The brand's only proprietary imagery is the faceted mark.
Where photography is used, keep it warm-but-clean (amber whiskey tones against
the cool UI). Do **not** reuse the mood-board screenshots — they are competitor
references, not brand assets.

---

## Iconography

- **No bespoke icon set exists in the source.** The only vector artwork is the
  **faceted cask logo mark** (`assets/logo-mark.svg`) — a stylised whiskey
  barrel built from triangular facets in all four brand hues. This is a *brand
  mark*, not a UI icon, and should not be chopped up for iconography.
- **UI icons:** this system standardises on **[Lucide](https://lucide.dev)**
  (CDN) — a clean, friendly, `1.75–2px` rounded-stroke outline set that matches
  Poppins' geometric warmth. **This is a substitution** (no icon set was provided
  in the Figma); flagged for the user. Load via
  `<script src="https://unpkg.com/lucide@latest"></script>` and render with
  `data-lucide="..."`. Keep strokes at `2px`, size on the 8pt grid (16/20/24).
- **No emoji** in product UI.
- **No unicode glyphs** used as icons; use Lucide.

---

## Index / manifest

Root files:
- `styles.css` — global entry (only `@import`s). **Link this one file.**
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (118 tokens).
- `assets/` — `logo-mark.svg` (faceted cask mark).
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill front matter for Claude Code.

Foundation specimen cards (Design System tab): `cards/*.html` — 15 cards across
Colors (6), Type (4), Spacing (3) and Brand (2).

Components (`components/`) — **14 primitives**, each with `.jsx` + `.d.ts` +
`.prompt.md` and a `@dsCard` demo:
- `core/` — Button, IconButton, Badge, Tag, Avatar, Card, **Logo**, **LogoMark**
- `forms/` — Input, Select, Checkbox, Switch
- `feedback/` — Toast, ProgressBar

Mount in HTML via `window.WhiskeyInvestmentsDesignSystem_1f4fba` after loading
`_ds_bundle.js` (auto-generated — never edit it).

UI kit (`ui_kits/app/`) — interactive product surfaces composing the primitives:
- `index.html` — orchestrator (login → dashboard → marketplace).
- `Login.jsx`, `AppShell.jsx`, `Dashboard.jsx`, `Marketplace.jsx`.
  **Forward application of the brand** (no product screens existed in source).

Starting Points (consumer picker): the `Logo`, `Button`, `Card` components and
the full `app` screen.

---

## Caveats

- **Fonts are CDN-linked** (Google Fonts), not bundled binaries. Poppins & Roboto
  are exact matches to the source — no visual substitution, just delivery.
- **Lucide icons are a substitution** — the source had no icon set.
- **The UI kit is extrapolated** from the brand foundations; the Figma contained
  only a concept board, not product screens.
