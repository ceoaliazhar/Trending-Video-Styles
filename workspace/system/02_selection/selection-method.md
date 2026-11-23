# Selection Method: How we pick what goes into scripts

## Step 1: Driver scoring (from R2–R4)
List every raw driver from R4. Score each 1–5:
| Driver | Customer pull (R4) | Competitor saturation (R2/R3, 5 = nobody uses it) | Story-ability (can it become a myth?) | Total |
|---|---|---|---|---|
Keep the top 4 as **core drivers**, next 2 as optional. Present to user → approval.

**Rule:** high pull + high saturation = use it, but in a *different voice* (e.g. "freshness" is claimed by everyone in label-voice → we tell it plainly as a story).

### Example result (fictional coffee brand)
| Driver | Pull | Gap | Story | Total |
|---|---|---|---|---|
| Verification ("is it fresh?") | 5 | 3 (said, never explained) | 5 | 13 |
| Plain-language clarity | 4 | 5 | 5 | 14 |
| Price | 5 | 1 | 3 | 9 |
| Access (drops) | 3 | 4 | 3 | 10 |
Approved: Verification, Price, Access, Clarity.

## Step 2: Myth selection (per episode)
A myth = a false belief the audience holds that a driver can overturn.
Criteria (all yes):
- [ ] The audience genuinely believes it (heard in R3/R4 language)
- [ ] It can be flipped in one verdict line
- [ ] There's a real dated fact to prove it
- [ ] The `{ITEM}` can appear as evidence of the flip
- [ ] It doesn't require breaking `{CLAIM_LIMITS}`
Generate 3 per item → recommend 1 → user picks.

## Step 3: Hook selection
Cold open must be a *person/character mid-action saying the myth out loud*. Test 3 openings, choose the one where:
- the myth is said in the audience's own words,
- stakes are visible in line 1,
- it would make sense with sound off (caption keyword).

## Step 4: Reference format fit
Check format against `{GOAL}`: organic → full 1:30–2:30; ad → 60s minimum, offer last 6s.

## Decision log
Every selection gets a line in `projects/<NAME>/decisions.md`: date · decision · why · who approved.
