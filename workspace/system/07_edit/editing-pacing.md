# Editing & Pacing Rules (measured from Quiet Wolf)

Source: frame-by-frame scan (every 0.1s) of 3 top shorts, Nov 23 2026. Raw data: `quiet-wolf-shot-data.csv`. Contact sheets: `QW_sheet_1/2/3.jpg`.

## What we measured
| Video | Length | Shots | Cuts/min | Avg shot | Median | 1st third avg | Middle avg | Last third avg | Camera motion |
|---|---|---|---|---|---|---|---|---|---|
| Supermarket (1.8M) | 2:27 | 61 | **24.9** | 2.4s | 2.2s | 2.3s | 2.2s | 2.8s | Low (near-still frames) |
| Credit card (937K) | 2:32 | 47* | 18.6 | 3.2s | 2.2s | 2.9s | 2.6s | **6.1s** | Medium + motion-graphic pops |
| 10,000 steps (1M) | 1:50 | 14 | 7.6 | 7.9s | 6.5s | 8.4s | 7.3s | 7.9s | High (walking tracking shots) |
*15 of these are 0.3–0.7s motion-graphic pops (numbers, icons), not camera cuts.

## The findings
1. **One channel, three edit modes.** He picks the mode by the story, not by habit.
2. **Default rhythm = a cut every ~2.2s** (median in 2 of 3 videos), roughly one cut per sentence.
3. **Pace slows into the verdict.** The last third holds 3–13s shots; the verdict and close breathe.
4. **Numbers become graphics.** Datelines ("FRESNO, 1958") and figures ("16 YEARS", "$7,000") are big kinetic-type title cards with a small icon, popping for 0.3–1s.
5. **Flashbacks change the image, not just the content:** desaturated sepia/monochrome with **one accent color** (e.g. orange glow on the one thing that matters).
6. **Captions are word-by-word:** one word on screen at a time, synced to the voice.
7. **Holds can be nearly still.** Many 2–3s shots barely move (motion ~0.5); the cut does the work, not the camera.

## The 3 edit modes
| Mode | Use when | Cuts/min | Shot length | Camera |
|---|---|---|---|---|
| **A. Stage (default)** | Argument / myth-busting with dialogue | 22–26 | 2–3s | Near-still, slow push-ins |
| **B. Explainer** | Story carried by numbers, money, stats | 16–20 + number pops | 2–3s, numbers 0.3–1s | Medium; kinetic-type overlays |
| **C. Walk-and-talk** | Two characters moving through a place | 7–9 | 6–8s | Continuous tracking |

## Rules for our edits
1. **Pick the mode first** (A unless the story is number-heavy → B, or a journey → C).
2. **Mode A/B: cut every 2–3s.** A 60s ad = **20–25 cuts**, not 14. Split long lines: speaker → listener reaction → insert.
3. **Every dateline and every number gets a title card** (big bold type + one icon), 0.5–1s.
4. **Flashback grade:** sepia/desaturated + one accent color tied to the theme.
5. **Decelerate:** first two-thirds 2–3s per shot; last third 4–8s; hold the verdict ≥ 3s and the silence beat ≥ 1.5s.
6. **Captions:** one word at a time, synced to VO; keyword words larger.
7. **Generate long, cut short:** Veo gives ~8s clips; use the best 2–3s of each. One clip can yield 2 shots (start + end).

## Flow budget implication
60s Mode A ≈ 22 shots ≈ 12–14 Veo generations (some clips split in two) + 3–5 Nano Banana title-card/prop images.
