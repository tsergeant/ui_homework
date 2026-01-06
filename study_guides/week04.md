# Week 4 Study Guide  
## Behavioral Design & Data Modeling (UI/UX)

This glossary and summary covers the **core concepts, vocabulary, and tradeoffs** from Week 4. It is designed for **exam review** and focuses on definitions, distinctions, and design–code connections.

---

## Core Concepts (Big Picture)

**Behavioral Design**  
The practice of designing interfaces that intentionally influence user behavior (e.g., retention, consistency, engagement), often using psychology-informed patterns.

**Design–Code Alignment**  
UX artifacts (flows, habit loops) must be supported by routing logic, data schemas, and UI state management. Poor alignment causes friction and bugs.

---

## User Flows

**User Flow**  
A representation of the steps a user takes to complete a *single goal* within an existing information architecture.

**Key Constraint**  
User flows assume the IA already exists. They do not define navigation structure.

**Happy Path**  
The ideal, error-free sequence of steps to reach success. Always defined first.

**Decision Point**  
A place in a flow where user input or a condition causes branching (e.g., Yes/No).

**Flow vs. State (Critical Distinction)**  
- **Flow**: Movement through steps toward a goal  
- **State**: What the system remembers at a moment in time  

Example:  
Flow = “Log today’s mood”  
State = `loggedToday`, `currentStreak`, `lastMoodType`

**Common Mistakes**  
- Including every error case  
- Inventing screens not in the site map  
- Confusing flows with site maps

---

## Flow Representations

**Flow Diagram**  
Boxes (steps/screens), diamonds (decisions), arrows (direction).  
Best for teaching and early design.

**Wireflow**  
Low-fidelity wireframes connected by arrows.  
Combines layout and flow; harder to maintain.

**Step List**  
Text-only list of actions.  
Lightweight but limited insight.

---

## Routing (Design ↔ Code)

**URL-Based Routing (Web)**  
UI state is determined by the URL (e.g., `/user/:id`).  
Common library: React Router.

**State-Based Routing (Mobile)**  
Navigation state is held in memory (no visible URL bar).  
Common library: React Navigation.

**Stack Navigator**  
Card-like push/pop navigation (mobile).

**Tab Navigator**  
Flat switching between top-level views.

**Deep Linking**  
Mapping a web URL to a specific screen inside a mobile app.

---

## Habit Psychology

**Habit Loop (Duhigg)**  
- Cue (trigger)  
- Routine (action)  
- Reward (benefit)

**Hook Model (Eyal)**  
- Trigger (external or internal)  
- Action (minimal effort behavior)  
- Variable Reward (unpredictability)  
- Investment (user adds value/data)

**Retention**  
A key success metric: how often users return, not how many install.

---

## Translating Psychology to UI

**External Trigger**  
A prompt that initiates behavior (e.g., notification).

**Fogg Behavior Model**  
Behavior = Motivation + Ability + Trigger  
Designers typically improve **Ability**, not Motivation.

**Friction Reduction**  
Making actions easier through fewer steps, clearer defaults, or simpler forms.

**Streak Mechanic**  
A motivational pattern based on loss aversion (users avoid breaking a chain).

**When Streaks Fail**  
Not all behaviors are daily. Episodic behaviors may require alternative metrics.

**Dark Patterns**  
Design choices that manipulate users for engagement at the user’s expense  
(e.g., coercive streaks, hidden opt-outs).

Rule of thumb:  
If only the product benefits, it’s suspicious.

---

## Data Modeling for UX

**Event Data**  
Immutable records of actions (e.g., mood entry, workout log).  
Represents the source of truth.

**Aggregate Data**  
Derived or cached summaries (e.g., current streak, weekly count).  
Optimized for performance.

**Event vs. Aggregate Tradeoff**  
- Events = accurate, flexible, slower to compute  
- Aggregates = fast reads, complex writes

---

## Schema Case Studies

**Streak Counter**
- Calculated approach: derive from logs (simple writes, expensive reads)
- Cached approach: store `current_streak` (complex writes, fast reads)

**ENUM vs. Display Value**
- Store stable ENUMs in the database
- Map to icons/emojis in the UI

---

## Optimistic UI

**Optimistic UI**  
A pattern where the interface updates immediately, before server confirmation.

**Why It Matters**  
Preserves perceived continuity of the user flow and reduces friction.

**Failure Handling**  
If the server fails, revert state and notify the user.

**Common Libraries**
- React Query
- Apollo Client

---

## Key Exam Takeaways

- User flows are **goal-driven**, not structural
- Flow ≠ state
- Behavior design must be ethically bounded
- UX decisions directly affect schema design
- Optimistic UI supports behavioral continuity
- Good UX emerges from aligned flows, state, data, and feedback

