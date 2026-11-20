# FIELDESK INTAKE — the playbook when a lead answers (agent runs this)

Goal: photo in -> real invoice out the SAME DAY, then the close question.
Speed IS the product (the 5-minute rule research is our own pitch).

## Trigger channels (as built)
1. Site form (name + phone + job line) -> arrives as email/notification
2. Messenger on the FieldDesk page (once wired) -> bridge routes to me
3. Reply to a cold outreach (email/Messenger)

## Steps (agent, in order, same hour)
1. THANK + ONE ASK (max two sentences): "Send one photo from a finished job
   plus 20 seconds of voice notes — I'll turn it into a real invoice tonight,
   free, no card." (never ask for a call first)
2. On photo+memo: build the profile JSON inline (business, phone, web, terms;
   guess price list from trade + area, mark it draft).
3. Run fielddesk_invoice.py -> invoice PNG + follow-up text + social caption.
4. Deliver: invoice image + "here's the follow-up text and a post for the job
   too — all yours to keep, paid or not."
5. THE CLOSE (one message, no pressure-stack): "$129/mo, unlimited jobs,
   first 30 days cancel-anytime. Want the number to start sending jobs to?"
6. Payment via link when owner has set it up; until then: reply YES = deal,
   owner invoices manually the first month.
7. LOG every lead in docs/LEADS.md (date, channel, stage, outcome).

## Voice rules
- Plain American, short sentences, zero hype words ("revolutionize", "AI-powered"
  banned in customer copy — we say what it does).
- Never promise same-minute; promise same-evening.
- One objection round, then respect a no and log it dead (kill culture).

## Metrics that decide P1's future (weekly, into LEDGER)
- leads contacted, replies %, free-invoices delivered, yes count, MRR
- kill rule: after 40 real contacts, <2 paying => positioning is wrong,
  revisit KIT/copy with the reply data, not vibes.
