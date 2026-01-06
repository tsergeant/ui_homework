# Week 8 Study Guide: Accessibility (a11y) & Inclusive Design

This guide summarizes key concepts and terms from Week 8. It is intended for **exam review** and focuses on definitions, mental models, and common failure patterns.

---

## Summary: Core Ideas

- **Accessibility is a systems property**, not a checklist or legal add-on.
- Most accessibility failures are **unintentional engineering failures**, not design malice.
- Designing for users with **permanent disabilities** improves usability for users with temporary and situational constraints.
- Accessibility problems often emerge from:
  - Visual-first design
  - JavaScript-heavy dynamic interfaces
  - Poor state and focus management
- Accessibility overlaps directly with:
  - UX quality
  - Robustness
  - Maintainable code

> Accessibility is the practice of designing interfaces that **degrade gracefully under constraint**.

---

## Key Mental Models

### The Curb Cut Effect
Designing for users with permanent disabilities benefits everyone.
- Wheelchair ramps → strollers, luggage, carts
- Captions → noisy environments, language learners

### Persona Spectrum
Disability is not binary.
- Permanent: blind, deaf, missing a limb
- Temporary: broken arm, ear infection
- Situational: sun glare, loud room, holding a baby

### Constraint Stacking
Users often experience **multiple constraints at once**.
- Low vision + motion sensitivity
- Keyboard-only + cognitive load

If your UI assumes ideal conditions, it will fail.

---

## WCAG Fundamentals

### WCAG (Web Content Accessibility Guidelines)
International standard for web accessibility.
- Most laws (ADA, Section 508) reference WCAG
- Target level: **WCAG 2.1 AA**

### The POUR Principles

**Perceivable**
- Content must be detectable by the senses
- Examples: alt text, captions, sufficient contrast

**Operable**
- Users must be able to navigate and interact
- Examples: keyboard navigation, no keyboard traps

**Understandable**
- UI behavior must be predictable
- Examples: consistent navigation, clear error messages

**Robust**
- Content must work across assistive technologies
- Examples: semantic HTML, correct ARIA usage

---

## Contrast & Visual Accessibility

### Contrast Ratios
- Normal text: **4.5:1 minimum**
- Large text (18pt+): **3:1 minimum**

Color must not be the sole means of conveying meaning.
- Errors cannot rely only on red
- Success cannot rely only on green

---

## The Accessibility Tree

### DOM vs. Accessibility Tree
- Browsers render pixels visually
- Screen readers read the **Accessibility Tree**
- The tree is derived from **semantic HTML**

### Semantic HTML
Using the correct HTML element provides built-in accessibility.
- `<button>` includes keyboard and screen reader support
- `<div>` does not

### ARIA (Accessible Rich Internet Applications)
Used when semantic HTML is insufficient.
- Examples: `aria-label`, `aria-hidden`, `aria-live`

**Rule of ARIA:**  
No ARIA is better than bad ARIA.

---

## Focus & Interaction

### Focus Is State
Focus is part of application state, not just styling.
- Often broken during:
  - Route changes
  - Modal dialogs
  - Form validation

### Accessibility Debugger (3 Questions)
1. Can I reach it with Tab?
2. Can I activate it with Enter or Space?
3. Does focus move somewhere sensible afterward?

If any answer is “no,” accessibility is broken.

---

## Forms Accessibility

Forms are the most common accessibility failure point.

Every form control needs:
- A programmatic label
- Clear instructions
- Error messages that explain **how to fix the problem**

Common mistakes:
- Placeholder text used as labels
- Errors shown only visually
- Vague messages (“Invalid input”)

---

## Mobile Accessibility

### Touch Targets
- Apple minimum: 44×44 points
- Android minimum: 48×48 dp
- Visual size can be small; tappable area must be large

### Dynamic Type
- Users may increase system font size
- Fixed-height containers often break layouts

### Motion Sensitivity
- Animations can cause discomfort
- Respect `prefers-reduced-motion`

### One-Handed Use
- Reachability matters on large screens
- Important actions should be easily reachable

---

## Accessibility Testing

### What Automated Tools Can Catch
- Missing labels
- Contrast failures
- Some ARIA misuse

### What They Cannot Catch
- Confusing flows
- Poor focus order
- Cognitive overload
- Misleading instructions

Passing an audit ≠ accessible UX.

---

## High-Value Exam Takeaways

- Accessibility improves usability, robustness, and code quality.
- Semantic HTML is the fastest and safest accessibility improvement.
- Focus management is a **state management problem**.
- Automated tools help, but human evaluation is essential.
- Accessibility failures are usually design–engineering integration failures, not isolated bugs.

---

