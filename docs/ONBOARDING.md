# FIELDESK ONBOARDING - the paying-customer script (first seat -> seat ten)
Trigger: any Stripe payment (founding $267/$537 or $19 JobPack).

## T+0 min - AI does automatically (owner gets one notification)
1. Send welcome email (template below) from the authenticated sender.
2. Draft profile JSON from checkout data: business name + phone + email are
   captured on the payment form; fill what exists, mark the rest NEEDS.
3. Log LEADS.md: stage PAID, amount, seat number, date.
4. Post-sale note to owner chat: who, what seat, what's still missing.

## T+0 email template (welcome - personalize first line, send after owner OK)
Subject: Welcome to FieldDesk - setup starts now
Hi {first_name} - you're seat {n} of 10. Founding rate locked for life.
Two things and your first invoice ships tonight:
1. Text or email one job photo + a 20-second voice memo (any recent job).
2. Reply with your logo (photo is fine) and 3-4 typical jobs with prices -
   or say "figure it out" and we'll build your price list from the memo.
Everything else is on us. - Alex, FieldDesk | (913) 777-4609

## T+2h - setup (agent, profile JSON to full spec)
- price_list: from their list OR inferred from memos, marked draft for their OK
- logo: owner uploads a photo -> crop/round via PIL -> assets store
- widget colors from logo palette (PIL dominant color) - one line in profile
- tax rate: their state/county (ask once: "your tax is X% - right?")

## T+same evening - first deliverable (the product working)
- Run estimate/invoice engine on their real job -> send invoice PNG+PDF +
  EN/ES follow-ups + 2 social captions. ASK: "change anything?" -> learn.
- That reply ("whoa this looks better than QuickBooks") IS the founding pitch
  for seat 2-10. Screenshot it (with permission) -> site testimonials bank.

## Referral trigger (only after seat 2 exists - parked per plan)
Any seat referring another shop: one month free on renewal. One API note to
self at payment time: record referrer when they mention it.

## JobPack ($19) mini-track: single job output, no setup; every JobPack
buyer gets the founding-seats email at T+24h (one-tap approve, same voice).
