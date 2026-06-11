# Handoff: Whiskey.Investments — Landing Page, Calculator, Checkout, Legal & Emails

## Overview

Whiskey.Investments is a single-page marketing + reservation site for Irish whiskey cask investment. Customers size an order of casks (sold by the crate of 6) with a live calculator, reserve with a 10% deposit, and the order is fulfilled directly by Great Northern Distillery (GND), Dublin, Ireland. The business operating the site is **GRO AI LLC, 33 N Gould St, Sheridan, WY 82801, USA** — it acts as an *introducer only*; GND invoices and collects the 90% balance directly.

This bundle contains the complete approved design: the landing page, an embedded ROI calculator + reservation checkout modal, a standalone calculator page, three legal pages, two transactional email templates, and the OpenGraph image.

## About the Design Files

The files in this bundle are **design references created in HTML** — working prototypes that show the intended look and behaviour. They are NOT production code to copy directly. The task is to **recreate these designs in the target codebase's environment** (Next.js/React recommended if none exists yet) using its established patterns, while matching the visuals and behaviour exactly. The prototypes run as-is in a browser (open `Whiskey Investments v2.html`) so you can inspect every state interactively.

The prototypes use React 18 UMD + Babel-in-browser purely as a prototyping convenience. Re-implement as properly built components.

## Fidelity

**High-fidelity.** Colors, typography, spacing, copy, interactions and animation timings are final and approved. Recreate pixel-perfectly. All copy in the files is final — do not rewrite it.

## Design System

The brand design system lives in `_ds/whiskey-investments-design-system-1f4fba57-02c4-44e1-9ba7-68571fcc0118/`:

- `tokens/fonts.css` — Google Fonts: **Poppins** (display + body) and **Roboto** (eyebrow labels only)
- `tokens/colors.css` — full palette as CSS custom properties (see Design Tokens below)
- `tokens/typography.css`, `tokens/spacing.css` — type + 8pt spacing scales
- `styles.css` — global entry (imports the tokens)
- `_ds_bundle.js` — compiled React primitives exposed on `window.WhiskeyInvestmentsDesignSystem_1f4fba`: `Button`, `IconButton`, `Badge`, `Tag`, `Avatar`, `Card`, `Logo`, `LogoMark`, `Input`, `Select`, `Checkbox`, `Switch`, `Toast`, `ProgressBar`

In production, port these primitives to your component layer and keep the token names. Icons are **Lucide** (https://lucide.dev), 2px stroke, sized 16/20/24.

## Files

| File | What it is |
|---|---|
| `Whiskey Investments v2.html` | Main landing page (approved). Loads everything in `site2/` |
| `site2/data.jsx` | Shared primitives (`Section`, `Eyebrow`, `SectionHead`, `Icon`), **pricing model**, and ALL content data (nav, problems/answers, stats, steps, FAQs) |
| `site2/header.jsx` | Sticky nav + hero |
| `site2/why.jsx` | "Why we exist" (problem vs answer) + "Why whiskey" stat cards with +280% count-up |
| `site2/how.jsx` | "How it works" 6-step grid |
| `site2/calculator2.jsx` | Embedded cask calculator (navy section) |
| `site2/cask-gnd.jsx` | "The cask" + "Backed by Great Northern Distillery" (incl. click-to-load video) |
| `site2/trust2.jsx` | Trust & proof cards, testimonials (filled coral stars), FAQ accordion |
| `site2/reserve.jsx` | Reservation checkout modal (form, KYC, acknowledgements, Trustly payment step) |
| `site2/guide-modal.jsx` | "Download guide" lead-capture popup |
| `site2/footer2.jsx` | Footer (white logo, legal links, compliance copy) |
| `site2/app2.jsx` | Page composition + scroll-reveal engine |
| `Whiskey ROI Calculator.html` + `calculator.jsx` | Standalone calculator page (same pricing model) |
| `legal/privacy.html`, `legal/terms.html`, `legal/deposit-policy.html`, `legal/legal.css` | Legal pages (lawyer-review before launch) |
| `emails/reservation-confirmation.html` | Customer confirmation email (table-based, email-client-safe) |
| `emails/reservation-notification-gnd.html` | Order-pack notification to GND (includes customer details + passport link placeholder) |
| `og/og-image.html` → `assets/og-image.png` | OpenGraph image source + final 1200×630 export |
| `assets/wi-logo.svg` / `wi-logo-white.svg` / `wi-logo-og.svg` | Brand lockups (navy, white, white+tagline) |
| `assets/gnd-story.mp4` | GND story video used in the distillery section |

## Screens / Views

### 1. Landing page (`Whiskey Investments v2.html`)

Section order (each `<section>` has an `id` used by the sticky nav):

1. **Compliance bar** — navy `--navy-900`, 12px white-72% text, centred: "Capital at risk… not regulated in the UK."
2. **Sticky header** — white, shadow appears after 8px scroll. Logo `assets/wi-logo.svg` at 40px height. Nav links (14px Poppins 500) scroll to anchors with a 100px offset; hover = teal colour + 2px teal underline growing from left (`transform: scaleX`). Primary CTA "Use our calculator" (teal `Button`).
3. **Hero** (`wi-hero-grid`, 1.1fr/0.9fr) — headline + sub, dual CTAs, USP list (6 USPs, 2-col desktop / 1-col mobile).
4. **Why we exist** (`#why`) — `wi-compare-grid` 2 cols: "The market today" (4 problem cards) vs "Our answer" (4 answer cards).
5. **Why whiskey** (`#whiskey`) — 4 stat cards + Knight Frank callout: **+280% reported whisky return (10 years to 2023, Knight Frank Wealth Report 2024), ~14.3% p.a. approx. annualised**. The +280% counts up from 0 over 1.3s (cubic ease-out) when ≥70% visible, once.
6. **How it works** (`#how`) — 6 step cards (`wi-grid-3`), middle card navy.
7. **Calculator** (`#calculator`) — navy `--navy-900` band. See Calculator spec below.
8. **The cask** (`#cask`) + **GND section** — distillery facts incl. "supplies ~60% of Irish whiskey labels worldwide"; GND story video is a styled poster frame that only loads/plays the `<video>` on click (no preload).
9. **Trust & proof** (`#faq` region) — proof cards, 5 filled-coral-star testimonials, FAQ accordion (one open at a time, chevron rotates 180°, height animates).
10. **Final CTA + Footer** — navy footer, white logo `assets/wi-logo-white.svg` at 48px, link columns, legal links to the three legal pages, © GRO AI LLC.

Floating: **guide modal** (4 fields: first name, last name, email, phone; all required; success state) and **reserve modal** (below).

### 2. Calculator (embedded + standalone)

**Pricing model** (single source of truth — `site2/data.jsx`):

```
CASK_PRICE   = £2,000 list per cask
CASKS_PER_CRATE = 6  (one crate = £12,000 list)
GROWTH_RATE  = 0.143  (Knight Frank 2024: whisky +280% over 10y to 2023 ≈ 14.3% p.a.)
Crate slider: min 5 crates (30 casks), max 100 crates, default 5
Holding-period slider: 5–8 years, default 8 (max 8 — calculators only)
Deposit = 10% of order value (rounded)

Volume tiers (by crates):
  Investor   5–9     −2.5%   £1,950/cask
  Collector  10–19   −5%     £1,900/cask
  Portfolio  20–39   −7.5%   £1,850/cask
  Reserve    40–59   −10%    £1,800/cask
  Elite      60–79   −12.5%  £1,750/cask
  Apex       80–100  −15%    £1,700/cask
```

Tier ladder buttons jump the slider to each band's minimum. All money values animate via a 450ms cubic-ease count-up. Future value = `orderValue × 1.143^years`, labelled clearly as an illustration, not a forecast. CTA dispatches the reserve modal with the chosen crate count.

### 3. Reservation checkout modal (`site2/reserve.jsx`)

Two steps: **details** → **payment (Trustly)** → success.

Collects: First name + Last name (2-col, "as it appears on your passport"), Email + Phone (2-col), Billing address (street, town/city, postcode/ZIP 2-col), Country select, **Passport/ID upload** (dashed teal dropzone, shows file-check icon + filename once chosen), and **three required checkboxes**:
1. Non-refundable 10% deposit + agreement to the **Terms & conditions** (hyperlinked to `legal/terms.html`)
2. Risk acknowledgement (values can fall, unregulated in the UK)
3. Source of funds: "I declare that the funds used for this purchase are from legitimate sources and are not the proceeds of crime."

Pay button stays disabled until: first, last, valid email, billing address, and all three boxes ticked. Payment is **Trustly** (account-to-account; trustly.com) — the prototype shows the branded step; integrate Trustly's API in production.

### 4. Legal pages (`legal/`)

Shared layout in `legal.css`: compliance bar → white header (logo + "Back to site") → mint canvas, 860px column, white card (20px radius, `0 8px 24px rgba(40,61,79,.10)`) → navy footer with cross-links. Liability posture is deliberate (introducer-only, liability cap = deposit received, Wyoming law, non-refundable deposit with narrow exceptions, Trustly as payment processor). **Must be reviewed by counsel before launch.**

### 5. Email templates (`emails/`)

Table-based HTML, inline styles, Arial fallbacks, 600px column — safe for email clients.
- **Customer confirmation**: order summary, deposit received, what happens next (GND invoices the balance), compliance footer.
- **GND notification**: full customer record (first/last name, email, phone, billing address, country), order table, deposit status, **"Download secure upload" link for the passport/ID** (placeholder — wire to a secure, expiring document URL; copy mentions 14-day expiry), KYC + source-of-funds status rows, acknowledgements line. "Action required" callout asks GND to invoice the balance.

## Interactions & Behavior

- **Buttons (global)**: hover = translateY(−1.5px) + brightness 1.05; active = scale(0.98) + brightness 0.97; transitions 180–220ms; `@media (hover: hover)` only; disabled excluded.
- **Card hover**: `.wi-lift` — translateY(−4px) + larger shadow, 220–250ms.
- **Scroll-reveal**: grid children fade up 18px with 70ms stagger (cap 5) via IntersectionObserver (threshold 0.12, rootMargin −36px); classes are removed after reveal so hover transitions take over; skipped entirely under `prefers-reduced-motion` and for content already in the viewport at load.
- **Sliders**: custom webkit/moz thumbs, 26px teal with white ring; thumb scales 1.12 while dragging; teal focus ring.
- **FAQ accordion**: one open at a time; height + chevron animate 200ms.
- **Video**: poster + play affordance only; `<video>` element created/loaded on first click.
- **Modals**: fade/scale in (~200ms), close on backdrop click, X button, and Escape.
- Smooth anchor scrolling with 100px header offset (custom `scrollToId` — note: avoid `scrollIntoView`).

## State Management

- `crates` (5–100, default 5), `years` (5–8, default 8) — calculator
- Reserve modal: `step` (details | payment | success), `form` {first, last, email, phone, address1, city, postcode}, `passport` (filename), `ackDeposit`, `ackRisk`, `ackFunds`
- Guide modal: form {first, last, email, phone}, submitted flag
- Header: `scrolled` boolean (shadow)
- FAQ: `openIndex` (number | null)
- Production needs: Trustly payment session, order persistence, secure document upload + expiring link generation, transactional email dispatch (the two templates), KYC verification provider.

## Design Tokens

Key colors (full set in `tokens/colors.css`):

| Token | Value | Use |
|---|---|---|
| `--teal-500` | `#33B6B1` | Primary brand, buttons, links |
| `--teal-700` | `#269497` | Hover step |
| `--mint` / `--teal-300` | `#62D4C5` | Accents on dark |
| `--teal-100` | `#E3F1EE` | Tinted card fill |
| `--coral-500` | `#FF784E` | High-energy CTA, stars, highlights |
| `--indigo-500` | `#624DEF` | Secondary accent |
| `--navy-800` / `--navy-900` | `#283D4F` / `#1D2E3C` | Dark sections, ink |
| `--surface` | `#EEF5F3` | Mint app canvas |
| `--white` | `#FFFFFF` | Cards |

Type: Poppins 700 display (clamp 30–44px section titles, −0.02em), Poppins 400 body (15–18px, 1.6–1.7), Roboto uppercase eyebrows (12px, 0.185em tracking). Radii: 14px inputs/cards, 20–28px feature panels, pills for tags. Shadows: `0 8px 24px rgba(40,61,79,.10)` cards. Motion: 200ms standard ease, subtle overshoot (`--ease-emphasis`) for springs. British English copy, sentence case, no emoji.

## Assets

- `assets/wi-logo.svg` — navy lockup (header)
- `assets/wi-logo-white.svg` — white lockup (footer). Note: contains a stray ~51%-opacity `#FF0000` sliver path from the source file; harmless at render size, strip if convenient
- `assets/wi-logo-og.svg` — white lockup with tagline (OG image)
- `assets/og-image.png` — final 1200×630 OpenGraph image. Use an **absolute URL** in `og:image` at deploy
- `assets/gnd-story.mp4` — GND story video (user-supplied)
- Icons: Lucide via CDN in the prototype; bundle properly in production

## Production checklist (not in prototype)

1. Trustly payment integration (deposit collection)
2. Secure passport/ID storage + expiring download links for the GND email
3. Transactional email sending (both templates)
4. Real i18n if multi-language is required (the language toggle was removed from the design; translation happens in development)
5. Legal review of `legal/` content (GRO AI LLC / GND / UK-EU consumer law)
6. Absolute OG image URL + canonical/meta tags per final domain
