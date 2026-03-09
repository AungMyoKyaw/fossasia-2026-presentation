# From Vibe Coding to Life Automation — FOSSASIA 2026

A presentation for [FOSSASIA Summit 2026](https://fossasia.org/) exploring the journey from AI-powered coding to full-stack personal automation.

**Live Demo:** https://aungmyokyaw.github.io/fossasia-2026-presentation/  
**Duration:** 15 minutes | **Slides:** 17 (Reveal.js presentation with FOSSASIA red theme)

---

## The Core Question

> **"If AI can run my code, why can't it run my life?"**

AI agents conquered software development. They write code, review PRs, debug issues, and deploy. But the moment you close the terminal, you're back to manual mode — dragging tasks between apps, copy-pasting calendar invites, and forgetting backups.

This talk bridges that gap.

---

## What You'll Learn

| Act | Focus | Slides | Key Topics |
|-----|-------|--------|------------|
| **I** | **The Problem** | 3–4 | We've automated code but not our lives. The disconnect between AI-powered coding and manual life management. |
| **II** | **Vibe Coding** | 5–9 | Philosophy, tool stack (6 agents tested), Open-weight models, Eventyay case study, Agent Skills architecture. |
| **III** | **Life Automation** | 10–15 | OpenClaw system, GWS CLI, 3 real automations (GTD, Calendar, Backups), Before/After impact, Live setup. |
| **IV** | **Resources & Close** | 16–17 | Tools, resources, and call to action. |

---

## Quick Start

### View the Presentation

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Or serve with a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Speaker Documentation

Presenting this talk? Check the speaker notes:

| Document | Purpose |
|----------|---------|
| [`docs/SPEAKER_NOTES.md`](./docs/SPEAKER_NOTES.md) | Complete speaker guide with timing, talking points, and delivery tips |

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` `↓` `Space` | Next slide |
| `←` `↑` | Previous slide |
| `F` | Fullscreen |
| `S` | Speaker view |
| `O` | Overview mode |
| `B` | Blackout screen |

---

## The Pattern

```
natural language → AI agent → action
```

The same pattern that revolutionized coding can now automate your entire digital life.

---

## Tool Stack

### AI Coding Agents (6 tools tested)

| Tool | Best For | Cost |
|------|----------|------|
| [OpenCode](https://github.com/opencode-ai/opencode) | Daily driver, extensible | **Free** |
| [Claude Code](https://claude.ai/code) | Complex architecture, deep reasoning | $20/mo |
| [Kimi CLI](https://github.com/MoonshotAI/kimi-cli) | 256K context, agent swarm | $19/mo |
| [GitHub Copilot CLI](https://github.com/features/copilot) | Quick edits, familiar codebases | $10/mo |
| Crush CLI | Lightning fast, minimal overhead | **Free** |
| Pi Coding Agent | Token-efficient, self-hosted | **Free** |

### Agent Skills (Oh My OpenCode)

- **Context7** — Always-fresh library documentation
- **Sequential Thinking** — Structured reasoning for complex tasks
- **Chrome DevTools MCP** — Browser automation and debugging
- **Exa Search MCP** — AI-powered web search

### Life Automation Stack

- [OpenClaw](https://github.com/openclaw/openclaw) — Personal AI assistant (self-hosted)
- [GWS CLI](https://github.com/googleworkspace/cli) — Google Workspace command-line interface
- **Telegram/WhatsApp/Slack/Discord** — Natural language interface to your digital life

---

## Real Automations Demonstrated

### 1. GTD Migration — 511 Tasks in 3 Minutes

**The Problem:** 500+ tasks scattered across Apple Reminders with no consistent system.  
**The Solution:** One natural language message to OpenClaw.

```
Input:  "I want to migrate my tasks from Apple Reminders to Google Tasks with GTD methodology"
Output: 7 organized lists (Inbox, Next Actions, Waiting For, Someday/Maybe, Projects, Reference, Done)
        511 tasks categorized and migrated
        Ready for GTD workflow immediately
```

### 2. Calendar Scheduling — Zero Manual Work

**Before:** Open calendar app → Check availability → Copy Zoom link → Send invites = 15 minutes.  
**After:** One sentence.

```
Input:  "Plan my FOSSASIA prep"
Output: 3-hour emergency session + 2-hour focus blocks scheduled at optimal times
        Time blocked and protected from conflicts
```

### 3. Backup Automation — Set Once, Run Forever

**The Schedule:** Every 3 hours, automatically.

```
Pipeline:
├── Compress important directories
├── Upload to Google Drive  
├── Apply retention policy (clean old backups)
└── Send confirmation to Telegram
```

---

## 5 Lessons

1. **The terminal is the best UI** — Build CLI-first. Scriptable, composable, automatable.

2. **Language is the interface** — Natural language beats menus, forms, and dashboards.

3. **Integration beats features** — One connected system doing 80% beats 10 perfect apps that don't talk.

4. **Automation compounds** — 10 minutes setup saves 10 minutes every week. Stack 20 automations = weeks saved yearly.

5. **AI conquered coding — now conquer life** — Self-hosted, local data, full control.

---

## Demo Repository

**Eventyay Mobile Demo:** [github.com/AungMyoKyaw/eventyay-mobile-expo-demo](https://github.com/AungMyoKyaw/eventyay-mobile-expo-demo)

Production React Native app built with AI agents in 2 weeks. SDD + TDD methodology, 24 passing tests, 7 atomic commits.

---

## Built With

- [reveal.js](https://revealjs.com/) — HTML presentation framework
- Custom FOSSASIA red theme
- Self-contained (no build step required)

---

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)
