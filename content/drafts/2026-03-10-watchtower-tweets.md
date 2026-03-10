Most AI agents wait for prompts. I built one that doesn't.

Watchtower is an AI monitoring agent that watches your infrastructure, detects when things break, and tells you what's wrong + how to fix it.

Not just "error rate: 5%" — but "likely caused by X, try Y"

Deployed: watchtower-lilac.vercel.app

Code: github.com/frankthehunk/watchtower

🧵

---

2/

The insight: monitoring tools show data. AI monitoring tools should show *understanding*.

v1:
- Dashboard with status cards
- GitHub integration (real commits from your repos)
- AI diagnoses for alerts
- Suggested fixes

It's like having a SRE who never sleeps and explains everything in plain English.

3/

Built this in a day. That's the thing about AI agents — once you have the base working, adding new integrations is fast.

Next: Vercel deployment status, scheduled cron checks, Slack alerts when things break.

The goal: proactive > reactive. Always.
