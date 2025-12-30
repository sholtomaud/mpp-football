# AGENTS.md

This document provides specific instructions for AI agents (like Jules) working on the Odum Soccer codebase.

## 1. Core Principle: Vanilla Stack

This project is a deliberate exercise in building a complex simulation using **only vanilla web technologies**. The goal is to demonstrate what is possible without third-party frameworks or libraries.

**This is a non-negotiable constraint.**

## 2. Technical Stack Rules

### 2.1. JavaScript:

*   **Allowed:** ES6+ features, including Classes, Modules, and Web Components (Custom Elements).
*   **Forbidden:**
    *   **No Frameworks:** Absolutely no React, Vue, Angular, Svelte, or any other UI framework.
    *   **No Libraries:** No utility libraries like Lodash, jQuery, or Ramda. All helper functions must be written from scratch.
    *   **No Build Tools:** No transpilers (Babel), bundlers (Webpack, Rollup), or minifiers. The code must run directly in a modern browser.

### 2.2. HTML:

*   Must be semantic and well-structured.
*   The application must be a Single-Page Application (SPA) contained within `football.html`.

### 2.3. CSS:

*   **Allowed:** Plain CSS, CSS Variables.
*   **Forbidden:** Pre-processors like Sass or Less.

## 3. Code Organization

*   All JavaScript code must be contained within `<script>` tags in `football.html`.
*   As the codebase grows, we may move to ES6 modules, but the "no build tools" rule will still apply.

## 4. Development Process

1.  **Understand the Requirements:** Before writing any code, thoroughly review `REQUIREMENTS.md`. The simulation's logic is complex and derived from specific ecological principles.
2.  **Adhere to the Stack:** At every step, ensure your proposed changes do not introduce any forbidden technologies.
3.  **Verify in Browser:** Since there is no build step, all changes must be tested by directly opening and interacting with `football.html` in a browser.

## 5. Rationale

The "vanilla" constraint is not arbitrary. It serves two purposes:

1.  **Educational:** To demonstrate the power and capability of modern web standards.
2.  **Performance:** To ensure the simulation is as lightweight and performant as possible, with no external dependencies.

Any agent working on this project must respect and uphold these constraints. If a task seems to require a third-party library, the agent's responsibility is to find a way to implement the required functionality using only vanilla JS, HTML, and CSS.
