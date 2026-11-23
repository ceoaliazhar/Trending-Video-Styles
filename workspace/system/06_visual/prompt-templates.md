# Prompt Templates (Flow)

## A. Keyframe image (Nano Banana Pro)
```
[SHOT SIZE + ANGLE] of @[Character] [ACTION / POSE], [EXPRESSION]. Setting: [LOCATION DETAIL]. Lighting: [LIGHT SOURCE + COLOR]. [ANCHOR A]
```
Use for start/end frames and props. Generate 4, pick 1.

## B. Video shot with dialogue (Veo 3.1, Ingredients to Video)
```
[CAMERA: shot size, angle, movement]. @[Character] [ACTION], then says: "[EXACT LINE]" in a [DELIVERY: tone, pace]. Audio: [AMBIENCE], [ONE SFX]. [ANCHOR A]
```
- The colon + quotes trigger lip-sync. One speaker per shot.
- Keep the line short enough to fit the shot (≈ 2.5 words/sec).

## C. Silent / reveal shot (Frames to Video)
```
Start frame: [image]. End frame: [image]. [CAMERA MOVE]. [WHAT CHANGES between frames]. Audio: [AMBIENCE], [SFX]. No dialogue. [ANCHOR A]
```

## D. Flashback (Text to Video or Frames to Video)
```
[ANCHOR B]. [WHAT THE DRAWING SHOWS], the ink lines draw themselves and begin to move: [SIMPLE MOTION]. Audio: soft paper rustle, quiet pen scratch. No dialogue, no text.
```
Narrator voice-over for flashbacks is recorded separately (ElevenLabs or a Veo line on a narrator close-up) and laid over in the edit.

## E. Still insert / title-card background (Nano Banana)
```
[EXTREME CLOSE-UP / INSERT] of [PROP], [blank label / blank field / blank space for a title], [LIGHT]. [ANCHOR A or B]
```
Animate in the edit with a slow push-in (2–4s). All readable text and numbers are added in the edit.

## F. Fix-it edits (inside Flow)
- Wrong prop/extra object → Remove object / lasso edit on the keyframe, not a full regenerate.
- Shot ends too early → Extend.
- Drift in one shot → regenerate from the character reference, never from a drifted shot.

## Avoid in every prompt
On-screen text, logos, real brand names, human hands holding syringes, anything implying human use of the product.
