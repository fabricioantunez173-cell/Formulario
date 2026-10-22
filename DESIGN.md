---
name: Spider Action Kinetic
colors:
  surface: '#12131a'
  surface-dim: '#12131a'
  surface-bright: '#383941'
  surface-container-lowest: '#0d0e15'
  surface-container-low: '#1a1b22'
  surface-container: '#1e1f27'
  surface-container-high: '#292931'
  surface-container-highest: '#34343c'
  on-surface: '#e3e1ec'
  on-surface-variant: '#e6bdba'
  inverse-surface: '#e3e1ec'
  inverse-on-surface: '#2f3038'
  outline: '#ac8885'
  outline-variant: '#5c3f3d'
  surface-tint: '#ffb3ae'
  primary: '#ffb3ae'
  on-primary: '#68000c'
  primary-container: '#e22633'
  on-primary-container: '#fffdff'
  inverse-primary: '#c00020'
  secondary: '#a5e7ff'
  on-secondary: '#003543'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#b9c3ff'
  on-tertiary: '#002388'
  tertiary-container: '#4066ff'
  on-tertiary-container: '#fffdff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410005'
  on-primary-fixed-variant: '#930016'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b9c3ff'
  on-tertiary-fixed: '#001356'
  on-tertiary-fixed-variant: '#0035be'
  background: '#12131a'
  on-background: '#e3e1ec'
  surface-variant: '#34343c'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 76px
    letterSpacing: 0.04em
  display-hero-mobile:
    fontFamily: Anton
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.04em
  headline-xl:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.03em
  headline-xl-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Anton
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the dynamic tension and graphic punch of classic comic print combined with modern editorial rigor. It translates graphic paneling, Ben-Day dot textures, ink-heavy contrast, and kinetic typography into a functional, highly readable digital experience.

The visual style blends **High-Contrast Bold** with **Graphic Brutalism**:
- **Tension & Urgency:** Massive, condensed headline typography commands attention immediately, evoking serialized hero titles and splash panels.
- **Utilitarian Balance:** Neutral, hyper-legible body typography grounds the expressive framing, ensuring complex interfaces, data tables, and reading flows never sacrifice speed or usability.
- **Comic Panel Framing:** Clean, razor-sharp structural dividers, high-contrast separation, and deliberate micro-offsets simulate dynamic sequential art panels without drifting into novelty or parody.
- **Intended Audience:** Action-oriented digital experiences, dynamic entertainment portals, high-engagement creative tools, and fan communities seeking a visceral, high-impact aesthetic.

## Colors

The palette draws inspiration from classic serialized printing, contrasting intense process pigments against deep, rich offset inks:

- **Primary Hero Red (`#E22633`):** The kinetic centerpiece. Reserved for primary calls-to-action, key badges, urgent state notifications, and defining structural accents.
- **Secondary Web Cyan (`#00D2FF`):** A sharp, electric secondary used for interactive highlights, focus rings, active progress bars, and high-frequency UI signals.
- **Tertiary Electric Blue (`#2B59FF`):** Provides depth, secondary panel outlines, and link hover states, preventing red dominance from fatiguing the user.
- **Deep Ink Neutral (`#0D0E15`):** Midnight black that forms the main background canvas, emulating freshly dried comic book printing ink rather than synthetic grey.
- **Surface Layering:**
  - `surface-base`: `#0D0E15` (Canvas midnight ink)
  - `surface-panel`: `#141724` (Tier 1 comic panel container)
  - `surface-overlay`: `#1E2337` (Tier 2 elevated cards, dropdown menus, flyouts)
- **Ink Text Hierarchy:**
  - `text-high-contrast`: `#FFFFFF` (Headings, primary button labels, critical data)
  - `text-medium-contrast`: `#B2B8C8` (Body content, secondary labels, metadata)
  - `text-subtle`: `#656C82` (Placeholders, inactive stamps, perimeter borders)

## Typography

The typography pairs visceral headline presence with rigorous editorial readability:

- **Display & Headlines (`Anton`):** Always rendered in uppercase to replicate the compressed impact of traditional comic page banners and sound effects. Characterized by dense horizontal proportions and tight vertical line-heights. Never use lowercase for Anton headings.
- **Body & Data (`Inter`):** Neutral, high x-height sans-serif designed for sustained legibility against dark surfaces. Retains standard sentence casing for effortless scanning.
- **Labels & Microcopy:** Built from uppercase `Inter` with increased tracking (`0.06em` to `0.1em`) to create crisp typographic caption tags, meta badges, and status labels reminiscent of comic book production stamps.

## Layout & Spacing

The layout model adapts the sequential structure of comic panels into a functional grid:

- **Grid Architecture:** 12-column responsive fluid grid. Columns simulate the rigid gutters of sequential comic panels.
  - **Desktop (1024px+):** 12 columns, 24px (`1.5rem`) gutters, 40px (`2.5rem`) outer canvas margins. Max content container: `1280px`.
  - **Tablet (768px - 1023px):** 8 columns, 20px gutters, 24px outer margins.
  - **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, 16px (`1rem`) outer margins.
- **Spacing Scale:** Built on a disciplined 4px/8px modular rhythm. 
  - `space-xs` (4px) and `space-sm` (8px): Used strictly for badge padding, icon gap offsets, and micro element nesting.
  - `space-md` (16px) and `space-lg` (24px): Standard internal card padding and stack margins.
  - `space-xl` (40px): Section divisions and panel offsets.
- **Panel Rhythm:** Blocks of content are organized as enclosed panels rather than boundless floating areas. Asymmetry is permitted through column span differences (e.g., an 8-column primary stage flanked by a 4-column reactive feed).

## Elevation & Depth

Visual hierarchy abandons diffuse soft shadows in favor of graphic print dimensionality:

- **Hard Graphic Offset (Comic Drop Shadow):** 
  - Instead of blurred ambient shadows, elevated interactive elements employ sharp, solid-color hard shadows offset by `2px 2px 0px #000000` or `4px 4px 0px #000000`.
  - On hover or press, these offsets compress to `0px 0px 0px`, delivering an immediate tactile snap.
- **Panel Outlines:**
  - Surfaces rely on a 1.5px or 2px crisp border (`#2B59FF` at 20% opacity for baseline panels; `#FFFFFF` at 15% opacity for secondary dividers).
  - Selected or active panels gain a 2px `#E22633` (Red) or `#00D2FF` (Cyan) keyline.
- **Subtle Halftone Texture:**
  - High-tier feature cards and dialog headers may incorporate a CSS SVG radial-dot Ben-Day halftone pattern overlay rendered at 4% to 6% opacity against `#141724`. This introduces comic authenticity without interfering with text contrast.

## Shapes

The design system adheres to a sharp, modern angularity tempered by a subtle radius (`roundedness: 1`):

- **Baseline Geometry:** Base elements (buttons, inputs, cards, panels) employ `rounded` (4px / `0.25rem`). This provides crisp, print-like ink edges without looking unfinished.
- **Large Panels:** Prominent comic container panels use `rounded-lg` (8px / `0.5rem`).
- **Pill / Circular Overrides:** Pill forms are restricted solely to small status indicator dots, circular icon buttons, and floating counter chips. Primary structural containers must never be pill-shaped.

## Components

### Buttons
- **Primary:** Background `#E22633`, text `#FFFFFF`, font `Anton`, uppercase, letter spacing `0.05em`. Border: 1.5px solid `#000000`. Drop shadow: `3px 3px 0px #000000`. Hover state: translate `-1px -1px`, shadow `4px 4px 0px #000000`. Active state: translate `2px 2px`, shadow `0px 0px 0px`.
- **Secondary (Action):** Background transparent, border 2px solid `#00D2FF`, text `#00D2FF`, font `Inter` (Bold, uppercase). Hover state: background `#00D2FF` with text `#0D0E15`.
- **Ghost/Tertiary:** Background transparent, text `#B2B8C8`, hover text `#FFFFFF` with an active 1px bottom border in `#E22633`.

### Input Fields
- Background: `#141724`.
- Border: 1.5px solid `#2B59FF` (at 40% opacity). Radius: 4px.
- Text: `#FFFFFF`, `Inter` Regular (15px). Placeholder: `#656C82`.
- Focus State: Border color `#00D2FF`, box-shadow `0 0 0 2px rgba(0, 210, 255, 0.25)`. No blur.

### Chips & Badges
- **Hero Chip:** Solid `#E22633` background, `#FFFFFF` text, `Inter` bold uppercase (11px). Skew-x `-6deg` for visual velocity.
- **Metadata Chip:** `#1E2337` background, 1px solid `#656C82`, text `#B2B8C8`. Flat rectangular orientation.

### Checkboxes & Radios
- Box size: 18px x 18px, border: 2px solid `#656C82`, background `#141724`, radius: 3px (checkboxes) or 50% (radios).
- Selected State: Background `#E22633`, border `#E22633`. Check mark: crisp solid `#FFFFFF` glyph.

### Cards & Comic Panels
- Surface: `#141724`.
- Border: 1.5px solid rgba(255, 255, 255, 0.08).
- Header: Anton uppercase headline, often paired with an absolute-positioned top-right metadata stamp (e.g., issue or status tag).
- Optional Accent: Left-edge 4px vertical accent stripe in `#E22633` or `#00D2FF` for featured content.

### Action Modals & Dialogs
- Backdrop: `#0D0E15` with 80% opacity and 4px backdrop blur.
- Modal Container: `#141724`, bordered with a prominent 2px solid `#FFFFFF` (15% opacity), accompanied by a solid offset graphic border `6px 6px 0px #000000`.