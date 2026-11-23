# Attention Story Engine (folder: TheQuiteWolf)

**Start:** `GOLD-STANDARD.md`, then `SKILL.md`.

**Use:** tell Claude: "Run the story-concept-engine. TOPIC: trending (or any topic). MODE: organic|ad."
It returns one Concept Card at a time. Reply `next`, `approve`, `refine: …` or `kill`.
`approve` turns the card into a full timed script.

```
TheQuiteWolf/
├─ SKILL.md                 orchestrator
├─ SECTION-1-SCRIPT-WRITING.md   🔒 locked v1.0
├─ SECTION-2-VISUAL-DESIGN.md    🔒 locked v1.0
├─ GOLD-STANDARD.md         the reference script
│  system/00_psychology/    13 attention principles + reverse-engineer any reference  ← foundation
├─ system/
│  ├─ 00_concepts/          trend radar → myth mining (8 lenses) → scoring (/30)   ← generator
│  ├─ 00_setup/             brand style setup (narrator, silencer, ritual, look) + variables
│  ├─ 01_research/          R1 trends · R2 competitors · R3 ad library · R4 audience · R5 reference teardown
│  ├─ 02_selection/         drivers, myths, hooks
│  ├─ 03_engine/            5-act story engine, cast kit (max 3 speakers), conflict stack, proof-test bank, beat maps, language (+ optional series engines)
│  ├─ 04_finetune/          lessons log, QA, feedback protocol
│  ├─ 06_visual/            Google Flow: style anchors, character sheets, shot mapper, prompts, captions
│  └─ 05_templates/         concept card, brief, world bible, script
└─ projects/
   ├─ _TEMPLATE/
   └─ TEST-ORGANIC/         worked example (organic story scripts)
```
