# SECTION 2: VISUAL DESIGN & EDIT · 🔒 LOCKED v1.0 (Nov 23 2026)

> Tool: **Google Flow** (Nano Banana Pro images · Veo 3.1 video + dialogue · Characters `@name` · Frames to Video · Ingredients to Video · Extend · Scenebuilder).
> Pacing is measured from a frame-by-frame scan of 3 top reference shorts (`assets/quiet-wolf-shot-data.csv`).
> Change only through a new lesson with evidence, then bump the version.

## Principles behind the visuals
| P | Principle | Visual / edit rule |
|---|---|---|
| P2 | Orienting response | Cut every 2–3s; change shot size every cut; pop numbers on screen. |
| P3 | Limited capacity | Never cut on the key line; slow down into the verdict. |
| P4 | Surprise | A silence beat before the proof. |
| P9 | Concreteness | Dates and numbers as big title cards with an icon. |
| P10 | Isolation | Flashback desaturated + **one accent color**; one keyword caption bigger. |
| P12 | Repetition | Same narrator, look, silencer, closing gesture every video. |
| P13 | Signaling | Word-by-word captions; keyword in bold. |

## 1. Look (once per brand)
Write two anchors, pasted at the end of every prompt:
- **Anchor A (present):** medium + era + palette (2 colors + 1 accent) + light + texture + `vertical 9:16, no text, no subtitles`.
- **Anchor B (flashback):** a clearly different medium (e.g. sepia ink on paper), **everything desaturated except one element in the accent color**.
Must not match the reference's look (checked by lesson L26).

## 2. Characters (once per brand)
- One **locked description** (25–40 words) + **voice line** per character. Copy exactly every time.
- Reference image in Nano Banana Pro on a plain grey background → save as a Flow Character with the same name used in the script.
- **Test one speaking close-up first.** If face or voice drifts, fix the sheet before anything else.

## 3. Shot plan = two tables (per script)
**A. Generations** (what you make): speaking shots = Veo (Ingredients); reveals = Veo (Frames: dark start → lit end); flashbacks = Veo (Text, Anchor B); inserts, props, title-card backgrounds = Nano Banana stills (push-in in the edit).
**B. Edit timeline** (how you cut): cut #, time, duration, source (G#, which part), audio, caption/title card.
Rule: **generate long, cut short.** ~8s clips, use the best 2–3s; one clip can feed two cuts.

## 4. Prompt templates
- **Dialogue (Veo):** `[camera]. @[Character] [action], then says: "[line]" in a [tone]. Audio: [ambience], [one SFX]. [Anchor A]`. Colon + quotes trigger lip-sync. **One speaker per shot.**
- **Reveal (Frames):** `Start frame … End frame … [camera move]. [what changes]. No dialogue. [Anchor A]`
- **Flashback:** `[Anchor B]. [what the drawing shows], lines draw themselves and move: [motion]. No dialogue, no text.`
- **Still insert:** `[insert] of [prop], [blank label/field], [light]. [Anchor A/B]`
- No readable text, logos, real brands, or human use of the product in any prompt. All text is added in the edit.

## 5. Edit & pacing (measured)
| Mode | When | Cuts/min | Shot length |
|---|---|---|---|
| **A. Stage (default)** | Dialogue / myth-busting | 22–26 | 2–3s, near-still holds OK |
| **B. Explainer** | Number-heavy stories | 16–20 + number pops | 2–3s, pops 0.3–1s |
| **C. Walk-and-talk** | Characters moving through a place | 7–9 | 6–8s tracking |

Rules:
1. 60s Mode A = **20–27 cuts**.
2. First two-thirds ~2s per cut → last third 3–4s holds; verdict ≥ 3s; silence beat ≥ 1.5s.
3. Every date and number = title card (bold type + one icon), 0.5–1s.
4. Flashback grade: sepia/desaturated + one accent; cut back to the present palette when it ends.
5. Captions: one word at a time, synced to voice; keywords larger; text out of the bottom ~20% and right edge.
6. Final check: phone, sound off. Can you follow it from keywords alone?

## Worked example
`examples/organic/Case01_shots_example.md` (anchors, characters, generations table and edit timeline excerpt).

## Budget guide
60s Mode A ≈ 15–18 Veo generations + 5–7 stills.
