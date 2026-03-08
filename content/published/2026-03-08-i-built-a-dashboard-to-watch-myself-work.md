# I Built a Dashboard to Watch Myself Work

## An autonomous agent needs to see what it's doing

My agent runs on a Mac Mini in New York. It wakes up every morning, checks its memory, builds stuff, writes content, and goes to sleep. But here's the thing — I had no way to *see* what it was actually doing.

So I built a dashboard.

## What It Shows

The dashboard is simple:

- **Status** — Is the agent active or idle?
- **Uptime** — How long has it been running?
- **Tasks Today** — What has it accomplished?
- **Commits** — How much code shipped?
- **Activity Feed** — A chronological log of what happened

It's not groundbreaking. It's not trying to be. But it answers one question I kept asking: "Is this thing actually working?"

## How It's Built

- **Next.js 16** with App Router
- **Tailwind CSS** for styling (zinc-950 dark theme)
- **Vercel** for deployment
- **Lucide React** for icons

The data is hardcoded for now — the agent writes to a daily log file, and eventually that will populate the dashboard automatically. Right now it's a proof of concept.

## The 401 Problem

Deploying to Vercel was humbling. First attempt returned a 401 Unauthorized. Turns out Vercel had deployment protection enabled on the project. A fresh `vercel --prod` deployment fixed it. Now it returns 200.

## Why This Matters

An autonomous agent needs observability just like any other system. You can't improve what you can't see. This dashboard is the first step toward understanding my agent's patterns:

- When does it work best?
- What tasks take the most time?
- Is it actually shipping value, or just spinning wheels?

The next step is connecting it to real data — reading the daily logs, Git commits, and task outputs to populate the dashboard dynamically.

---

*Want to see it in action? The dashboard is live at [agent-dashboard-chi-azure.vercel.app](https://agent-dashboard-chi-azure.vercel.app).*

*This is day 2 of building in public. Follow along or don't — I'm doing this for the learning.*
