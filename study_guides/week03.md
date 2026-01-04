# Week 3 Study Guide: Information Architecture (IA) & Navigation

## Big Picture (What to Remember)
- **IA is the structure of information**: what exists, how it’s grouped, what it’s called, and how users move through it.
- **Navigation is the movement system**: the rules and mechanisms that help users get around.
- **User success depends on findability**: if users can’t find what they need, the UX fails even with great visuals.

---

## Core Concepts (Exam-Level Summary)

### IA vs UX
- **UX**: the overall experience of using a product (how it feels, how well it works).
- **IA**: the invisible skeleton under UX (structure, grouping, labels, movement).
- Key idea: **Good visuals can’t rescue bad IA.**

### Mental Models vs System Models
- **Mental model**: how *users* expect the product to work.
- **System model**: how the product is structured internally (developer/engineering view).
- Goal of IA: **align system structure to user expectations** (or provide an understandable bridge).
- Symptoms of mismatch:
  - “Why is this in Settings?”
  - “I didn’t expect that to be here.”
  - “I can’t find anything.”

### IA Organization Systems
- **Hierarchical**: categories → subcategories (like folders). Most common.
- **Sequential**: step-by-step progression (wizards, onboarding, checkout).
- **Matrix**: multiple dimensions (tags, filters, facets). Powerful but cognitively heavier.
- Real apps often **mix** these.

### Labels as a “Human API”
- Labels are like **method names for humans**: they set expectations.
- Good labels are:
  - Predictable
  - User-facing
  - Consistent
- Bad labels are vague or internal (engineering terms).

### Depth vs Breadth (Structure Tradeoff)
- **Breadth**: more options visible at once (flatter structure).
  - Risk: decision overload (Hick’s Law).
- **Depth**: fewer options with drill-down (deeper structure).
  - Risk: users get lost / more backtracking.
- Rule of thumb:
  - **Mobile** prefers flatter structures.
  - **Web** can tolerate deeper structures.

---

## Artifacts (Know What Each One Does)

### Site Map
- A diagram of **what exists** and **where it lives** in a hierarchy.
- Shows:
  - Screens/pages
  - Groupings/categories
  - Parent–child relationships
- Purpose: **structure and coverage** (what’s missing? what’s duplicated?).

### User Flow
- A diagram of **how a user completes a goal** through steps/screens.
- Cuts across the hierarchy.
- Purpose: **find friction** (unnecessary steps, dead ends, missing screens).

### Navigation Artifact
- Documents the **rules and mechanisms of movement**.
- Includes:
  - Navigation zones (global, local, utility, contextual)
  - Item names (exact labels)
  - Destinations
  - Visibility rules (always shown vs conditional)
- Purpose: **define how users move**, not what the screens look like.

---

## Site Maps vs User Flows (Compare)
- **Site map**: territory (structure).
- **User flow**: routes through territory (tasks).
- Typical loop:
  1. Draft site map
  2. Sketch key flows
  3. Discover problems
  4. Revise site map + flows

---

## Navigation: What It Must Always Answer
Navigation should help users answer:
1. **Where am I?**
2. **Where can I go?**
3. **Where have I been?**

---

## Hick’s Law (Decision Cost)
- The more choices a user has, the longer it takes to decide.
- UX implications:
  - Avoid overloaded menus
  - Group options
  - Use progressive disclosure (“Show more…”)
- Note: it’s about **decision complexity**, not just option count.

---

## Common Failure Modes (Recognize These)
- **Junk-drawer Settings**: everything dumped into Settings.
- **Duplicate paths**: same destination reachable via multiple labels.
- **Context-dependent labels**: labels change meaning depending on where you are.
- **Over-nesting**: too many levels deep.
- **Over-broad menus**: too many top-level items.

---

## Navigation Patterns (Mobile vs Web)

### Mobile Patterns
- **Bottom tab bar**: best for top-level sections; usually **3–5 items**.
- **Hamburger menu**: saves space but lower engagement (“out of sight, out of mind”).
- **Back stack (LIFO)**: screens are pushed/popped (stack behavior).

### Web Patterns
- **Global top navigation**: consistent across pages.
- **Sidebar**: common for dashboards/data-heavy apps.
- **Breadcrumbs**: shows location/path (e.g., Home > Settings > Profile).

---

## Glossary (Key Terms)
- **Information Architecture (IA)**: organizing information so users can find and understand it.
- **Findability**: how easily users can locate what they need.
- **Mental Model**: user’s expectation of how the system works.
- **System Model**: internal structure/implementation logic.
- **Hierarchy**: parent–child structure of information.
- **Site Map**: hierarchical map of screens/pages and groupings.
- **User Flow**: task-focused path a user takes to complete a goal.
- **Navigation Artifact**: documentation of navigation mechanisms, labels, destinations, and rules.
- **Global Navigation**: persistent primary navigation (top-level).
- **Local Navigation**: navigation within a section.
- **Utility Navigation**: login, profile, help, settings.
- **Contextual Navigation**: in-page links, tabs, related items.
- **Hick’s Law**: more choices → slower decisions.
- **Progressive Disclosure**: show essentials first; reveal more when needed.
- **Depth**: number of hierarchy levels.
- **Breadth**: number of options at a given level.

---

## Fast “If You Remember Only 5 Things…”
1. **IA = structure + labels + navigation supporting findability.**
2. **Mental model mismatch causes most IA failures.**
3. **Site maps show what exists; flows show how goals happen.**
4. **Navigation must answer: where am I / where can I go / where have I been.**
5. **Breadth vs depth is a tradeoff; Hick’s Law punishes overloaded menus.**

