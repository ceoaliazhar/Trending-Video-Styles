# Visual System (Google Flow)

Turns an approved script into Flow-ready shots. Tools inside Flow: **Nano Banana Pro** (images), **Veo 3.1** (video + dialogue + sound), **Characters** (`@name`), **Frames to Video**, **Ingredients to Video**, **Extend**, **Scenebuilder**.

## The 5 parts (do them in order, once per brand for 1–2, per script for 3–5)
| # | Part | Output | File |
|---|---|---|---|
| 1 | Style bible | Two locked text "anchors" pasted into every prompt | `style-bible.md` |
| 2 | Character sheets | One clean reference image + locked description + voice per character, saved as Flow Characters | `character-sheets.md` |
| 3 | Shot map | Script → shots (1 line per shot, ≤ 8s) with Flow mode per shot | `shot-mapper.md` |
| 4 | Prompts | Keyframe image prompt + video prompt per shot | `prompt-templates.md` |
| 5 | Captions & edit | Keyword captions, subtitles, safe zones, assembly | `caption-spec.md` |
| 6 | Pacing | Edit mode (Stage / Explainer / Walk-and-talk), cut rhythm, title cards, deceleration | `../07_edit/editing-pacing.md` |

## Golden rules
1. **Same words, every time.** Character and style descriptions are copied exactly, never rewritten. Consistency comes from repetition.
2. **One speaker, one line, one shot.** Veo lip-sync is most reliable this way; assemble the conversation in the edit.
3. **No readable text from the AI.** Signs, labels, stamps, captions: added in the edit (or as a clean Nano Banana prop image).
4. **Test before batch.** Generate the hardest shot first (a talking close-up). If the look or lip-sync fails, fix the sheets before making 14 shots.
5. **Product is evidence.** The product appears only when it's the proof (label, date, report).

## Output per script
`projects/<NAME>/visual/CaseNN_shots.md`: table of shots with Flow mode, keyframe prompt, video prompt, audio, caption keyword.
