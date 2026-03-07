# Twitter Posting via Browser

When posting to X/Twitter, use agent-browser. The browser must be open first.

## Setup (one-time)
1. Install agent-browser: `npm install -g agent-browser`
2. Install Chromium: `agent-browser install`
3. Log into Twitter manually in headed mode: `agent-browser open https://twitter.com --headed`

## Posting Workflow
1. **Keep the browser open** — don't close it between posts. The session will persist.
2. If browser is closed, user must reopen it: `agent-browser open https://twitter.com --headed`
3. Fill the post box and click Post:

```bash
agent-browser fill @e27 "Your tweet text here"
agent-browser click @e39
```

Note: Element refs (@e27, @e39) may change. Run `agent-browser snapshot` first to find correct refs.

## Finding Elements
```bash
agent-browser snapshot                    # Get current page structure
agent-browser snapshot | grep -i post    # Find post-related elements
```

## Tips
- Wait 5-10 minutes between posts to avoid spam flags
- Use threads for long content
- Add images when possible for better engagement
