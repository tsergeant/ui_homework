# Week 5 Study Guide  
## Low-Fidelity Prototyping & Functional Logic

---

## High-Level Summary

Week 5 focuses on **proving interaction logic before visual polish**.  
Low-fidelity (low-fi) design is the UX equivalent of pseudo-code: it verifies *correctness of flow* rather than aesthetics. Students learn to design **tasks, states, and logic** first, using paper prototypes, wireframes, and “ugly” functional code to surface UX bugs early—when they are cheapest to fix.

---

## Core Principles (Exam-Relevant)

- **Low-Fi proves correctness, not beauty**
- **Tasks come before screens**
- **States matter more than layouts**
- **Structure before styling**
- **UX logic must map cleanly to code logic**

---

## Glossary of Key Terms

### Low-Fidelity (Low-Fi) Design
A rough, non-polished representation of an interface that focuses on structure, flow, and logic rather than visual appearance.

---

### Pseudo-Code of Design
An analogy describing low-fi design as a way to validate interaction logic before investing in detailed UI work, similar to writing pseudo-code before optimized code.

---

### Sunk Cost Trap
The tendency to resist changing a design because significant time was already spent polishing it. Low-fi avoids this by keeping designs cheap and disposable.

---

### Task-Centered Design
A design approach that starts by defining **what the user is trying to accomplish**, before designing screens or UI elements.

---

### Happy Path
The ideal sequence of steps where everything goes right and the user completes their goal successfully.

---

### Failure Path
Any path where something goes wrong (invalid input, server error, cancellation), requiring the UI to respond appropriately.

---

### Paper Prototyping
A low-fi testing technique using paper sketches to simulate screens and interactions.

---

### Wizard of Oz Technique
A testing method where a human simulates system responses during a prototype test, giving the illusion of a working system.

---

### Screen State
A specific condition of a screen at a moment in time (e.g., loading, error, success). UX design must account for all relevant states, not just the “main” screen.

---

### Common Screen States
- Empty state
- Loading state
- Success state
- Error state
- Disabled / partial state

---

### Wireframe
A digital, low-fi schematic of an interface that specifies structure and behavior without visual styling.

---

### Gray Box Rule
A wireframing rule: use grayscale only, placeholder boxes for images, and generic text to avoid premature visual decisions.

---

### Annotation (Wireframes)
Text notes attached to wireframes that explain behavior, data requirements, sorting logic, triggers, or edge cases—primarily for developers.

---

### Fidelity Spectrum
Levels of design detail:
- **Sketch** – messy ideation
- **Wireframe** – clean structure
- **Prototype** – interactive flow

---

### Semantic HTML
Using HTML elements according to their meaning (e.g., `<form>`, `<label>`, `<input>`), not just their appearance.

---

### Controlled Component
In React, a form input whose value is stored in component state rather than directly in the DOM.

---

### Client-Side Validation
Immediate checks performed in the browser (e.g., format validation) to improve usability.

---

### Server-Side Validation
Security-critical checks performed on the backend (e.g., uniqueness, authorization).

---

### onBlur Validation
Triggering validation when a user leaves a field, rather than while they are typing. Preferred for better UX.

---

### Anti-Pattern: Silent Failure
A UX failure where an action appears to succeed but provides no feedback when it actually fails, eroding user trust.

---

## Key Exam Takeaways

- Low-fi design is about **logic and flow**, not visuals
- Every logical step implies a **visible UI state**
- Paper prototypes are a form of **usability testing**
- Wireframes act as **contracts between design and code**
- “Ugly” functional code is a feature, not a flaw, at this stage
- If you can’t explain your app with paper and plain HTML, the design isn’t ready

---

## One-Sentence Rule to Remember

> *If the logic exists, the UI must represent it—and the user must see it.*

---

