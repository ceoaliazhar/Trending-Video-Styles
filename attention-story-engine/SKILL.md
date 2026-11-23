---
name: attention-story-engine
description: Write animated myth-busting story ads and shorts (60–120s) built on attention psychology, then turn them into a Google Flow shot plan and an edit timeline. Use this whenever the user wants a story-based ad or video script, a Quiet-Wolf-style animated short, a creative that latches onto a trend or holiday (Black Friday, Valentine's), a "this doesn't look like an ad" creative, a myth-busting explainer, Veo/Flow prompts for a script, or wants to reverse-engineer why a channel's videos hold attention — even if they don't name this skill.
---

# Attention Story Engine (v1.2)

Short animated story videos where a calm narrator exposes a myth and the product shows up only as the proof, never the hero. Every rule exists because of an attention principle; reference channels are examples of those principles, never templates to copy.

**Input:** `TOPIC: <product | trend | "trending">` · `MODE: ad | organic` · optional `BRAND`, `OFFER`, `LENGTH`.
**You decide 4 things:** the drivers, the concept, the script, and what to generate. The skill does the rest.

## Why it works: the principles (one line each)
| P | Principle | What it forces |
|---|---|---|
| P1 | Information gap (Loewenstein 1994) | One specific question opened early on a familiar topic, closed only at the verdict |
| P2 | Orienting response (Lang, LC4MP) | A cut every 2–3s, shot size changes, numbers popping on screen |
| P3 | Limited capacity | One idea per line, max 3 speakers, slow down into the verdict |
| P4 | Surprise | The villain reveals himself; a teaser fact before the flashback; silence before the proof |
| P6 | Persuasion knowledge (Friestad & Wright 1994) | No sale words until the end; product = evidence |
| P7 | Identification | A believer the viewer relates to |
| P8 | Loss aversion | Stakes framed as something about to be lost |
| P9 | Concreteness | Exact date, number, one vivid image |
| P10 | Isolation | One accent color in the flashback; one keyword caption at a time |
| P11 | Peak-end | Verdict and stake payoff land at the end |
| P12 | Repetition | Fixed narrator, silencer "Shh. Watch.", ritual close |
| P13 | Signaling | Word-by-word captions, keywords bold |
Sources and evidence strength: `references/attention-principles.md`.

## The workflow
### Part 1: Research gate (always first, no exceptions)
1. **Brief.** Get the brand/product, competitors (or ask for 3–6), market, mode (ad / organic), offer.
2. **Competitor research.** Before writing anything, research what competitors and similar channels say and run (`references/research/R2-competitor-sites.md`, `R3-ad-library.md`, `R4-demand-audience.md`; organic: `R5-reference-teardown.md`). Note what everyone says, in what voice, and what nobody says.
3. **Suggest drivers, then STOP.** From the research, propose 4 core + 1–2 optional customer drivers in a scored table: customer pull × competitor gap × story-ability (`references/customer-drivers.md`). Show the evidence behind each. **Wait for the user to approve or edit the drivers.** Nothing below starts until they do, because a script built on the wrong driver is entertaining but sells nothing.

### Part 2: Script (detail: `references/script-writing.md`)
4. **Topic.** A product, or a trend peaking in the next 14 days (`references/trend-radar.md`).
5. **Myth.** A belief that expresses one approved driver, on a familiar topic, not trivia (`references/myth-mining.md`). Rotate drivers across a batch.
6. **One fact.** 1 date + 1 plain science/history line, verified with a web search. Write it with the source's exact verb ("first described", never upgraded to "invented"). No source = no concept, because a convincing fake history destroys the format's credibility.
7. **Concept.** Present ONE concept card at a time (`assets/templates/concept-card.md`): driver, myth, stakes, reveal, proof test, verdict/title. Stop and wait for `next` / `approve` / `refine: …` / `kill`.
8. **Script.** Use the shape below. Read `examples/gold-standard.md` first; every script should feel like it.
9. **Check.** Label each beat with its principle and cut beats that activate none. Read it aloud: if it sounds assembled from a checklist or like a lecture, rewrite.
10. **Save** as `CaseNN_<item>_vN.md` (`assets/templates/script-template.md`). Never overwrite a version.

**The shape (13 beats):**
1. Believer + stakes (line 1)
2. Seller's pitch = the myth said aloud
3. Narrator: "Says who?"
4. Seller reveals himself in his own words ("…I did.")
5. Believer's shock
6. Seller attacks the narrator ("He sells too.")
7. Narrator: "He's right. Don't trust me either. Shh. Watch."
8. Flashback: 1 date + 1 science line + 1 image (~25 words)
9. Seller: "Fairy tales!"
10. Proof test: something he must show and can't (`references/proof-test-bank.md`)
11. Verdict (= the title)
12. Believer's stake paid off
13. Ritual line + offer (ad) / choice + ritual (organic)

### Part 3: Visuals & edit (detail: `references/visual-design.md`)
11. **Brand look (once).** Anchor A (present) + Anchor B (flashback: desaturated, one accent color) and locked character descriptions + voices, saved as Google Flow Characters. Test one speaking close-up before anything else.
12. **Shot plan = two tables.** A. *Generations*: Veo clips (dialogue = Ingredients, reveals = Frames, flashbacks = Text) and Nano Banana stills for inserts and title cards, each with a paste-ready prompt. B. *Edit timeline*: every cut with time, length, source clip, audio and caption. Generate ~8s clips, use the best 2–3s. Example: `examples/organic/Case01_shots_example.md`.
13. **Edit.** Pick the mode (Stage 22–26 cuts/min · Explainer 16–20 + number pops · Walk-and-talk 7–9). A 60s Stage ad = 20–27 cuts; ~2s per cut for the first two-thirds, then 3–4s holds into the verdict; every date and number becomes a title card; captions one word at a time (`references/visual/editing-pacing.md`).

### Part 4: Learn
14. Log client feedback and results (hook rate, hold rate, CTR) with `references/feedback-protocol.md`. A proven fix becomes a lesson in `references/lessons-log.md` and bumps the version.

## Hard rules
- Stakes in line 1, paid off at the end. The narrator asks; he never accuses.
- One myth, one reveal, max 3 speakers. 60s ad ≈ 150–165 words; organic 90–120s.
- No promises about bodies or results; the verdict exposes the seller and never tells people what to do with their body or money.
- No readable text, logos, real brands, or a person using the product in any generation prompt; all text is added in the edit.
- Never copy a reference's signature lines, characters or look. To learn from a new reference, measure it (`scripts/frame-scan.js`, `references/research/R5-reference-teardown.md`) and map it to principles (`references/reverse-engineer.md`).

## Files
| Need | Read |
|---|---|
| Full script method, gold standard | `references/script-writing.md`, `examples/gold-standard.md` |
| Full visual + edit method | `references/visual-design.md`, `references/visual/*` |
| Principles + sources | `references/attention-principles.md` |
| Customer drivers (what to sell on) | `references/customer-drivers.md` |
| Market research (ads) | `references/research/R1–R5`, `selection-method.md` |
| Conflict, cast, language | `references/conflict-stack.md`, `cast-kit.md`, `language-rules.md` |
| Past mistakes not to repeat | `references/lessons-log.md` |
| Worked example (scripts + universe + visuals) | `examples/organic/` |
| Measured pacing data | `assets/quiet-wolf-shot-data.csv` |
