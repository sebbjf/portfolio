---
name: Sebastian JF Portfolio
description: A personal portfolio set like a printed résumé, in warm ink on a near-black page.
colors:
  bright-ink: "#f7f5f0"
  warm-ink: "#e9e6df"
  faded-ink: "#b5b1a8"
  pencil-gray: "#8c887f"
  night-paper: "#121211"
  raised-paper: "#1a1a18"
  pressed-paper: "#22221f"
  hairline: "#2e2d2a"
  rule-line: "#4a4843"
  available-green: "#7fbf5a"
typography:
  display:
    fontFamily: "AtkinsonHyperlegible, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.4vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "AtkinsonHyperlegible, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  subtitle:
    fontFamily: "AtkinsonHyperlegible, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "AtkinsonHyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "AtkinsonHyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "AtkinsonHyperlegible, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  bar: "20px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  section: "72px"
  gutter: "24px"
  tap: "44px"
components:
  text-link:
    textColor: "{colors.bright-ink}"
  nav-link:
    textColor: "{colors.bright-ink}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  nav-bar:
    backgroundColor: "rgb(22 22 22 / 0.6)"
    rounded: "{rounded.bar}"
    padding: "10px 16px"
  button-ghost:
    textColor: "{colors.faded-ink}"
    rounded: "{rounded.sm}"
    padding: "1px 8px"
  button-ghost-hover:
    backgroundColor: "{colors.pressed-paper}"
    textColor: "{colors.bright-ink}"
  button-outline:
    textColor: "{colors.warm-ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  skill-tile:
    textColor: "{colors.faded-ink}"
    rounded: "{rounded.md}"
    padding: "18px 6px 14px"
  skill-tile-hover:
    backgroundColor: "{colors.pressed-paper}"
    textColor: "{colors.warm-ink}"
  project-thumbnail:
    backgroundColor: "{colors.raised-paper}"
    rounded: "{rounded.md}"
  dropdown:
    backgroundColor: "{colors.raised-paper}"
    rounded: "{rounded.md}"
    padding: "6px"
---

# Design System: Sebastian JF Portfolio

## Overview

**Creative North Star: "The Printed Résumé"**

The site is the résumé, set in ink. Every content block borrows the layout of the printed CV in `public/files/resume.pdf`: a centered name with an italic role and a row of contact details beneath it, then entries with a bold title, an italic organization and the date pushed to the right edge. A visitor who has read the PDF should recognize the page at a glance, and a visitor who hasn't should still read it as a document, not as an app.

The page is a single narrow column (46rem) of warm off-white ink on a near-black page, with no accent hue. Hierarchy comes from weight, italics, size and the brightness of the ink, never from color. The only light in the room is a soft white glow falling from the top of the page, and the only color in the chrome is the small green "available for work" dot. The project screenshots are the one place where full color is allowed, and even they sit slightly desaturated until they are hovered.

Interaction is restrained and typographic. Links reveal or brighten an underline, ink brightens toward white, and a faint warm surface tint appears behind controls. There are almost no filled boxes and no decorative shadows.

**Key Characteristics:**
- A single reading column in résumé order: name, contact, entries, sections.
- Monochrome warm ink on near-black, with five steps of ink brightness carrying all the hierarchy.
- Bold titles, italic organizations and stacks, dates right-aligned with tabular numerals.
- One typeface (Atkinson Hyperlegible) in four styles, no display face.
- Flat surfaces separated by hairlines, not cards or shadows.
- Underlines and brightness as the interaction language.

## Colors

A warm, slightly yellowed ink scale on a near-black page; there is no accent hue, and brightness is the only emphasis.

### Primary
- **Bright Ink** (`--text-strong`, also `--accent`): headings, the name, bold titles, links at rest and every emphasized word. It is the "accent" of this system: the brightest ink on the page, not a different hue. It is also the focus ring and the text-selection background.

### Secondary
- **Available Green** (`--status`): only the pulsing "available for work" dot in the hero. Nothing else on the site is green.

### Neutral
- **Warm Ink** (`--text`): body text, dates, italic stacks and the contact row. The default voice of the page.
- **Faded Ink** (`--text-muted`): entry descriptions, the footer, secondary labels and the copy button at rest. Reads clearly (8.8:1) but steps back.
- **Pencil Gray** (`--text-subtle`): the quietest marks, like the external-link arrows at rest. Still 5.3:1 on the page, so it stays legible.
- **Night Paper** (`--background`): the page itself. Warm near-black, never pure black.
- **Raised Paper** (`--surface`): the rare raised surfaces, like the language dropdown and the empty frame behind a loading screenshot.
- **Pressed Paper** (`--surface-hover`): the tint that appears behind a control on hover or press.
- **Hairline** (`--border`): row dividers in the contact list, skill tile outlines and screenshot frames.
- **Rule Line** (`--border-strong`): the footer rule, resting link underlines, outlined buttons and frames that are being hovered.

### Named Rules
**The Ink-Only Rule.** Emphasis is made with weight, italics or brighter ink, never with a hue. If something needs to stand out, make it bolder or brighter.

**The One Green Dot Rule.** Available Green marks availability and nothing else. Don't reuse it for success states, links or tags.

## Typography

**Display Font:** Atkinson Hyperlegible (with system-ui, sans-serif)
**Body Font:** Atkinson Hyperlegible (with system-ui, sans-serif)

**Character:** One humanist face designed for legibility does all the work, the way a résumé uses a single family. Its slashed zero and open forms keep dates and numbers unambiguous. It ships self-hosted as Latin-only woff2 in Regular, Bold, Italic and Bold Italic; Regular and Bold are preloaded.

### Hierarchy
- **Display** (700, fluid 2rem to 2.6rem, 1.2): the full name, centered at the top of the home page. Used once per page.
- **Subtitle** (400 italic, 1.35rem): the role directly under the name.
- **Headline** (700, 1.875rem, 1.2, tracking -0.015em; 1.5rem under 768px): section headings such as Experience, Awards, Projects and Contact. Left-aligned.
- **Title** (700, 1rem): résumé entry titles and project names. Same size as body: weight alone separates them, exactly as on the printed CV.
- **Body** (400, 1rem, 1.6): paragraphs and descriptions. The 46rem column keeps the measure near 75 characters.
- **Label** (400 italic, 0.9rem): the availability line, the footer, and secondary row labels on narrow phones. Skill names and the copy button use 0.85rem.

### Named Rules
**The Résumé Entry Rule.** Every dated item is set the same way: **bold title**, *italic organization*, date at the far right with tabular numerals, then the description in Faded Ink. Experience, Awards and future Education entries all share it.

**The Italic Means Context Rule.** Italics carry secondary context (the role, organizations, tech stacks, the footer), never emphasis. For emphasis use bold or Bright Ink.

## Layout

A single centered column with a maximum width of 46rem. Sections are separated by 72px of vertical space, and a heading sits 32px above its content. Résumé entries stack 20px apart, project rows 32px apart.

Only the hero is centered (name, role, contact row and status); everything after it is left-aligned like the body of a CV. Projects are rows, not cards: a 280px screenshot on the left with the text beside it, becoming a full-width screenshot above the text below 768px.

Responsive behavior:
- **Below 768px:** the side gutter becomes 24px, headings shrink one step, the nav collapses into a menu button with a floating panel, and project rows stack.
- **Skills grid:** 6 columns, 4 below 768px and 3 below 480px, so the 12 tiles always fill complete rows.
- **Below 420px:** contact rows put the label above the value so the email address never wraps mid-word.
- **On touch screens** (`pointer: coarse`): every link and button grows to a 44px hit area without changing how the row looks, and hover-only effects are switched off (`hover: none`).

## Elevation & Depth

The system is flat. Surfaces sit on the page at rest and are separated by hairlines and spacing, not by shadows. Depth comes from two atmospheric layers: a soft white radial glow that falls from the top of the page behind the hero, and the translucent, blurred sticky header that floats over the content.

### Shadow Vocabulary
- **Dropdown lift** (`box-shadow: 0 12px 32px rgb(0 0 0 / 0.45)`): only the language menu, which is the one element that genuinely floats above the page.

### Named Rules
**The Flat Page Rule.** Nothing on the page casts a shadow except things that truly float (the dropdown). Separate content with hairlines and space.

## Shapes

Gently softened corners that stay close to the square edges of a printed page: 4px on small controls and links, 6px on tiles, screenshot frames, menus and buttons, and 8px as the largest content radius. The header bar and its mobile menu panel are the only rounder shapes (20px), so they read as floating chrome rather than page content. Borders are always 1px. Dividers are full-width horizontal hairlines, never side bars.

## Components

### Links
Typographic and quiet.
- **Inline text links** (in paragraphs and the contact list): a 3px-offset underline in Rule Line at rest, on Bright Ink in paragraphs and Warm Ink in the contact list. On hover the text brightens and the underline takes the full ink color; on press the text dims to Faded Ink.
- **Footer links:** Bright Ink with a full-color underline, inside the italic Faded Ink footer line.
- **Hero contact links:** no underline at rest; it fades in on hover.
- **External links** in the contact list carry a small arrow in Pencil Gray that brightens and nudges up-right on hover.

### Buttons
There is no filled button.
- **Ghost button** (the "Copy" button next to the email): 1px Rule Line outline, 4px radius, italic 0.85rem Faded Ink text. Hover adds the Pressed Paper tint and brightens the text; press drops it 1px. Its label briefly changes to the result ("Copied" or "Couldn't copy"), which is also announced to screen readers.
- **Outlined button** (404 "Back to home"): 1px Rule Line outline, 6px radius, 8px 16px padding. Hover adds the Pressed Paper tint and a Bright Ink border.

### Résumé Entry (signature component)
The building block of Experience and Awards: a bold title, an italic organization (which may be a link), the date right-aligned with tabular numerals, and a Faded Ink description beneath. The title and date wrap onto separate lines on narrow screens.

### Project Row
A whole-row link. The screenshot sits in a 16:10 frame with a 6px radius and a Hairline border, slightly desaturated (35% grayscale). On hover the screenshot turns full color and zooms 4%, the frame border brightens, the title underlines and the arrow brightens and nudges up-right. On touch screens the screenshots are always in full color.

### Contact List
A definition list styled as a table: Bright Ink bold labels in an 8rem column, values on the right, rows separated by Hairlines with a Hairline above the first row. Under 420px the label moves above its value.

### Skill Tile
A square-ish tile with a 1px Hairline outline and a 6px radius: a 26px logo above the name in Faded Ink (0.85rem). At rest every logo is rendered in the same bright ink, whatever colors its source file uses. On hover (mouse only, never on touch) the tile takes the Pressed Paper tint and a Rule Line border, the name brightens to Warm Ink, and the logo lifts 2px and reveals its brand color. That colour reveal is the one deliberate exception to the Ink-Only Rule: it's earned by the hover, and it only shows logos.

### Navigation
A sticky bar with a 20px radius, a translucent dark fill and a 10px backdrop blur, holding the logo, section links and the language menu. It hides while scrolling down and returns when scrolling up or when it receives keyboard focus. Links are Bright Ink with a 4px radius and a faint white tint on hover. Below 768px the links move into a floating panel opened by a menu button.

## Do's and Don'ts

### Do:
- **Do** set every dated item as a Résumé Entry: bold title, italic organization, date on the right.
- **Do** use the color tokens on `:root` (`--text-strong`, `--text`, `--text-muted`, `--text-subtle`, `--surface`, `--border`, …) instead of literal colors.
- **Do** give every interactive element a hover state, an `:active` state and the global focus ring (2px Bright Ink outline, 3px offset).
- **Do** keep every link and button at least 44px tall on touch screens (`--tap`).
- **Do** use `--ease-out` (`cubic-bezier(0.22, 1, 0.36, 1)`) at around 0.2s for state changes, and respect the `prefers-reduced-motion` rule.
- **Do** keep every user-facing string in the translation files, in both English and Spanish.

### Don't:
- **Don't** introduce an accent hue. Emphasis is brighter ink or bold weight.
- **Don't** use Available Green for anything except the availability dot.
- **Don't** put content in cards with shadows; separate content with hairlines and space.
- **Don't** add a second typeface or a display face.
- **Don't** put a small uppercase label or kicker above a section heading; the heading stands alone.
- **Don't** use italics for emphasis; italics mean secondary context.
