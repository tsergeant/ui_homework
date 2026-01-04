# UI/UX Course Repository

This repository is designed for CS students enrolled in a junior-level UI/UX course. Throughout the semester, you will complete weekly homework assignments that involve producing various UI/UX artifacts and implementing features for a web-based and mobile-based fitness application.

## Repository Structure

### Homework Directories (hw01 - hw15)

The `hwXY` directories (where XY represents the homework number) are where you will place your UI/UX artifacts. These directories are for design documents, wireframes, mockups, user research findings, and other deliverables specified in each assignment.

### Application Directories

Your application development work will be done in two main directories:

- **web/** - Contains the starter code for the web-based fitness application. This is a React + Vite application where you will implement desktop and browser-based UX features.

- **mobile/** - Contains the starter code for the mobile-based fitness application. This is an Expo + React Native application where you will implement mobile-specific UX features.

Both applications consume a shared instructor-provided API and are designed to help you explore platform-specific UX design decisions.

### Directory Map

```
upstream/
├── hw01/              # Homework 1 artifacts
├── hw02/              # Homework 2 artifacts
├── hw03/              # Homework 3 artifacts
├── hw04/              # Homework 4 artifacts
├── hw05/              # Homework 5 artifacts
├── hw06/              # Homework 6 artifacts
├── hw07/              # Homework 7 artifacts
├── hw08/              # Homework 8 artifacts
├── hw09/              # Homework 9 artifacts
├── hw10/              # Homework 10 artifacts
├── hw11/              # Homework 11 artifacts
├── hw12/              # Homework 12 artifacts
├── hw13/              # Homework 13 artifacts
├── hw14/              # Homework 14 artifacts
├── hw15/              # Homework 15 artifacts
├── web/               # Web application (React + Vite)
│   ├── src/
│   ├── public/
│   ├── README.md
│   └── package.json
├── mobile/            # Mobile application (Expo + React Native)
│   ├── screens/
│   ├── components/
│   ├── assets/
│   ├── README.md
│   └── package.json
├── README.md          # This file
└── .gitignore
```

## Getting Started

Before you begin working on assignments, please read the detailed README files in each application directory:

- [Web Application README](web/README.md) - Instructions for setting up and working with the web application
- [Mobile Application README](mobile/README.md) - Instructions for setting up and working with the mobile application

These README files contain important information about:
- Project goals and expectations
- Technology stack requirements
- Setup and installation instructions
- Running the applications
- API usage
- UX expectations and design considerations

## Markdown in Assignments

Many homework assignments will require you to submit documents in Markdown format. Markdown is a simple text formatting syntax that makes it easy to create well-formatted documents. To familiarize yourself with Markdown syntax and learn how to preview your files in Cursor v2, please refer to [USING_MARKDOWN.md](USING_MARKDOWN.md).

## Course Workflow

1. Complete weekly homework assignments and place your artifacts in the corresponding `hwXY` directory
2. Implement features in the web and/or mobile applications based on assignment requirements
3. Make intentional UX design decisions and justify differences between web and mobile implementations
4. Build your fitness application incrementally throughout the course

## Important Notes

- Do not modify the project structure unless explicitly instructed
- Both applications use starter code provided by the instructor
- Focus on UX design and implementation, not backend infrastructure
- The API documentation is available at: https://fitnessapi.sergeantservices.com/docs

