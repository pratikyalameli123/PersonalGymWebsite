# Personal Gym Website

A lightweight, mobile-first personal workout tracker that runs locally in the browser with `localStorage` persistence—no backend or build step required.

## Features

- **Flexible Workout Split (1–7 Plans)**: Starts with Push, Pull, Legs, and Upper (all renameable and reorderable in Settings, with up to 7 workout plans), configurable target pace clock, `+ Add set` mid-workout, automatic rest timer (with sound & haptics), and double-progression weight/rep suggestions.
- **Personal Records & Progress**: Automatic PR detection with confetti celebration, per-exercise top-set weight and volume charts, 12-week total volume bar chart, and bodyweight tracking.
- **Tomorrow's Review / Plan**: Post-workout review box to note what to try or change next session, surfaced right on the Home screen.
- **Calendar & History**: Interactive monthly calendar showing workout days—click any date to inspect or delete workouts, search across exercises/workouts/notes, and export monthly CSVs.
- **Custom Plan & Image Uploads**: Edit exercise names, form cues, sets, rep ranges, rest times, and upload custom exercise images stored in IndexedDB.
- **Theme & Backup**: Auto/Light/Dark theme toggle, plus full JSON backup and restore (including custom images).

## Install as a Mobile App (PWA)

Once hosted over HTTPS (e.g., GitHub Pages, Cloudflare Pages, or Netlify), open the site on your phone and tap **Install app** (Android Chrome) or **Share → Add to Home Screen** (iOS Safari). The service worker (`sw.js`) caches the app shell so it works offline.

## Running Locally

Open `index.html` directly in your browser, or serve the folder with any static server:

```bash
python -m http.server 8000
```
