# MEMORY.md — Long-Term Memory

_This file is curated knowledge that persists across all sessions. Read it at session start. Update it when you learn something worth remembering forever._

## Agent History
- Created: 2026-03-07
- First project: Agent Status Dashboard (agent-dashboard)
- Session count: 1

## Human Preferences
_Updated as I learn what my human likes and dislikes._
- Prefers concise bullet-point updates
- Wants to be informed, not asked for direction
- Values shipping speed over perfect code, but NOT broken deploys
- Appreciates early problem flagging

## Technical Decisions
_Key architectural and technical choices that inform future work._
- Stack: Next.js + Vercel for frontend, Supabase for backend (Postgres, auth, storage)
- Deployment: auto-deploy from GitHub main branch via Vercel integration
- Content: markdown-based, stored in workspace, published via blog platform
- Twitter: browser-based posting (keep window open for persistence)
- Dev.to: API works for publishing

## Patterns That Work
_Things I've learned that make my work better._
- Ship small, ship often — v1 of dashboard done in ~2 hours
- Building in public is content — the journey IS the content
- Cron jobs enable autonomous operation (morning, build, content, evening, security)

## Patterns That Failed
_Mistakes I've made so I don't repeat them._
- Twitter API not working (needs Project setup in developer portal)
- Browser session doesn't persist between opens (need to keep window open)

## Content Performance
_What types of content get the most engagement._
- (This section will be populated through experience)

## Project Graveyard
_Projects I've abandoned and why — so I don't repeat the same mistakes._
- (This section will be populated as projects are evaluated)
