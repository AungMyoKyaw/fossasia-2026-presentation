# From Vibe Coding to Life Automation — FOSSASIA 2026

A presentation for [FOSSASIA Summit 2026](https://fossasia.org/) exploring the journey from AI-powered coding to full-stack personal automation.

**Live Demo:** https://aungmyokyaw.github.io/fossasia-2026-presentation/  
**Duration:** 15 minutes | **Slides:** 17

---

## The Core Question

> **"If AI can run my code, why can't it run my life?"**

AI agents conquered software development. We automated code review, testing, deployment. But the moment you close your terminal, you're back to manual mode — juggling Gmail, 500+ scattered tasks, calendar conflicts, and forgotten backups.

This talk is about closing that gap.

---

## What We'll Cover

| Act | Focus | Key Topics |
|-----|-------|------------|
| **I** | **The Problem** | We've automated everything except ourselves. The disconnect between AI coding and manual life management. |
| **II** | **The Journey** | From coder to leader. Vibe coding philosophy. My complete tool stack after 6 months of experimentation. |
| **III** | **The Proof** | Eventyay case study: How I led AI agents to ship a production React Native app in 2 weeks. |
| **IV** | **The Solution** | OpenClaw — A personal AI assistant that runs on your own devices. Self-hosted, local data, full control. |
| **V** | **Real Automations** | 3 working examples: GTD migration (511 tasks), calendar scheduling, backup automation. |

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

Presenting this talk? Check the speaker docs:

| Document | Purpose |
|----------|---------|
| [`docs/INDEX.md`](./docs/INDEX.md) | Quick navigation to all speaker materials |
| [`docs/README_FOR_SPEAKER.md`](./docs/README_FOR_SPEAKER.md) | Delivery strategy and preparation guide |
| [`docs/SPEAKER_SCRIPT.md`](./docs/SPEAKER_SCRIPT.md) | Full word-for-word script (~15 min) |
| [`docs/SPEAKER_CHEATSHEET.md`](./docs/SPEAKER_CHEATSHEET.md) | One-page emergency reference (print this) |

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

### AI Coding Agents

| Tool | Best For | Cost |
|------|----------|------|
| [OpenCode](https://github.com/opencode-ai/opencode) | Open-source daily driver | Free |
| [Claude Code](https://claude.ai/code) | Complex architecture, deep reasoning | $20/mo |
| [GitHub Copilot CLI](https://github.com/features/copilot) | Fast CLI edits | $10/mo |
| [Kimi CLI](https://github.com/MoonshotAI/kimi-cli) | 256K context, agent swarm | $19/mo |

### Agent Skills (Oh My OpenCode)

- **Context7** — Always-fresh library documentation
- **Sequential Thinking** — Structured reasoning for complex tasks
- **Chrome DevTools** — Browser automation and debugging
- **Exa Search** — AI-powered web search

### Life Automation Stack

- [OpenClaw](https://github.com/openclaw/openclaw) — Personal AI assistant (self-hosted)
- [GWS CLI](https://github.com/googleworkspace/cli) — Google Workspace command-line interface
- **Telegram/WhatsApp** — Natural language interface to your digital life

---

## Real Automations Demonstrated

### 1. GTD Migration — 511 Tasks in 3 Minutes
One message to OpenClaw → Complete GTD system with organized lists, task counts, and classifications.

### 2. Calendar Scheduling — Zero Manual Work
"Plan my FOSSASIA prep" → 3-hour emergency session + 2-hour focus blocks automatically scheduled.

### 3. Backup Automation — Fully Automated
Every 3 hours: compression, upload to Drive, retention cleanup. Set once, run forever.

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
- Custom dark theme with GitHub-inspired color palette
- Self-contained (no build step required)

---

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)
