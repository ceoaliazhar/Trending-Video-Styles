/*
 * frame-scan.js: measure the pacing of a reference video (cuts, shot lengths, motion, color).
 *
 * Use it to reverse-engineer a reference channel's editing rhythm (see references/reverse-engineer.md).
 * Runs in a browser tab on a page with a <video> element you are allowed to watch (e.g. a YouTube watch page).
 * Nothing is downloaded from the site; the video is only sampled to compute numbers.
 *
 * How to use:
 *   1. Open the video page (use the /watch?v= URL, not /shorts/). Let it load.
 *   2. Paste this file into the browser console (or run it through a browser automation tool).
 *   3. Run:  await qwScan('video-id', 0.1)      // sample every 0.1s; takes ~1-3 min per 2-min video
 *   4. Run:  qwSummary()                         // cuts, shots, avg/median shot length, motion per shot
 *   5. Optional: await qwSheet('Title'); qwSave('sheet.jpg'); qwSaveJSON('data.json')
 *      → contact sheet (one thumbnail per shot) + raw data, saved to Downloads.
 *
 * Cut detection is relative: a cut = frame difference > max(30, 2.2 × local median). This handles videos
 * with constant camera motion or film grain. Very short "shots" (< 0.8s) with high motion are usually
 * motion-graphic pops (numbers, icons), not camera cuts; report them separately.
 */
window.qwScan = async function (id, step = 0.1) {
  const v = document.querySelector('video'); v.pause(); v.muted = true;
  const c = document.createElement('canvas'); c.width = 48; c.height = 27;
  const x = c.getContext('2d', { willReadFrequently: true });
  window.__qw = { id, frames: [], done: false, step, stalls: 0 }; let prev = null;
  for (let t = 0; t < v.duration; t += step) {
    let ok = false;
    for (let tries = 0; tries < 3 && !ok; tries++) {
      ok = await new Promise(res => { const h = () => { v.removeEventListener('seeked', h); res(true); };
        v.addEventListener('seeked', h); v.currentTime = t; setTimeout(() => res(false), 1500); });
      if (!ok) { __qw.stalls++; v.play().catch(() => {}); await new Promise(r => setTimeout(r, 1200)); v.pause(); }
    }
    x.drawImage(v, 0, 0, 48, 27); const d = x.getImageData(0, 0, 48, 27).data; const g = new Float32Array(48 * 27);
    let r = 0, gg = 0, b = 0;
    for (let i = 0, j = 0; i < d.length; i += 4, j++) { g[j] = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]; r += d[i]; gg += d[i + 1]; b += d[i + 2]; }
    let diff = 0; if (prev) { for (let j = 0; j < g.length; j++) diff += Math.abs(g[j] - prev[j]); diff /= g.length; }
    const n = g.length; __qw.frames.push([+t.toFixed(2), +diff.toFixed(1), Math.round(r / n), Math.round(gg / n), Math.round(b / n)]); prev = g;
  }
  __qw.done = true; return __qw.frames.length;
};

window.qwSummary = function () {
  const f = __qw.frames; const med = a => { const s = [...a].sort((p, q) => p - q); return s[Math.floor(s.length / 2)]; };
  const cuts = [0];
  for (let i = 1; i < f.length; i++) {
    const w = f.slice(Math.max(1, i - 6), i).concat(f.slice(i + 1, i + 7)).map(r => r[1]); const m = med(w) || 1;
    if (f[i][1] > Math.max(30, 2.2 * m) && f[i][0] - cuts[cuts.length - 1] > 0.3) cuts.push(f[i][0]);
  }
  const end = f[f.length - 1][0] + __qw.step; const shots = [];
  for (let k = 0; k < cuts.length; k++) {
    const s = cuts[k], e = k + 1 < cuts.length ? cuts[k + 1] : end;
    const inside = f.filter(r => r[0] > s + 0.05 && r[0] < e - 0.05);
    const mot = inside.length ? inside.reduce((a, r) => a + r[1], 0) / inside.length : 0;
    shots.push({ start: +s.toFixed(1), dur: +(e - s).toFixed(1), motion: +mot.toFixed(1) });
  }
  const durs = shots.map(s => s.dur); const sd = [...durs].sort((p, q) => p - q);
  window.__qwRes = { id: __qw.id, shots, shotCount: shots.length, cutsPerMin: +(shots.length / end * 60).toFixed(1),
    avgShot: +(durs.reduce((a, b) => a + b, 0) / durs.length).toFixed(2), medianShot: sd[Math.floor(sd.length / 2)],
    pops: shots.filter(s => s.dur < 0.8).length };
  return __qwRes;
};

window.qwSheet = async function (title) {
  const s = __qwRes || qwSummary(); const v = document.querySelector('video'); v.pause();
  const cols = 8, tw = 135, th = 240, lab = 28, rows = Math.ceil(s.shots.length / cols);
  const c = document.createElement('canvas'); c.width = cols * tw; c.height = 60 + rows * (th + lab); const x = c.getContext('2d');
  x.fillStyle = '#111'; x.fillRect(0, 0, c.width, c.height); x.fillStyle = '#fff'; x.font = 'bold 20px sans-serif';
  x.fillText(`${title} | ${s.shotCount} shots, avg ${s.avgShot}s, median ${s.medianShot}s`, 10, 38);
  for (let k = 0; k < s.shots.length; k++) {
    const sh = s.shots[k];
    await new Promise(res => { const h = () => { v.removeEventListener('seeked', h); res(); }; v.addEventListener('seeked', h); v.currentTime = sh.start + sh.dur / 2; setTimeout(res, 2000); });
    const cx = (k % cols) * tw, cy = 60 + Math.floor(k / cols) * (th + lab);
    x.drawImage(v, cx, cy, tw, th); x.fillStyle = '#000'; x.fillRect(cx, cy + th, tw, lab);
    x.fillStyle = '#ffd24a'; x.font = '12px monospace'; x.fillText(`#${k + 1} ${sh.start}s d${sh.dur} m${sh.motion}`, cx + 4, cy + th + 18);
  }
  window.__qwSheetURL = c.toDataURL('image/jpeg', 0.85); return { w: c.width, h: c.height };
};

window.qwSave = function (name) { const a = document.createElement('a'); a.href = __qwSheetURL; a.download = name; document.body.appendChild(a); a.click(); a.remove(); };
window.qwSaveJSON = function (name) { const b = new Blob([JSON.stringify({ summary: __qwRes, frames: __qw.frames })], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click(); a.remove(); };
