/* ============================================================
   INLINE SVG ICON & WEB APP MANIFEST
   ============================================================ */
(function () {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="#141414"/><g stroke="#FAFAF9" stroke-width="28" stroke-linecap="round" stroke-linejoin="round" fill="none"><line x1="156" y1="256" x2="356" y2="256"/><rect x="108" y="180" width="48" height="152" rx="14"/><rect x="356" y="180" width="48" height="152" rx="14"/><line x1="80" y1="216" x2="80" y2="296"/><line x1="432" y1="216" x2="432" y2="296"/></g></svg>';
  const iconUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

  const iconLink = document.createElement('link');
  iconLink.rel = 'icon';
  iconLink.href = iconUri;
  document.head.appendChild(iconLink);

  const appleIcon = document.createElement('link');
  appleIcon.rel = 'apple-touch-icon';
  appleIcon.href = iconUri;
  document.head.appendChild(appleIcon);

  const manifest = {
    name: 'Workout',
    short_name: 'Workout',
    start_url: './',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FAFAF9',
    theme_color: '#FAFAF9',
    icons: [{ src: iconUri, sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' }]
  };
  const manifestLink = document.createElement('link');
  manifestLink.rel = 'manifest';
  try {
    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
    manifestLink.href = URL.createObjectURL(blob);
  } catch (e) {
    manifestLink.href = 'data:application/manifest+json;charset=utf-8,' + encodeURIComponent(JSON.stringify(manifest));
  }
  document.head.appendChild(manifestLink);
})();

/* ============================================================
   MEDIA: Default exercise URLs (1 GIF URL or 2 still URLs)
   ============================================================ */
const DB_IMG = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
const MEDIA = {
  incline_db_press: [
    DB_IMG + 'Incline_Dumbbell_Press/0.jpg',
    DB_IMG + 'Incline_Dumbbell_Press/1.jpg'
  ],
  machine_chest_press: [
    DB_IMG + 'Leverage_Chest_Press/0.jpg',
    DB_IMG + 'Leverage_Chest_Press/1.jpg'
  ],
  shoulder_press: [
    DB_IMG + 'Machine_Shoulder_Military_Press/0.jpg',
    DB_IMG + 'Machine_Shoulder_Military_Press/1.jpg'
  ],
  lateral_raise: [
    DB_IMG + 'Side_Lateral_Raise/0.jpg',
    DB_IMG + 'Side_Lateral_Raise/1.jpg'
  ],
  overhead_rope_extension: [
    DB_IMG + 'Cable_Rope_Overhead_Triceps_Extension/0.jpg',
    DB_IMG + 'Cable_Rope_Overhead_Triceps_Extension/1.jpg'
  ],
  tricep_pushdown: [
    DB_IMG + 'Triceps_Pushdown/0.jpg',
    DB_IMG + 'Triceps_Pushdown/1.jpg'
  ],
  assisted_pull_ups: [
    DB_IMG + 'Pullups/0.jpg',
    DB_IMG + 'Pullups/1.jpg'
  ],
  lat_pulldown: [
    DB_IMG + 'Wide-Grip_Lat_Pulldown/0.jpg',
    DB_IMG + 'Wide-Grip_Lat_Pulldown/1.jpg'
  ],
  chest_supported_row: [
    DB_IMG + 'Leverage_Iso_Row/0.jpg',
    DB_IMG + 'Leverage_Iso_Row/1.jpg'
  ],
  db_rear_delt_fly: [
    DB_IMG + 'Seated_Bent-Over_Rear_Delt_Raise/0.jpg',
    DB_IMG + 'Seated_Bent-Over_Rear_Delt_Raise/1.jpg'
  ],
  incline_db_curl: [
    DB_IMG + 'Incline_Dumbbell_Curl/0.jpg',
    DB_IMG + 'Incline_Dumbbell_Curl/1.jpg'
  ],
  hamstring_curl: [
    DB_IMG + 'Lying_Leg_Curls/0.jpg',
    DB_IMG + 'Lying_Leg_Curls/1.jpg'
  ],
  leg_extension: [
    DB_IMG + 'Leg_Extensions/0.jpg',
    DB_IMG + 'Leg_Extensions/1.jpg'
  ],
  leg_press: [
    DB_IMG + 'Leg_Press/0.jpg',
    DB_IMG + 'Leg_Press/1.jpg'
  ],
  romanian_deadlift: [
    DB_IMG + 'Romanian_Deadlift/0.jpg',
    DB_IMG + 'Romanian_Deadlift/1.jpg'
  ],
  incline_smith_press: [
    DB_IMG + 'Smith_Machine_Incline_Bench_Press/0.jpg',
    DB_IMG + 'Smith_Machine_Incline_Bench_Press/1.jpg'
  ],
  pec_deck_fly: [
    DB_IMG + 'Butterfly/0.jpg',
    DB_IMG + 'Butterfly/1.jpg'
  ],
  db_lateral_raise: [
    DB_IMG + 'Side_Lateral_Raise/0.jpg',
    DB_IMG + 'Side_Lateral_Raise/1.jpg'
  ],
  cable_curl_pushdown_superset: [
    DB_IMG + 'Standing_Biceps_Cable_Curl/0.jpg',
    DB_IMG + 'Triceps_Pushdown/1.jpg'
  ]
};

/* ============================================================
   DEFAULT WORKOUT PLAN (used as fallback & for Reset to default)
   ============================================================ */
const DEFAULT_EXERCISES = {
  incline_db_press: {
    id: 'incline_db_press', name: 'Incline DB Press', restType: 'compound', unit: 'kg per hand',
    cue: 'Set bench to 30 degrees, lower bells to upper chest with elbows at 45 degrees.'
  },
  machine_chest_press: {
    id: 'machine_chest_press', name: 'Machine Chest Press', restType: 'compound', unit: 'kg',
    cue: 'Pin shoulder blades back into the pad and press smoothly without locking out hard.'
  },
  shoulder_press: {
    id: 'shoulder_press', name: 'Shoulder Press', restType: 'compound', unit: 'kg',
    cue: 'Keep ribs down and press straight overhead with elbows slightly forward of shoulders.'
  },
  lateral_raise: {
    id: 'lateral_raise', name: 'Lateral Raise', restType: 'isolation', unit: 'kg',
    cue: 'Lead with elbows out to the sides to shoulder height, pausing briefly at the top.'
  },
  overhead_rope_extension: {
    id: 'overhead_rope_extension', name: 'Overhead Rope Extension', restType: 'isolation', unit: 'kg',
    cue: 'Keep elbows pointed forward and stretch the triceps fully behind your head.'
  },
  tricep_pushdown: {
    id: 'tricep_pushdown', name: 'Tricep Pushdown', restType: 'isolation', unit: 'kg',
    cue: 'Lock upper arms to your sides and extend down to full contraction without swinging.'
  },
  assisted_pull_ups: {
    id: 'assisted_pull_ups', name: 'Assisted Pull-Ups', restType: 'compound', unit: 'kg assistance',
    excludeFromVolume: true,
    cue: 'Pull chest toward the bar by driving elbows down, then lower with full control.'
  },
  lat_pulldown: {
    id: 'lat_pulldown', name: 'Lat Pulldown', restType: 'compound', unit: 'kg',
    cue: 'Lean back slightly and drive elbows toward your hips rather than pulling with hands.'
  },
  chest_supported_row: {
    id: 'chest_supported_row', name: 'Chest Supported Row', restType: 'compound', unit: 'kg',
    cue: 'Keep chest glued to the pad and squeeze shoulder blades together at the back.'
  },
  db_rear_delt_fly: {
    id: 'db_rear_delt_fly', name: 'DB Rear Delt Fly', restType: 'isolation', unit: 'kg per hand',
    cue: 'Hinge at the hips and sweep dumbbells out wide with soft elbows and steady torso.'
  },
  incline_db_curl: {
    id: 'incline_db_curl', name: 'Incline DB Curl', restType: 'isolation', unit: 'kg per hand',
    cue: 'Let arms hang behind your torso and curl without letting elbows drift forward.'
  },
  hamstring_curl: {
    id: 'hamstring_curl', name: 'Hamstring Curl', restType: 'isolation', unit: 'kg',
    cue: 'Keep hips pressed into the pad and control the return to a full stretch.'
  },
  leg_extension: {
    id: 'leg_extension', name: 'Leg Extension', restType: 'isolation', unit: 'kg',
    cue: 'Hold the handles firmly, pause at the top squeeze, and lower slowly.'
  },
  leg_press: {
    id: 'leg_press', name: 'Leg Press', restType: 'compound', unit: 'kg',
    cue: 'Lower as deep as possible while keeping your lower back flat against the pad.'
  },
  romanian_deadlift: {
    id: 'romanian_deadlift', name: 'Romanian Deadlift', restType: 'compound', unit: 'kg',
    cue: 'Push hips straight back with soft knees and keep the bar close to your thighs.'
  },
  incline_smith_press: {
    id: 'incline_smith_press', name: 'Incline Smith Press', restType: 'compound', unit: 'kg',
    cue: 'Align the bar over upper chest, lower under control, and drive straight up.'
  },
  pec_deck_fly: {
    id: 'pec_deck_fly', name: 'Pec Deck Fly', restType: 'isolation', unit: 'kg',
    cue: 'Keep a slight bend in elbows and bring inner elbows together across your chest.'
  },
  db_lateral_raise: {
    id: 'db_lateral_raise', name: 'DB Lateral Raise', restType: 'isolation', unit: 'kg per hand',
    cue: 'Raise dumbbells slightly forward of your body to shoulder height without shrugging.'
  },
  cable_curl_pushdown_superset: {
    id: 'cable_curl_pushdown_superset', name: 'Cable Curl + Straight Bar Pushdown', restType: 'isolation',
    unit: 'kg', superset: true, subA: 'Cable Curl', subB: 'Straight Bar Pushdown',
    cue: 'Keep elbows pinned on both movements; finish curls then go straight into pushdowns.'
  }
};

const DEFAULT_WORKOUTS = [
  {
    id: 1, name: 'Push',
    items: [
      { exId: 'incline_db_press', sets: 2, min: 6, max: 8, restSeconds: null },
      { exId: 'machine_chest_press', sets: 2, min: 8, max: 10, restSeconds: null },
      { exId: 'shoulder_press', sets: 2, min: 8, max: 10, restSeconds: null },
      { exId: 'lateral_raise', sets: 2, min: 10, max: 15, restSeconds: null },
      { exId: 'overhead_rope_extension', sets: 2, min: 10, max: 15, restSeconds: null },
      { exId: 'tricep_pushdown', sets: 2, min: 12, max: 15, restSeconds: null }
    ]
  },
  {
    id: 2, name: 'Pull',
    items: [
      { exId: 'assisted_pull_ups', sets: 2, min: 6, max: 10, restSeconds: null },
      { exId: 'lat_pulldown', sets: 2, min: 6, max: 10, restSeconds: null },
      { exId: 'chest_supported_row', sets: 2, min: 8, max: 10, restSeconds: null },
      { exId: 'db_rear_delt_fly', sets: 2, min: 10, max: 15, restSeconds: null },
      { exId: 'incline_db_curl', sets: 2, min: 10, max: 15, restSeconds: null }
    ]
  },
  {
    id: 3, name: 'Legs',
    items: [
      { exId: 'hamstring_curl', sets: 2, min: 12, max: 15, restSeconds: null },
      { exId: 'leg_extension', sets: 2, min: 12, max: 15, restSeconds: null },
      { exId: 'leg_press', sets: 2, min: 6, max: 10, restSeconds: null },
      { exId: 'romanian_deadlift', sets: 2, min: 8, max: 10, restSeconds: null }
    ]
  },
  {
    id: 4, name: 'Upper',
    items: [
      { exId: 'incline_smith_press', sets: 2, min: 6, max: 10, restSeconds: null },
      { exId: 'lat_pulldown', sets: 2, min: 8, max: 10, restSeconds: null },
      { exId: 'pec_deck_fly', sets: 2, min: 10, max: 15, restSeconds: null },
      { exId: 'db_lateral_raise', sets: 2, min: 10, max: 12, restSeconds: null },
      { exId: 'cable_curl_pushdown_superset', sets: 2, min: 12, max: 15, restSeconds: null }
    ]
  }
];

function cloneDefaultPlan() {
  return {
    exercises: JSON.parse(JSON.stringify(DEFAULT_EXERCISES)),
    workouts: JSON.parse(JSON.stringify(DEFAULT_WORKOUTS))
  };
}

/* ============================================================
   STORAGE & STATE (backward-compatible gymTracker.v3)
   ============================================================ */
const STORAGE_KEY = 'gymTracker.v3';
let storageAvailable = true;

function getTargetMinutes() {
  const m = db && db.settings ? Number(db.settings.targetMinutes) : 35;
  return (isFinite(m) && m >= 10 && m <= 120) ? m : 35;
}

function getTargetSeconds() {
  return getTargetMinutes() * 60;
}

function defaultData() {
  return {
    version: 3,
    settings: { sound: true, restCompound: 90, restIsolation: 60, theme: 'auto', targetMinutes: 35 },
    weeks: {},
    bodyweight: [],
    tomorrowPlan: { text: '', workoutId: null },
    plan: cloneDefaultPlan()
  };
}

function normalizeData(parsed) {
  if (!parsed || typeof parsed !== 'object' || !parsed.weeks) return defaultData();
  let plan = cloneDefaultPlan();
  if (parsed.plan && parsed.plan.exercises && Array.isArray(parsed.plan.workouts) && parsed.plan.workouts.length === 4) {
    plan = {
      exercises: Object.assign({}, cloneDefaultPlan().exercises, parsed.plan.exercises),
      workouts: parsed.plan.workouts
    };
  }
  const tp = parsed.tomorrowPlan && typeof parsed.tomorrowPlan === 'object' ? parsed.tomorrowPlan : {};
  return {
    version: 3,
    settings: Object.assign({ sound: true, restCompound: 90, restIsolation: 60, theme: 'auto', targetMinutes: 35 }, parsed.settings || {}),
    weeks: parsed.weeks || {},
    bodyweight: Array.isArray(parsed.bodyweight) ? parsed.bodyweight : [],
    tomorrowPlan: {
      text: typeof tp.text === 'string' ? tp.text : '',
      workoutId: tp.workoutId ? Number(tp.workoutId) : null
    },
    plan: plan
  };
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData();
    return normalizeData(JSON.parse(raw));
  } catch (e) {
    storageAvailable = false;
    return defaultData();
  }
}

function applyTheme() {
  const t = (db.settings && db.settings.theme) || 'auto';
  if (t === 'light' || t === 'dark') {
    document.documentElement.setAttribute('data-theme', t);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

let db = loadData();
applyTheme();

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    storageAvailable = true;
    return true;
  } catch (e) {
    storageAvailable = false;
    return false;
  }
}

if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().catch(function () {});
}

/* ============================================================
   INDEXEDDB STORAGE FOR CUSTOM EXERCISE IMAGES
   ============================================================ */
const IDB_NAME = 'gymTrackerMedia';
const IDB_STORE = 'exerciseImages';
let mediaCache = {};

function openMediaDb() {
  return new Promise(function (resolve, reject) {
    if (!('indexedDB' in window)) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = function (e) {
      const idb = e.target.result;
      if (!idb.objectStoreNames.contains(IDB_STORE)) {
        idb.createObjectStore(IDB_STORE);
      }
    };
    req.onsuccess = function (e) { resolve(e.target.result); };
    req.onerror = function (e) { reject(e.target.error || new Error('IndexedDB open failed')); };
  });
}

function saveExerciseMedia(exId, urls) {
  if (!urls || !urls.length) {
    return deleteExerciseMedia(exId);
  }
  mediaCache[exId] = urls.slice();
  return openMediaDb().then(function (idb) {
    return new Promise(function (resolve, reject) {
      const tx = idb.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(urls.slice(), exId);
      tx.oncomplete = function () { idb.close(); resolve(); };
      tx.onerror = function () { idb.close(); reject(tx.error); };
    });
  }).catch(function () {});
}

function deleteExerciseMedia(exId) {
  delete mediaCache[exId];
  return openMediaDb().then(function (idb) {
    return new Promise(function (resolve, reject) {
      const tx = idb.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).delete(exId);
      tx.oncomplete = function () { idb.close(); resolve(); };
      tx.onerror = function () { idb.close(); reject(tx.error); };
    });
  }).catch(function () {});
}

function clearAllCustomMedia() {
  mediaCache = {};
  return openMediaDb().then(function (idb) {
    return new Promise(function (resolve, reject) {
      const tx = idb.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).clear();
      tx.oncomplete = function () { idb.close(); resolve(); };
      tx.onerror = function () { idb.close(); reject(tx.error); };
    });
  }).catch(function () {});
}

function loadAllCustomMedia() {
  return openMediaDb().then(function (idb) {
    return new Promise(function (resolve) {
      const tx = idb.transaction(IDB_STORE, 'readonly');
      const store = tx.objectStore(IDB_STORE);
      const req = store.openCursor();
      const loaded = {};
      req.onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
          if (Array.isArray(cursor.value) && cursor.value.length) {
            loaded[cursor.key] = cursor.value;
          }
          cursor.continue();
        } else {
          mediaCache = Object.assign({}, loaded, mediaCache);
          idb.close();
          resolve(mediaCache);
        }
      };
      req.onerror = function () { idb.close(); resolve(mediaCache); };
    });
  }).catch(function () { return mediaCache; });
}

function migrateLegacyImagesToIdb() {
  if (!db.plan || !db.plan.exercises) return Promise.resolve();
  const tasks = [];
  let changed = false;
  Object.keys(db.plan.exercises).forEach(function (exId) {
    const ex = db.plan.exercises[exId];
    if (ex && Array.isArray(ex.images) && ex.images.length) {
      tasks.push(saveExerciseMedia(exId, ex.images));
      delete ex.images;
      changed = true;
    }
  });
  if (changed) saveData();
  return Promise.all(tasks);
}

/* ============================================================
   DATE & ISO WEEK HELPERS
   ============================================================ */
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function toLocalDateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

function parseLocalDate(str) {
  const p = str.split('-').map(Number);
  return new Date(p[0], p[1] - 1, p[2]);
}

const initNow = new Date();
const ui = {
  screen: 'home',         // 'home' | 'progress' | 'workout' | 'finish' | 'history' | 'settings' | 'edit-plan'
  activeSessionRef: null, // { weekKey, sessionId }
  openExIndex: 0,
  lastFinished: null,
  expandedWeeks: {},
  editingSet: null,
  progressExId: null,
  editPlanWorkoutId: 1,
  calendarYear: initNow.getFullYear(),
  calendarMonth: initNow.getMonth(),
  selectedHistoryDate: toLocalDateStr(initNow),
  historySearch: '',
  addExImages: []
};

/* ============================================================
   PLAN & SNAPSHOT HELPERS (keeps past history immutable)
   ============================================================ */
function getPlanWorkouts() {
  return (db.plan && db.plan.workouts) || DEFAULT_WORKOUTS;
}

function getPlanWorkoutDef(id) {
  const list = getPlanWorkouts();
  return list.find(function (w) { return w.id === id; }) || list[0];
}

function getExerciseDef(exId, session) {
  if (session && session.planSnapshot && session.planSnapshot.exercises && session.planSnapshot.exercises[exId]) {
    return session.planSnapshot.exercises[exId];
  }
  if (db.plan && db.plan.exercises && db.plan.exercises[exId]) {
    return db.plan.exercises[exId];
  }
  if (DEFAULT_EXERCISES[exId]) return DEFAULT_EXERCISES[exId];
  return { id: exId, name: exId.replace(/_/g, ' '), restType: 'isolation', unit: 'kg', cue: '' };
}

function getSessionWorkoutMeta(session) {
  if (session && session.planSnapshot && Array.isArray(session.planSnapshot.items)) {
    return {
      id: session.workout,
      name: session.planSnapshot.workoutName || getPlanWorkoutDef(session.workout).name,
      items: session.planSnapshot.items
    };
  }
  const fallback = DEFAULT_WORKOUTS.find(function (w) { return w.id === session.workout; }) || getPlanWorkoutDef(session.workout);
  return fallback;
}

function isAssistedExercise(ex) {
  return !!(ex && (ex.id === 'assisted_pull_ups' || ex.unit === 'kg assistance'));
}

function getItemRestSeconds(item, ex) {
  if (item && typeof item.restSeconds === 'number' && item.restSeconds > 0) return item.restSeconds;
  if (ex && typeof ex.restSeconds === 'number' && ex.restSeconds > 0) return ex.restSeconds;
  return (ex && ex.restType === 'compound') ? db.settings.restCompound : db.settings.restIsolation;
}

function getExerciseMediaUrls(exId, ex) {
  if (Array.isArray(mediaCache[exId]) && mediaCache[exId].length) return mediaCache[exId];
  if (ex && Array.isArray(ex.images) && ex.images.length) return ex.images;
  const planEx = db.plan && db.plan.exercises && db.plan.exercises[exId];
  if (planEx && Array.isArray(planEx.images) && planEx.images.length) return planEx.images;
  const entry = MEDIA[exId];
  return Array.isArray(entry) ? entry : (entry ? [entry] : []);
}

/* ============================================================
   IMAGE COMPRESSION HELPER (for localStorage persistence)
   ============================================================ */
function compressImageFile(file) {
  return new Promise(function (resolve, reject) {
    if (!file || !file.type || file.type.indexOf('image/') !== 0) {
      reject(new Error('Not an image file'));
      return;
    }
    const reader = new FileReader();
    reader.onerror = function () { reject(new Error('Failed to read image')); };
    reader.onload = function () {
      const dataUrl = String(reader.result);
      if (file.type === 'image/gif' && dataUrl.length <= 2 * 1024 * 1024) {
        resolve(dataUrl);
        return;
      }
      const img = new Image();
      img.onerror = function () { reject(new Error('Invalid image')); };
      img.onload = function () {
        const maxDim = 640;
        let w = img.naturalWidth || img.width;
        let h = img.naturalHeight || img.height;
        if (w > maxDim || h > maxDim) {
          if (w >= h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        try {
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        } catch (err) {
          resolve(dataUrl);
        }
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  });
}

function getISOWeekInfo(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayNum = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - dayNum + 3);
  const isoYear = d.getFullYear();
  const jan4 = new Date(isoYear, 0, 4);
  const jan4Day = (jan4.getDay() + 6) % 7;
  const week1Thu = new Date(isoYear, 0, 4 - jan4Day + 3);
  const weekNum = 1 + Math.round((d - week1Thu) / (7 * 86400000));
  const key = isoYear + '-W' + String(weekNum).padStart(2, '0');
  return { year: isoYear, week: weekNum, key: key };
}

function getISOWeekBounds(weekKey) {
  const parts = weekKey.split('-W');
  const year = Number(parts[0]);
  const week = Number(parts[1]);
  const jan4 = new Date(year, 0, 4);
  const jan4Day = (jan4.getDay() + 6) % 7;
  const mon = new Date(year, 0, 4 - jan4Day + (week - 1) * 7);
  const sun = new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + 6);
  const thu = new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + 3);
  return { mon: mon, sun: sun, thu: thu, year: year, week: week };
}

function getPrevISOWeekKey(weekKey) {
  const b = getISOWeekBounds(weekKey);
  const prevMon = new Date(b.mon.getFullYear(), b.mon.getMonth(), b.mon.getDate() - 7);
  return getISOWeekInfo(prevMon).key;
}

function formatWeekLabel(weekKey) {
  const b = getISOWeekBounds(weekKey);
  const sameMonth = b.mon.getMonth() === b.sun.getMonth();
  const range = sameMonth
    ? MONTHS_SHORT[b.mon.getMonth()] + ' ' + b.mon.getDate() + ' to ' + b.sun.getDate()
    : MONTHS_SHORT[b.mon.getMonth()] + ' ' + b.mon.getDate() + ' to ' + MONTHS_SHORT[b.sun.getMonth()] + ' ' + b.sun.getDate();
  return 'Week ' + b.week + ' · ' + range;
}

function formatShortDate(dateStr) {
  const d = parseLocalDate(dateStr);
  return MONTHS_SHORT[d.getMonth()] + ' ' + d.getDate();
}

function formatFullDate(dateStr) {
  const d = parseLocalDate(dateStr);
  return WEEKDAYS_LONG[d.getDay()] + ', ' + MONTHS_SHORT[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function formatClock(sec) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return String(m).padStart(2, '0') + ':' + String(rem).padStart(2, '0');
}

function formatWeight(w) {
  const n = Number(w);
  if (!isFinite(n)) return '0';
  return Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);
}

function calcEpley1RM(weight, reps) {
  const w = Number(weight) || 0;
  const r = Number(reps) || 0;
  if (w <= 0 || r <= 0) return 0;
  return Math.round(w * (1 + r / 30) * 10) / 10;
}

/* ============================================================
   SESSION, STREAK, SUGGESTION & PR QUERIES
   ============================================================ */
function getSessionTimestamp(s) {
  if (s.startedAt) return s.startedAt;
  const fromId = Number(String(s.id || '').replace('s_', ''));
  if (isFinite(fromId) && fromId > 0) return fromId;
  return s.date ? parseLocalDate(s.date).getTime() : 0;
}

function getAllSessions() {
  const list = [];
  Object.keys(db.weeks).forEach(function (wk) {
    const arr = (db.weeks[wk] && db.weeks[wk].sessions) || [];
    arr.forEach(function (s) { list.push({ weekKey: wk, session: s }); });
  });
  list.sort(function (a, b) {
    return getSessionTimestamp(b.session) - getSessionTimestamp(a.session);
  });
  return list;
}

function findActiveSession() {
  const all = getAllSessions();
  for (let i = 0; i < all.length; i++) {
    if (!all[i].session.finished) return all[i];
  }
  return null;
}

function getSessionByRef(ref) {
  if (!ref || !db.weeks[ref.weekKey]) return null;
  return db.weeks[ref.weekKey].sessions.find(function (s) { return s.id === ref.sessionId; }) || null;
}

function getNextWorkoutId() {
  const all = getAllSessions().filter(function (x) { return x.session.finished; });
  if (!all.length) return 1;
  return (all[0].session.workout % 4) + 1;
}

function getLastFinishedForWorkout(workoutId, excludeSessionId) {
  const all = getAllSessions();
  for (let i = 0; i < all.length; i++) {
    const s = all[i].session;
    if (s.finished && s.workout === workoutId && s.id !== excludeSessionId) {
      return s;
    }
  }
  return null;
}

function getLastExerciseHistory(exId, excludeSessionId) {
  const all = getAllSessions();
  for (let i = 0; i < all.length; i++) {
    const s = all[i].session;
    if (!s.finished || s.id === excludeSessionId) continue;
    if (s.skipped && s.skipped.indexOf(exId) !== -1) continue;
    const sets = s.sets && s.sets[exId];
    if (!sets || !sets.length) continue;
    const hasDone = sets.some(function (st) {
      return st.a ? (st.a.done || st.b.done) : st.done;
    });
    if (hasDone) {
      return {
        date: s.date,
        sets: sets,
        note: (s.notes && s.notes[exId]) || ''
      };
    }
  }
  return null;
}

/* Streak: consecutive ISO weeks with all 4 workouts completed (current unfinished week never breaks streak) */
function isWeekCompleteAll4(weekKey) {
  const wk = db.weeks[weekKey];
  if (!wk || !Array.isArray(wk.sessions)) return false;
  const doneIds = {};
  wk.sessions.forEach(function (s) {
    if (s.finished && getSessionStats(s).loggedSets > 0) {
      doneIds[s.workout] = true;
    }
  });
  return Object.keys(doneIds).length >= 4;
}

function computeFourWorkoutStreak() {
  const curKey = getISOWeekInfo(new Date()).key;
  let streak = 0;
  let cursor = curKey;
  if (isWeekCompleteAll4(curKey)) {
    streak = 1;
    cursor = getPrevISOWeekKey(curKey);
  } else {
    cursor = getPrevISOWeekKey(curKey);
  }
  let guard = 0;
  while (isWeekCompleteAll4(cursor) && guard < 520) {
    streak += 1;
    cursor = getPrevISOWeekKey(cursor);
    guard += 1;
  }
  return streak;
}

/* Double progression suggestions */
function computeSingleProgression(doneSets, minReps, maxReps, incKg, isAssisted) {
  if (!doneSets.length) return null;
  const allAtTop = doneSets.every(function (st) { return (Number(st.reps) || 0) >= maxReps; });
  const anyBelow = doneSets.some(function (st) { return (Number(st.reps) || 0) < minReps; });
  const weights = doneSets.map(function (st) { return Number(st.weight) || 0; });
  const baseWeight = isAssisted ? Math.min.apply(null, weights) : Math.max.apply(null, weights);
  const unitTxt = isAssisted ? ' kg assistance' : ' kg';

  if (allAtTop) {
    const nextW = isAssisted
      ? Math.max(0, Math.round((baseWeight - 2.5) * 100) / 100)
      : Math.round((baseWeight + incKg) * 100) / 100;
    return {
      weight: nextW,
      text: formatWeight(nextW) + unitTxt + ' x ' + minReps
    };
  }
  if (anyBelow) {
    return {
      weight: baseWeight,
      text: formatWeight(baseWeight) + unitTxt + ' · repeat until all sets are in range'
    };
  }
  return {
    weight: baseWeight,
    text: formatWeight(baseWeight) + unitTxt + ' · aim for +1 rep per set'
  };
}

function getExerciseSuggestion(exId, item, session, excludeSessionId) {
  const prev = getLastExerciseHistory(exId, excludeSessionId);
  if (!prev) return null;
  const ex = getExerciseDef(exId, session);
  const incKg = (exId === 'leg_press' || exId === 'romanian_deadlift') ? 5 : 2.5;
  const assisted = isAssistedExercise(ex);

  if (ex.superset) {
    const doneA = prev.sets.filter(function (st) { return st.a && st.a.done; }).map(function (st) { return st.a; });
    const doneB = prev.sets.filter(function (st) { return st.b && st.b.done; }).map(function (st) { return st.b; });
    const sugA = computeSingleProgression(doneA, item.min, item.max, 2.5, false);
    const sugB = computeSingleProgression(doneB, item.min, item.max, 2.5, false);
    if (!sugA && !sugB) return null;
    const parts = [];
    if (sugA) parts.push((ex.subA || 'A') + ' ' + sugA.text);
    if (sugB) parts.push((ex.subB || 'B') + ' ' + sugB.text);
    return {
      weightA: sugA ? sugA.weight : 0,
      weightB: sugB ? sugB.weight : 0,
      text: 'Suggested: ' + parts.join(' · ')
    };
  }

  const done = prev.sets.filter(function (st) { return st.done; });
  const sug = computeSingleProgression(done, item.min, item.max, incKg, assisted);
  if (!sug) return null;
  return {
    weight: sug.weight,
    text: 'Suggested: ' + sug.text
  };
}

/* Personal Records detection */
function checkIsPersonalRecord(session, exId, setIdx, subKey, reps, weight) {
  const ex = getExerciseDef(exId, session);
  const assisted = isAssistedExercise(ex);
  const curTime = getSessionTimestamp(session);

  const priorSets = [];
  let priorSessionCount = 0;

  getAllSessions().forEach(function (entry) {
    const s = entry.session;
    if (!s.finished || s.id === session.id) return;
    if (getSessionTimestamp(s) > curTime) return;
    if (s.skipped && s.skipped.indexOf(exId) !== -1) return;
    const sets = s.sets && s.sets[exId];
    if (!sets || !sets.length) return;
    let foundInSession = false;
    sets.forEach(function (st) {
      const t = subKey ? st[subKey] : st;
      if (t && t.done) {
        priorSets.push({ reps: Number(t.reps) || 0, weight: Number(t.weight) || 0 });
        foundInSession = true;
      }
    });
    if (foundInSession) priorSessionCount += 1;
  });

  if (priorSessionCount === 0 || priorSets.length === 0) return false;

  const curSets = (session.sets && session.sets[exId]) || [];
  for (let i = 0; i < curSets.length; i++) {
    if (i === setIdx) continue;
    const t = subKey ? curSets[i][subKey] : curSets[i];
    if (t && t.done) {
      priorSets.push({ reps: Number(t.reps) || 0, weight: Number(t.weight) || 0 });
    }
  }

  const r = Number(reps) || 0;
  const w = Number(weight) || 0;
  if (r <= 0) return false;

  if (assisted) {
    const sameOrHigherReps = priorSets.filter(function (p) { return p.reps >= r; });
    if (sameOrHigherReps.length > 0) {
      const minAssist = Math.min.apply(null, sameOrHigherReps.map(function (p) { return p.weight; }));
      return w < minAssist;
    }
    const minPriorAssist = Math.min.apply(null, priorSets.map(function (p) { return p.weight; }));
    return w <= minPriorAssist;
  }

  if (w <= 0) return false;

  if (r >= 6) {
    const at6Plus = priorSets.filter(function (p) { return p.reps >= 6; });
    const maxW6 = at6Plus.length ? Math.max.apply(null, at6Plus.map(function (p) { return p.weight; })) : 0;
    if (w > maxW6) return true;
  }

  const sameOrHigherW = priorSets.filter(function (p) { return p.weight >= w; });
  if (sameOrHigherW.length > 0) {
    const maxR = Math.max.apply(null, sameOrHigherW.map(function (p) { return p.reps; }));
    if (r > maxR) return true;
  }

  const max1RM = Math.max.apply(null, priorSets.map(function (p) { return calcEpley1RM(p.weight, p.reps); }));
  if (calcEpley1RM(w, r) > max1RM) return true;

  return false;
}

function getSessionPRs(session) {
  const def = getSessionWorkoutMeta(session);
  const list = [];
  def.items.forEach(function (item) {
    const ex = getExerciseDef(item.exId, session);
    const sets = (session.sets && session.sets[item.exId]) || [];
    const assisted = isAssistedExercise(ex);
    sets.forEach(function (st, idx) {
      if (ex.superset) {
        ['a', 'b'].forEach(function (sub) {
          if (st[sub] && st[sub].done && st[sub].pr) {
            list.push({
              name: (sub === 'a' ? (ex.subA || 'Curl') : (ex.subB || 'Pushdown')),
              setNum: idx + 1,
              detail: formatWeight(st[sub].weight) + ' kg x ' + st[sub].reps
            });
          }
        });
      } else if (st.done && st.pr) {
        list.push({
          name: ex.name,
          setNum: idx + 1,
          detail: formatWeight(st.weight) + (assisted ? ' kg assistance' : ' kg') + ' x ' + st.reps
        });
      }
    });
  });
  return list;
}

function getElapsedActiveSeconds(session) {
  if (!session || !session.startedAt) return session ? (session.activeSeconds || 0) : 0;
  if (session.pausedAt !== null && session.pausedAt !== undefined) return session.activeSeconds || 0;
  return (session.activeSeconds || 0) + Math.max(0, Math.floor((Date.now() - session.startedAt) / 1000));
}

function isSetComplete(ex, st) {
  if (!st) return false;
  if (ex.superset) return !!(st.a && st.a.done && st.b && st.b.done);
  return !!st.done;
}

function isExerciseComplete(session, item) {
  if (session.skipped && session.skipped.indexOf(item.exId) !== -1) return true;
  const ex = getExerciseDef(item.exId, session);
  const sets = (session.sets && session.sets[item.exId]) || [];
  if (sets.length < item.sets) return false;
  return sets.every(function (st) { return isSetComplete(ex, st); });
}

function getSessionStats(session) {
  const def = getSessionWorkoutMeta(session);
  let totalSets = 0;
  let doneSets = 0;
  let totalReps = 0;
  let volume = 0;

  def.items.forEach(function (item) {
    const ex = getExerciseDef(item.exId, session);
    const isSkipped = session.skipped && session.skipped.indexOf(item.exId) !== -1;
    const sets = (session.sets && session.sets[item.exId]) || [];
    const itemTotal = isSkipped ? item.sets : Math.max(item.sets, sets.length);
    totalSets += itemTotal;
    if (isSkipped) {
      doneSets += itemTotal;
      return;
    }
    sets.forEach(function (st) {
      if (ex.superset) {
        if (st.a && st.a.done && st.b && st.b.done) doneSets += 1;
        if (st.a && st.a.done) {
          totalReps += Number(st.a.reps) || 0;
          volume += (Number(st.a.reps) || 0) * (Number(st.a.weight) || 0);
        }
        if (st.b && st.b.done) {
          totalReps += Number(st.b.reps) || 0;
          volume += (Number(st.b.reps) || 0) * (Number(st.b.weight) || 0);
        }
      } else if (st.done) {
        doneSets += 1;
        totalReps += Number(st.reps) || 0;
        if (!ex.excludeFromVolume && !isAssistedExercise(ex)) {
          volume += (Number(st.reps) || 0) * (Number(st.weight) || 0);
        }
      }
    });
  });

  const loggedSetsCount = def.items.reduce(function (acc, item) {
    const ex = getExerciseDef(item.exId, session);
    if (session.skipped && session.skipped.indexOf(item.exId) !== -1) return acc;
    const sets = (session.sets && session.sets[item.exId]) || [];
    sets.forEach(function (st) {
      if (isSetComplete(ex, st)) acc += 1;
    });
    return acc;
  }, 0);

  return {
    totalSets: totalSets,
    doneSets: doneSets,
    loggedSets: loggedSetsCount,
    totalReps: totalReps,
    volume: Math.round(volume * 10) / 10
  };
}

function createSession(workoutId) {
  const now = new Date();
  const weekKey = getISOWeekInfo(now).key;
  const def = getPlanWorkoutDef(workoutId);
  const sessionId = 's_' + Date.now();
  const sets = {};
  const notes = {};
  const snapshotExercises = {};
  const snapshotItems = def.items.map(function (it) {
    const ex = JSON.parse(JSON.stringify(getExerciseDef(it.exId, null)));
    delete ex.images;
    snapshotExercises[it.exId] = ex;
    return JSON.parse(JSON.stringify(it));
  });

  const tempSession = {
    id: sessionId,
    planSnapshot: { workoutName: def.name, items: snapshotItems, exercises: snapshotExercises }
  };

  snapshotItems.forEach(function (item) {
    const ex = snapshotExercises[item.exId];
    const sug = getExerciseSuggestion(item.exId, item, tempSession, sessionId);
    const prev = getLastExerciseHistory(item.exId, sessionId);
    const arr = [];
    for (let i = 0; i < item.sets; i++) {
      if (ex.superset) {
        const pSet = prev && (prev.sets[i] || prev.sets[0]);
        const wA = sug ? sug.weightA : (pSet && pSet.a ? Number(pSet.a.weight) || 0 : 0);
        const wB = sug ? sug.weightB : (pSet && pSet.b ? Number(pSet.b.weight) || 0 : 0);
        arr.push({
          a: { reps: item.min, weight: wA, done: false, pr: false },
          b: { reps: item.min, weight: wB, done: false, pr: false },
          done: false
        });
      } else {
        const pSet = prev && (prev.sets[i] || prev.sets[0]);
        const w = sug ? sug.weight : (pSet ? Number(pSet.weight) || 0 : 0);
        arr.push({ reps: item.min, weight: w, done: false, pr: false });
      }
    }
    sets[item.exId] = arr;
    notes[item.exId] = '';
  });

  const session = {
    id: sessionId,
    workout: workoutId,
    date: toLocalDateStr(now),
    startedAt: null,
    activeSeconds: 0,
    pausedAt: null,
    finished: false,
    sets: sets,
    notes: notes,
    skipped: [],
    sessionNote: '',
    planSnapshot: {
      workoutName: def.name,
      items: snapshotItems,
      exercises: snapshotExercises
    }
  };

  if (!db.weeks[weekKey]) db.weeks[weekKey] = { sessions: [] };
  db.weeks[weekKey].sessions.push(session);
  saveData();
  return { weekKey: weekKey, sessionId: sessionId };
}

/* ============================================================
   WAKE LOCK, HAPTICS & WEB AUDIO BEEP
   ============================================================ */
let wakeLock = null;
let audioCtx = null;

async function requestWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try {
    if (!wakeLock) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', function () { wakeLock = null; });
    }
  } catch (e) {}
}

function releaseWakeLock() {
  if (wakeLock) {
    wakeLock.release().catch(function () {});
    wakeLock = null;
  }
}

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible' && ui.screen === 'workout') {
    requestWakeLock();
  }
});

function unlockAudio() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!audioCtx) audioCtx = new Ctx();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } catch (e) {}
}

function playRestBeep() {
  if (!db.settings.sound) return;
  try {
    unlockAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    [0, 0.22].forEach(function (offset) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now + offset);
      gain.gain.setValueAtTime(0.001, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.18, now + offset + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.16);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + 0.17);
    });
  } catch (e) {}
}

function vibrate(pattern) {
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch (e) {}
}

/* ============================================================
   REST TIMER (end-timestamp based)
   ============================================================ */
const restState = { endAt: null, nextLabel: '', interval: null };

function startRestTimer(seconds, nextLabel) {
  restState.endAt = Date.now() + seconds * 1000;
  restState.nextLabel = nextLabel;
  renderRestBar();
  if (restState.interval) clearInterval(restState.interval);
  restState.interval = setInterval(tickRestTimer, 250);
}

function adjustRestTimer(deltaSec) {
  if (!restState.endAt) return;
  restState.endAt = Math.max(Date.now() + 1000, restState.endAt + deltaSec * 1000);
  renderRestBar();
}

function stopRestTimer() {
  restState.endAt = null;
  restState.nextLabel = '';
  if (restState.interval) {
    clearInterval(restState.interval);
    restState.interval = null;
  }
  renderRestBar();
}

function tickRestTimer() {
  if (!restState.endAt) return;
  const remaining = Math.ceil((restState.endAt - Date.now()) / 1000);
  if (remaining <= 0) {
    stopRestTimer();
    vibrate([150, 80, 150]);
    playRestBeep();
    return;
  }
  const el = document.getElementById('rest-clock');
  if (el) el.textContent = formatClock(remaining);
}

function renderRestBar() {
  const bar = document.getElementById('rest-bar');
  if (!restState.endAt || ui.screen !== 'workout') {
    bar.classList.add('hidden');
    bar.innerHTML = '';
    return;
  }
  const remaining = Math.max(0, Math.ceil((restState.endAt - Date.now()) / 1000));
  bar.classList.remove('hidden');
  bar.innerHTML =
    '<div class="rest-inner">' +
      '<div class="between">' +
        '<div>' +
          '<div class="label">Rest</div>' +
          '<div id="rest-clock" class="rest-time tabular">' + formatClock(remaining) + '</div>' +
        '</div>' +
        '<div class="row">' +
          '<button type="button" class="btn btn-secondary btn-sm" id="rest-minus" aria-label="Subtract 15 seconds">-15s</button>' +
          '<button type="button" class="btn btn-secondary btn-sm" id="rest-plus" aria-label="Add 15 seconds">+15s</button>' +
          '<button type="button" class="btn btn-primary btn-sm" style="width:auto;padding:0 16px;" id="rest-skip" aria-label="Skip rest">Skip</button>' +
        '</div>' +
      '</div>' +
      '<div class="label">Next: ' + escapeHtml(restState.nextLabel) + '</div>' +
    '</div>';

  document.getElementById('rest-minus').onclick = function () { adjustRestTimer(-15); };
  document.getElementById('rest-plus').onclick = function () { adjustRestTimer(15); };
  document.getElementById('rest-skip').onclick = stopRestTimer;
}

/* ============================================================
   SESSION CLOCK & MEDIA ANIMATION TIMERS
   ============================================================ */
let sessionTickInterval = null;
let mediaAnimInterval = null;

function startSessionClockLoop() {
  if (sessionTickInterval) clearInterval(sessionTickInterval);
  sessionTickInterval = setInterval(function () {
    if (ui.screen !== 'workout' || !ui.activeSessionRef) return;
    const s = getSessionByRef(ui.activeSessionRef);
    if (!s) return;
    const clockEl = document.getElementById('session-clock');
    const paceEl = document.getElementById('pace-label');
    if (!clockEl || !paceEl) return;
    const elapsed = getElapsedActiveSeconds(s);
    clockEl.textContent = formatClock(elapsed);
    paceEl.textContent = computePaceText(s, elapsed);
  }, 500);
}

function computePaceText(session, elapsed) {
  const stats = getSessionStats(session);
  if (stats.doneSets === 0 || !session.startedAt) return 'On pace';
  const expected = getTargetSeconds() * (stats.doneSets / stats.totalSets);
  const diff = Math.round(elapsed - expected);
  if (Math.abs(diff) <= 15) return 'On pace';
  const absStr = formatClock(Math.abs(diff)).replace(/^0/, '');
  return diff > 0 ? absStr + ' behind' : absStr + ' ahead';
}

function stopMediaAnimation() {
  if (mediaAnimInterval) {
    clearInterval(mediaAnimInterval);
    mediaAnimInterval = null;
  }
}

function startMediaAnimationForOpenCard() {
  stopMediaAnimation();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = document.querySelector('.ex-card.is-open .media-box');
  if (!box) return;
  const frames = box.querySelectorAll('.media-frame');
  if (frames.length < 2) return;
  let idx = 0;
  mediaAnimInterval = setInterval(function () {
    if (box.dataset.failed === 'true') return;
    idx = (idx + 1) % frames.length;
    frames.forEach(function (f, i) {
      f.classList.toggle('visible', i === idx);
    });
  }, 800);
}

/* ============================================================
   SVG ICONS, CHARTS & ESCAPING
   ============================================================ */
function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const SVG_CHECK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
const SVG_BACK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>';
const SVG_DUMBBELL = '<svg width="36" height="36" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="20" y1="32" x2="44" y2="32"/><rect x="13" y="21" width="7" height="22" rx="2"/><rect x="44" y="21" width="7" height="22" rx="2"/><line x1="9" y1="26" x2="9" y2="38"/><line x1="55" y1="26" x2="55" y2="38"/></svg>';

/* Inline SVG line chart builder */
function renderLineChartSvg(points, opts) {
  if (!points.length) {
    return '<div class="label" style="padding:12px 0;">Not enough data yet.</div>';
  }
  const w = 320;
  const h = (opts && opts.height) || 130;
  const padL = 38;
  const padR = 12;
  const padT = 14;
  const padB = 24;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const strokeColor = (opts && opts.color) || 'var(--text)';
  const vals = points.map(function (p) { return p.value; });
  let minV = Math.min.apply(null, vals);
  let maxV = Math.max.apply(null, vals);
  if (minV === maxV) {
    minV = Math.max(0, minV - 5);
    maxV = maxV + 5;
  } else {
    const span = maxV - minV;
    minV = Math.max(0, minV - span * 0.1);
    maxV = maxV + span * 0.1;
  }

  const coords = points.map(function (p, i) {
    const x = points.length === 1 ? padL + plotW / 2 : padL + (i / (points.length - 1)) * plotW;
    const y = padT + plotH - ((p.value - minV) / (maxV - minV)) * plotH;
    return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, label: p.label, value: p.value };
  });

  const poly = coords.map(function (c) { return c.x + ',' + c.y; }).join(' ');
  const midY = Math.round((padT + plotH / 2) * 10) / 10;
  const firstLabel = coords[0].label;
  const lastLabel = coords[coords.length - 1].label;

  return (
    '<svg class="chart-svg tabular" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + escapeHtml((opts && opts.ariaLabel) || 'Line chart') + '">' +
      '<line x1="' + padL + '" y1="' + padT + '" x2="' + (w - padR) + '" y2="' + padT + '" stroke="var(--border)" stroke-width="1"/>' +
      '<line x1="' + padL + '" y1="' + midY + '" x2="' + (w - padR) + '" y2="' + midY + '" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 3"/>' +
      '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (w - padR) + '" y2="' + (padT + plotH) + '" stroke="var(--border)" stroke-width="1"/>' +
      '<text x="' + (padL - 6) + '" y="' + (padT + 4) + '" text-anchor="end" fill="var(--muted)" font-size="10">' + formatWeight(Math.round(maxV * 10) / 10) + '</text>' +
      '<text x="' + (padL - 6) + '" y="' + (padT + plotH + 3) + '" text-anchor="end" fill="var(--muted)" font-size="10">' + formatWeight(Math.round(minV * 10) / 10) + '</text>' +
      (coords.length > 1 ? '<polyline fill="none" stroke="' + strokeColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="' + poly + '"/>' : '') +
      coords.map(function (c) {
        return '<circle cx="' + c.x + '" cy="' + c.y + '" r="3.5" fill="' + strokeColor + '"/>';
      }).join('') +
      '<text x="' + padL + '" y="' + (h - 5) + '" text-anchor="start" fill="var(--muted)" font-size="10">' + escapeHtml(firstLabel) + '</text>' +
      (coords.length > 1 ? '<text x="' + (w - padR) + '" y="' + (h - 5) + '" text-anchor="end" fill="var(--muted)" font-size="10">' + escapeHtml(lastLabel) + '</text>' : '') +
    '</svg>'
  );
}

/* Inline SVG bar chart builder */
function renderBarChartSvg(bars, opts) {
  if (!bars.length) {
    return '<div class="label" style="padding:12px 0;">Not enough data yet.</div>';
  }
  const w = 320;
  const h = (opts && opts.height) || 130;
  const padL = 38;
  const padR = 8;
  const padT = 14;
  const padB = 24;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const maxV = Math.max(1, Math.max.apply(null, bars.map(function (b) { return b.value; })));
  const slotW = plotW / bars.length;
  const barW = Math.max(6, Math.min(20, slotW * 0.62));

  const rects = bars.map(function (b, i) {
    const bh = b.value > 0 ? Math.max(3, (b.value / maxV) * plotH) : 1;
    const x = padL + i * slotW + (slotW - barW) / 2;
    const y = padT + plotH - bh;
    const fill = b.value > 0 ? 'var(--accent)' : 'var(--border)';
    const showLabel = bars.length <= 6 || i === 0 || i === bars.length - 1 || i % 3 === 0;
    return (
      '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="3" fill="' + fill + '"/>' +
      (showLabel ? '<text x="' + (x + barW / 2).toFixed(1) + '" y="' + (h - 5) + '" text-anchor="middle" fill="var(--muted)" font-size="9">' + escapeHtml(b.label) + '</text>' : '')
    );
  }).join('');

  const maxLabel = maxV >= 1000 ? (Math.round(maxV / 100) / 10) + 'k' : formatWeight(Math.round(maxV));
  return (
    '<svg class="chart-svg tabular" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + escapeHtml((opts && opts.ariaLabel) || 'Bar chart') + '">' +
      '<line x1="' + padL + '" y1="' + padT + '" x2="' + (w - padR) + '" y2="' + padT + '" stroke="var(--border)" stroke-width="1"/>' +
      '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (w - padR) + '" y2="' + (padT + plotH) + '" stroke="var(--border)" stroke-width="1"/>' +
      '<text x="' + (padL - 6) + '" y="' + (padT + 4) + '" text-anchor="end" fill="var(--muted)" font-size="10">' + maxLabel + '</text>' +
      '<text x="' + (padL - 6) + '" y="' + (padT + plotH + 3) + '" text-anchor="end" fill="var(--muted)" font-size="10">0</text>' +
      rects +
    '</svg>'
  );
}

/* ============================================================
   CONFETTI CELEBRATION ON PR
   ============================================================ */
function launchPrConfetti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer = document.createElement('div');
  layer.className = 'confetti-layer';
  const colors = ['#2F6F4E', '#3F8F66', '#E5A93C', '#3B82F6', '#F04438'];
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.round(Math.random() * 100) + 'vw';
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--dx', Math.round((Math.random() - 0.5) * 140) + 'px');
    piece.style.setProperty('--rot', Math.round(360 + Math.random() * 540) + 'deg');
    piece.style.animationDelay = (Math.random() * 0.25).toFixed(2) + 's';
    layer.appendChild(piece);
  }
  document.body.appendChild(layer);
  setTimeout(function () {
    if (layer.parentNode) layer.parentNode.removeChild(layer);
  }, 1800);
}

/* ============================================================
   CONFIRMATION MODAL
   ============================================================ */
function showConfirm(title, message, confirmLabel, onConfirm, isDanger) {
  const root = document.getElementById('modal-root');
  root.className = 'modal-backdrop';
  root.innerHTML =
    '<div class="modal-sheet" role="dialog" aria-modal="true" aria-label="' + escapeHtml(title) + '">' +
      '<div class="h2">' + escapeHtml(title) + '</div>' +
      '<div class="label" style="font-size:15px;color:var(--text);">' + escapeHtml(message) + '</div>' +
      '<div class="row" style="justify-content:flex-end;">' +
        '<button type="button" class="btn btn-secondary btn-sm" id="modal-cancel" aria-label="Cancel">Cancel</button>' +
        '<button type="button" class="btn ' + (isDanger ? 'btn-danger' : 'btn-primary') + ' btn-sm" style="width:auto;" id="modal-ok" aria-label="' + escapeHtml(confirmLabel) + '">' + escapeHtml(confirmLabel) + '</button>' +
      '</div>' +
    '</div>';

  function close() {
    root.className = 'hidden';
    root.innerHTML = '';
  }
  document.getElementById('modal-cancel').onclick = close;
  root.onclick = function (e) { if (e.target === root) close(); };
  document.getElementById('modal-ok').onclick = function () {
    close();
    onConfirm();
  };
}

function showAlert(title, message, onOk) {
  const root = document.getElementById('modal-root');
  root.className = 'modal-backdrop';
  root.innerHTML =
    '<div class="modal-sheet" role="dialog" aria-modal="true" aria-label="' + escapeHtml(title) + '">' +
      '<div class="h2">' + escapeHtml(title) + '</div>' +
      '<div class="label" style="font-size:15px;color:var(--text);">' + escapeHtml(message) + '</div>' +
      '<div class="row" style="justify-content:flex-end;">' +
        '<button type="button" class="btn btn-primary btn-sm" style="width:auto;" id="modal-alert-ok" aria-label="OK">OK</button>' +
      '</div>' +
    '</div>';

  function close() {
    root.className = 'hidden';
    root.innerHTML = '';
    if (onOk) onOk();
  }
  root.onclick = function (e) { if (e.target === root) close(); };
  document.getElementById('modal-alert-ok').onclick = close;
}

/* ============================================================
   NAVIGATION & RENDER ROUTER
   ============================================================ */
function render() {
  applyTheme();
  const app = document.getElementById('app');
  const nav = document.getElementById('bottom-nav');
  const inWorkout = ui.screen === 'workout';

  document.body.classList.toggle('in-workout', inWorkout);
  nav.classList.toggle('hidden', inWorkout || ui.screen === 'finish' || ui.screen === 'edit-plan');

  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.tab === ui.screen);
  });

  if (inWorkout) {
    requestWakeLock();
  } else {
    releaseWakeLock();
    stopMediaAnimation();
  }

  const banner = storageAvailable
    ? ''
    : '<div class="banner" role="alert">Storage unavailable: data may not be saved (quota full or private mode)</div>';

  if (ui.screen === 'home') {
    app.innerHTML = banner + renderHomeHtml();
    bindHomeEvents();
  } else if (ui.screen === 'progress') {
    app.innerHTML = banner + renderProgressHtml();
    bindProgressEvents();
  } else if (ui.screen === 'workout') {
    app.innerHTML = banner + renderWorkoutHtml();
    bindWorkoutEvents();
    startMediaAnimationForOpenCard();
  } else if (ui.screen === 'finish') {
    app.innerHTML = banner + renderFinishHtml();
    bindFinishEvents();
  } else if (ui.screen === 'history') {
    app.innerHTML = banner + renderHistoryHtml();
    bindHistoryEvents();
  } else if (ui.screen === 'settings') {
    app.innerHTML = banner + renderSettingsHtml();
    bindSettingsEvents();
  } else if (ui.screen === 'edit-plan') {
    app.innerHTML = banner + renderEditPlanHtml();
    bindEditPlanEvents();
  }

  renderRestBar();
}

document.querySelectorAll('.nav-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    ui.screen = btn.dataset.tab;
    render();
    window.scrollTo(0, 0);
  });
});

/* ============================================================
   SCREEN 1: HOME (with 4-workout ISO week streak)
   ============================================================ */
function renderHomeHtml() {
  const now = new Date();
  const weekInfo = getISOWeekInfo(now);
  const weekData = db.weeks[weekInfo.key] || { sessions: [] };
  const finishedThisWeek = weekData.sessions.filter(function (s) { return s.finished; });
  const active = findActiveSession();

  const completedIds = {};
  const completedDays = {};
  finishedThisWeek.forEach(function (s) {
    completedIds[s.workout] = true;
    const d = parseLocalDate(s.date);
    const idx = (d.getDay() + 6) % 7;
    completedDays[idx] = true;
  });

  const doneCount = Object.keys(completedIds).length;
  const nextId = active ? active.session.workout : getNextWorkoutId();
  const nextDef = active ? getSessionWorkoutMeta(active.session) : getPlanWorkoutDef(nextId);
  const primaryLabel = active ? 'Resume ' + nextDef.name : 'Start ' + nextDef.name;
  const primarySub = nextDef.items.length + ' exercises · ' + getTargetMinutes() + ' min';

  const listHtml = getPlanWorkouts().map(function (w) {
    const isDone = !!completedIds[w.id];
    const isInProgress = active && active.session.workout === w.id;
    return (
      '<button type="button" class="workout-item" data-start-workout="' + w.id + '" aria-label="Start ' + escapeHtml(w.name) + '">' +
        '<div>' +
          '<div class="workout-item-title">Workout ' + w.id + ' · ' + escapeHtml(w.name) + '</div>' +
          '<div class="workout-item-meta">' + w.items.length + ' exercises' + (isInProgress ? ' · In progress' : '') + '</div>' +
        '</div>' +
        (isDone ? '<span class="check-badge" aria-label="Completed this week">' + SVG_CHECK + '</span>' : '<span class="label">Start</span>') +
      '</button>'
    );
  }).join('');

  const dayLetters = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const dotsHtml = dayLetters.map(function (ch, idx) {
    return '<div class="dot-col"><span class="dot-day">' + ch + '</span><span class="dot' + (completedDays[idx] ? ' filled' : '') + '"></span></div>';
  }).join('');

  const streak = computeFourWorkoutStreak();
  const streakText = streak + (streak === 1 ? ' week' : ' weeks') + ' in a row with all 4 workouts';

  const tp = db.tomorrowPlan || { text: '', workoutId: null };
  const tpWorkoutName = tp.workoutId ? getPlanWorkoutDef(tp.workoutId).name : '';
  const tomorrowHtml = tp.text && tp.text.trim()
    ? '<div class="tomorrow-card">' +
        '<div class="between">' +
          '<span class="label" style="color:var(--accent);font-weight:600;">Tomorrow\'s plan' + (tpWorkoutName ? ' · ' + escapeHtml(tpWorkoutName) : '') + '</span>' +
          '<button type="button" class="btn btn-ghost btn-sm" style="min-height:32px;padding:0 8px;font-size:12px;" id="clear-tomorrow-btn" aria-label="Clear tomorrow plan">Clear</button>' +
        '</div>' +
        '<div style="font-size:14px;">' + escapeHtml(tp.text) + '</div>' +
      '</div>'
    : '';

  return (
    '<div class="stack">' +
      '<div>' +
        '<div class="label">' + escapeHtml(formatWeekLabel(weekInfo.key)) + '</div>' +
        '<h1 class="h1" style="margin-top:4px;">Workout</h1>' +
      '</div>' +
      '<button type="button" class="btn btn-primary" id="home-primary-btn" aria-label="' + escapeHtml(primaryLabel) + '">' +
        '<span>' + escapeHtml(primaryLabel) + '</span>' +
        '<span class="sub">' + escapeHtml(primarySub) + '</span>' +
      '</button>' +
      tomorrowHtml +
      '<div class="workout-list">' + listHtml + '</div>' +
      '<div class="dot-strip" aria-label="Days trained this week">' + dotsHtml + '</div>' +
      '<div class="stack-sm" style="gap:4px;">' +
        '<div class="label" style="text-align:center;">' + doneCount + ' of 4 workouts done this week</div>' +
        '<div class="streak-line">' + escapeHtml(streakText) + '</div>' +
      '</div>' +
    '</div>'
  );
}

function openWorkout(workoutId) {
  const active = findActiveSession();
  if (active && active.session.workout === workoutId) {
    ui.activeSessionRef = { weekKey: active.weekKey, sessionId: active.session.id };
    ui.openExIndex = findFirstIncompleteIndex(active.session);
    ui.screen = 'workout';
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (active && active.session.workout !== workoutId) {
    const curName = getSessionWorkoutMeta(active.session).name;
    const newName = getPlanWorkoutDef(workoutId).name;
    showConfirm(
      'Switch workout?',
      'You have an unfinished ' + curName + ' session. Discard it and start ' + newName + '?',
      'Start ' + newName,
      function () {
        deleteSession(active.weekKey, active.session.id);
        ui.activeSessionRef = createSession(workoutId);
        ui.openExIndex = 0;
        ui.screen = 'workout';
        render();
        window.scrollTo(0, 0);
      },
      true
    );
    return;
  }
  ui.activeSessionRef = createSession(workoutId);
  ui.openExIndex = 0;
  ui.screen = 'workout';
  render();
  window.scrollTo(0, 0);
}

function findFirstIncompleteIndex(session) {
  const def = getSessionWorkoutMeta(session);
  for (let i = 0; i < def.items.length; i++) {
    if (!isExerciseComplete(session, def.items[i])) return i;
  }
  return Math.max(0, def.items.length - 1);
}

function deleteSession(weekKey, sessionId) {
  if (!db.weeks[weekKey]) return;
  db.weeks[weekKey].sessions = db.weeks[weekKey].sessions.filter(function (s) { return s.id !== sessionId; });
  if (db.weeks[weekKey].sessions.length === 0) delete db.weeks[weekKey];
  saveData();
}

function bindHomeEvents() {
  const active = findActiveSession();
  const nextId = active ? active.session.workout : getNextWorkoutId();
  document.getElementById('home-primary-btn').onclick = function () { openWorkout(nextId); };
  document.querySelectorAll('[data-start-workout]').forEach(function (btn) {
    btn.onclick = function () { openWorkout(Number(btn.dataset.startWorkout)); };
  });
  const clearTp = document.getElementById('clear-tomorrow-btn');
  if (clearTp) {
    clearTp.onclick = function () {
      db.tomorrowPlan = { text: '', workoutId: null };
      saveData();
      render();
    };
  }
}

/* ============================================================
   SCREEN 2: PROGRESS (Exercise charts, 12-week volume, Bodyweight)
   ============================================================ */
function getLoggedExerciseIds() {
  const seen = {};
  const ids = [];
  getAllSessions().forEach(function (entry) {
    const s = entry.session;
    if (!s.finished || !s.sets) return;
    Object.keys(s.sets).forEach(function (exId) {
      if (seen[exId]) return;
      if (s.skipped && s.skipped.indexOf(exId) !== -1) return;
      const sets = s.sets[exId] || [];
      const hasDone = sets.some(function (st) {
        return st.a ? (st.a.done || st.b.done) : st.done;
      });
      if (hasDone) {
        seen[exId] = true;
        ids.push(exId);
      }
    });
  });
  ids.sort(function (a, b) {
    return getExerciseDef(a, null).name.localeCompare(getExerciseDef(b, null).name);
  });
  return ids;
}

function buildExerciseProgress(exId) {
  const ex = getExerciseDef(exId, null);
  const assisted = isAssistedExercise(ex);
  const sessions = getAllSessions()
    .filter(function (entry) { return entry.session.finished; })
    .reverse();

  const weightPoints = [];
  const volPoints = [];
  let bestSet = null;
  let best1RM = 0;

  sessions.forEach(function (entry) {
    const s = entry.session;
    if (s.skipped && s.skipped.indexOf(exId) !== -1) return;
    const sets = (s.sets && s.sets[exId]) || [];
    const flat = [];
    sets.forEach(function (st) {
      if (st.a || st.b) {
        if (st.a && st.a.done) flat.push({ reps: Number(st.a.reps) || 0, weight: Number(st.a.weight) || 0 });
        if (st.b && st.b.done) flat.push({ reps: Number(st.b.reps) || 0, weight: Number(st.b.weight) || 0 });
      } else if (st.done) {
        flat.push({ reps: Number(st.reps) || 0, weight: Number(st.weight) || 0 });
      }
    });
    if (!flat.length) return;

    let topSet = flat[0];
    let sessVol = 0;
    let sessReps = 0;
    flat.forEach(function (st) {
      sessReps += st.reps;
      sessVol += st.reps * st.weight;
      if (assisted) {
        if (st.weight < topSet.weight || (st.weight === topSet.weight && st.reps > topSet.reps)) topSet = st;
        if (!bestSet || st.weight < bestSet.weight || (st.weight === bestSet.weight && st.reps > bestSet.reps)) bestSet = st;
      } else {
        if (st.weight > topSet.weight || (st.weight === topSet.weight && st.reps > topSet.reps)) topSet = st;
        if (!bestSet || st.weight > bestSet.weight || (st.weight === bestSet.weight && st.reps > bestSet.reps)) bestSet = st;
        const e1rm = calcEpley1RM(st.weight, st.reps);
        if (e1rm > best1RM) best1RM = e1rm;
      }
    });

    const lbl = formatShortDate(s.date);
    weightPoints.push({ label: lbl, value: topSet.weight });
    volPoints.push({ label: lbl, value: assisted ? sessReps : Math.round(sessVol) });
  });

  return {
    ex: ex,
    assisted: assisted,
    bestSet: bestSet,
    best1RM: best1RM,
    weightPoints: weightPoints,
    volPoints: volPoints
  };
}

function getLast12WeeksVolumeBars() {
  const keys = [];
  let cursor = getISOWeekInfo(new Date()).key;
  for (let i = 0; i < 12; i++) {
    keys.unshift(cursor);
    cursor = getPrevISOWeekKey(cursor);
  }
  return keys.map(function (wk) {
    const wkData = db.weeks[wk];
    let vol = 0;
    if (wkData && Array.isArray(wkData.sessions)) {
      wkData.sessions.forEach(function (s) {
        if (s.finished) vol += getSessionStats(s).volume;
      });
    }
    return {
      label: 'W' + wk.split('-W')[1],
      value: Math.round(vol)
    };
  });
}

function renderProgressHtml() {
  const loggedIds = getLoggedExerciseIds();
  if (loggedIds.length && (!ui.progressExId || loggedIds.indexOf(ui.progressExId) === -1)) {
    ui.progressExId = loggedIds[0];
  }

  let exSectionHtml = '';
  if (!loggedIds.length) {
    exSectionHtml = '<div class="card"><div class="label" style="font-size:15px;">Log and finish a workout to track exercise progress.</div></div>';
  } else {
    const data = buildExerciseProgress(ui.progressExId);
    const optionsHtml = loggedIds.map(function (id) {
      const name = getExerciseDef(id, null).name;
      return '<option value="' + escapeHtml(id) + '"' + (id === ui.progressExId ? ' selected' : '') + '>' + escapeHtml(name) + '</option>';
    }).join('');

    const bestLabel = data.bestSet
      ? formatWeight(data.bestSet.weight) + ' kg x ' + data.bestSet.reps
      : '-';

    const secondStatLabel = data.assisted ? 'Least assistance' : 'Est. 1RM (Epley)';
    const secondStatVal = data.assisted
      ? (data.bestSet ? formatWeight(data.bestSet.weight) + ' kg' : '-')
      : (data.best1RM > 0 ? formatWeight(data.best1RM) + ' kg' : '-');

    const topChartTitle = data.assisted
      ? 'Assistance weight over time (kg · lower is better)'
      : 'Top-set weight over time (kg)';
    const volChartTitle = data.assisted
      ? 'Total reps per session (assistance excluded from volume)'
      : 'Total volume per session (kg)';

    exSectionHtml =
      '<div class="stack-sm">' +
        '<select id="progress-ex-select" class="select-input" aria-label="Select exercise">' + optionsHtml + '</select>' +
        '<div class="stat-grid">' +
          '<div class="stat-box"><div class="label">' + (data.assisted ? 'Best set (assist)' : 'Best set') + '</div><div class="stat-num tabular">' + escapeHtml(bestLabel) + '</div></div>' +
          '<div class="stat-box"><div class="label">' + escapeHtml(secondStatLabel) + '</div><div class="stat-num tabular">' + escapeHtml(secondStatVal) + '</div></div>' +
        '</div>' +
        '<div class="card stack-sm">' +
          '<div class="label">' + escapeHtml(topChartTitle) + '</div>' +
          renderLineChartSvg(data.weightPoints, { height: 135, color: 'var(--text)', ariaLabel: topChartTitle }) +
        '</div>' +
        '<div class="card stack-sm">' +
          '<div class="label">' + escapeHtml(volChartTitle) + '</div>' +
          renderBarChartSvg(data.volPoints, { height: 100, ariaLabel: volChartTitle }) +
        '</div>' +
      '</div>';
  }

  const weekBars = getLast12WeeksVolumeBars();
  const weekVolHtml =
    '<div class="card stack-sm">' +
      '<div class="between">' +
        '<div class="h2">Weekly volume</div>' +
        '<div class="label">Last 12 weeks (kg)</div>' +
      '</div>' +
      renderBarChartSvg(weekBars, { height: 130, ariaLabel: 'Weekly volume over the last 12 weeks' }) +
    '</div>';

  const todayStr = toLocalDateStr(new Date());
  const bwSorted = (db.bodyweight || []).slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
  const todayEntry = bwSorted.find(function (x) { return x.date === todayStr; });
  const lastEntry = bwSorted.length ? bwSorted[bwSorted.length - 1] : null;
  const bwPoints = bwSorted.slice(-12).map(function (x) {
    return { label: formatShortDate(x.date), value: Number(x.weight) };
  });

  const bwHtml =
    '<div class="card stack-sm">' +
      '<div class="between">' +
        '<div class="h2">Bodyweight</div>' +
        (lastEntry ? '<div class="label tabular">Latest: ' + formatWeight(lastEntry.weight) + ' kg</div>' : '<div class="label">kg</div>') +
      '</div>' +
      '<div class="row">' +
        '<input type="number" inputmode="decimal" step="any" min="20" max="300" id="bw-input" class="note-input tabular" placeholder="' + (lastEntry ? formatWeight(lastEntry.weight) + ' kg' : 'Today in kg') + '" value="' + (todayEntry ? formatWeight(todayEntry.weight) : '') + '" aria-label="Today bodyweight in kg">' +
        '<button type="button" class="btn btn-primary btn-sm" style="width:auto;padding:0 18px;" id="bw-save-btn" aria-label="Save bodyweight">Save</button>' +
      '</div>' +
      (bwPoints.length
        ? '<div class="label" style="margin-top:4px;">Last ' + bwPoints.length + ' entries (kg)</div>' +
          renderLineChartSvg(bwPoints, { height: 110, color: 'var(--accent)', ariaLabel: 'Bodyweight trend' })
        : '<div class="label">No bodyweight entries yet.</div>') +
    '</div>';

  return (
    '<div class="stack">' +
      '<h1 class="h1">Progress</h1>' +
      exSectionHtml +
      weekVolHtml +
      bwHtml +
    '</div>'
  );
}

function bindProgressEvents() {
  const sel = document.getElementById('progress-ex-select');
  if (sel) {
    sel.onchange = function () {
      ui.progressExId = sel.value;
      render();
    };
  }
  const bwBtn = document.getElementById('bw-save-btn');
  if (bwBtn) {
    bwBtn.onclick = function () {
      const inp = document.getElementById('bw-input');
      const val = parseFloat(inp.value);
      if (isNaN(val) || val <= 0) return;
      const today = toLocalDateStr(new Date());
      if (!Array.isArray(db.bodyweight)) db.bodyweight = [];
      const existing = db.bodyweight.find(function (e) { return e.date === today; });
      const rounded = Math.round(val * 10) / 10;
      if (existing) {
        existing.weight = rounded;
      } else {
        db.bodyweight.push({ date: today, weight: rounded });
      }
      db.bodyweight.sort(function (a, b) { return a.date.localeCompare(b.date); });
      saveData();
      render();
    };
  }
}

/* ============================================================
   SCREEN 3: WORKOUT VIEW (with Suggestions & PR badges)
   ============================================================ */
function renderMediaHtml(exId, ex, isOpen) {
  const urls = getExerciseMediaUrls(exId, ex);
  let framesHtml = '';
  if (isOpen && urls.length) {
    framesHtml = urls.map(function (url, idx) {
      return '<img class="media-frame' + (idx === 0 ? ' visible' : '') + '" src="' + escapeHtml(url) + '" alt="' + escapeHtml(ex.name) + '" loading="lazy" decoding="async">';
    }).join('');
  }
  return (
    '<div class="media-box" data-media-ex="' + escapeHtml(exId) + '">' +
      '<div class="media-placeholder">' +
        SVG_DUMBBELL +
        '<span>' + escapeHtml(ex.name) + '</span>' +
      '</div>' +
      framesHtml +
    '</div>'
  );
}

function formatLastTimeLine(ex, prev) {
  if (!prev) return '';
  const parts = [];
  prev.sets.forEach(function (st) {
    if (ex.superset) {
      if (st.a && st.a.done) parts.push((ex.subA || 'Curl') + ' ' + st.a.reps + 'x' + formatWeight(st.a.weight) + 'kg');
      if (st.b && st.b.done) parts.push((ex.subB || 'Push') + ' ' + st.b.reps + 'x' + formatWeight(st.b.weight) + 'kg');
    } else if (st.done) {
      parts.push(st.reps + 'x' + formatWeight(st.weight) + 'kg');
    }
  });
  if (!parts.length) return '';
  return 'Last time (' + formatShortDate(prev.date) + '): ' + parts.join(', ');
}

function renderSingleSetControls(exId, setIdx, subKey, repVal, weightVal, isDone, isPr, item, unitLabel, titleText) {
  const inRange = repVal >= item.min && repVal <= item.max;
  const keyAttr = 'data-ex="' + escapeHtml(exId) + '" data-set="' + setIdx + '"' + (subKey ? ' data-sub="' + subKey + '"' : '');
  return (
    '<div class="set-top">' +
      '<div class="row" style="gap:8px;">' +
        '<span style="font-weight:600;font-size:15px;">' + escapeHtml(titleText) + '</span>' +
        (isDone && isPr ? '<span class="pr-tag" aria-label="Personal record">PR</span>' : '') +
      '</div>' +
      (isDone
        ? '<button type="button" class="btn btn-secondary btn-sm" data-action="undo" ' + keyAttr + ' aria-label="Undo ' + escapeHtml(titleText) + '">Undo</button>'
        : '<button type="button" class="btn btn-accent btn-sm" data-action="done" ' + keyAttr + ' aria-label="Mark ' + escapeHtml(titleText) + ' done">Done</button>') +
    '</div>' +
    '<div class="set-controls">' +
      '<div class="control-group">' +
        '<span class="control-label">Reps</span>' +
        '<div class="stepper">' +
          '<button type="button" class="step-btn" data-action="rep-minus" ' + keyAttr + ' aria-label="Decrease reps"' + (isDone ? ' disabled' : '') + '>-</button>' +
          '<span class="rep-readout tabular' + (inRange ? ' in-range' : '') + '">' + repVal + '</span>' +
          '<button type="button" class="step-btn" data-action="rep-plus" ' + keyAttr + ' aria-label="Increase reps"' + (isDone ? ' disabled' : '') + '>+</button>' +
        '</div>' +
      '</div>' +
      '<div class="control-group">' +
        '<span class="control-label">' + escapeHtml(unitLabel) + '</span>' +
        '<div class="stepper">' +
          '<button type="button" class="step-btn" data-action="w-minus" ' + keyAttr + ' aria-label="Decrease weight by 2.5 kg"' + (isDone ? ' disabled' : '') + '>-2.5</button>' +
          '<input type="number" inputmode="decimal" step="any" min="0.1" class="weight-input tabular" data-action="w-input" ' + keyAttr + ' placeholder="0" value="' + (weightVal > 0 ? formatWeight(weightVal) : '') + '" aria-label="Weight in ' + escapeHtml(unitLabel) + '"' + (isDone ? ' disabled' : '') + '>' +
          '<button type="button" class="step-btn" data-action="w-plus" ' + keyAttr + ' aria-label="Increase weight by 2.5 kg"' + (isDone ? ' disabled' : '') + '>+2.5</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function renderWorkoutHtml() {
  const session = getSessionByRef(ui.activeSessionRef);
  if (!session) {
    ui.screen = 'home';
    return renderHomeHtml();
  }
  const def = getSessionWorkoutMeta(session);
  const stats = getSessionStats(session);
  const elapsed = getElapsedActiveSeconds(session);
  const pct = stats.totalSets ? Math.round((stats.doneSets / stats.totalSets) * 100) : 0;
  const isPaused = session.pausedAt !== null && session.pausedAt !== undefined;
  const hasPrevWorkout = !!getLastFinishedForWorkout(session.workout, session.id);
  const allHandled = def.items.every(function (item) { return isExerciseComplete(session, item); });

  const cardsHtml = def.items.map(function (item, idx) {
    const ex = getExerciseDef(item.exId, session);
    const isOpen = ui.openExIndex === idx;
    const isSkipped = session.skipped && session.skipped.indexOf(item.exId) !== -1;
    const isDone = isExerciseComplete(session, item);
    const prev = getLastExerciseHistory(item.exId, session.id);
    const lastLine = formatLastTimeLine(ex, prev);
    const sug = getExerciseSuggestion(item.exId, item, session, session.id);
    const sets = session.sets[item.exId] || [];

    let bodyHtml = '';
    if (isOpen) {
      const setsHtml = sets.map(function (st, sIdx) {
        if (ex.superset) {
          const bothDone = st.a.done && st.b.done;
          return (
            '<div class="set-block' + (bothDone ? ' done' : '') + '">' +
              renderSingleSetControls(item.exId, sIdx, 'a', st.a.reps, st.a.weight, st.a.done, !!st.a.pr, item, ex.unit, 'Set ' + (sIdx + 1) + ' · ' + (ex.subA || 'Curl')) +
              '<div class="superset-sub">' +
                renderSingleSetControls(item.exId, sIdx, 'b', st.b.reps, st.b.weight, st.b.done, !!st.b.pr, item, ex.unit, 'Set ' + (sIdx + 1) + ' · ' + (ex.subB || 'Pushdown')) +
              '</div>' +
            '</div>'
          );
        }
        return (
          '<div class="set-block' + (st.done ? ' done' : '') + '">' +
            renderSingleSetControls(item.exId, sIdx, '', st.reps, st.weight, st.done, !!st.pr, item, ex.unit, 'Set ' + (sIdx + 1)) +
          '</div>'
        );
      }).join('');

      bodyHtml =
        '<div class="ex-body">' +
          renderMediaHtml(item.exId, ex, true) +
          (ex.cue ? '<p class="form-cue">' + escapeHtml(ex.cue) + '</p>' : '') +
          (lastLine ? '<p class="last-time tabular">' + escapeHtml(lastLine) + '</p>' : '') +
          (sug ? '<p class="suggestion-line tabular">' + escapeHtml(sug.text) + '</p>' : '') +
          (isSkipped
            ? '<div class="label">Skipped for this session</div>'
            : '<div class="stack-sm">' + setsHtml + '</div>' +
              '<button type="button" class="btn btn-secondary btn-sm" style="align-self:flex-start;" data-add-set="' + escapeHtml(item.exId) + '" aria-label="Add extra set">+ Add set</button>') +
          '<div class="between">' +
            '<span class="label">Rest: ' + getItemRestSeconds(item, ex) + 's</span>' +
            '<button type="button" class="btn btn-ghost btn-sm" data-skip-ex="' + escapeHtml(item.exId) + '" aria-label="' + (isSkipped ? 'Unskip ' : 'Skip ') + escapeHtml(ex.name) + '">' + (isSkipped ? 'Unskip exercise' : 'Skip exercise') + '</button>' +
          '</div>' +
        '</div>';
    }

    return (
      '<section class="ex-card' + (isDone ? ' completed' : '') + (isOpen ? ' is-open' : '') + '" data-ex-card="' + idx + '">' +
        '<button type="button" class="ex-head" data-toggle-ex="' + idx + '" aria-expanded="' + isOpen + '" aria-label="Toggle ' + escapeHtml(ex.name) + '">' +
          '<div>' +
            '<div class="ex-title">' + escapeHtml(ex.name) + '</div>' +
            '<div class="ex-sub">' + item.sets + ' sets, ' + item.min + '-' + item.max + ' reps' + (isSkipped ? ' · Skipped' : '') + '</div>' +
          '</div>' +
          (isDone ? '<span class="check-badge" aria-label="Completed">' + SVG_CHECK + '</span>' : '<span class="label">' + (isOpen ? 'Hide' : 'Open') + '</span>') +
        '</button>' +
        bodyHtml +
      '</section>'
    );
  }).join('');

  return (
    '<header class="workout-header">' +
      '<div class="between">' +
        '<button type="button" class="btn btn-ghost" style="padding:0 8px 0 0;justify-content:flex-start;" id="workout-back" aria-label="Back to home">' + SVG_BACK + '<span>Back</span></button>' +
        '<div style="font-weight:600;">' + escapeHtml(def.name) + '</div>' +
        (session.startedAt
          ? '<button type="button" class="btn btn-secondary btn-sm" id="timer-pause-btn" aria-label="' + (isPaused ? 'Resume session timer' : 'Pause session timer') + '">' + (isPaused ? 'Resume' : 'Pause') + '</button>'
          : '<span class="label">Target ' + getTargetMinutes() + ':00</span>') +
      '</div>' +
      '<div class="timer-row">' +
        '<div>' +
          '<div id="session-clock" class="timer-value tabular">' + formatClock(elapsed) + '</div>' +
          '<div id="pace-label" class="label tabular">' + escapeHtml(computePaceText(session, elapsed)) + '</div>' +
        '</div>' +
        '<div style="text-align:right;">' +
          '<div class="label">Target ' + getTargetMinutes() + ':00</div>' +
          '<div class="label tabular">' + stats.doneSets + ' / ' + stats.totalSets + ' sets</div>' +
        '</div>' +
      '</div>' +
      '<div class="progress-track" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100">' +
        '<div class="progress-fill" style="width:' + pct + '%;"></div>' +
      '</div>' +
    '</header>' +
    '<div class="utility-bar">' +
      (hasPrevWorkout ? '<button type="button" class="btn btn-secondary btn-sm" id="repeat-last-btn" aria-label="Repeat last session">Repeat last session</button>' : '') +
      '<button type="button" class="btn btn-ghost btn-sm" id="reset-workout-btn" aria-label="Reset workout">Reset workout</button>' +
    '</div>' +
    '<div>' + cardsHtml + '</div>' +
    '<div class="card stack-sm" style="margin-top:16px;">' +
      '<label class="label" for="workout-session-note">Workout note (optional)</label>' +
      '<textarea id="workout-session-note" class="note-input" rows="2" placeholder="Overall note for this workout...">' + escapeHtml(session.sessionNote || '') + '</textarea>' +
    '</div>' +
    '<div style="margin-top:16px;">' +
      '<button type="button" class="btn ' + (allHandled ? 'btn-accent' : 'btn-primary') + '" style="width:100%;" id="finish-workout-btn" aria-label="Finish workout">Finish workout</button>' +
    '</div>'
  );
}

function getNextRestLabel(session, currentExId, currentSetIdx) {
  const def = getSessionWorkoutMeta(session);
  const curIdx = def.items.findIndex(function (it) { return it.exId === currentExId; });
  const curItem = def.items[curIdx];
  const setsLen = (session.sets && session.sets[currentExId]) ? session.sets[currentExId].length : 0;
  if (currentSetIdx + 1 < Math.max(curItem.sets, setsLen)) {
    return 'Set ' + (currentSetIdx + 2) + ' of ' + getExerciseDef(currentExId, session).name;
  }
  for (let i = curIdx + 1; i < def.items.length; i++) {
    if (!isExerciseComplete(session, def.items[i])) {
      return 'Set 1 of ' + getExerciseDef(def.items[i].exId, session).name;
    }
  }
  return 'Finish workout';
}

function bindWorkoutEvents() {
  const session = getSessionByRef(ui.activeSessionRef);
  if (!session) return;
  const def = getSessionWorkoutMeta(session);

  document.querySelectorAll('.media-box img').forEach(function (img) {
    img.onerror = function () {
      const box = img.closest('.media-box');
      if (box) {
        box.dataset.failed = 'true';
        box.querySelectorAll('img').forEach(function (el) { el.remove(); });
      }
    };
  });

  document.getElementById('workout-back').onclick = function () {
    ui.screen = 'home';
    render();
    window.scrollTo(0, 0);
  };

  const pauseBtn = document.getElementById('timer-pause-btn');
  if (pauseBtn) {
    pauseBtn.onclick = function () {
      if (session.pausedAt !== null && session.pausedAt !== undefined) {
        session.startedAt = Date.now();
        session.pausedAt = null;
      } else {
        session.activeSeconds = getElapsedActiveSeconds(session);
        session.pausedAt = Date.now();
      }
      saveData();
      render();
    };
  }

  const repeatBtn = document.getElementById('repeat-last-btn');
  if (repeatBtn) {
    repeatBtn.onclick = function () {
      const prev = getLastFinishedForWorkout(session.workout, session.id);
      if (!prev) return;
      def.items.forEach(function (item) {
        const ex = getExerciseDef(item.exId, session);
        const prevSets = prev.sets && prev.sets[item.exId];
        if (!prevSets) return;
        session.sets[item.exId].forEach(function (st, i) {
          const p = prevSets[i] || prevSets[0];
          if (!p) return;
          if (ex.superset && p.a && p.b) {
            if (!st.a.done) { st.a.reps = p.a.reps; st.a.weight = p.a.weight; }
            if (!st.b.done) { st.b.reps = p.b.reps; st.b.weight = p.b.weight; }
          } else if (!st.done) {
            st.reps = p.reps;
            st.weight = p.weight;
          }
        });
      });
      saveData();
      render();
    };
  }

  document.getElementById('reset-workout-btn').onclick = function () {
    showConfirm(
      'Reset workout?',
      'All logged sets and timer progress for this session will be cleared.',
      'Reset',
      function () {
        const wk = ui.activeSessionRef.weekKey;
        const wid = session.workout;
        deleteSession(wk, session.id);
        stopRestTimer();
        ui.activeSessionRef = createSession(wid);
        ui.openExIndex = 0;
        render();
      },
      true
    );
  };

  document.querySelectorAll('[data-toggle-ex]').forEach(function (btn) {
    btn.onclick = function () {
      const idx = Number(btn.dataset.toggleEx);
      ui.openExIndex = ui.openExIndex === idx ? -1 : idx;
      render();
    };
  });

  document.querySelectorAll('[data-skip-ex]').forEach(function (btn) {
    btn.onclick = function () {
      const exId = btn.dataset.skipEx;
      const pos = session.skipped.indexOf(exId);
      if (pos === -1) {
        session.skipped.push(exId);
        ui.openExIndex = findFirstIncompleteIndex(session);
      } else {
        session.skipped.splice(pos, 1);
      }
      saveData();
      render();
    };
  });

  const sessionNoteInp = document.getElementById('workout-session-note');
  if (sessionNoteInp) {
    sessionNoteInp.addEventListener('input', function () {
      session.sessionNote = sessionNoteInp.value;
      saveData();
    });
  }

  document.querySelectorAll('[data-add-set]').forEach(function (btn) {
    btn.onclick = function () {
      const exId = btn.dataset.addSet;
      const ex = getExerciseDef(exId, session);
      const arr = session.sets[exId] || [];
      const last = arr[arr.length - 1];
      if (ex.superset) {
        arr.push({
          a: { reps: last && last.a ? last.a.reps : 10, weight: last && last.a ? last.a.weight : 0, done: false, pr: false },
          b: { reps: last && last.b ? last.b.reps : 10, weight: last && last.b ? last.b.weight : 0, done: false, pr: false },
          done: false
        });
      } else {
        arr.push({
          reps: last ? last.reps : 10,
          weight: last ? last.weight : 0,
          done: false,
          pr: false
        });
      }
      session.sets[exId] = arr;
      saveData();
      render();
    };
  });

  function getTargetSetObj(el) {
    const exId = el.dataset.ex;
    const setIdx = Number(el.dataset.set);
    const sub = el.dataset.sub;
    const st = session.sets[exId][setIdx];
    return { exId: exId, setIdx: setIdx, sub: sub, parent: st, target: sub ? st[sub] : st };
  }

  document.querySelectorAll('[data-action]').forEach(function (el) {
    const act = el.dataset.action;
    if (act === 'w-input') {
      el.addEventListener('input', function () {
        const info = getTargetSetObj(el);
        const val = parseFloat(el.value);
        info.target.weight = isNaN(val) ? 0 : Math.max(0, val);
        saveData();
      });
      return;
    }

    el.onclick = function () {
      const info = getTargetSetObj(el);
      const ex = getExerciseDef(info.exId, session);

      if (act === 'rep-minus') {
        info.target.reps = Math.max(1, (Number(info.target.reps) || 1) - 1);
        saveData();
        render();
      } else if (act === 'rep-plus') {
        info.target.reps = (Number(info.target.reps) || 0) + 1;
        saveData();
        render();
      } else if (act === 'w-minus') {
        info.target.weight = Math.max(0, Math.round(((Number(info.target.weight) || 0) - 2.5) * 100) / 100);
        saveData();
        render();
      } else if (act === 'w-plus') {
        info.target.weight = Math.round(((Number(info.target.weight) || 0) + 2.5) * 100) / 100;
        saveData();
        render();
      } else if (act === 'undo') {
        info.target.done = false;
        info.target.pr = false;
        if (ex.superset) info.parent.done = false;
        saveData();
        render();
      } else if (act === 'done') {
        const repNum = Number(info.target.reps) || 0;
        const weightNum = Number(info.target.weight) || 0;
        if (repNum <= 0 || weightNum <= 0) {
          showAlert(
            'Enter weight and reps',
            'Both ' + (ex.unit || 'kg') + ' and reps are required. 0 is not allowed.',
            function () {
              if (weightNum <= 0) {
                const subSel = info.sub ? '[data-sub="' + info.sub + '"]' : ':not([data-sub])';
                const inp = document.querySelector('input[data-action="w-input"][data-ex="' + info.exId + '"][data-set="' + info.setIdx + '"]' + subSel);
                if (inp) inp.focus();
              }
            }
          );
          return;
        }
        unlockAudio();
        vibrate(15);
        if (!session.startedAt) {
          session.startedAt = Date.now();
          session.pausedAt = null;
        }
        info.target.pr = checkIsPersonalRecord(session, info.exId, info.setIdx, info.sub, info.target.reps, info.target.weight);
        info.target.done = true;
        if (info.target.pr) launchPrConfetti();
        const setNowDone = ex.superset ? (info.parent.a.done && info.parent.b.done) : true;
        if (ex.superset) info.parent.done = setNowDone;
        saveData();

        if (setNowDone) {
          const curItemIdx = def.items.findIndex(function (it) { return it.exId === info.exId; });
          const curItem = def.items[curItemIdx];
          const restSec = getItemRestSeconds(curItem, ex);
          const nextLabel = getNextRestLabel(session, info.exId, info.setIdx);
          startRestTimer(restSec, nextLabel);

          if (isExerciseComplete(session, curItem)) {
            let nextOpen = -1;
            for (let i = curItemIdx + 1; i < def.items.length; i++) {
              if (!isExerciseComplete(session, def.items[i])) {
                nextOpen = i;
                break;
              }
            }
            ui.openExIndex = nextOpen;
            render();
            if (nextOpen !== -1) {
              setTimeout(function () {
                const card = document.querySelector('[data-ex-card="' + nextOpen + '"]');
                if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 50);
            }
            return;
          }
        }
        render();
      }
    };
  });

  document.getElementById('finish-workout-btn').onclick = function () {
    const stats = getSessionStats(session);
    if (stats.loggedSets === 0) {
      showConfirm(
        'No sets logged',
        'Log at least one set before finishing, or discard this session.',
        'Discard session',
        function () {
          deleteSession(ui.activeSessionRef.weekKey, session.id);
          stopRestTimer();
          ui.activeSessionRef = null;
          ui.screen = 'home';
          render();
        },
        true
      );
      return;
    }
    const prevSame = getLastFinishedForWorkout(session.workout, session.id);
    let volumeDeltaText = '';
    if (prevSame) {
      const prevVol = getSessionStats(prevSame).volume;
      if (prevVol > 0) {
        const pctDiff = Math.round(((stats.volume - prevVol) / prevVol) * 100);
        if (pctDiff > 0) volumeDeltaText = '+' + pctDiff + '% volume vs last ' + def.name;
        else if (pctDiff < 0) volumeDeltaText = pctDiff + '% volume vs last ' + def.name;
        else volumeDeltaText = 'Same volume as last ' + def.name;
      }
    }

    session.activeSeconds = getElapsedActiveSeconds(session);
    session.pausedAt = Date.now();
    session.finished = true;
    saveData();
    stopRestTimer();

    const b = getISOWeekBounds(ui.activeSessionRef.weekKey);
    ui.lastFinished = {
      weekKey: ui.activeSessionRef.weekKey,
      sessionId: session.id,
      workoutName: def.name,
      activeSeconds: session.activeSeconds,
      sets: stats.loggedSets,
      reps: stats.totalReps,
      volume: stats.volume,
      volumeDeltaText: volumeDeltaText,
      prs: getSessionPRs(session),
      savedLabel: 'Saved to Week ' + b.week + ', ' + MONTHS_LONG[b.thu.getMonth()] + ' ' + b.thu.getFullYear() + '.'
    };
    ui.activeSessionRef = null;
    ui.screen = 'finish';
    render();
    window.scrollTo(0, 0);
  };
}

/* ============================================================
   SCREEN 4: FINISH (Volume comparison, PR list, Session note)
   ============================================================ */
function renderFinishHtml() {
  const f = ui.lastFinished;
  if (!f) {
    ui.screen = 'home';
    return renderHomeHtml();
  }
  const savedSession = getSessionByRef({ weekKey: f.weekKey, sessionId: f.sessionId });
  const curNote = (savedSession && savedSession.sessionNote) || '';

  const prsHtml = f.prs && f.prs.length
    ? '<div class="card stack-sm">' +
        '<div class="between"><div class="h2">Personal records</div><span class="pr-tag">' + f.prs.length + ' PR</span></div>' +
        '<div class="pr-list">' +
          f.prs.map(function (p) {
            return '<div class="between" style="font-size:14px;"><span>' + escapeHtml(p.name) + '</span><span class="tabular" style="color:var(--accent);font-weight:500;">' + escapeHtml(p.detail) + '</span></div>';
          }).join('') +
        '</div>' +
      '</div>'
    : '';

  const tp = db.tomorrowPlan || { text: '', workoutId: null };
  const workoutOptsHtml = '<option value="">Any workout</option>' + getPlanWorkouts().map(function (w) {
    return '<option value="' + w.id + '"' + (tp.workoutId === w.id ? ' selected' : '') + '>' + escapeHtml(w.name) + '</option>';
  }).join('');

  return (
    '<div class="stack" style="padding-top:16px;">' +
      '<div class="row">' +
        '<span class="check-badge" style="width:32px;height:32px;">' + SVG_CHECK + '</span>' +
        '<h1 class="h1">' + escapeHtml(f.workoutName) + ' complete</h1>' +
      '</div>' +
      '<div class="label" style="font-size:15px;">' + escapeHtml(f.savedLabel) + '</div>' +
      (f.volumeDeltaText ? '<div class="label tabular" style="font-size:14px;color:var(--text);">' + escapeHtml(f.volumeDeltaText) + '</div>' : '') +
      '<div class="stat-grid">' +
        '<div class="stat-box"><div class="label">Active time</div><div class="stat-num tabular">' + formatClock(f.activeSeconds) + '</div></div>' +
        '<div class="stat-box"><div class="label">Total sets</div><div class="stat-num tabular">' + f.sets + '</div></div>' +
        '<div class="stat-box"><div class="label">Total reps</div><div class="stat-num tabular">' + f.reps + '</div></div>' +
        '<div class="stat-box"><div class="label">Volume (kg)</div><div class="stat-num tabular">' + formatWeight(f.volume) + '</div></div>' +
      '</div>' +
      prsHtml +
      '<div class="card stack-sm">' +
        '<label class="label" for="finish-session-note">Session note (optional)</label>' +
        '<input type="text" id="finish-session-note" class="note-input" placeholder="How did this session feel?" value="' + escapeHtml(curNote) + '">' +
      '</div>' +
      '<div class="card stack-sm">' +
        '<div class="between">' +
          '<label class="label" for="finish-tomorrow-note" style="color:var(--accent);font-weight:600;">Tomorrow\'s review / plan</label>' +
          '<select id="finish-tomorrow-workout" class="select-input" style="width:auto;min-height:36px;padding:4px 10px;font-size:13px;" aria-label="Workout for tomorrow">' + workoutOptsHtml + '</select>' +
        '</div>' +
        '<textarea id="finish-tomorrow-note" class="note-input" rows="2" placeholder="What should you do new tomorrow? (e.g. try incline smith, add 1 set)">' + escapeHtml(tp.text || '') + '</textarea>' +
      '</div>' +
      '<button type="button" class="btn btn-primary" id="finish-home-btn" aria-label="Back to home">Back to home</button>' +
    '</div>'
  );
}

function bindFinishEvents() {
  const f = ui.lastFinished;
  const noteInput = document.getElementById('finish-session-note');
  if (noteInput && f) {
    noteInput.addEventListener('input', function () {
      const s = getSessionByRef({ weekKey: f.weekKey, sessionId: f.sessionId });
      if (s) {
        s.sessionNote = noteInput.value;
        saveData();
      }
    });
  }
  const tpNote = document.getElementById('finish-tomorrow-note');
  const tpWorkout = document.getElementById('finish-tomorrow-workout');
  if (tpNote && tpWorkout) {
    const saveTomorrow = function () {
      db.tomorrowPlan = {
        text: tpNote.value,
        workoutId: tpWorkout.value ? Number(tpWorkout.value) : null
      };
      saveData();
    };
    tpNote.addEventListener('input', saveTomorrow);
    tpWorkout.addEventListener('change', saveTomorrow);
  }
  document.getElementById('finish-home-btn').onclick = function () {
    ui.screen = 'home';
    render();
    window.scrollTo(0, 0);
  };
}

/* ============================================================
   SCREEN 5: HISTORY (Calendar + Day Detail + Weekly Breakdown)
   ============================================================ */
function getMonthKeyFromWeek(weekKey) {
  const b = getISOWeekBounds(weekKey);
  return b.thu.getFullYear() + '-' + String(b.thu.getMonth() + 1).padStart(2, '0');
}

function formatMonthTitle(monthKey) {
  const p = monthKey.split('-').map(Number);
  return MONTHS_LONG[p[1] - 1] + ' ' + p[0];
}

function getSessionsByDateMap() {
  const map = {};
  getAllSessions().forEach(function (entry) {
    const s = entry.session;
    if (!s.finished || getSessionStats(s).loggedSets === 0) return;
    if (!s.date) return;
    if (!map[s.date]) map[s.date] = [];
    map[s.date].push(entry);
  });
  return map;
}

function renderSessionDetailHtml(weekKey, s) {
  const def = getSessionWorkoutMeta(s);
  const sessionPRs = getSessionPRs(s);
  const stats = getSessionStats(s);
  const exRows = def.items.map(function (item) {
    const ex = getExerciseDef(item.exId, s);
    const sets = (s.sets && s.sets[item.exId]) || [];
    const note = (s.notes && s.notes[item.exId]) || '';
    const setLines = [];

    sets.forEach(function (st, idx) {
      if (ex.superset) {
        ['a', 'b'].forEach(function (sub) {
          if (!st[sub] || !st[sub].done) return;
          const label = 'Set ' + (idx + 1) + ' · ' + (sub === 'a' ? (ex.subA || 'Curl') : (ex.subB || 'Pushdown'));
          setLines.push(renderHistSetRow(weekKey, s.id, item.exId, idx, sub, label, st[sub].reps, st[sub].weight, !!st[sub].pr));
        });
      } else if (st.done) {
        setLines.push(renderHistSetRow(weekKey, s.id, item.exId, idx, '', 'Set ' + (idx + 1), st.reps, st.weight, !!st.pr));
      }
    });

    if (!setLines.length) return '';
    return (
      '<div>' +
        '<div class="between" style="margin-bottom:4px;">' +
          '<span style="font-weight:600;font-size:14px;">' + escapeHtml(ex.name) + '</span>' +
          '<span class="label">' + item.sets + 'x' + item.min + '-' + item.max + '</span>' +
        '</div>' +
        setLines.join('') +
        (note ? '<div class="label" style="margin-top:4px;">Note: ' + escapeHtml(note) + '</div>' : '') +
      '</div>'
    );
  }).join('');

  return (
    '<div class="hist-session">' +
      '<div class="between">' +
        '<div class="row" style="gap:8px;">' +
          '<span style="font-weight:600;">' + escapeHtml(def.name) + ' · ' + escapeHtml(formatShortDate(s.date)) + '</span>' +
          (sessionPRs.length ? '<span class="pr-tag">' + sessionPRs.length + ' PR</span>' : '') +
        '</div>' +
        '<div class="row" style="gap:8px;">' +
          '<span class="label tabular">' + formatClock(s.activeSeconds || 0) + ' · ' + formatWeight(stats.volume) + ' kg</span>' +
          '<button type="button" class="btn btn-ghost btn-sm" style="min-height:36px;padding:0 6px;color:var(--danger);" data-delete-session-wk="' + escapeHtml(weekKey) + '" data-delete-session-id="' + escapeHtml(s.id) + '" aria-label="Delete session">Delete</button>' +
        '</div>' +
      '</div>' +
      (s.sessionNote ? '<div style="font-size:14px;color:var(--text);background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:8px 10px;"><span class="label" style="font-weight:600;">Workout note:</span> ' + escapeHtml(s.sessionNote) + '</div>' : '') +
      exRows +
    '</div>'
  );
}

function renderHistoryCalendarHtml(sessionsByDate) {
  const year = ui.calendarYear;
  const month = ui.calendarMonth;
  const todayStr = toLocalDateStr(new Date());
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday = 0

  const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(function (d) {
    return '<div>' + d + '</div>';
  }).join('');

  const cells = [];
  for (let i = 0; i < startOffset; i++) {
    cells.push('<div class="cal-day-spacer"></div>');
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
    const hasWorkout = !!(sessionsByDate[dateStr] && sessionsByDate[dateStr].length);
    const isToday = dateStr === todayStr;
    const isSelected = dateStr === ui.selectedHistoryDate;
    const cls = 'cal-day tabular' +
      (hasWorkout ? ' has-workout' : '') +
      (isToday ? ' is-today' : '') +
      (isSelected ? ' is-selected' : '');
    cells.push(
      '<button type="button" class="' + cls + '" data-cal-date="' + dateStr + '" aria-label="' + escapeHtml(formatFullDate(dateStr)) + (hasWorkout ? ', workout logged' : '') + '">' +
        '<span>' + day + '</span>' +
        (hasWorkout ? '<span class="cal-dot"></span>' : '') +
      '</button>'
    );
  }

  return (
    '<div class="cal-card">' +
      '<div class="cal-header">' +
        '<button type="button" class="cal-nav-btn" id="cal-prev" aria-label="Previous month">&lsaquo;</button>' +
        '<div class="row" style="gap:8px;">' +
          '<span class="h2">' + escapeHtml(MONTHS_LONG[month] + ' ' + year) + '</span>' +
          '<button type="button" class="btn btn-ghost btn-sm" style="min-height:32px;padding:0 8px;font-size:12px;" id="cal-today" aria-label="Jump to today">Today</button>' +
        '</div>' +
        '<button type="button" class="cal-nav-btn" id="cal-next" aria-label="Next month">&rsaquo;</button>' +
      '</div>' +
      '<div class="cal-weekdays">' + weekdays + '</div>' +
      '<div class="cal-grid">' + cells.join('') + '</div>' +
    '</div>'
  );
}

function renderSelectedDayDetailHtml(sessionsByDate) {
  const dateStr = ui.selectedHistoryDate;
  if (!dateStr) return '';
  const entries = sessionsByDate[dateStr] || [];
  const bwEntry = (db.bodyweight || []).find(function (b) { return b.date === dateStr; });

  let bodyHtml = '';
  if (!entries.length && !bwEntry) {
    bodyHtml = '<div class="label" style="font-size:14px;">No workouts logged on this day.</div>';
  } else {
    const bwHtml = bwEntry
      ? '<div class="label tabular" style="font-size:14px;color:var(--accent);font-weight:500;">Bodyweight: ' + formatWeight(bwEntry.weight) + ' kg</div>'
      : '';
    const sessionsHtml = entries.map(function (entry) {
      return renderSessionDetailHtml(entry.weekKey, entry.session);
    }).join('');
    bodyHtml = bwHtml + (sessionsHtml || '<div class="label" style="font-size:14px;">No workouts logged on this day.</div>');
  }

  return (
    '<div class="card stack-sm" aria-live="polite">' +
      '<div class="between">' +
        '<div class="h2">' + escapeHtml(formatFullDate(dateStr)) + '</div>' +
        (entries.length ? '<span class="label tabular">' + entries.length + ' workout' + (entries.length === 1 ? '' : 's') + '</span>' : '') +
      '</div>' +
      bodyHtml +
    '</div>'
  );
}

function sessionMatchesQuery(s, q) {
  if (!q) return true;
  const def = getSessionWorkoutMeta(s);
  if ((def.name || '').toLowerCase().indexOf(q) !== -1) return true;
  if ((s.sessionNote || '').toLowerCase().indexOf(q) !== -1) return true;
  return def.items.some(function (item) {
    const ex = getExerciseDef(item.exId, s);
    if ((ex.name || '').toLowerCase().indexOf(q) !== -1) return true;
    const note = (s.notes && s.notes[item.exId]) || '';
    return note.toLowerCase().indexOf(q) !== -1;
  });
}

function renderHistoryResultsHtml() {
  const q = (ui.historySearch || '').trim().toLowerCase();
  if (q) {
    const matches = getAllSessions().filter(function (entry) {
      const s = entry.session;
      return s.finished && getSessionStats(s).loggedSets > 0 && sessionMatchesQuery(s, q);
    });
    if (!matches.length) {
      return '<div class="card"><div class="label" style="font-size:15px;">No matching workouts or exercises found.</div></div>';
    }
    return (
      '<div class="card stack-sm">' +
        '<div class="label tabular">' + matches.length + ' matching session' + (matches.length === 1 ? '' : 's') + '</div>' +
        matches.map(function (entry) {
          return renderSessionDetailHtml(entry.weekKey, entry.session);
        }).join('') +
      '</div>'
    );
  }

  const sessionsByDate = getSessionsByDateMap();
  const calendarHtml = renderHistoryCalendarHtml(sessionsByDate);
  const selectedDayHtml = renderSelectedDayDetailHtml(sessionsByDate);

  const monthsMap = {};
  Object.keys(db.weeks).forEach(function (wk) {
    const sessions = (db.weeks[wk].sessions || []).filter(function (s) {
      return s.finished && getSessionStats(s).loggedSets > 0;
    });
    if (!sessions.length) return;
    const mKey = getMonthKeyFromWeek(wk);
    if (!monthsMap[mKey]) monthsMap[mKey] = [];
    let wSets = 0, wVol = 0, wTime = 0;
    sessions.forEach(function (s) {
      const st = getSessionStats(s);
      wSets += st.loggedSets;
      wVol += st.volume;
      wTime += s.activeSeconds || 0;
    });
    monthsMap[mKey].push({
      weekKey: wk,
      sessions: sessions.slice().sort(function (a, b) { return getSessionTimestamp(b) - getSessionTimestamp(a); }),
      workouts: sessions.length,
      sets: wSets,
      volume: Math.round(wVol * 10) / 10,
      time: wTime
    });
  });

  const monthKeys = Object.keys(monthsMap).sort().reverse();
  let monthsHtml = '';
  if (!monthKeys.length) {
    monthsHtml = '<div class="card"><div class="label" style="font-size:15px;">No workout history yet. Finish a session to start.</div></div>';
  } else {
    monthsHtml = monthKeys.map(function (mKey) {
      const weeks = monthsMap[mKey].sort(function (a, b) { return b.weekKey.localeCompare(a.weekKey); });
      let mWorkouts = 0, mSets = 0, mVol = 0, maxWeekVol = 0;
      weeks.forEach(function (w) {
        mWorkouts += w.workouts;
        mSets += w.sets;
        mVol += w.volume;
        if (w.volume > maxWeekVol) maxWeekVol = w.volume;
      });

      const weeksHtml = weeks.map(function (w) {
        const isOpen = !!ui.expandedWeeks[w.weekKey];
        const barPct = maxWeekVol > 0 ? Math.max(4, Math.round((w.volume / maxWeekVol) * 100)) : 4;
        let detailHtml = '';

        if (isOpen) {
          detailHtml = '<div class="week-detail">' + w.sessions.map(function (s) {
            return renderSessionDetailHtml(w.weekKey, s);
          }).join('') + '</div>';
        }

        return (
          '<div class="week-card">' +
            '<button type="button" class="week-head" data-toggle-week="' + w.weekKey + '" aria-expanded="' + isOpen + '" aria-label="Toggle ' + escapeHtml(formatWeekLabel(w.weekKey)) + '">' +
              '<div class="between">' +
                '<span style="font-weight:600;">' + escapeHtml(formatWeekLabel(w.weekKey)) + '</span>' +
                '<span class="label tabular">' + w.workouts + ' workout' + (w.workouts === 1 ? '' : 's') + '</span>' +
              '</div>' +
              '<div class="between label tabular">' +
                '<span>' + formatWeight(w.volume) + ' kg</span>' +
                '<span>' + formatClock(w.time) + '</span>' +
              '</div>' +
              '<div class="vol-bar-track"><div class="vol-bar-fill" style="width:' + barPct + '%;"></div></div>' +
            '</button>' +
            detailHtml +
          '</div>'
        );
      }).join('');

      return (
        '<section class="month-block">' +
          '<div class="between">' +
            '<div>' +
              '<h2 class="h2">' + escapeHtml(formatMonthTitle(mKey)) + '</h2>' +
              '<div class="label tabular">' + mWorkouts + ' workouts · ' + mSets + ' sets · ' + formatWeight(Math.round(mVol * 10) / 10) + ' kg</div>' +
            '</div>' +
            '<button type="button" class="btn btn-secondary btn-sm" data-export-csv="' + mKey + '" aria-label="Export CSV for ' + escapeHtml(formatMonthTitle(mKey)) + '">Export CSV</button>' +
          '</div>' +
          weeksHtml +
        '</section>'
      );
    }).join('');
  }

  return calendarHtml + selectedDayHtml + monthsHtml;
}

function renderHistoryHtml() {
  return (
    '<div class="stack">' +
      '<h1 class="h1">History</h1>' +
      '<input type="search" id="history-search" class="note-input" placeholder="Search exercises, workouts, or notes..." value="' + escapeHtml(ui.historySearch || '') + '" aria-label="Search workout history">' +
      '<div id="history-results" class="stack">' + renderHistoryResultsHtml() + '</div>' +
    '</div>'
  );
}

function renderHistSetRow(weekKey, sessionId, exId, setIdx, sub, label, reps, weight, isPr) {
  const e = ui.editingSet;
  const isEditing = e && e.weekKey === weekKey && e.sessionId === sessionId && e.exId === exId && e.setIdx === setIdx && e.sub === sub;
  const attrs = 'data-wk="' + weekKey + '" data-sid="' + sessionId + '" data-ex="' + escapeHtml(exId) + '" data-idx="' + setIdx + '" data-sub="' + sub + '"';

  if (isEditing) {
    return (
      '<div class="hist-set-row">' +
        '<span class="label">' + escapeHtml(label) + '</span>' +
        '<div class="row">' +
          '<input type="number" inputmode="numeric" class="inline-edit-input tabular" id="edit-reps" value="' + reps + '" aria-label="Edit reps">' +
          '<span class="label">x</span>' +
          '<input type="number" inputmode="decimal" step="any" class="inline-edit-input tabular" id="edit-weight" value="' + formatWeight(weight) + '" aria-label="Edit weight in kg">' +
          '<button type="button" class="btn btn-accent btn-sm" id="save-hist-edit" aria-label="Save set">Save</button>' +
        '</div>' +
      '</div>'
    );
  }

  return (
    '<div class="hist-set-row">' +
      '<span class="label">' + escapeHtml(label) + '</span>' +
      '<div class="row" style="gap:6px;">' +
        (isPr ? '<span class="pr-tag">PR</span>' : '') +
        '<span class="tabular">' + reps + ' x ' + formatWeight(weight) + ' kg</span>' +
        '<button type="button" class="btn btn-ghost btn-sm" style="min-height:40px;padding:0 8px;" data-edit-set ' + attrs + ' aria-label="Edit ' + escapeHtml(label) + '">Edit</button>' +
      '</div>' +
    '</div>'
  );
}

function exportMonthCsv(monthKey) {
  const rows = [['week', 'workout', 'exercise', 'set', 'reps', 'weight_kg', 'notes', 'date']];
  Object.keys(db.weeks).sort().forEach(function (wk) {
    if (getMonthKeyFromWeek(wk) !== monthKey) return;
    (db.weeks[wk].sessions || []).forEach(function (s) {
      if (!s.finished) return;
      const def = getSessionWorkoutMeta(s);
      def.items.forEach(function (item) {
        const ex = getExerciseDef(item.exId, s);
        const sets = (s.sets && s.sets[item.exId]) || [];
        const note = (s.notes && s.notes[item.exId]) || '';
        sets.forEach(function (st, idx) {
          if (ex.superset) {
            if (st.a && st.a.done) rows.push([wk, def.name, ex.subA || 'Cable Curl', idx + 1, st.a.reps, st.a.weight, note, s.date]);
            if (st.b && st.b.done) rows.push([wk, def.name, ex.subB || 'Straight Bar Pushdown', idx + 1, st.b.reps, st.b.weight, note, s.date]);
          } else if (st.done) {
            rows.push([wk, def.name, ex.name, idx + 1, st.reps, st.weight, note, s.date]);
          }
        });
      });
    });
  });

  const csv = rows.map(function (r) {
    return r.map(function (cell) {
      const str = String(cell == null ? '' : cell);
      return /[",\n]/.test(str) ? '"' + str.replace(/"/g, '""') + '"' : str;
    }).join(',');
  }).join('\n');

  downloadFile('workout-' + monthKey + '.csv', csv, 'text/csv;charset=utf-8');
}

function bindHistoryResultEvents() {
  const calPrev = document.getElementById('cal-prev');
  if (calPrev) {
    calPrev.onclick = function () {
      ui.calendarMonth -= 1;
      if (ui.calendarMonth < 0) {
        ui.calendarMonth = 11;
        ui.calendarYear -= 1;
      }
      render();
    };
  }
  const calNext = document.getElementById('cal-next');
  if (calNext) {
    calNext.onclick = function () {
      ui.calendarMonth += 1;
      if (ui.calendarMonth > 11) {
        ui.calendarMonth = 0;
        ui.calendarYear += 1;
      }
      render();
    };
  }
  const calToday = document.getElementById('cal-today');
  if (calToday) {
    calToday.onclick = function () {
      const now = new Date();
      ui.calendarYear = now.getFullYear();
      ui.calendarMonth = now.getMonth();
      ui.selectedHistoryDate = toLocalDateStr(now);
      ui.editingSet = null;
      render();
    };
  }
  document.querySelectorAll('[data-cal-date]').forEach(function (btn) {
    btn.onclick = function () {
      ui.selectedHistoryDate = btn.dataset.calDate;
      ui.editingSet = null;
      render();
    };
  });

  document.querySelectorAll('[data-toggle-week]').forEach(function (btn) {
    btn.onclick = function () {
      const wk = btn.dataset.toggleWeek;
      ui.expandedWeeks[wk] = !ui.expandedWeeks[wk];
      ui.editingSet = null;
      render();
    };
  });

  document.querySelectorAll('[data-export-csv]').forEach(function (btn) {
    btn.onclick = function () { exportMonthCsv(btn.dataset.exportCsv); };
  });

  document.querySelectorAll('[data-delete-session-id]').forEach(function (btn) {
    btn.onclick = function () {
      const wk = btn.dataset.deleteSessionWk;
      const sid = btn.dataset.deleteSessionId;
      showConfirm(
        'Delete session?',
        'This logged workout will be permanently removed from your history.',
        'Delete',
        function () {
          deleteSession(wk, sid);
          ui.editingSet = null;
          render();
        },
        true
      );
    };
  });

  document.querySelectorAll('[data-edit-set]').forEach(function (btn) {
    btn.onclick = function () {
      ui.editingSet = {
        weekKey: btn.dataset.wk,
        sessionId: btn.dataset.sid,
        exId: btn.dataset.ex,
        setIdx: Number(btn.dataset.idx),
        sub: btn.dataset.sub
      };
      render();
    };
  });

  const saveBtn = document.getElementById('save-hist-edit');
  if (saveBtn && ui.editingSet) {
    saveBtn.onclick = function () {
      const e = ui.editingSet;
      const s = getSessionByRef({ weekKey: e.weekKey, sessionId: e.sessionId });
      if (s && s.sets[e.exId] && s.sets[e.exId][e.setIdx]) {
        const st = s.sets[e.exId][e.setIdx];
        const target = e.sub ? st[e.sub] : st;
        const r = parseInt(document.getElementById('edit-reps').value, 10);
        const w = parseFloat(document.getElementById('edit-weight').value);
        if (isNaN(r) || r < 1 || isNaN(w) || w <= 0) {
          showAlert('Invalid values', 'Both weight and reps must be greater than 0.');
          return;
        }
        target.reps = r;
        target.weight = w;
        saveData();
      }
      ui.editingSet = null;
      render();
    };
  }
}

function bindHistoryEvents() {
  const searchInp = document.getElementById('history-search');
  if (searchInp) {
    searchInp.addEventListener('input', function () {
      ui.historySearch = searchInp.value;
      const resEl = document.getElementById('history-results');
      if (resEl) {
        resEl.innerHTML = renderHistoryResultsHtml();
        bindHistoryResultEvents();
      }
    });
  }
  bindHistoryResultEvents();
}

/* ============================================================
   SCREEN 6: SETTINGS & BACKUP (includes Edit plan entry)
   ============================================================ */
function renderSettingsHtml() {
  return (
    '<div class="stack">' +
      '<h1 class="h1">Settings</h1>' +
      '<div class="card">' +
        '<div class="setting-row">' +
          '<div><div style="font-weight:500;">Workout plan</div><div class="label">Rename, reorder, add, upload images or edit targets</div></div>' +
          '<button type="button" class="btn btn-secondary btn-sm" id="open-edit-plan" aria-label="Edit plan">Edit plan</button>' +
        '</div>' +
        '<div class="setting-row">' +
          '<div><div style="font-weight:500;">Workout target</div><div class="label">Pace timer goal</div></div>' +
          '<div class="row">' +
            '<button type="button" class="step-btn" id="set-target-minus" aria-label="Decrease workout target by 5 minutes">-5</button>' +
            '<span class="tabular" style="min-width:52px;text-align:center;font-weight:600;">' + getTargetMinutes() + 'm</span>' +
            '<button type="button" class="step-btn" id="set-target-plus" aria-label="Increase workout target by 5 minutes">+5</button>' +
          '</div>' +
        '</div>' +
        '<div class="setting-row">' +
          '<div><div style="font-weight:500;">Compound rest</div><div class="label">Presses, pulls, legs</div></div>' +
          '<div class="row">' +
            '<button type="button" class="step-btn" id="set-comp-minus" aria-label="Decrease compound rest by 15 seconds">-15</button>' +
            '<span class="tabular" style="min-width:44px;text-align:center;font-weight:600;">' + db.settings.restCompound + 's</span>' +
            '<button type="button" class="step-btn" id="set-comp-plus" aria-label="Increase compound rest by 15 seconds">+15</button>' +
          '</div>' +
        '</div>' +
        '<div class="setting-row">' +
          '<div><div style="font-weight:500;">Isolation rest</div><div class="label">Raises, curls, extensions</div></div>' +
          '<div class="row">' +
            '<button type="button" class="step-btn" id="set-iso-minus" aria-label="Decrease isolation rest by 15 seconds">-15</button>' +
            '<span class="tabular" style="min-width:44px;text-align:center;font-weight:600;">' + db.settings.restIsolation + 's</span>' +
            '<button type="button" class="step-btn" id="set-iso-plus" aria-label="Increase isolation rest by 15 seconds">+15</button>' +
          '</div>' +
        '</div>' +
        '<div class="setting-row">' +
          '<div><div style="font-weight:500;">Rest timer sound</div><div class="label">Beep when rest finishes</div></div>' +
          '<button type="button" class="toggle" id="set-sound-toggle" role="switch" aria-checked="' + (db.settings.sound ? 'true' : 'false') + '" aria-label="Toggle rest timer sound"></button>' +
        '</div>' +
        '<div class="setting-row">' +
          '<div><div style="font-weight:500;">Theme</div><div class="label">Appearance</div></div>' +
          '<div class="row" style="gap:6px;">' +
            ['auto', 'light', 'dark'].map(function (mode) {
              const active = ((db.settings.theme || 'auto') === mode);
              return '<button type="button" class="btn ' + (active ? 'btn-accent' : 'btn-secondary') + ' btn-sm" style="min-height:38px;padding:0 10px;text-transform:capitalize;" data-set-theme="' + mode + '">' + mode + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="card stack-sm">' +
        '<div class="label">Backup (history, bodyweight, and plan)</div>' +
        '<div class="row" style="flex-wrap:wrap;">' +
          '<button type="button" class="btn btn-secondary btn-sm" id="backup-download" aria-label="Download backup">Download backup</button>' +
          '<button type="button" class="btn btn-secondary btn-sm" id="backup-restore" aria-label="Restore from backup">Restore from backup</button>' +
          '<input type="file" id="backup-file" accept="application/json,.json" class="hidden">' +
        '</div>' +
        '<div id="backup-msg" class="label"></div>' +
      '</div>' +
      '<button type="button" class="btn btn-danger" style="width:100%;" id="erase-all-btn" aria-label="Erase all data">Erase all data</button>' +
    '</div>'
  );
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
}

function bindSettingsEvents() {
  document.getElementById('open-edit-plan').onclick = function () {
    ui.screen = 'edit-plan';
    render();
    window.scrollTo(0, 0);
  };
  document.getElementById('set-target-minus').onclick = function () {
    db.settings.targetMinutes = Math.max(10, getTargetMinutes() - 5);
    saveData();
    render();
  };
  document.getElementById('set-target-plus').onclick = function () {
    db.settings.targetMinutes = Math.min(120, getTargetMinutes() + 5);
    saveData();
    render();
  };
  document.getElementById('set-comp-minus').onclick = function () {
    db.settings.restCompound = Math.max(15, db.settings.restCompound - 15);
    saveData();
    render();
  };
  document.getElementById('set-comp-plus').onclick = function () {
    db.settings.restCompound = Math.min(300, db.settings.restCompound + 15);
    saveData();
    render();
  };
  document.getElementById('set-iso-minus').onclick = function () {
    db.settings.restIsolation = Math.max(15, db.settings.restIsolation - 15);
    saveData();
    render();
  };
  document.getElementById('set-iso-plus').onclick = function () {
    db.settings.restIsolation = Math.min(300, db.settings.restIsolation + 15);
    saveData();
    render();
  };
  document.getElementById('set-sound-toggle').onclick = function () {
    db.settings.sound = !db.settings.sound;
    if (db.settings.sound) unlockAudio();
    saveData();
    render();
  };

  document.querySelectorAll('[data-set-theme]').forEach(function (btn) {
    btn.onclick = function () {
      db.settings.theme = btn.dataset.setTheme;
      applyTheme();
      saveData();
      render();
    };
  });

  document.getElementById('backup-download').onclick = function () {
    const name = 'workout-backup-' + toLocalDateStr(new Date()) + '.json';
    const exportDb = JSON.parse(JSON.stringify(db));
    if (exportDb.plan && exportDb.plan.exercises) {
      Object.keys(mediaCache).forEach(function (exId) {
        if (exportDb.plan.exercises[exId] && Array.isArray(mediaCache[exId]) && mediaCache[exId].length) {
          exportDb.plan.exercises[exId].images = mediaCache[exId].slice();
        }
      });
    }
    downloadFile(name, JSON.stringify(exportDb, null, 2), 'application/json');
  };

  const fileInput = document.getElementById('backup-file');
  document.getElementById('backup-restore').onclick = function () { fileInput.click(); };
  fileInput.onchange = function () {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!parsed || parsed.version !== 3 || typeof parsed.weeks !== 'object' || typeof parsed.settings !== 'object') {
          document.getElementById('backup-msg').textContent = 'Invalid backup file format.';
          return;
        }
        showConfirm(
          'Restore backup?',
          'This will replace your current workout history, bodyweight, plan, and settings.',
          'Restore',
          function () {
            db = normalizeData(parsed);
            clearAllCustomMedia().then(function () {
              return migrateLegacyImagesToIdb();
            }).then(function () {
              saveData();
              ui.activeSessionRef = null;
              render();
            });
          },
          true
        );
      } catch (e) {
        document.getElementById('backup-msg').textContent = 'Could not read JSON file.';
      }
    };
    reader.readAsText(file);
    fileInput.value = '';
  };

  document.getElementById('erase-all-btn').onclick = function () {
    showConfirm(
      'Erase all data?',
      'Every logged workout, bodyweight entry, note, custom plan, and setting will be permanently removed from this device.',
      'Erase everything',
      function () {
        db = defaultData();
        saveData();
        clearAllCustomMedia().then(function () {
          stopRestTimer();
          ui.activeSessionRef = null;
          ui.screen = 'home';
          render();
        });
      },
      true
    );
  };
}

/* ============================================================
   SCREEN 7: EDIT PLAN (future sessions only, stable IDs + image upload)
   ============================================================ */
function slugifyExerciseId(name) {
  const base = String(name || 'exercise')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '') || 'exercise';
  let id = base;
  let n = 2;
  while (db.plan.exercises[id]) {
    id = base + '_' + n;
    n += 1;
  }
  return id;
}

function renderEditPlanHtml() {
  const workouts = getPlanWorkouts();
  const curWorkout = getPlanWorkoutDef(ui.editPlanWorkoutId);

  const tabsHtml = workouts.map(function (w) {
    return '<button type="button" class="seg-btn' + (w.id === curWorkout.id ? ' active' : '') + '" data-plan-tab="' + w.id + '" aria-label="Edit ' + escapeHtml(w.name) + '">' + escapeHtml(w.name) + '</button>';
  }).join('');

  const itemsHtml = curWorkout.items.map(function (item, idx) {
    const ex = getExerciseDef(item.exId, null);
    const restVal = getItemRestSeconds(item, ex);
    const hasCustomImgs = Array.isArray(mediaCache[item.exId]) && mediaCache[item.exId].length > 0;
    const displayImgs = getExerciseMediaUrls(item.exId, ex);

    const thumbsHtml = displayImgs.length
      ? '<div class="plan-thumb-list">' +
          displayImgs.map(function (src, imgIdx) {
            return (
              '<div class="plan-thumb-wrap">' +
                '<img class="plan-thumb" src="' + escapeHtml(src) + '" alt="' + escapeHtml(ex.name) + '">' +
                (hasCustomImgs
                  ? '<button type="button" class="plan-thumb-remove" data-remove-ex-img="' + escapeHtml(item.exId) + '" data-img-idx="' + imgIdx + '" aria-label="Remove image">&times;</button>'
                  : '') +
              '</div>'
            );
          }).join('') +
        '</div>'
      : '<div class="label">No image set</div>';

    return (
      '<div class="card stack-sm">' +
        '<div class="between">' +
          '<span class="label">Exercise ' + (idx + 1) + '</span>' +
          '<div class="row" style="gap:6px;">' +
            '<button type="button" class="btn btn-secondary btn-sm" data-plan-move="-1" data-plan-idx="' + idx + '" aria-label="Move exercise up"' + (idx === 0 ? ' disabled' : '') + '>Up</button>' +
            '<button type="button" class="btn btn-secondary btn-sm" data-plan-move="1" data-plan-idx="' + idx + '" aria-label="Move exercise down"' + (idx === curWorkout.items.length - 1 ? ' disabled' : '') + '>Down</button>' +
            '<button type="button" class="btn btn-danger btn-sm" data-plan-remove="' + idx + '" aria-label="Remove ' + escapeHtml(ex.name) + '">Remove</button>' +
          '</div>' +
        '</div>' +
        '<div class="field-stack">' +
          '<label class="label" for="plan-name-' + idx + '">Name</label>' +
          '<input type="text" id="plan-name-' + idx + '" class="note-input" data-plan-name="' + escapeHtml(item.exId) + '" value="' + escapeHtml(ex.name) + '">' +
        '</div>' +
        '<div class="field-stack">' +
          '<label class="label" for="plan-cue-' + idx + '">Form cue</label>' +
          '<input type="text" id="plan-cue-' + idx + '" class="note-input" data-plan-cue="' + escapeHtml(item.exId) + '" value="' + escapeHtml(ex.cue || '') + '" placeholder="One-line form cue">' +
        '</div>' +
        '<div class="plan-grid">' +
          '<div class="field-stack">' +
            '<label class="label" for="plan-sets-' + idx + '">Sets</label>' +
            '<input type="number" inputmode="numeric" min="1" max="10" id="plan-sets-' + idx + '" class="note-input tabular" data-plan-field="sets" data-plan-idx="' + idx + '" value="' + item.sets + '">' +
          '</div>' +
          '<div class="field-stack">' +
            '<label class="label" for="plan-min-' + idx + '">Min reps</label>' +
            '<input type="number" inputmode="numeric" min="1" max="50" id="plan-min-' + idx + '" class="note-input tabular" data-plan-field="min" data-plan-idx="' + idx + '" value="' + item.min + '">' +
          '</div>' +
          '<div class="field-stack">' +
            '<label class="label" for="plan-max-' + idx + '">Max reps</label>' +
            '<input type="number" inputmode="numeric" min="1" max="50" id="plan-max-' + idx + '" class="note-input tabular" data-plan-field="max" data-plan-idx="' + idx + '" value="' + item.max + '">' +
          '</div>' +
        '</div>' +
        '<div class="between">' +
          '<span class="label">Rest time</span>' +
          '<div class="row">' +
            '<button type="button" class="step-btn" data-plan-rest="-15" data-plan-idx="' + idx + '" aria-label="Decrease rest by 15 seconds">-15</button>' +
            '<span class="tabular" style="min-width:44px;text-align:center;font-weight:600;">' + restVal + 's</span>' +
            '<button type="button" class="step-btn" data-plan-rest="15" data-plan-idx="' + idx + '" aria-label="Increase rest by 15 seconds">+15</button>' +
          '</div>' +
        '</div>' +
        '<div class="plan-media-row">' +
          '<div class="between">' +
            '<span class="label">Images' + (hasCustomImgs ? ' (custom)' : '') + '</span>' +
            '<div class="row" style="gap:6px;">' +
              (hasCustomImgs && MEDIA[item.exId]
                ? '<button type="button" class="btn btn-ghost btn-sm" style="min-height:36px;padding:0 8px;" data-reset-ex-img="' + escapeHtml(item.exId) + '">Reset default</button>'
                : '') +
              '<button type="button" class="btn btn-secondary btn-sm" style="min-height:36px;padding:0 12px;" data-upload-ex-img="' + escapeHtml(item.exId) + '">Upload image</button>' +
              '<input type="file" accept="image/*" multiple class="hidden" data-file-ex-img="' + escapeHtml(item.exId) + '">' +
            '</div>' +
          '</div>' +
          thumbsHtml +
        '</div>' +
      '</div>'
    );
  }).join('');

  const addThumbsHtml = ui.addExImages.length
    ? '<div class="plan-thumb-list">' +
        ui.addExImages.map(function (src, imgIdx) {
          return (
            '<div class="plan-thumb-wrap">' +
              '<img class="plan-thumb" src="' + escapeHtml(src) + '" alt="Preview">' +
              '<button type="button" class="plan-thumb-remove" data-remove-add-img="' + imgIdx + '" aria-label="Remove image">&times;</button>' +
            '</div>'
          );
        }).join('') +
      '</div>'
    : '';

  return (
    '<div class="stack">' +
      '<div class="between">' +
        '<button type="button" class="btn btn-ghost" style="padding:0 8px 0 0;justify-content:flex-start;" id="edit-plan-back" aria-label="Back to settings">' + SVG_BACK + '<span>Settings</span></button>' +
        '<div style="font-weight:600;">Edit plan</div>' +
        '<span style="width:48px;"></span>' +
      '</div>' +
      '<div class="label">Changes apply to future sessions only. Renaming keeps exercise history linked.</div>' +
      '<div class="seg-tabs" role="tablist">' + tabsHtml + '</div>' +
      '<div class="card field-stack">' +
        '<label class="label" for="plan-workout-name">Workout name</label>' +
        '<input type="text" id="plan-workout-name" class="note-input" value="' + escapeHtml(curWorkout.name) + '" aria-label="Workout name">' +
      '</div>' +
      '<div class="stack-sm">' + (itemsHtml || '<div class="card"><div class="label">No exercises in this workout. Add one below.</div></div>') + '</div>' +
      '<div class="card stack-sm">' +
        '<div class="h2">Add exercise to ' + escapeHtml(curWorkout.name) + '</div>' +
        '<input type="text" id="add-ex-name" class="note-input" placeholder="Exercise name" aria-label="New exercise name">' +
        '<div class="plan-grid">' +
          '<div class="field-stack"><label class="label" for="add-ex-sets">Sets</label><input type="number" inputmode="numeric" id="add-ex-sets" class="note-input tabular" value="2"></div>' +
          '<div class="field-stack"><label class="label" for="add-ex-min">Min reps</label><input type="number" inputmode="numeric" id="add-ex-min" class="note-input tabular" value="8"></div>' +
          '<div class="field-stack"><label class="label" for="add-ex-max">Max reps</label><input type="number" inputmode="numeric" id="add-ex-max" class="note-input tabular" value="12"></div>' +
        '</div>' +
        '<div class="plan-grid" style="grid-template-columns:1fr 1fr;">' +
          '<div class="field-stack">' +
            '<label class="label" for="add-ex-rest">Rest (sec)</label>' +
            '<input type="number" inputmode="numeric" id="add-ex-rest" class="note-input tabular" value="60">' +
          '</div>' +
          '<div class="field-stack">' +
            '<label class="label" for="add-ex-unit">Unit</label>' +
            '<select id="add-ex-unit" class="select-input">' +
              '<option value="kg">kg</option>' +
              '<option value="kg per hand">kg per hand</option>' +
              '<option value="kg assistance">kg assistance</option>' +
            '</select>' +
          '</div>' +
        '</div>' +
        '<input type="text" id="add-ex-cue" class="note-input" placeholder="One-line form cue (optional)" aria-label="Form cue">' +
        '<div class="plan-media-row">' +
          '<div class="between">' +
            '<span class="label">Exercise image(s) (optional)</span>' +
            '<button type="button" class="btn btn-secondary btn-sm" style="min-height:40px;padding:0 12px;" id="add-ex-img-btn">Upload image</button>' +
            '<input type="file" id="add-ex-img-file" accept="image/*" multiple class="hidden">' +
          '</div>' +
          addThumbsHtml +
        '</div>' +
        '<button type="button" class="btn btn-primary btn-sm" id="add-ex-btn" aria-label="Add exercise">Add exercise</button>' +
      '</div>' +
      '<button type="button" class="btn btn-danger" style="width:100%;" id="reset-plan-btn" aria-label="Reset to default plan">Reset to default plan</button>' +
    '</div>'
  );
}

function bindEditPlanEvents() {
  const curWorkout = getPlanWorkoutDef(ui.editPlanWorkoutId);

  document.getElementById('edit-plan-back').onclick = function () {
    ui.screen = 'settings';
    render();
    window.scrollTo(0, 0);
  };

  document.querySelectorAll('[data-plan-tab]').forEach(function (btn) {
    btn.onclick = function () {
      ui.editPlanWorkoutId = Number(btn.dataset.planTab);
      render();
    };
  });

  const wNameInp = document.getElementById('plan-workout-name');
  if (wNameInp) {
    wNameInp.addEventListener('input', function () {
      const val = wNameInp.value.trim();
      if (val) {
        curWorkout.name = val;
        const tabBtn = document.querySelector('[data-plan-tab="' + curWorkout.id + '"]');
        if (tabBtn) tabBtn.textContent = val;
        saveData();
      }
    });
  }

  document.querySelectorAll('[data-plan-name]').forEach(function (inp) {
    inp.addEventListener('input', function () {
      const exId = inp.dataset.planName;
      const val = inp.value.trim();
      if (val && db.plan.exercises[exId]) {
        db.plan.exercises[exId].name = val;
        saveData();
      }
    });
  });

  document.querySelectorAll('[data-plan-cue]').forEach(function (inp) {
    inp.addEventListener('input', function () {
      const exId = inp.dataset.planCue;
      if (db.plan.exercises[exId]) {
        db.plan.exercises[exId].cue = inp.value.trim();
        saveData();
      }
    });
  });

  document.querySelectorAll('[data-plan-field]').forEach(function (inp) {
    inp.addEventListener('change', function () {
      const idx = Number(inp.dataset.planIdx);
      const field = inp.dataset.planField;
      const val = parseInt(inp.value, 10);
      const item = curWorkout.items[idx];
      if (!item || isNaN(val) || val < 1) return;
      item[field] = field === 'sets' ? Math.min(10, val) : Math.min(50, val);
      if (item.max < item.min) item.max = item.min;
      saveData();
      render();
    });
  });

  document.querySelectorAll('[data-plan-rest]').forEach(function (btn) {
    btn.onclick = function () {
      const idx = Number(btn.dataset.planIdx);
      const delta = Number(btn.dataset.planRest);
      const item = curWorkout.items[idx];
      if (!item) return;
      const ex = getExerciseDef(item.exId, null);
      const cur = getItemRestSeconds(item, ex);
      item.restSeconds = Math.max(15, Math.min(300, cur + delta));
      saveData();
      render();
    };
  });

  document.querySelectorAll('[data-plan-move]').forEach(function (btn) {
    btn.onclick = function () {
      const idx = Number(btn.dataset.planIdx);
      const dir = Number(btn.dataset.planMove);
      const target = idx + dir;
      if (target < 0 || target >= curWorkout.items.length) return;
      const moved = curWorkout.items.splice(idx, 1)[0];
      curWorkout.items.splice(target, 0, moved);
      saveData();
      render();
    };
  });

  document.querySelectorAll('[data-plan-remove]').forEach(function (btn) {
    btn.onclick = function () {
      const idx = Number(btn.dataset.planRemove);
      const item = curWorkout.items[idx];
      if (!item) return;
      const ex = getExerciseDef(item.exId, null);
      showConfirm(
        'Remove exercise?',
        'Remove "' + ex.name + '" from ' + curWorkout.name + '? Past history will stay intact.',
        'Remove',
        function () {
          curWorkout.items.splice(idx, 1);
          saveData();
          render();
        },
        true
      );
    };
  });

  /* Upload images for existing exercises */
  document.querySelectorAll('[data-upload-ex-img]').forEach(function (btn) {
    btn.onclick = function () {
      const exId = btn.dataset.uploadExImg;
      const input = document.querySelector('[data-file-ex-img="' + exId + '"]');
      if (input) input.click();
    };
  });

  document.querySelectorAll('[data-file-ex-img]').forEach(function (input) {
    input.onchange = function () {
      const exId = input.dataset.fileExImg;
      const files = Array.prototype.slice.call(input.files || []);
      if (!files.length || !db.plan.exercises[exId]) return;
      Promise.all(files.map(compressImageFile))
        .then(function (dataUrls) {
          const existing = Array.isArray(mediaCache[exId]) ? mediaCache[exId] : [];
          return saveExerciseMedia(exId, existing.concat(dataUrls));
        })
        .then(function () {
          render();
        })
        .catch(function () {});
      input.value = '';
    };
  });

  document.querySelectorAll('[data-remove-ex-img]').forEach(function (btn) {
    btn.onclick = function () {
      const exId = btn.dataset.removeExImg;
      const imgIdx = Number(btn.dataset.imgIdx);
      const existing = Array.isArray(mediaCache[exId]) ? mediaCache[exId].slice() : [];
      if (!existing.length) return;
      existing.splice(imgIdx, 1);
      saveExerciseMedia(exId, existing).then(function () {
        render();
      });
    };
  });

  document.querySelectorAll('[data-reset-ex-img]').forEach(function (btn) {
    btn.onclick = function () {
      const exId = btn.dataset.resetExImg;
      deleteExerciseMedia(exId).then(function () {
        render();
      });
    };
  });

  /* Upload images for new exercise */
  const addImgBtn = document.getElementById('add-ex-img-btn');
  const addImgFile = document.getElementById('add-ex-img-file');
  if (addImgBtn && addImgFile) {
    addImgBtn.onclick = function () { addImgFile.click(); };
    addImgFile.onchange = function () {
      const files = Array.prototype.slice.call(addImgFile.files || []);
      if (!files.length) return;
      Promise.all(files.map(compressImageFile))
        .then(function (dataUrls) {
          ui.addExImages = ui.addExImages.concat(dataUrls);
          render();
        })
        .catch(function () {});
      addImgFile.value = '';
    };
  }

  document.querySelectorAll('[data-remove-add-img]').forEach(function (btn) {
    btn.onclick = function () {
      const idx = Number(btn.dataset.removeAddImg);
      ui.addExImages.splice(idx, 1);
      render();
    };
  });

  document.getElementById('add-ex-btn').onclick = function () {
    const name = document.getElementById('add-ex-name').value.trim();
    if (!name) return;
    const sets = Math.max(1, Math.min(10, parseInt(document.getElementById('add-ex-sets').value, 10) || 2));
    const min = Math.max(1, Math.min(50, parseInt(document.getElementById('add-ex-min').value, 10) || 8));
    const max = Math.max(min, Math.min(50, parseInt(document.getElementById('add-ex-max').value, 10) || 12));
    const rest = Math.max(15, Math.min(300, parseInt(document.getElementById('add-ex-rest').value, 10) || 60));
    const unit = document.getElementById('add-ex-unit').value;
    const cue = document.getElementById('add-ex-cue').value.trim();

    const exId = slugifyExerciseId(name);
    const newEx = {
      id: exId,
      name: name,
      restType: rest >= 90 ? 'compound' : 'isolation',
      unit: unit,
      excludeFromVolume: unit === 'kg assistance',
      cue: cue || 'Control the lowering phase and move through a full range of motion.'
    };
    const pendingImages = ui.addExImages.slice();
    db.plan.exercises[exId] = newEx;
    curWorkout.items.push({
      exId: exId,
      sets: sets,
      min: min,
      max: max,
      restSeconds: rest
    });
    ui.addExImages = [];
    saveData();
    if (pendingImages.length) {
      saveExerciseMedia(exId, pendingImages).then(function () {
        render();
      });
    } else {
      render();
    }
  };

  document.getElementById('reset-plan-btn').onclick = function () {
    showConfirm(
      'Reset to default plan?',
      'Restores the built-in 4-day workout plan for future sessions. Past history will not be changed.',
      'Reset plan',
      function () {
        db.plan = cloneDefaultPlan();
        ui.addExImages = [];
        saveData();
        clearAllCustomMedia().then(function () {
          render();
        });
      },
      true
    );
  };
}

/* ============================================================
   BOOT
   ============================================================ */
startSessionClockLoop();
render();
migrateLegacyImagesToIdb().then(loadAllCustomMedia).then(function () {
  if (ui.screen === 'workout' || ui.screen === 'edit-plan') {
    render();
  }
});
