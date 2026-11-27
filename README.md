# Personal Gym Website

A lightweight, mobile-first personal workout tracker that runs locally in the browser with `localStorage` persistence—no backend or build step required.

## Features

- **4-Day Workout Split**: Push, Pull, Legs, and Upper workouts with a 35-minute target pace clock, automatic rest timer (with sound & haptics), and double-progression weight/rep suggestions.
- **Personal Records & Progress**: Automatic PR detection, per-exercise top-set weight and volume charts, 12-week total volume bar chart, and bodyweight tracking.
- **Calendar & History**: Interactive monthly calendar showing workout days—click any date to inspect the workouts, sets, reps, weights, PRs, notes, and bodyweight logged that day, plus monthly CSV export.
- **Custom Plan & Image Uploads**: Edit exercise names, sets, rep ranges, rest times, and upload custom exercise images (automatically resized/compressed for local storage).
- **Backup & Restore**: Export and import all workout history, bodyweight logs, settings, and custom plans as JSON.

## Running Locally

Open `index.html` directly in your browser, or serve the folder with any static server:

```bash
python -m http.server 8000
```
