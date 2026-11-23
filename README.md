# Video Styles

Reusable, installable video-style skills: each one is a complete production system (psychology foundation, script method, visual and edit system, examples, lessons learned).

| Style | What it makes | Install |
|---|---|---|
| [attention-story-engine](attention-story-engine/) | Animated myth-busting story ads/shorts (60–120s) built on 13 attention principles, with Google Flow shot plans and measured edit pacing. First reference: @QuietWolfz. | `dist/attention-story-engine.skill` |

## Install
- **Claude (claude.ai / desktop):** open `dist/attention-story-engine.skill` in a chat and click **Save skill**, or upload it under Settings → Skills.
- **Claude Code:** copy `attention-story-engine/` into `~/.claude/skills/`.

Then in any chat: *"Use the attention-story-engine skill. TOPIC: Black Friday. MODE: ad, 60s."* The skill starts with competitor research and suggests customer drivers; nothing else begins until you approve them.

## Folders
- `attention-story-engine/`: the installable skill (SKILL.md + references, examples, templates, frame-scan script)
- `dist/`: packaged `.skill` files
- `workspace/`: the full working system the skill was built from (organic test project, templates, raw research). Examples use generic data: an organic myth-busting channel and a fictional coffee brand.

## Adding a style
New folder with a `SKILL.md` (frontmatter `name` + `description`) plus `references/`; package it into `dist/`; log fixes in its `references/lessons-log.md`.
