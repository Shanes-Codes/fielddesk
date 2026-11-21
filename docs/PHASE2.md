# PHASE 2 PROPOSAL - measured autonomy for the reply desk
Status: PENDING OWNER RULING (one word: approve / hold / revise)

## Today (Phase 1, live now)
Every inbound reply gets drafted by the robot, human approves every send.
Fast lane = email; phone stays human. This is fine for 0-10 seats.

## The ask (Phase 2, proposed once ledger has >= 25 real messages)
AUTO-SEND only when ALL of these are true in one message:
1. intent tag = LEAD or QUESTION (never CANCEL, REFUND, MANUAL, UNKNOWN)
2. zero attachments needing judgment (demo photos route to firstjob, owner sends)
3. draft contains ONLY facts present in faq.json (price, address, promise) -
   checked by a deterministic string-fact validator, not vibes
4. draft <= 220 chars, signed "- Alex, FieldDesk", no invented dates
5. sender is not an existing customer account flagged ACTIVE
Anything that fails one test: draft + owner notification, exactly like today.
Money stays 100% human: no refunds, no cancellations, no invoices sent,
no prices changed without you. Kill switch: one word reverts to Phase 1.

## Why now-ish (evidence design)
- inbox.jsonl already logs intent + draft + attachments per message.
- We measure: MANUAL-rate (robot honesty), draft-approval-rate (owner edit
  distance), response latency (today: minutes; promise: within the hour).
- Proposal threshold: if in the first 25 real messages the human edits <10%
  of LEAD/QUESTION drafts, auto-send is provably safe for that slice.

## What Phase 2 buys
"Within minutes" becomes a HONEST homepage claim (it currently says within
the hour because a human must sign). That upgrade of the public promise is
the whole commercial point - and it only ships when the data says so.
