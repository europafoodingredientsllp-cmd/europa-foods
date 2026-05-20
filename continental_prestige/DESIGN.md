---
name: Continental Prestige
colors:
  surface: '#fdf9f3'
  surface-dim: '#dddad4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#44474c'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#74777d'
  outline-variant: '#c4c6cc'
  surface-tint: '#525f71'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0f1c2c'
  on-primary-container: '#778598'
  inverse-primary: '#bac8dc'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fed977'
  on-secondary-container: '#785d00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1c18'
  on-tertiary-container: '#86847f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e4f9'
  primary-fixed-dim: '#bac8dc'
  on-primary-fixed: '#0f1c2c'
  on-primary-fixed-variant: '#3a4859'
  secondary-fixed: '#ffe08f'
  secondary-fixed-dim: '#e6c364'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#e6e2dc'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#484743'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
  deep-navy: '#0D1B2A'
  champagne-gold: '#C9A84C'
  warm-cream: '#F9F5EF'
  stark-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 84px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 60px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  stat-value:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-gap: 120px
  section-gap-mobile: 64px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style

The design system embodies a premium, ultra-modern B2B aesthetic tailored for the high-end food export market. The visual narrative is inspired by European luxury editorial design—think Moët & Chandon or high-fashion lookbooks. It communicates authority, heritage, and uncompromising quality.

The style is **Cinematic Minimalism**. It utilizes heavy whitespace to create a sense of breathing room and exclusivity. Visuals should rely on moody, high-contrast, dramatic food photography that feels artisanal rather than commercial. The interface acts as a quiet, sophisticated frame for the product imagery.

## Colors

The palette is rooted in a "Legacy & Light" philosophy. 

- **Deep Navy** serves as the primary anchor, used for text, heavy backgrounds, and structural elements to convey B2B stability and depth.
- **Champagne Gold** is reserved for high-impact moments: call-to-action buttons, key statistics, and editorial accents. It must be used sparingly to maintain its premium status.
- **Warm Cream** replaces pure white for large surface areas to provide a softer, more "paper-like" editorial feel, while **Stark White** is used for card backgrounds or to create high-contrast highlights.

## Typography

This design system uses a high-contrast typographic pairing to balance tradition and modernity. 

**Playfair Display** is the editorial voice. It should be used for all headings and large-scale "Display" text. For a more sophisticated look, use "Italic" styles for specific emphasis words within a headline.

**Inter** provides a clean, systematic counterpart for body copy and UI labels. It ensures that complex B2B information and data tables remain highly legible and professional. 

Maintain generous line heights for body text to support the airy, high-end aesthetic. Use the **Label-Caps** style for small eyebrow text above headlines to establish a clear hierarchy.

## Layout & Spacing

The layout follows a **Fixed-Width Editorial Grid**. Content is centered within a maximum container width of 1440px, but individual sections often utilize asymmetric, left-aligned hero layouts to mimic luxury magazine spreads.

- **Hero Sections:** Always left-aligned with a minimum of 80px margin from the left edge.
- **Section Spacing:** A minimum of 120px vertical padding between major sections on desktop to create an expansive, premium feel. 
- **Reflow:** On mobile, margins shrink to 20px, and section gaps reduce to 64px, with content stacking vertically while maintaining its left-alignment.

## Elevation & Depth

To maintain the cinematic and sharp aesthetic, this design system avoids heavy, diffused shadows. Depth is achieved through:

- **Tonal Layering:** Using the Warm Cream and Stark White to create subtle "paper-on-paper" stacking.
- **Low-Contrast Outlines:** Instead of shadows, use 1px solid borders in a slightly darker shade than the background (e.g., Deep Navy at 10% opacity) to define cards and inputs.
- **Image Overlays:** Moody food photography should use Deep Navy gradients (30-50% opacity) to ensure text legibility while adding a sense of physical depth to the screen.

## Shapes

The shape language is sharp and architectural. A subtle **6px radius** is applied to buttons and cards, which softens the "industrial" feel of a 0px corner while maintaining a sophisticated, rectangular silhouette. 

Avoid circles or high-radius pills; they conflict with the editorial, structured nature of the brand. Icons should follow a "thin-stroke" geometric style to match the sharp edges of the UI components.

## Components

### Buttons
- **Primary:** Champagne Gold background with Deep Navy text. Sharp 6px corners. No shadow.
- **Secondary:** Deep Navy background with Stark White text.
- **Ghost:** Transparent background with 1px Deep Navy border and Navy text.

### Cards
- Surfaces use Stark White against a Warm Cream background. 
- Use 1px subtle borders for definition. 
- Images within cards should always use a slight zoom-on-hover effect to add a tactile, premium feel.

### Input Fields
- Clean, 1px Deep Navy borders. 
- Labels use the **Label-Caps** typography style for a structured, professional look.
- Focus state: Border weight increases to 2px in Champagne Gold.

### Lists & Tables
- B2B data is presented with significant cell padding.
- Use horizontal dividers only (no vertical lines) to maintain the "editorial" flow of information.
- Header rows use Deep Navy background with White Inter typography.

### Chips & Tags
- Rectangular with 2px radius. 
- Backgrounds should be very light tints of the brand colors (e.g., 5% Gold or 5% Navy).