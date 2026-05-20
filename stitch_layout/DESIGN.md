---
name: Emerald & Gold Behavioral Aesthetic
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#414944'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#717973'
  outline-variant: '#c0c9c2'
  surface-tint: '#396752'
  primary: '#002215'
  on-primary: '#ffffff'
  primary-container: '#043927'
  on-primary-container: '#73a48c'
  inverse-primary: '#a0d1b8'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#1c1d1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#31322f'
  on-tertiary-container: '#9a9a96'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bbeed3'
  primary-fixed-dim: '#a0d1b8'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#204f3c'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2de'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system is crafted for a premium, therapeutic positioning in the field of Behavioral Branding. It balances the authoritative presence of an expert with the soothing, healing nature of a therapeutic practice. 

The visual style is a fusion of **Minimalism** and **Corporate Modernity**, emphasizing heavy whitespace to allow the brand's message to breathe. The aesthetic response should be one of immediate serenity and "quiet luxury"—avoiding loud, aggressive patterns in favor of refined textures, subtle gradients, and high-quality typography. It targets a high-ticket audience that values psychological depth, sophistication, and emotional intelligence.

## Colors

The palette is rooted in the psychological grounding of **Emerald Green** (#043927), representing growth, stability, and deep emotional healing. This is complemented by **Champagne Gold** (#C5A059), used sparingly to denote premium quality, authority, and "high-ticket" value. 

The background is strictly **Off-White** (#FDFBF7) to avoid the clinical harshness of pure white, providing a warmer, more inviting canvas. For text and deep accents, a rich **Deep Slate/Charcoal** (#1A1A1A) ensures legibility while maintaining a softer profile than pure black.

## Typography

This design system utilizes a high-contrast typographic pairing to signal both elegance and modernity.

- **Headlines (Playfair Display):** A sophisticated serif that carries historical weight and literary authority. Used for titles and key statements to evoke a "premium editorial" feel.
- **Body & Interface (Montserrat):** A clean, geometric sans-serif that balances the traditional serif with contemporary clarity. Its generous x-height ensures readability in therapeutic contexts where clarity is paramount.

**Scale Philosophy:** Large, airy headlines are paired with conservative, well-spaced body text. On mobile, display sizes are aggressively reduced to ensure the serif flourishes do not crowd the viewport.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centered to create a focused, intentional reading experience. The philosophy is "Air First"—using generous vertical spacing (section gaps) to prevent cognitive overload.

- **Grid:** 12-column structure with wide gutters (24px) to maintain a sense of lightness.
- **Breakpoints:** 
  - **Mobile:** Single column, 20px side margins, reduced section padding.
  - **Tablet:** 8-column configuration, 40px margins.
  - **Desktop:** 12-column, 1200px max-width, 64px+ margins to frame the content.

Spacing units are multiples of 8px, ensuring a rhythmic and predictable flow that contributes to the "therapeutic" sense of order.

## Elevation & Depth

To maintain a sophisticated and professional tone, depth is achieved through **Ambient Shadows** and **Tonal Layers** rather than heavy borders.

- **Shadows:** Use extremely low-opacity (4-6%) shadows with a slight tint of Emerald Green to anchor elements to the Off-White surface. The blur should be high (20px+) to mimic natural, soft lighting.
- **Surface Tiers:** 
  - **Tier 1 (Base):** Off-White background.
  - **Tier 2 (Cards/Floating):** Pure White with a soft shadow.
  - **Tier 3 (Modals):** Pure White with a background backdrop blur (glassmorphism) applied to the layer beneath to maintain a sense of space.
- **Outlines:** Use very thin (1px) Gold/Champagne borders for interactive elements to signal "High-Ticket" value without the visual weight of a solid color.

## Shapes

The shape language is **Rounded** (Level 2). This choice is intentional: sharp corners feel aggressive and clinical, while fully pill-shaped elements can feel too casual or "techy." 

A radius of **0.5rem (8px)** for standard components and **1rem (16px)** for large containers strikes the perfect balance between professional structure and welcoming softness. This subtle curvature reinforces the "Behavioral Branding" aspect—firm logic with a human touch.

## Components

### Buttons (High-Ticket)
The primary action button uses a **subtle Champagne-to-Gold linear gradient** (45 degrees). Text should be Deep Slate for contrast. Secondary buttons use an Emerald Green outline with a transparent background. 
- *Hover state:* Increase the intensity of the gold gradient or add a soft outer glow.

### Cards
Cards are the primary container for services and testimonials. They feature a white background, Level 2 roundedness, and a soft ambient shadow. Keep internal padding generous (32px+) to maintain the premium aesthetic.

### Input Fields
Inputs should be minimalist: a 1px bottom border in Emerald Green or a light Champagne frame. Use Montserrat for placeholder text. Avoid heavy fill colors; the Off-White background should remain visible.

### Chips & Tags
Used for "Behavioral Pillars" or "Expertise Areas." These should be styled with a light Emerald tint (10% opacity) and Emerald text, or a subtle Gold border.

### Lists
Use custom Gold icons (like a refined chevron or a minimalist leaf) instead of standard bullet points to reinforce the brand's bespoke nature.