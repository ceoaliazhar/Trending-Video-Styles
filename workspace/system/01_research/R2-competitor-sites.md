# R2: Competitor Sites (positioning + catalog)

**Purpose:** find what everyone says (saturated) and what nobody says (gap).

## Procedure
1. For each URL in `{COMPETITORS}`, fetch the homepage with this extraction prompt:
   > "Summarize positioning, headline, hooks, offers/promos, trust signals, product categories, tone (technical vs plain), compliance wording, CTA."
2. Second pass per site: "List every product name, format, price, best-sellers, category labels."
3. If a site is login-gated or fails, log it and move on (don't burn time).

## Output: two tables
**Positioning matrix**
| Competitor | Headline | Hook | Offer | Trust signals | Tone | CTA |
|---|---|---|---|---|---|---|

**Catalog matrix**
| Item | Sold by how many | Price range | Format |
|---|---|---|---|

## Then answer
- Which hook appears on 2+ sites? → **saturated, avoid as lead**.
- What tone does everyone use? → the opposite tone is the lane.
- Which `{ITEMS}` are staples vs rare? → staples need differentiation, rare ones can lead with novelty.

