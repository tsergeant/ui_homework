# Mobile UX Project (Expo + React Native)

This repository contains the **mobile client** for the UX course project.

You will use this app to explore **mobile-specific UX design decisions** while consuming a shared instructor-provided API.

The goal is **not** to learn mobile infrastructure or native tooling, but to practice **designing and implementing good mobile user experiences**.

---

## Project Goal

You will design and implement a **mobile personal health application** that:

- Uses fitness tracker data (provided via API)
- Allows additional manually entered data
- Extends beyond raw fitness metrics into:
  - mental health
  - spiritual practices
  - nutrition
  - or another wellness dimension you choose

You are expected to:
- make **intentional UX decisions**
- justify differences between **mobile and web UX**
- implement features incrementally as the course progresses

---

## Tech Stack (Fixed)

This project uses:

- **Expo (managed workflow)**
- **React Native**
- **TypeScript**
- **Expo Go** (for running the app on your phone)

You should **not** add:
- native code
- backend logic
- custom build steps
- state management libraries (unless explicitly instructed)

---

## The Provided API
- The provided API can be accessed here: https://fitnessapi.sergeantservices.com
- Visit https://fitnessapi.sergeantservices.com/docs to see the provided documentation.


## Project Structure

At the start of the course, your project looks like this:

mobile/
  App.tsx          # Application entry point
  assets/          # Images and icons
  package.json
  tsconfig.json

As the course progresses, you will add folders for:
- screens
- components
- API helpers

Do **not** restructure the project unless instructed.

---

## Installing Dependencies (IMPORTANT)

When adding new packages to this Expo project, you **must** use the correct installation method:

### For Native Modules and Expo Packages

**Always use `npx expo install`** for:
- Native React Native modules (packages with `react-native-` prefix that require native code)
- Expo packages (packages with `expo-` prefix)

Examples:
```bash
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-navigation/native @react-navigation/native-stack
```

**Why?** `npx expo install` ensures packages are compatible with your Expo SDK version. Using `npm install` for native modules can cause version mismatches and errors like "String cannot be cast to Boolean" on Android.

### For Pure JavaScript Packages

You can use `npm install` for:
- Pure JavaScript packages (no native code)
- Dev dependencies that don't interact with native code

Examples:
```bash
npm install axios
npm install --save-dev @types/node
```

### If You Get Installation Errors

If you encounter errors after installing packages:

1. **For native modules:** Reinstall using `npx expo install`:
   ```bash
   npx expo install <package-name>
   ```

2. **Clear cache and restart:**
   ```bash
   npx expo start --clear
   ```

---

## Running the App (IMPORTANT)

### Use the correct terminal

**On Windows:**
- Use **PowerShell** or **Windows Terminal**
- **Do NOT use Git Bash** (Expo will not behave correctly)

---

### Start the Expo development server

From the project root:

npm start

or equivalently:

npx expo start

You should see:
- a QR code
- an interactive menu in the terminal

---

### Run the app on your phone

1. Install **Expo Go** from the App Store / Play Store
2. Open Expo Go
3. Scan the QR code shown in the terminal

The app will load on your phone.

---

### If the app doesn’t update or gets stuck

This happens sometimes.

Try these steps **in order**:

1. Press **r** in the Expo terminal to force a reload
2. If that fails:
   Ctrl + C
   npx expo start --clear
3. Scan the new QR code

---

## What You Should See

When the project is working correctly, you should see a **simple placeholder screen** on your phone.

This confirms:
- Expo is running
- Your phone is connected correctly
- React Native rendering works

Do **not** start adding features until this works.

---

## Web Preview vs Mobile App (Important)

Expo can also run your app in a **web browser**.

However:

- The **browser view is NOT the mobile app**
- Always validate your UI in **Expo Go on your phone**
- The browser preview is optional and secondary

---

## UX Expectations

You are expected to think about:

- thumb reach
- screen size constraints
- reduced information density
- gesture-based interactions
- differences from desktop/web UX

Mobile UX should **not** be a copy of the web app.

---

## Cursor Usage Rules

You may use **Cursor** to assist with development, but:

- Cursor should help you write **screens and components**
- Cursor should **not** restructure the project
- Cursor should **not** introduce new frameworks
- Cursor should **not** modify build or Expo configuration

If Cursor suggests major architectural changes, **do not apply them**.

---

## Mental Model

This mobile app is a **UX client**, not a system.

Focus on:
- clarity
- usability
- intentional design decisions

Not on:
- complex infrastructure
- premature optimization
- unnecessary libraries

---

## Summary Checklist

Before moving on, you should be able to say:

- I can run the app with npm start
- I can open it in Expo Go
- I understand how to reload if it gets stuck
- I know this project is about UX, not tooling

If all of the above are true, you are ready to proceed.
