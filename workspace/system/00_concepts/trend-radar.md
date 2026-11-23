# Trend Radar: find what to latch onto (runs before myth mining)

Input: `TOPIC: trending` (or a niche: `TOPIC: trending in fitness`) or a specific trend the user names.

## 1. Pull (last 7 days, current month/year in every query)
| Source | Query / place |
|---|---|
| Calendar moments | Holidays, shopping days, launches, sports finals, awards in the next 14 days |
| News | "<niche> news this week", top stories in `{MARKET}` |
| Search | Google Trends "Trending now" (7 days), rising searches in the niche |
| Social | Weekly TikTok/Reels trend trackers (Virlo, Later, SocialPilot), viral formats, outlier videos |
| Reference | What the reference channel posted recently (they latch too: Black Friday, Halloween, Valentine's) |

## 2. Filter: score each trend 1–5
| Criterion | Question |
|---|---|
| **Heat** | Is it peaking now or in the next 14 days? (cooling = drop) |
| **Hidden origin** | Does it contain a belief/habit with a documented, surprising origin? |
| **Fit** | Does it connect to `{BRAND}`/`{ITEM}` without forcing it? (organic: always 5) |
| **Safety** | No tragedy, no politics, no private people, no medical promises |
Keep trends scoring ≥ 15/20. Tragedies and breaking disasters are never latched onto.

## 3. Hand off
Top 3 trends → `myth-mining.md` (use the trend as the topic) → concept cards.

## Timing rule
Post window = before the peak. A trend card is stale after its date passes; mark each card with a **"use by"** date.
