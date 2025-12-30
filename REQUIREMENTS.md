# REQUIREMENTS.md
Odum Soccer: Maximum Empower Football Simulation
1. Purpose & Scope

This application is a production-quality simulation game inspired by early Football Manager, designed to demonstrate Howard T. Odum’s Maximum Empower Principle applied to elite sport.

The game must:

*   Explicitly model hierarchical energy flows
*   Demonstrate Maximum Power vs Maximum Empower tradeoffs
*   Operate across multiple interacting scales
*   Be visually intelligible and interactive
*   Be deterministic enough for analysis, yet stochastic enough to resemble sport

This is **not** a physics-based soccer simulator. It is a systems ecology simulator expressed through football.

2. Core Theoretical Requirements (Non-Negotiable)
2.1 Governing Principle

The system must **maximise empower** (emergy per unit time), not raw energy or power.

This must be true at:

*   Player level
*   Team level
*   Match level
*   Season level

2.2 Hierarchical Scales (Must all be present)

The model must explicitly represent and couple the following levels:

| Level | Description | Examples |
|---|---|---|
| Environment | External constraints | Temperature, altitude, pitch condition |
| Organism | Whole-player allocation | Cardio vs anaerobic capacity |
| Muscle groups | Functional specialization | Sprint vs endurance fibres |
| Cellular | ATP / glycogen pools | Recovery, depletion |
| Control systems | Neural & hormonal | Fatigue suppression, pacing |
| Information | Skill, tactics, technique | Decision quality |

MPP must operate **across** these levels, not inside a single layer.

3. Simulation Architecture
3.1 Time Model

*   Continuous internal timestep
*   Rendered in real time
*   User-adjustable simulation speed
*   Match duration:
    *   90 minutes regulation
    *   Optional extra time
*   Simulation must auto-stop at full time
*   Explicit Start / Pause / Resume / Reset controls

3.2 Spatial Model (Pitch)
*   **Pitch Orientation**
    *   Horizontal layout
    *   Goals at left and right ends
*   **Pitch Markings (Required)**
    *   Touchlines
    *   Halfway line
    *   Centre circle
    *   Penalty boxes
    *   Goal boxes
    *   Goals (physical entities with scoring logic)

Pitch markings are control geometry, not decoration.

4. Agents & Hierarchy
4.1 Ball (Lowest Quality Energy)

*   Moves via momentum and dissipation
*   No decision logic
*   Receives impulses from players

4.2 Player Agent

Each player must have:

*   **Metabolic Variables**
    *   Instantaneous power (J/s proxy)
    *   Fatigue
    *   ATP / glycogen pools
    *   Recovery rate
*   **Transformity**
    *   Skill
    *   Technique
    *   Decision quality
    *   Experience
*   **Derived**
    *   Empower = power × transformity

*   **Behavioural Rules**
    *   Players do not always chase the ball
    *   Ball-chasing is:
        *   Role-dependent
        *   Phase-dependent
        *   Empower-gated

4.3 Role Layer (Mid-level Control)

Roles must include:

*   Goalkeeper
*   Defender
*   Midfielder
*   Forward
*   (Extensible)

Each role defines:

*   Spatial anchor zones
*   Press permissions
*   Default movement logic
*   Energy expenditure profile

4.4 Coach (Highest-Transformity Agent)

The coach must exist as an explicit agent, not a parameter set.

*   **Coach responsibilities:**
    *   Sets formation
    *   Sets tactical phase (attack / defend / transition)
    *   Suppresses local power-maximising behaviour
    *   Trades short-term power for long-term empower
*   **Coach has:**
    *   Very high transformity
    *   No physical power
    *   Pure informational control

5. Team-Level Systems
5.1 Formation Editor (Required)

*   Visual editor
*   Drag-and-drop role anchors
*   Save / load formations
*   Formation influences:
    *   Spatial constraints
    *   Press triggers
    *   Energy expenditure

5.2 Team Panels (UI)

*   Left panel: Team A
*   Right panel: Team B
*   Must show real-time updating:
    *   Player list
    *   Role
    *   Power
    *   Transformity
    *   Empower
    *   Fatigue
    *   Status (pressing / holding / recovering)

This is live emergy accounting.

6. Match Logic
6.1 Possession Resolution

*   Possession probability ∝ **empower**
*   Not distance alone
*   Not power alone

6.2 Passing & Shooting

*   High-transformity players:
    *   Pass earlier
    *   Waste less energy
*   Low-transformity players:
    *   Hold ball longer
    *   Lose power faster

6.3 Goals

*   Explicit goal objects
*   Ball crossing goal plane triggers scoring
*   Scoreboard updates immediately

7. Training & Season Mode (Required)
7.1 Training

Between matches, the user must allocate training effort into:

*   Power (conditioning)
*   Transformity (skill / technique)
*   Recovery efficiency

Training tradeoffs:

*   Power gains reduce recovery speed
*   Transformity gains increase empower without increasing fatigue
*   Overtraining causes long-term decline

7.2 Season Simulation

*   Multiple matches
*   Accumulated fatigue
*   Long-term adaptation
*   Injuries as regime shifts
*   Player development curves

8. Controls & UX
*   **Required Controls**
    *   Start
    *   Pause
    *   Resume
    *   Reset
    *   Speed slider
*   **Visual Requirements**
    *   Clear differentiation between teams
    *   Visible ball at all times
    *   No overlapping UI and pitch
    *   Responsive layout

9. Technical Constraints
9.1 Stack

*   HTML / CSS / JavaScript only
*   Web Components (Custom Elements)
*   **No third-party libraries**
*   Single-page application

9.2 Determinism

*   Seedable randomness
*   Reproducible simulations for analysis

10. Observability & Analysis (Essential for Validation)

**Note:** While not part of the initial feature request, the following are essential for validating the model's adherence to Odum's principles.

*   **Required Additions**
    *   Ability to pause and inspect state
*   **Optional charts:**
    *   Team empower over time
    *   Power vs transformity trajectories
*   **Debug overlay for:**
    *   Active hierarchy layer
    *   Coach phase
    *   Press permissions

Without this, the model cannot be validated.

11. Explicit Non-Goals

*   Photorealistic animation
*   Full FIFA rules
*   Exact biomechanics
*   Multiplayer networking (for now)

12. Validation Criteria

The model is correct only if:

*   Players do not swarm the ball
*   Structure persists under fatigue
*   Late-game dominance shifts to high-transformity teams
*   Teams with lower raw power but better hierarchy win
*   Removing the coach collapses structure into chaos
