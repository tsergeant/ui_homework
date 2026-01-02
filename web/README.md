# Web UX Project (React + Vite)

This repository contains the **web client** for the UX course project.

You will use this application to explore **desktop and browser-based UX design decisions** while consuming a shared instructor-provided API.

The focus of this project is **user experience design and client-side behavior**, not backend infrastructure.

---

## Project Goal

You will design and implement a **web-based personal health application** that:

- Displays fitness tracker data (provided via API)
- Allows additional manually entered data
- Extends beyond raw fitness metrics into:
  - mental health
  - spiritual practices
  - nutrition
  - or another wellness dimension you choose

You are expected to:

- implement UX decisions that come from your design homework assignments
- justify differences between web and mobile UX
- implement features incrementally throughout the course

---

## 🧱 Tech Stack (Fixed)

This project uses:

- **Vite**
- **React**
- **TypeScript**
- **React Router**
- **Fetch API**

You should **not** add:

- backend code
- server-side rendering
- state management frameworks (unless explicitly instructed)
- alternative build tools

---

## Project Structure

At the start of the course, your project looks like this:

web/
index.html
src/
main.tsx # Application entry point
App.tsx # Top-level routing
pages/
components/
api/
auth/
package.json
tsconfig.json
vite.config.ts

Do not restructure the project unless instructed.

---

## Running the App (IMPORTANT)

### Install dependencies

From the project root:

npm install

---

### Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

You should see a simple **placeholder page**.

---

## What You Should See

When the project is working correctly, the browser should display:

Web App Placeholder

This confirms:

- Vite is running
- React is rendering
- TypeScript is compiling
- Routing is working

Do **not** start adding features until this works.

---

## API Usage

This project consumes a shared instructor-provided API.

All API calls should go through:

src/api/client.ts

Do **not** scatter `fetch()` calls throughout your components.

This keeps the project maintainable and consistent with the mobile app.

---

## UX Expectations

You are expected to consider:

- larger screen sizes
- information density
- keyboard and mouse interaction
- accessibility (contrast, focus, semantics)
- differences from mobile UX

The web app should **not** simply mirror the mobile app.

---

## Cursor Usage Rules

You may use **Cursor** to assist with development, but:

- Cursor may help write **components and pages**
- Cursor should **not** change build tooling
- Cursor should **not** introduce new frameworks
- Cursor should **not** add backend or server logic

If Cursor suggests major architectural changes, **do not apply them**.

---

## Mental Model

> The web app is a **desktop-oriented UX client**, not a system.

Focus on:

- clarity
- usability
- layout
- interaction design

Not on:

- infrastructure
- premature optimization
- unnecessary libraries

---

## Summary Checklist

Before moving on, you should be able to say:

- I can run the app with npm run dev
- I see the placeholder page in my browser
- I understand how this differs from the mobile app

If all of the above are true, you are ready to proceed.
