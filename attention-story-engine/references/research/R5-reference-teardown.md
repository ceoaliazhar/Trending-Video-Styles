# R5: Reference Channel Forensic Teardown

**Purpose:** reverse-engineer *why* `{REFERENCE_CHANNEL}` is addictive, so we copy the engine, not the look.

## Procedure
1. Open the channel's Shorts tab → list all titles + views. Take the **top 10 by views**.
2. For each of the 10, collect: length, views, likes (→ like %), age (→ velocity), hashtags, description (funnel links, tools used).
3. Get the full transcript: watch page → expand description → "Show transcript" → read the panel.
4. Screenshot 2–3 frames per video (opening, flashback, ending) for the visual system.
5. Map every transcript onto acts: where's the cold open, the challenge, the flashback, the verdict, the close? Note timestamps.
6. Count recurring phrases across the 10 (catchphrases = brand signatures → DO NOT copy).
6b. Map every technique to an attention principle with `references/reverse-engineer.md`. Keep principles, drop signatures.
7. Fill the 6 layers below.

## Tool fallback chain
vidIQ (transcripts/stats) → Watch Any Video (visual analysis) → **browser: YouTube transcript panel + screenshots** (always works, free). Don't call YouTube's internal APIs directly.

## Teardown layers (output template)
| Layer | Questions |
|---|---|
| Metrics | Length range, avg, like %, fastest velocity |
| Structure | Acts + timestamps, recurring beats |
| Language | Words/sec, sentence length, person, numbers, datelines |
| Psychology | Why it's addictive: which levers |
| Visual | Style, palette, cast logic, captions, scene devices |
| Funnel/stack | CTA ritual, description links, tools |

## First run: @QuietWolfz (Nov 2026), summary
- Top 10: 512K–1.8M views, **1:00–2:31 long (avg ~1:55)**, 4.7–8.0% likes, newest hit 937K in 11 days.
- 5 acts: cold open (victim states belief) → interrogation ("Who told you?") → time machine (datelines, numbers every 5–8s, mid-video conflict) → verdict (flip = title) → ritual close (10/10).
- Levers: betrayal reveal, viewer cast as victim then hero, one open loop to the end, numbers as proof, one-line plain science, recognition ritual.
- Visual: 1940s storybook animation, amber/sepia, animal cast as moral shorthand, screen-in-scene flashback, one bold keyword caption.
- Stack: Higgsfield (animation), ElevenLabs (voice). Funnel: free guide + affiliate + episodic long-form.
- Signatures (never copy): wolf narrator, "Shh. Not another word. Watch this.", "evolve quietly until you're the wolf".
Full dataset: `references/research/R5-example-quiet-wolf.md`.
