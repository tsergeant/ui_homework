# Week 7 Study Guide: Data Visualization & Dashboards

This guide summarizes key concepts, terms, and principles from Week 7.  
It is intended as an **exam review reference**, not a replacement for the full lecture notes.

---

## Core Ideas (High-Level Summary)

- Data visualization reduces **cognitive load** by converting raw data into visual forms the brain processes quickly.
- A visualization is an **argument**, not a neutral picture—it emphasizes some relationships and hides others.
- Good dashboards communicate **status and insight within seconds**, not minutes.
- Poor visualization is not just unattractive; it can be **misleading or unethical**, especially when users rely on it for decisions.

---

## Key Principles

### Cognitive Load
The amount of mental effort required to process information.  
Visualization reduces cognitive load by leveraging pre-attentive visual processing.

### Pre-Attentive Attributes
Visual features processed instantly by the human brain:
- Position
- Length
- Color
- Shape

### Data-Ink Ratio
A concept popularized by **:contentReference[oaicite:0]{index=0}**.
- Definition:  
  Data-Ink / Total Ink Used
- Goal:  
  Maximize ink devoted to actual data; remove decorative or redundant elements.
- Analogy for CS majors:  
  Visual decoration is technical debt.

### Lying with Data
Ways visualizations can mislead:
- Truncated axes
- Inconsistent scales
- Selective time ranges
Always verify axes, units, and time windows.

---

## Choosing the Right Chart

### Bar Chart
- Best for: Comparison and ranking
- Strength: Humans compare lengths accurately

### Line Chart
- Best for: Trends over time
- Implies continuity between points

### Stacked Bar / Donut Chart
- Best for: Part-to-whole relationships
- Limitation: Avoid too many segments (especially pies)

### Scatter Plot
- Best for: Correlation between two variables
- Reveals clusters and outliers

---

## Visual Encoding Accuracy

Not all visual encodings are equally effective.

From most accurate to least accurate:
1. Position on a common scale
2. Length
3. Angle / Area
4. Color / Shape

**Rule**:  
If color alone carries the meaning, the visualization is fragile.

---

## Color in Data Visualization

### Sequential Palettes
- Light → Dark
- Use for ordered numeric values

### Categorical Palettes
- Distinct hues
- Use for separate groups or categories

### Diverging Palettes
- Two contrasting colors with a neutral midpoint
- Use for positive vs negative deviations

### Accessibility
- Color alone is insufficient
- Combine color with labels, icons, or position
- Red/Green alone is a common failure mode

---

## Data Integrity & Trust

### Honest Aggregation
- Averages hide variability
- Variance often matters as much as the mean

### Missing Data
- Missing ≠ zero
- Absence of data must be handled explicitly

### Temporal Deception
- Changing time windows can reverse conclusions
- Time spans must be clear and consistent

**UX Principle**:  
Misleading visualization is a design failure, not just a math error.

---

## Dashboard Design Patterns

### F-Pattern Scanning
- Users scan dashboards in an F-shaped pattern
- Top-left content receives the most attention

### 5-Second Rule
Within 5 seconds, users should know:
- Am I doing well?
- Am I behind?
- Do I need to act?

### Granularity Strategy
Dashboards should layer information:
- Overview: Key metrics (KPIs)
- Context: Trends
- Detail: Logs or tables

### Wall of Widgets (Anti-Pattern)
- Too many charts dilute insight
- A dashboard should answer one primary question

---

## Interaction in Dashboards

### Common Interactions
- Hover/Tap: Tooltips
- Click: Filtering
- Brush: Zooming or time-range selection

### Progressive Disclosure
- Show simple summaries first
- Reveal detail only on interaction

### Mobile Constraints
- Pixel-precise interactions fail on touch
- Favor aggregates and glanceable visuals

---

## Implementation Considerations (CS Focus)

### Performance
- Aggregate large datasets server-side
- Avoid rendering excessive SVG points

### State Management
- Charts are stateful UI components
- Filters, ranges, and selections require careful design

### Testing
- Snapshot tests catch visual regressions
- Manual testing is required for perception issues

---

## Exam-Oriented Takeaways

- Visualization choices influence interpretation.
- Chart selection must match the question being asked.
- Color supports meaning; it should not carry meaning alone.
- Dashboards are decision tools, not data dumps.
- Ethical visualization is part of responsible UX design.

