---
name: Ravi Bhuvan Portfolio
description: Geometric spatial portfolio built on terracotta, cream, and black with floating UI elements.
colors:
  primary: "#B75A48"
  light: "#E8ECD6"
  dark: "#000000"
typography:
  display:
    fontFamily: "Unbounded, Epilogue, sans-serif"
    fontSize: "6rem"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Unbounded, Epilogue, sans-serif"
    fontSize: "3rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Unbounded, Epilogue, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Epilogue, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.light}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.light}"
    textColor: "{colors.dark}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
---

# Design System: Ravi Bhuvan Portfolio

## Overview

**Creative North Star: "The Constructivist Projection Room"**

A distinctive visual identity built strictly around **squares, rectangles, and circles**, creating an art-directed, modern, and visually balanced experience. The interface operates as a creative projection room where cinematic video pacing, creative code, and graphic structure intersect.

Instead of generic developer templates or container-inside-container cards, the layout embraces intentional negative space, floating apparatuses, and bold tonal contrast across a three-color foundation.

**Key Characteristics:**
- Strict three-color discipline: Terracotta (`#B75A48`), Light Cream (`#E8ECD6`), and Deep Black (`#000000`).
- Floating asymmetric apparatus: mid-left vertical navigation pill and top-right personal identity card.
- Monumental typography with expressive weight contrast and automatic role transitions.
- Geometric recurring motifs: pure circles, solid squares, pill buttons, and cinematic frame rectangles.

## Colors

The palette is intentionally restrained to three primary roles, avoiding extraneous tints or gradients.

### Primary
- **Terracotta Ground** (`#B75A48`): The warm, saturated architectural foundation across the entire page canvas.

### Light
- **Cream / Light Accent** (`#E8ECD6`): Main display headlines, hero name typography, navigation ground, and active accents.

### Dark
- **Deep Black** (`#000000`): Body paragraphs, sub-headings, introduction sentences, structural lines, and primary button fills.

### Named Rules
**The Three-Tone Commitment Rule.** No arbitrary fourth colors, decorative gradients, or uncalibrated grayscale neutrals are permitted. All depth, interaction states, and hierarchy are articulated solely through relationships between `#B75A48`, `#E8ECD6`, and `#000000`.

## Typography

**Display Font:** Unbounded (fallback: sans-serif)  
**Body Font:** Epilogue (fallback: system-ui, sans-serif)

**Character:** Wide, constructivist letterforms with circular and square geometric tension (Unbounded) grounded by a high-legibility, humanistic geometric grotesque (Epilogue).

### Hierarchy
- **Display** (Unbounded 900, clamp(3.75rem, 10vw, 9.5rem), line-height: 0.88): Used for the lowercase hero name "ravi bhuvan".
- **Headline** (Unbounded 900, 2.5rem–3.75rem, line-height: 1.0): Section titles (e.g. "selected works", "disciplines & practice").
- **Title** (Unbounded 700, 1.25rem–1.75rem, line-height: 1.2): Project titles and pillar headings.
- **Body** (Epilogue 500, 0.875rem–1rem, line-height: 1.6): Case study descriptions, philosophical statements, and supporting copy (max 65ch measure).
- **Label** (Epilogue 700, 0.75rem, tracking: 0.08em, uppercase): Section kickers, filter pills, and metadata stamps.

### Named Rules
**The Weight-Contrast Rule.** Headings command authority through extreme weight (900 black) and tight negative tracking (-0.04em), while supporting copy speaks with clean, open medium-weight clarity (500).

## Layout

- **Asymmetric Floating Canvas:** The primary canvas allows content to breathe across wide margins (`md:pl-28 lg:pl-36 md:pr-48 lg:pr-56` on the first viewport) to accommodate floating apparatuses without overlap.
- **Floating Vertical Left Nav:** Occupies ~40% of viewport height on desktop, vertically centered or slightly below center.
- **Top-Right Profile Card:** Floats independently in the upper-right corner as a personal identity mark.
- **Responsive Adaptation:** On mobile viewports, the vertical navbar shifts into a floating bottom pill and the profile card scales gracefully to avoid colliding with hero text.

## Elevation & Depth

Surfaces rely on tonal layering and soft, offset ambient shadows. Hard 4px cartoon block shadows and zero-blur glowing halos are forbidden.

### Shadow Vocabulary
- **Floating Apparatus** (`box-shadow: 0 10px 35px rgba(0,0,0,0.2)`): Used on the floating vertical navbar and profile identity card.
- **Project Card Elevation** (`box-shadow: 0 8px 30px rgba(0,0,0,0.1)`): Base elevation for light content cards.
- **Hover Lift** (`box-shadow: 0 16px 45px rgba(0,0,0,0.25)`): Applied on active interactive hover states.

## Shapes

- **Circles:** Full circular pills (`rounded-full`), circular profile placeholders, floating disc motifs, and active state indicators.
- **Squares:** Sharp corner stamps (`rounded-sm`), 1:1 aspect ratio project tiles, and crosshair framing marks.
- **Rectangles:** 16:9 cinematic viewports, 4:5 editorial portrait cards, and rounded card containers (`rounded-3xl` / 24px–32px radius).

## Components

### Floating Vertical Navigation Bar
- **Shape:** Pill-rounded (`rounded-full`), w-14 to w-16, 40vh height.
- **Colors:** Background `{colors.light}`, icons `{colors.dark}`.
- **Active State:** Dark circular pill (`{colors.dark}`) with light icon (`{colors.light}`) and subtle indicator.

### Floating Profile Card
- **Shape:** Compact vertical card (`rounded-2xl` to `rounded-3xl`, w-36 to w-44).
- **Structure:** Empty circular avatar placeholder (ready for future photograph) + "Ravi Bhuvan" + "Video Editor" + status pill.
- **Colors:** Background `{colors.light}`, typography `{colors.dark}`.

### Hero Name Lockup
- **Structure:** Line 1 "i'm" (`{colors.dark}`, bold) &rarr; Line 2 "ravi bhuvan" (`{colors.light}`, monumental black 900) &rarr; Line 3 "I'm a video editor and " (`{colors.dark}`) + automatically rotating profession (`{colors.light}`).

### Buttons
- **Primary:** `{colors.dark}` fill, `{colors.light}` text, rounded-full pill shape. Hover inverts to `{colors.light}` fill with `{colors.dark}` text.

## Do's and Don'ts

### Do:
- **Do** maintain the strict three-color discipline (`#B75A48`, `#E8ECD6`, `#000000`).
- **Do** honor geometric shapes (squares, circles, rectangles) as structural components rather than random confetti.
- **Do** ensure all text transitions and rotating professions avoid layout shift.
- **Do** respect `prefers-reduced-motion` across all motion effects.

### Don't:
- **Don't** introduce generic AI gradients (e.g. purple-to-blue).
- **Don't** use default system or Inter display typefaces.
- **Don't** wrap everything inside a single centered card container.
- **Don't** use bounce/elastic easing curves.
