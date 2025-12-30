# TODO.md

This document lists the features and improvements that are yet to be implemented, based on the `REQUIREMENTS.md` document.

## High Priority

*   [ ] **Full Time Logic:** The simulation does not currently stop at 90 minutes.
*   [ ] **Goals:** Implement goal detection and scoring logic. The current simulation has no win condition.
*   [ ] **Training & Season Mode:** The entire training and season mode is missing. This is a major feature that will require significant work.
*   [ ] **Formation Editor:** The formation editor is not implemented. The current formation is hard-coded.
*   [ ] **Coach AI:** The coach's logic is very basic. It needs to be expanded to include formation changes and tactical adjustments.

## Medium Priority

*   [ ] **Player Fatigue:** The `fatigue` property is not fully implemented. It should affect player performance.
*   [ ] **ATP/Glycogen Pools:** The cellular level of the hierarchy is not modeled.
*   [ ] **Passing & Shooting:** The current possession resolution is very basic. A more sophisticated passing and shooting model is needed.
*   [ ] **Observability:** The debug overlay and charting features are missing. These are essential for validating the model.

## Low Priority

*   [ ] **Extensible Roles:** The current roles are hard-coded. A system for creating custom roles should be implemented.
*   [ ] **Seedable Randomness:** The simulation is not currently deterministic.
*   [ ] **UI Improvements:** The UI is functional but could be improved with better styling and more information.
*   [ ] **Code Organization:** As the project grows, the code should be split into multiple files and organized using ES6 modules.
*   [ ] **Pitch Markings:** The pitch markings are not fully implemented. They are currently just for decoration.
