# TODO.md

This document breaks down the features from `REQUIREMENTS.md` into actionable tasks. It is a living document that should be updated as the project progresses.

## ⚽️ Match Logic & Simulation Core

### Core Gameplay Loop
- [ ] **Game Clock:** Implement a 90-minute match clock that stops the simulation automatically.
- [ ] **Extra Time:** Add logic for optional extra time.
- [ ] **Goal Logic:** Define goal areas and implement ball-crossing-line detection.
- [ ] **Scoring System:** Update the scoreboard UI when a goal is scored.
- [ ] **Possession Model:** Refine possession resolution to be more dependent on player `empower` rather than just proximity.
- [ ] **Passing & Shooting:**
    - [ ] Differentiate passing and shooting actions.
    - [ ] Model behavioral differences between high-transformity and low-transformity players (e.g., passing earlier vs. holding the ball).

### Player Agent Enhancements
- [ ] **Detailed Player Attributes:** Break down `transformity` into sub-attributes: `Skill`, `Technique`, `Decision Quality`, `Experience`.
- [ ] **Comprehensive Metabolic Model:**
    - [ ] Implement `Fatigue` to dynamically reduce player `power` and `decision quality`.
    - [ ] Model `ATP / glycogen pools` for short-term energy bursts and recovery.
    - [ ] Add a `Recovery Rate` attribute for each player.
- [ ] **Sophisticated Behavior Rules:**
    - [ ] Implement "Empower-gated" ball-chasing logic, where players only press if they have sufficient `empower`.
    - [ ] Define player `Status` (e.g., pressing, holding, recovering) and display it on the UI.

### Coach & Team AI
- [ ] **Advanced Coach AI:**
    - [ ] Expand coach tactical phases to include `transition`.
    - [ ] Implement logic for the coach to suppress locally power-maximizing (but globally inefficient) behaviors.
    - [ ] Model the coach's ability to trade short-term power for long-term empower.
- [ ] **Extensible Role System:**
    - [ ] Refactor roles to be data-driven and extensible, rather than hard-coded.
    - [ ] Define a specific `Energy expenditure profile` for each role.

## hierarchical Model Implementation
- [ ] **Environment Layer:** Model external factors like `temperature`, `altitude`, and `pitch condition` that affect player fatigue and power.
- [ ] **Organism Layer:** Implement distinct `cardio` vs `anaerobic` capacities for players.
- [ ] **Muscle Group Layer:** Model the difference between `sprint` and `endurance` muscle fibres.
- [ ] **Cellular Layer:** This is covered by the `ATP / glycogen pools` task.
- [ ] **Control Systems Layer:** Model `fatigue suppression` and `pacing` as part of the coach/player AI.

## 📅 Season & Training Mode

- [ ] **Training System:**
    - [ ] Create a UI for allocating training effort between matches.
    - [ ] Implement training focus areas: `Power (conditioning)`, `Transformity (skill)`, `Recovery efficiency`.
    - [ ] Model training trade-offs (e.g., power gains reducing recovery speed).
    - [ ] Add a mechanism for overtraining to cause a long-term decline in performance.
- [ ] **Season Simulation:**
    - [ ] Build a simple season structure with a schedule of matches.
    - [ ] Model long-term accumulated fatigue across a season.
    - [ ] Implement player development curves and long-term adaptation.
    - [ ] Model `injuries` as significant "regime shifts" in player status.

## 🖥️ UI & UX

### Controls & Interactivity
- [ ] **Formation Editor:**
    - [ ] Build a visual, drag-and-drop interface for setting player formations.
    - [ ] Allow formations to be saved and loaded.
    - [ ] Link formation choices to player spatial constraints and press triggers.
- [ ] **Complete Controls:** Add the missing `Reset` button to the simulation controls.
- [ ] **Responsive Layout:** Ensure the application layout adapts gracefully to different screen sizes.

### Observability & Debugging
- [ ] **State Inspection:** Add a feature to pause the simulation and inspect the detailed state of any player.
- [ ] **Data Visualization:**
    - [ ] Create charts to plot team `empower` over time.
    - [ ] Develop charts to show player `power` vs `transformity` trajectories.
- [ ] **Debug Overlay:**
    - [ ] Create an optional overlay to visualize the active `hierarchy layer` being modeled.
    - [ ] Display the current `coach phase` and active `press permissions` on the overlay.

## ⚙️ Technical & Architectural

- [ ] **Determinism:** Implement seedable randomness to ensure simulations can be reproduced for analysis.
- [ ] **Code Organization:** As the codebase grows, refactor the JavaScript into separate files using ES6 Modules.
- [ ] **Pitch Geometry:** Implement pitch markings (penalty boxes, center circle) as actual control geometry that influences player behavior, not just as decoration.
- [ ] **GitHub Actions Deployment:** Set up a GitHub Actions workflow to automatically deploy the application to GitHub Pages.
- [ ] **Continuous Integration:** Add a testing step to the GitHub Actions workflow to run automated tests on every push.
