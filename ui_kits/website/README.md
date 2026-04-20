# Wedding Essentials — Website UI Kit

## Overview
High-fidelity click-through prototype of the Wedding Essentials marketing website. Built from the reference website design (`uploads/remixed-5d84e33e.html`).

## Screens
1. **Home** — Hero, intro strip (default landing)
2. **Services** — All 5 service cards including featured Catwalk & Confidence card
3. **About** — Mira's story + portfolio placeholder grid
4. **Contact** — PDF lead magnet form (dark) + enquiry form (light) + footer

## Components
| File | Component | Description |
|------|-----------|-------------|
| `Nav.jsx` | `WENav` | Fixed frosted-glass nav, active state, scroll shadow |
| `Hero.jsx` | `WEHero` | Full-viewport hero with animated entry + intro strip |
| `Services.jsx` | `WEServices` | 2-col grid of service cards + featured dark card |
| `About.jsx` | `WEAbout` | Two-col about layout + portfolio placeholder grid |
| `Contact.jsx` | `WEContact` | Dark PDF form + light enquiry form + footer |

## Usage
Open `index.html` — all components load via Babel. Click nav links to switch screens. Form submissions show success states.

## Design Notes
- Fonts: Cormorant Garamond (display) + Montserrat (body/labels) via Google Fonts
- Colors: see `../../colors_and_type.css` for all tokens
- No border-radius anywhere — sharp corners throughout
- Hover states: color transitions only, no shadows, no opacity
