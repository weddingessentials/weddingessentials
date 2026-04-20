# Wedding Essentials — Design System

## Overview

**Wedding Essentials** is a luxury bridal services company based in **Dubai**, serving brides across the UAE, GCC, and internationally. Founded by **Mira**, the brand sits at the intersection of wedding coordination, bridal confidence, and elevated presence training.

**Tagline:** *"We change the energy in the room."*

The company's core philosophy: *the most important person at a wedding is the bride — and the most important preparation she can do has nothing to do with the décor.*

### Key Details
| Detail | Info |
|---|---|
| Website | weddingessentials.me |
| Instagram | @weddingessentials.me (26K followers, verified ✓) |
| WhatsApp | https://wa.me/971506881534 |
| Target Audience | Dubai brides, aged 22–38, luxury market |
| Cultural Context | Gulf + Western bridal traditions |

### Products / Surfaces
- **Marketing Website** — primary customer-facing surface; enquiry-driven, service showcase, lead magnet (free PDF guide)
- **Instagram** — @weddingessentials.me, 26K followers, dark editorial feed
- **WhatsApp** — wa.me/971506881534 — primary conversion channel for high-touch clients

### Services Offered
1. **Wedding Management** — on-the-day coordination and vendor management
2. **Bridal Assistants** — dedicated personal attendant throughout the day
3. **Catwalk & Confidence Training** — 1:1 presence/posture coaching with Mira
4. **Polaroid Service** — candid in-the-moment physical photography
5. **Content Creation** — intentional videography/photography; not staged

### Sources
- **Company description artifact**: `uploads/remixed-5d84e33e.html` — full website design with copy, used as primary source of truth
- **Example website liked by client**: https://www.contentforbrides.com/ (luxury wedding content brand, aesthetic reference)
- **GitHub repo**: `zusmann/weddingessentials` — connected but empty at time of design system creation

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Intimate, authoritative, poetic.** Mira speaks directly to the bride as a trusted confidante who has seen it all.
- **First person from the brand's POV** ("We believe…", "I built Wedding Essentials…"). Mira uses first person "I" for personal sections; brand uses "we" for services.
- **Second person for the bride** — always "you", never "the bride" in direct address.
- **No emoji. Ever.** The brand is too refined for emoji.
- **No exclamation marks.** Confidence, not excitement.
- **Sentence fragments are deliberate and stylistic.** "Discreetly. Precisely. Without a single moment reaching you that shouldn't."
- **Short paragraphs, separated by white space.** Two to three sentences max per paragraph in body copy.

### Casing
- **Headlines**: Title Case or sentence case — never ALL CAPS for display headings.
- **Labels / navigation / CTAs**: ALL CAPS with wide letter-spacing (e.g. "What We Do", "Enquire Now").
- **Body copy**: Sentence case.

### Copywriting Patterns
- Opens with the problem before the solution: *"Every detail was perfect… And somehow the bride was managing rather than experiencing."*
- Uses rhetorical questions as section openers: *"Have you practiced yourself?"*
- Italics add emotional weight, not emphasis: *"disappear inside their own weddings."*
- Numbers as narrative: services numbered 01, 02, 03… creating a sense of completeness.
- Closing lines are always understated: *"It has everything to do with her."*

### Examples of On-Brand Copy
- "The day is planned. Now prepare *yourself* for it."
- "On the day, you should feel nothing but present."
- "This is not a rehearsal. It is a transformation."
- "Some moments deserve to be held, not scrolled."
- "Free. No spam. Ever."

---

## VISUAL FOUNDATIONS

### Color System
- **Cream** `#FAF8F4` — primary background; warm, paper-like
- **Cream Dark** `#F0EDE6` — secondary background, alternating sections
- **Dark** `#1A1814` — near-black; text, featured section backgrounds
- **Gold** `#B8924A` — primary accent; labels, links, dividers, hover states
- **Gold Light** `#D4AA6A` — used on dark backgrounds for better contrast
- **Mid** `#8A8478` — body text color; warm grey
- **White** `#FFFFFF` — text on dark backgrounds

### Typography
- **Display / Serif**: Cormorant Garamond (300, 400, 500, 600 + italic variants)
  - Used for headlines, pull quotes, brand name, subheadings, intro strips
  - Large sizes (52px–96px) at weight 300; feels delicate and editorial
- **Body / Sans**: Montserrat (300, 400, 500, 600)
  - Used for body copy (weight 300), labels (weight 500), CTAs, nav
  - Labels: 9–11px, 500 weight, letter-spacing 2.5–4px, ALL CAPS

### Spacing & Layout
- Section padding: 100px vertical, 60px horizontal
- Max content width: 1100–1200px, centered
- Grid gaps: 2–3px (hairline gold-tinted separators between grid items)
- Dividers: 1px gold lines (either full-width or 40px centered "gold-line")
- Vertical rhythm unit: ~8px base

### Backgrounds
- No full-bleed photography in layout backgrounds (portfolio uses image placeholders)
- Hero has a very subtle radial gradient: `radial-gradient(ellipse at 50% 60%, rgba(184,146,74,0.06) 0%, transparent 70%)`
- Dark sections use solid `#1A1814` with a 1px gold gradient line at the top
- No texture, no pattern, no grain — pure, clean surfaces

### Borders & Lines
- Gold 1px lines as section dividers: `rgba(184,146,74,0.2)`
- Grid separators: 2–3px gold-tinted gaps between service cards
- Featured card bottom hover line: 2px gold, animates width from 0 to full
- Form inputs: 1px border `rgba(184,146,74,0.22)` on dark; `rgba(26,24,20,0.12)` on light

### Corner Radii
- **Zero.** Absolutely no border-radius anywhere. Sharp corners throughout.

### Shadows
- No drop shadows on cards or elements
- Nav uses `box-shadow: 0 2px 30px rgba(0,0,0,0.06)` on scroll only
- No elevation hierarchy — flatness with color contrast instead

### Animation
- Entry animations: `fadeUp` — opacity 0→1 + translateY 24px→0, 1s ease, staggered delays
- Scroll reveal: IntersectionObserver, `opacity 0.8s ease + transform 0.8s ease`, threshold 0.1
- Hover: `0.3–0.5s ease` transitions — color shifts, gap expansions (arrow links), border grows
- Scroll indicator: `scrollPulse` — opacity pulse, 2s ease-in-out infinite
- No bounces, no springs. Easing is always smooth `ease`.

### Hover & Press States
- Nav links: color → `var(--gold)`
- Buttons primary: background → `var(--gold)` + `translateY(-1px)`
- Service cards: background darkens slightly + bottom gold line expands
- Arrow links: gap between text and arrow widens (10px → 18px)
- No opacity hover states. Color transitions only.

### Cards
- No rounded corners, no shadows
- Service cards: full background color, hover triggers subtle bg shift
- Featured card: `#1A1814` dark background, stands apart
- Card borders implied by hairline gaps in grid (gold-tinted background bleeds through)

### Imagery
- **Warm, intimate, candid.** Never posed or over-styled.
- Portfolio uses 3/4 and 16/9 aspect ratios in a mosaic grid
- Subtle scale on hover: `transform: scale(1.03)`, `0.6s ease`
- Placeholder text: "Your photo here" — real imagery is expected

### Use of Transparency & Blur
- Nav: `backdrop-filter: blur(12px)` + `rgba(250,248,244,0.94)` — frosted glass effect
- Dark section form inputs: `rgba(250,248,244,0.05)` background
- Dark section body text: `rgba(250,248,244,0.45)` for secondary text
- Blur used only for nav; nowhere else

---

## ICONOGRAPHY

No icon system is used. The brand intentionally avoids icons:
- **No icon font**, no SVG icon set, no emoji
- **Arrow indicator** `→` (unicode character) used as the sole "icon" in service links
- **Decorative lines** replace icons: 40px gold horizontal line (`<div class="gold-line">`), vertical gradient lines
- **Numbered labels** (01 —, 02 —) create visual hierarchy without icons
- Navigation and CTAs use text labels only

### Logos & Assets
- **Logo**: Wordmark only — "Wedding Essentials" in Cormorant Garamond, 18–20px, weight 300–400, letter-spacing 2px
- No logomark, no icon, no illustrated elements
- See `assets/` for any exported assets

---

## File Index

```
README.md                        ← You are here
SKILL.md                         ← Agent skill definition
colors_and_type.css              ← CSS custom properties for colors & typography
assets/                          ← Logos and brand assets
preview/                         ← Design system cards (registered in DS tab)
  colors-base.html
  colors-semantic.html
  type-display.html
  type-body.html
  type-labels.html
  spacing-tokens.html
  spacing-in-use.html
  components-buttons.html
  components-cards.html
  components-forms.html
  components-nav.html
  brand-logo.html
  brand-voice.html
ui_kits/
  website/
    README.md
    index.html                   ← Full website prototype (click-thru)
    Nav.jsx
    Hero.jsx
    Services.jsx
    About.jsx
    Contact.jsx
```
