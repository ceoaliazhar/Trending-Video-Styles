# R3: Competitor Ads (Meta Ad Library)

**Purpose:** see what competitors actually pay to run, not just what their sites say.

## Procedure (browser)
1. Open `facebook.com/ads/library`, country = `{MARKET}`, All ads, Active.
2. Search 3 ways per competitor: brand name, domain without .com, and an exact-phrase category term (e.g. `"small batch" coffee`).
3. Sort by impressions. Read the page text; screenshot where text is missing.
4. Log per ad: advertiser/Page name, start date, # of copies of the creative, headline, body, offer, CTA, landing domain.
5. Flags worth noting: long-running ads (= winners), many variants launched same day (= testing), mismatched Page names/domains.

## Known limits
- Age-gated categories hide most creatives unless logged in. Ask the user to log in to the browser if full visuals are needed (Claude never enters credentials).
- No spend/performance data in the library; "running long" is the only proxy.

## Output
| Advertiser | Running since | Copies | Hook | Offer | Format | Note |
|---|---|---|---|---|---|---|
Then: patterns (3–6 bullets) + "what nobody is running".

