# Week 6 Study Guide: High-Fidelity Design & Visual Systems

This guide summarizes the key concepts from Week 6 and defines essential terms for exam preparation. Focus is on **systems thinking**, **design-to-code translation**, and **intentional visual decisions**.

---

## Core Ideas (Big Picture)

High-fidelity design is not decoration.  
It is the disciplined use of visual systems to communicate priority, state, and intent while remaining consistent and maintainable in code.

Low-fidelity asks: **“Does it work?”**  
High-fidelity asks: **“Does it feel intentional and guide the user correctly?”**

High fidelity amplifies decisions—both good and bad.

---

## Key Transitions from Low-Fi to High-Fi

Low-Fi:
- Boxes and placeholders
- Focus on structure and flow
- Rapid iteration
- Validates layout and navigation

High-Fi:
- Components and systems
- Focus on hierarchy, clarity, and trust
- Uses tokens, typography, and color
- Communicates meaning and priority

---

## Glossary of Terms

### High-Fidelity Design
A design stage where visuals are polished and intentional, using real colors, typography, spacing, and components. Focuses on how the interface feels and communicates.

### Visual Hierarchy
The ordering of elements by importance. Achieved through size, color, position, and whitespace so users know where to look first.

### Squint Test
A quick evaluation technique: blur or squint at a design. If the most important elements still stand out, hierarchy is working.

### Whitespace (Negative Space)
Empty space around elements that groups related content and separates unrelated content. It is an active design tool, not wasted space.

---

### Atomic Design
A methodology for building UIs from small, reusable parts.
- Atoms: basic elements (buttons, inputs, colors)
- Molecules: small combinations of atoms
- Organisms: complex sections of UI
- Templates/Pages: final layouts with content

### Component
A reusable UI unit with defined inputs, variants, and states. Comparable to a class or function in programming.

### Component Variant
A predefined configuration of a component (e.g., primary button, secondary button, danger button).

### Component State
A visual representation of a component’s condition (hover, active, disabled, loading, error).

---

### Design Token
A semantic name for a visual value (color, spacing, typography). Tokens represent intent, not raw values.

### Magic Number
A hard-coded value (e.g., `#3B82F6`, `17px`) that makes systems brittle and hard to change.

### Semantic Token
A token named by purpose (e.g., `--color-primary`) rather than appearance (e.g., `--blue-500`).

---

### Typography System
A structured approach to font sizes, weights, and line heights using a limited, intentional scale.

### Type Scale
A small set of font sizes used consistently (e.g., 12, 14, 16, 20, 24, 32).

### Line Height
The vertical spacing between lines of text. Typically 1.4–1.6× the font size for body text.

---

### 60-30-10 Rule
A guideline for color usage:
- 60% dominant/neutral color (backgrounds)
- 30% secondary color (supporting surfaces)
- 10% accent color (calls to action, alerts)

### Accent Color
A limited-use color meant to draw attention. Should not dominate the interface.

---

### UI State
A condition the interface or component can be in, such as loading, empty, error, or success.

### Empty State
A screen shown when no data exists yet. Should guide the user on what to do next.

### Loading State
A visual indication that work is in progress (spinner, skeleton, progress indicator).

---

## Key Rules & Principles to Remember

- High fidelity ≠ high quality
- If everything looks important, nothing is important
- If it can be clicked, it has multiple states
- Use weight before color to show importance
- Never rely on color alone to convey meaning
- Tokens centralize decisions and reduce bugs
- Consistency increases usability and trust

---

## Design ↔ Code Connections

- Design tokens map to CSS variables or config values
- Components map to reusable UI code
- States map to conditionals, enums, or props
- Variants reduce duplication and logic complexity

---

## Exam Tip

When answering questions:
- Emphasize **systems**, not aesthetics
- Explain **why** a choice improves usability or maintainability
- Connect design decisions to **scalability and code quality**

If you can explain how a visual decision reduces bugs, improves clarity, or scales across screens, you are answering at the right level.

