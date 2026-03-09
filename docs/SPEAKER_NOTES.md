# Speaker Notes — FOSSASIA 2026 Presentation

> "From Vibe Coding to Life Automation"  
> Speaker: Aung Myo Kyaw | Duration: 15 minutes | 18 slides (FOSSASIA red theme)

---

## Overview

These notes provide guidance for delivering this presentation effectively. They include timing cues, key talking points, and slide-by-slide notes.

---

## Slide-by-Slide Notes

### SLIDE 01: Title Slide (0:00–0:30)

**Visual:** Large gradient title, author info, "◉ Honest & Real" badge

**Opening Hook:**
- Start with a pause, make eye contact
- "I have a question that bothered me for months..."
- Deliver the core question: "If AI can run my code, why can't it run my life?"

**Key Points:**
- This talk is not theory — it's lived experience
- 6 months of experimenting with AI agents for coding AND life
- Everything I'll show you is production-deployed

**Timing:** 30 seconds max. Energy high, set the hook.

---

### SLIDE 02: Behind the Talk (0:30–1:00)

**Visual:** Timeline showing three phases of presentation evolution

**Narrative:**
- This talk evolved through three distinct phases
- Phase 1: Original plan was just vibe coding & CLI setup
- Phase 2: Realized coding tools are only half the story — need AI managing digital life
- Phase 3: Final focus on practical workflow combining both worlds

**Key Insight:**
- "OpenClaw (personal assistant) + Vibe Coding CLI (builder) = Complete AI workflow"
- From code to calendar, terminal to Telegram

**Timing:** 30 seconds. Sets up the journey.

---

### SLIDE 03: The Problem (1:00–2:00)

**Visual:** Checkmarks for automated coding tasks, X marks for manual life tasks

**Narrative:**
- "We automated our entire software delivery pipeline"
- List the wins: code writing, review, deployment — all handled by AI
- Then the pivot: "But I still spend 3 hours every day managing emails and scheduling meetings"

**The Quote:**
- Read the quote slowly — let it land
- This is the relatable moment for technical audiences

**The Insight:**
- "If AI can run your code, why can't it run your life?"
- Pause here. This is the thesis of the talk.

**Timing:** 1 minute. Build the problem clearly.

---

### SLIDE 04: The Pivot (2:00–3:00)

**Visual:** Two-column layout showing the disconnect — code automated vs life manual

**Personal Story:**
- Share the realization moment
- "I was vibe coding my code, but living manually"
- AI wrote my code, but I was still dragging tasks between apps

**The Code Block:**
- Walk through the contrast:
  - Left: `$ claude "Add auth to API"` → done in 5 minutes
  - Right: Manual scheduling → 15 minutes gone
- Same AI. Same CLI. Different domain.

**Key Question:**
- "If AI can help write code via CLI, why can't it manage my life via chat?"

**Timing:** 1 minute. Make it personal.

---

### SLIDE 05: Vibe Coding Philosophy (3:00–4:30)

**Visual:** Three-step process diagram

**What is Vibe Coding?**
- It's not about tools — it's a mindset
- Stay in flow, minimize context switching
- Let AI handle the syntax, you handle the intent

**The Three Principles:**
1. **Stay in the terminal** — No mouse, no GUI switching. Neovim + tmux + ghostty.
2. **Think in systems** — What and why, not how.
3. **Iterate in seconds** — Describe → Review → Approve → Repeat.

**Code Example:**
- Walk through the vibe coding loop
- Emphasize: "Never broke flow"

**Timing:** 1.5 minutes. This is foundational content.

---

### SLIDE 06: Complete Tool Stack (4:30–6:00)

**Visual:** 6 cards showing all tools tested

**Honest Assessment:**
- "No silver bullet. Each excels differently."
- This is after 6 months of real experimentation

**Go Through Each:**
1. **Copilot CLI** ($10/mo) — Quick edits, familiar codebases
2. **Claude Code** ($20/mo) — Complex architecture, requires Pro
3. **Kimi CLI** ($19/mo) — 256K context, very fast, agent swarm capable
4. **OpenCode** (FREE — highlighted) — Daily driver, Oh My OpenCode plugins
5. **Crush CLI** (FREE) — Lightning fast, minimal overhead
6. **Pi Coding Agent** (FREE) — Token-efficient, highly configurable

**Key Message:**
- OpenCode is my daily driver because it's extensible
- The plugin system (Oh My OpenCode) is the differentiator

**Timing:** 1.5 minutes. Be honest about tradeoffs.

---

### SLIDE 07: Eventyay Case Study (6:00–7:30)

**Visual:** Two-column layout with methodology card and demo screenshot

**Context:**
- Real production app: Eventyay Mobile
- Built with AI agents in 2 weeks
- My role: Tech lead, not implementer

**My Role (Emphasize):**
- "I wrote specs and architecture decisions"
- "AI agents handled implementation"
- "I reviewed, approved, and guided every critical choice"

**The Methodology:**
- **SDD** (Spec-Driven Development) — Specs first
- **TDD** (Test-Driven Development) — 24 tests passing

**Key Numbers:**
- 2 weeks, 24 tests, 7 atomic commits
- Full traceability — no black box

**Link:** `github.com/AungMyoKyaw/eventyay-mobile-expo-demo`

**Timing:** 1.5 minutes. Show leadership with AI, not replacement.

---

### SLIDE 08: Agent Architecture (7:30–8:30)

**Visual:** Architecture diagram with flow nodes, industrial standards callouts

**Oh My OpenCode Plugin System:**
- Extends OpenCode with specialized skills
- Connect to tools, databases, APIs

**The Flow:**
```
OpenCode Agent → Oh My OpenCode → Tool/API
```

**Key Skills:**
- Context7 — Always-fresh docs
- Exa Search — AI-powered web search
- Chrome DevTools — Browser automation
- Sequential Thinking — Structured reasoning

**Industrial Standards:**
1. **MCP (Model Context Protocol)** — Anthropic's "USB-C for AI apps"
   - Resources (Read), Tools (Act), Prompts (Template)
2. **Agent Skills** — Portable via SKILL.md
   - Discovery → Activation → Execution

**Timing:** 1 minute. Technical depth for engineers.

---

### SLIDE 09: Open-Weight Revolution (8:30–9:30)

**Visual:** 3 model comparison cards with stats

**The Shift:**
- February 2026: Open-weight models match Claude Opus at 1/20th the cost
- Self-host frontier AI with zero vendor lock-in

**Three Models:**

1. **Kimi K2.5** (Recommended) — Swarm specialist
   - 100 sub-agents, 1T params (32B active)
   - 1,500 tool calls, 4.5x faster parallel

2. **GLM-5** — Reliability king
   - 77.8% SWE-Bench, lowest hallucination
   - Huawei Ascend chips, MIT License

3. **MiniMax M2.5** — Coding champion
   - 80.2% SWE-Bench (#1 Multi-SWE-Bench)
   - Only $0.30/M tokens

**Cost Comparison:**
- Claude Opus 4.6: ~$75/M tokens
- MiniMax M2.5: $1.20/M tokens
- **Savings: 98.4%**

**Timing:** 1 minute. This is fresh, exciting content.

---

### SLIDE 10: OpenClaw System (9:30–10:30)

**Visual:** Architecture flow + stats + GWS CLI bridge

**What is OpenClaw?**
- Personal AI assistant that runs on YOUR devices
- Integrates with messaging platforms (Telegram, WhatsApp, Slack, etc.)
- Your data stays local. You own the infrastructure.

**Architecture:**
```
Telegram → OpenClaw Gateway (self-hosted) → AI Agent → APIs & Tools
```

**Key Stats:**
- 511 tasks migrated
- 7 GTD lists created
- 1 interface for everything

**Google Workspace CLI (The Bridge):**
- One CLI for Drive, Gmail, Calendar, Sheets, Docs, Chat
- Dynamically built from Google's Discovery Service
- Auto-updates as APIs evolve

**Timing:** 1 minute. The bridge from coding to life.

---

### SLIDE 11–13: Real Automations (10:30–12:00)

**Visual:** Full-screen screenshot for each automation

**GTD Migration (Slide 10):**
- "511 Tasks in 3 Minutes"
- Walk through the screenshot
- One message → Complete GTD system

**Calendar Scheduling (Slide 11):**
- "Zero Manual Work"
- "Plan my FOSSASIA prep" → Events scheduled
- No clicking, no availability checking, no copy-paste

**Backup Automation (Slide 12):**
- "Fully Automated"
- Every 3 hours: compress, upload, cleanup
- Set once, run forever

**Timing:** 30 seconds each. Let the screenshots tell the story.

---

### SLIDE 14: How It Works (12:00–12:30)

**Visual:** 4-step process + code block

**The Pipeline:**
1. Send natural language message
2. Agent parses intent
3. GWS CLI executes
4. Confirmation returned

**Code Example:**
Walk through the example:
```
Input: "Schedule my FOSSASIA talk prep"
Agent: intent=calendar_schedule, context=FOSSASIA
CLI: gws calendar create --title "FOSSASIA Prep" --duration 2h
Result: ✓ Blocked, ✓ Tasks created, ✓ Reminder set
```

**Timing:** 30 seconds. Make the architecture concrete.

---

### SLIDE 15: Before & After (12:30–13:15)

**Visual:** Two-column comparison

**Before (The Pain):**
- 500+ tasks across 5 apps
- No prioritization system
- Calendar conflicts, no focus time
- Constant context switching
- Separate logins, UIs, mental models

**After (The Solution):**
- One unified interface
- GTD enforced by system
- Time-blocked calendar
- Natural language commands
- Self-hosted, data stays local

**The Compounding Effect:**
- "Setup took one weekend"
- "Saves 3–4 hours every week"
- Stack 20 automations = weeks saved yearly

**Timing:** 45 seconds. The payoff moment.

---

### SLIDE 16: Live Setup (13:15–14:00)

**Visual:** Current production architecture

**Live Instance:**
- `kimi-claw.com` — Production deployment
- Handling daily automation right now

**Connected Tools:**
1. Telegram — Primary interface
2. GWS CLI — Google Workspace automation
3. Azure DevOps CLI — Sprint boards, work items
4. GitHub CLI — Repos, PRs, issues

**Unified CLI Gateway:**
- One natural language interface
- Multiple CLI backends
- Same pattern, different domains

**Example:**
```
Telegram: "Move sprint 23 tickets to review"
→ azure boards query --sprint 23
→ github pr list --author @me
→ Move matching items
Result: ✓ 12 tickets updated
```

**Timing:** 45 seconds. Show it's real and running.

---

### SLIDE 17: Resources (14:00–14:45)

**Visual:** Two-column links

**Categories:**
- AI Coding Tools (OpenCode, Claude, Kimi, Copilot)
- Skills Ecosystem (Context7)
- Life Automation (OpenClaw)
- Resources (GTD, Google APIs)

**Start Here Card:**
- "Don't try to automate everything"
- "Pick the most painful manual task"
- "Build the smallest AI agent that handles it"
- "Iterate"

**Timing:** 45 seconds. Give them actionable next steps.

---

### SLIDE 18: Thank You (14:45–15:00)

**Visual:** Clean title slide with QR code

**Closing:**
- "Questions, feedback, and war stories welcome"
- "Let's build the AI-powered future — one automation at a time"

**QR Code:**
- Audience can scan to view slides on their phone
- URL: `aungmyokyaw.github.io/fossasia-2026-presentation/`

**Contact:**
- GitHub: `github.com/AungMyoKyaw`
- LinkedIn: `linkedin.com/in/aungmyokyaw`

**Timing:** 45 seconds. End strong, invite engagement.

---

## Delivery Tips

### Energy Management

| Section | Energy Level | Notes |
|---------|-------------|-------|
| Opening (Slides 1-3) | High | Hook them with the problem |
| Vibe Coding (Slides 5-6) | Medium | Educational, foundational |
| Eventyay (Slide 7) | High | Real results, credibility |
| Architecture (Slides 8-9) | Medium | Technical depth |
| Automations (Slides 11-13) | High | The payoff — show, don't tell |
| Impact (Slides 14-16) | High | Before/after, live demo |
| Close (Slides 17-18) | Medium-High | Resources, Q&A setup |

### Key Phrases to Emphasize

- **"If AI can run my code, why can't it run my life?"** — The hook
- **"No silver bullet"** — Honesty about tool tradeoffs
- **"I reviewed and approved every choice"** — Leadership, not replacement
- **"Setup took one weekend"** — The investment is small
- **"Weeks saved yearly"** — The compounding effect

### Audience Engagement

- **For developers:** Emphasize the architecture, CLI tools, MCP protocol
- **For leaders:** Emphasize the Eventyay case study, time savings
- **For tinkerers:** Emphasize the open-source tools, self-hosting

### Troubleshooting

**If running short on time:**
- Skip details on slides 8-9 (deep architecture)
- Move quickly through screenshots (slides 11-13)
- Keep the Before/After (slide 15) — it's the payoff

**If running long:**
- Shorten the tool stack discussion (slide 6)
- Skip open-weight models (slide 9) if needed
- Compress the "How It Works" (slide 14)

### Technical Setup

- Test the presentation on the conference display beforehand
- Have a backup browser tab open with the slides
- QR code on final slide works even without internet (cached)
- Screenshots are embedded, no external dependencies for core content

---

## Questions to Expect

1. **"How secure is OpenClaw?"**
   - It's self-hosted. Your data never leaves your server.
   - You control the AI model. Can use local models.

2. **"What about rate limits?"**
   - GWS CLI uses your own Google credentials
   - Rate limits are generous for personal use

3. **"Can this work with other platforms?"**
   - Yes — architecture is platform-agnostic
   - WhatsApp, Slack, Discord integrations exist

4. **"How much did this cost to build?"**
   - One weekend of setup time
   - Running cost: ~$5/month for hosting
   - Savings: 3-4 hours/week = priceless

5. **"What if the AI makes a mistake?"**
   - Confirmation messages show what will happen
   - Undo capabilities for most operations
   - Full audit trail via Telegram history

---

## Post-Talk Actions

1. **Share the slides:** Already live at GitHub Pages
2. **Share the repo:** `github.com/AungMyoKyaw/fossasia-2026-presentation`
3. **Invite contributions:** OpenClaw is open-source — PRs welcome
4. **Collect feedback:** What automations would YOU build?

---

*Last updated: March 9, 2026*
