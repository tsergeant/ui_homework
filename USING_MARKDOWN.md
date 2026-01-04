# Using Markdown

Many of your homework assignments will require you to create documents in Markdown format. This guide will help you understand basic Markdown syntax and how to preview your Markdown files in Cursor v2.

## Previewing Markdown in Cursor v2

**Important: Before reading the syntax examples below, open this file in preview mode so you can see how the Markdown is rendered while you learn.**

Cursor v2 has built-in support for previewing Markdown files. Here are several ways to preview your Markdown:

### Method 1: Keyboard Shortcut

1. Open your Markdown file (`.md` extension)
2. Press the keyboard shortcut:
   - **Windows/Linux**: `Ctrl+Shift+V`
   - **macOS**: `Cmd+Shift+V`

This will open a preview pane showing how your Markdown will be rendered.

### Method 2: Preview Button

1. Open your Markdown file
2. Look for the preview icon (magnifying glass or eye icon) in the top-right corner of the editor
3. Click the preview icon to open the preview pane

If you don't see the preview button:

1. Click the three dots menu (⋯) in the top-right corner of the editor
2. Select "Configure Icon Visibility" or similar option
3. Ensure the preview icon is enabled

### Method 3: Command Palette

1. Open your Markdown file
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the command palette
3. Type "Markdown: Open Preview" and select it

### Split View

You can view both the source and preview simultaneously:

1. Open your Markdown file
2. Press `Ctrl+K V` (Windows/Linux) or `Cmd+K V` (macOS) to open a side-by-side preview

**Now that you have the preview open, continue reading below to see the syntax examples rendered in the preview pane.**

## What is Markdown?

Markdown is a lightweight markup language that allows you to format plain text documents using simple syntax. It's widely used for documentation, README files, and writing assignments because it's easy to read and write, and can be converted to HTML or other formats.

## Basic Markdown Syntax

### Headings

Use hash symbols (`#`) to create headings. The number of hashes determines the heading level:

```markdown
# Heading 1 (largest)
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 (smallest)
```

### Text Formatting

- **Bold text**: Use double asterisks or double underscores
  - `**bold text**` or `__bold text__` → **bold text**

- *Italic text*: Use single asterisks or single underscores
  - `*italic text*` or `_italic text_` → *italic text*

- ***Bold and italic***: Combine both
  - `***bold and italic***` → ***bold and italic***

- ~~Strikethrough~~: Use double tildes
  - `~~strikethrough~~` → ~~strikethrough~~

### Lists

**Unordered lists** use hyphens, asterisks, or plus signs:

```markdown
- Item 1
- Item 2
  - Nested item (indent with 2 spaces)
  - Another nested item
- Item 3
```

**Ordered lists** use numbers:

```markdown
1. First item
2. Second item
3. Third item
   1. Nested numbered item
   2. Another nested item
```

### Links

Create links using square brackets for the link text and parentheses for the URL:

```markdown
[Link text](https://example.com)
```

You can also create reference-style links:

```markdown
[Link text][reference]

[reference]: https://example.com
```

### Images

Images use similar syntax to links but with an exclamation mark:

```markdown
![Alt text](path/to/image.png)
![Alt text](https://example.com/image.png)
```

### Code

**Inline code** uses backticks:

```markdown
Use `console.log()` to print to the console.
```

**Code blocks** use triple backticks with optional language specification:

````markdown
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```
````

### Blockquotes

Use the greater-than symbol for blockquotes:

```markdown
> This is a blockquote.
> It can span multiple lines.
>
> You can also have multiple paragraphs.
```

### Horizontal Rules

Create a horizontal line using three or more hyphens, asterisks, or underscores:

```markdown
---
***
___
```

### Tables

Create tables using pipes and hyphens:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
```

### Escaping Characters

To display literal characters that have special meaning in Markdown, use a backslash:

```markdown
\*This is not italic\*
\# This is not a heading
```

## Tips for Writing Markdown

1. **Use consistent formatting**: Stick to one style for lists (hyphens vs asterisks) and headings
2. **Add blank lines**: Separate paragraphs and sections with blank lines for better readability
3. **Preview often**: Use the preview feature to see how your document will look before submitting
4. **Keep it simple**: Markdown is designed to be readable even in its raw form
5. **Test your links**: Make sure all links and images work correctly

## Additional Resources

- [Markdown Guide](https://www.markdownguide.org/) - Comprehensive Markdown reference
- [CommonMark](https://commonmark.org/) - Standardized Markdown specification
- [GitHub Flavored Markdown](https://github.github.com/gfm/) - GitHub's extended Markdown syntax

## Practice

Try creating a simple Markdown file to practice:

1. Create a new file called `test.md`
2. Write a few paragraphs with headings, lists, and formatting
3. Use the preview feature to see how it renders
4. Experiment with different syntax elements

Remember: Many of your homework assignments will require Markdown format, so becoming comfortable with it early will save you time throughout the course.

