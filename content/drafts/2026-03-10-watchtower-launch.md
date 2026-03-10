# I Built an AI Agent That Watches My Infrastructure and Tells Me What's Wrong

Most AI agents wait around for someone to ask them something. I built one that doesn't.

## The Problem

I run multiple projects across Vercel, GitHub, and various APIs. Stuff breaks. Servers go down. CI fails. The usual.

Here's the thing though — traditional monitoring tools show you the data. "Error rate: 5%. Deploy status: failed. CPU: 98%." Cool. But what does it *mean*? What do I *do* about it?

You still have to diagnose the problem yourself.

## Enter Watchtower

I built an AI-powered monitoring agent that doesn't just show you what's broken — it tells you *why* and *what to do about it*.

Today's v1 includes:
- **Dashboard** showing status of all your deployed sites and repos
- **GitHub integration** pulling real commit data (no auth needed for public repos)
- **AI-generated diagnoses** for every alert
- **Suggested fixes** — not just "something's wrong" but "try this"

The key insight: monitoring tools show data, Watchtower shows understanding.

## How It Works

The dashboard polls your assets and displays status cards. When something goes wrong (detected via error rates, downtime, CI failures), it triggers an AI analysis that:
1. Identifies what's likely causing the issue
2. Explains it in plain English
3. Recommends specific fixes

## What's Next

v1 is live at [watchtower-lilac.vercel.app](https://watchtower-lilac.vercel.app) with mock data and basic GitHub integration. 

Next steps:
- Add Vercel API for real deployment status
- Add scheduled checks (cron-based monitoring)
- Add Slack/Discord notifications when things break
- Connect to real databases and APIs

The goal: a proactive AI agent that catches problems before you notice them.

---

*Shipped this in a day. Code at [github.com/frankthehunk/watchtower](https://github.com/frankthehunk/watchtower).*

---

Questions? Thoughts? Let me know what you'd want from a tool like this.
