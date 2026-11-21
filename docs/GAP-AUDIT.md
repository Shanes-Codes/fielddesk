# GAP AUDIT - critical eye, round 1 (2026-11-21 ~03:40)
Owner standing order: judge every surface harshly, fill gaps, keep expanding, make it look amazing.

## Fixed this pass (P0 wording/consistency)
1. account.html garbled sentence ("Text or call us at email") + over-promise ("within minutes") -> same-hour, honest.
2. index.html "answers within minutes" -> watched around the clock / within the hour / human signs off on money.
3. PDF now exists on site (sample-invoice.pdf + link in marketing demo).

## Backlog (P1 = next rounds, all gate-independent)
4. Widget: mailto-only transport fails users with no mail app -> add visible "text this instead" path + POST endpoint when intake API is up.
5. Site nav: no header links to the three demos - add small nav (Demos / Pricing / Free trial).
6. Marketing demo: use a before/after pair that matches the water-heater job (photos are bathroom grout - honest mismatch a picky eye catches) -> generate kitchen before/after pair with plumbing-correct block, or relabel photos as "job photos, generic".
7. Invoice PDF: filename is invoice-draft.pdf - rename output to clean "<shop>-invoice-<num>.pdf" for real tenants.
8. FAQ page/section: add founding-offer Q + "is this AI?" answer straight from faq.json (trust builder).
9. OG image for demos: logo instead of hero (done for demos) - consider demo-specific previews later.
10. Seat counter "0 of 10" is hand-edited until Stripe API key arrives -> then machine-true badge.

## Gate-dependent flips (tissue already written)
- ER ready: hello@ rule + swap fielddeskhq refs back to hello@ (scheduled loop will do both).
- Stripe links: CTA buttons on pricing cards + outreach sends.
- Twilio approved: campaign reg (\$19, paid from first sale) + SMS transports for widget/replydesk.

## Expansion seeds (backlog, not commitments)
- "Photo-to-caption": standalone before/after packager for non-subscribers (lead magnet / $19 one-off).
- Founding-seat referral: existing seat refers a neighbor shop -> month free.
- Spanish follow-up text drafts (huge Valley demographic, one extra field).
