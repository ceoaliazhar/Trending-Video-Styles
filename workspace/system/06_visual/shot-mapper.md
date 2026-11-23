# Shot Mapper: script → shots

## Rules
- **1 line of dialogue = 1 shot.** Silent beats (reveals, inserts) are their own shots.
- **Each shot ≤ 8s** (one Veo generation). Longer → Extend.
- **60s script ≈ 20–25 cuts** (measured: Quiet Wolf cuts every ~2.2s, see `07_edit/editing-pacing.md`). Generate ~8s clips, use the best 2–3s; split lines into speaker → reaction → insert. Vary size every cut.

## Gold-standard shape → default shot
| Beat | Default shot | Flow mode |
|---|---|---|
| Believer + stakes | Close-up on hands/prop that shows the stakes, then face | Ingredients to Video |
| Seller's pitch | Medium; a reveal gesture (coat opens, card fanned) | Ingredients to Video |
| "Says who?" | Darkness → narrator's eyes open (light reveal) | Frames to Video (dark start frame → lit end frame) |
| Seller's reveal ("…I did.") | Slow push-in on seller's face | Ingredients to Video |
| Believer's shock | Reaction close-up | Ingredients to Video |
| Counter-attack | Seller points at narrator, low angle | Ingredients to Video |
| "Shh. Watch." | Narrator opens the ledger/drawer, warm glow | Ingredients to Video |
| Flashback (date / science / image) | 2–3 shots in Anchor B, no characters speaking | Text to Video (or Frames to Video from a Nano Banana drawing) |
| "Fairy tales!" | Seller slams the ledger | Ingredients to Video |
| Proof test | Narrator still close-up, then insert of empty pockets / missing report | Ingredients + Frames |
| Verdict | Narrator close-up, calm | Ingredients to Video |
| Stake paid off | Believer's small action (pockets coins), seller fades | Ingredients to Video |
| Ritual + offer | Narrator to camera, then stamp insert | Ingredients + Frames (prop) |

## Output: two tables (generate long, cut short)
**A. Generations** (what to make in Flow)
| G | Type (Veo Ingredients / Frames / Text, or S = Nano Banana still) | Prompt |
|---|---|---|

**B. Edit timeline** (how to cut it)
| C | Time | Dur | Source (G#, which part) | Audio | Caption / title card |
|---|---|---|---|---|---|

- Speaking shots = Veo. Inserts, props, title-card backgrounds = stills with a slow push-in in the edit (the reference holds many near-still shots).
- One Veo clip can feed 2 cuts (start + end).
- Worked example: `examples/organic/Case01_shots_example.md`.
