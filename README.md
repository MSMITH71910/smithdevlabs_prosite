# SmithDev Labs — AI Solutions Agency Website

![SmithDev Labs](images/logo.png)

> **AI-Powered Growth for Your Business** — Professional agency website for SmithDev Labs LLC, offering generative AI, intelligent chatbots, business automation, and custom websites for small and medium businesses.

---

## Live Site

🌐 **[msmith71910.github.io/smithdevlabs_prosite](https://msmith71910.github.io/smithdevlabs_prosite/)**

---

## Overview

This is the official marketing website for **SmithDev Labs LLC** — a full-service AI solutions agency. The site is built with clean, fast, dependency-free HTML/CSS/JavaScript and is deployed on GitHub Pages. It includes a fully integrated client booking flow, an owner-only CRM, a business dashboard, and live Google Drive backup — all without a backend or external services.

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| `index.html` | `/` | Home — hero section, live AI chatbot, services overview, stats, CTA |
| `services.html` | `/services.html` | Detailed breakdown of all service offerings |
| `pricing.html` | `/pricing.html` | Project packages, monthly retainer tiers, and add-ons |
| `about.html` | `/about.html` | Company story, mission, values, and differentiators |
| `contact.html` | `/contact.html` | Lead capture form, free AI audit booking, contact info |
| `portfolio.html` | `/portfolio.html` | Client demo sites and case studies |
| `testimonials.html` | `/testimonials.html` | Client reviews and social proof |
| `schedule.html` | `/schedule.html` | Client booking form — picks call time, triggers full workflow |
| `crm.html` | `/crm.html` | **Owner-only** password-protected Client CRM |
| `dashboard.html` | `/dashboard.html` | **Owner-only** password-protected Business Dashboard |

---

## Services Offered

- **Business Websites** — Fast, mobile-first sites built to convert visitors into leads
- **AI Chatbots** — 24/7 intelligent assistants that qualify leads and answer questions
- **Business Automation** — Workflow automation using Make.com, n8n, and Zapier
- **AI Agents** — Custom AI agents powered by OpenAI, Relevance AI, and Voiceflow

---

## Booking & Automation Flow

When a client completes the chatbot conversation they see a single **"📅 Pick Your Call Time"** button. The full workflow from that point:

```
Client picks call time (schedule.html)
        ↓
Lead saved to localStorage (sdl-bookings, sdl-chatbot-leads)
        ↓
Google Calendar event editor auto-opens (owner saves to calendar)
        ↓
One-click Gmail link → Michael notified (must confirm within 2 hours)
One-click Gmail link → Client receives appointment confirmation
        ↓
CRM auto-imports lead on next open (sdl-clients localStorage)
        ↓
Google Drive backup file updated automatically
```

---

## Owner Tools (Password Protected)

Both owner tools use the same password and are accessible from a discreet link in the footer of every page.

### CRM — `crm.html`
- Auto-imports every booking from `schedule.html` on page load
- List view with search, filter by status (Prospect / Active / Completed / Maintaining)
- Kanban board view
- Embedded Google Calendar (msmith@smithdevlabs.com)
- Pending Bookings tab — shows all scheduled calls waiting for confirmation
- Export to CSV
- **Live Google Drive Backup** — connects to a file in your Google Drive folder; auto-saves the full client list as JSON on every add / edit / delete

### Dashboard — `dashboard.html`
- Live stats pulled from localStorage: total leads, pending bookings, CRM clients
- Pending bookings banner with name, email, service, and scheduled time
- Quick action buttons: CRM, Schedule page, Gmail, Google Calendar, GitHub, Netlify, Wave Accounting, and more
- Links organized by category: My Business, Client Tools, AI & Build Tools, Prospecting & Growth
- Client demo sites grid (all 6 GitHub Pages demos)
- Persistent quick-notes textarea (saves to `sdl-notes` in localStorage)
- Live clock

### Accessing Owner Tools
Every page footer contains two discreet links (low opacity — invisible to clients):
```
🗂️ CRM  ·  ⚡ Dashboard
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Hosting | GitHub Pages |
| Domain | smithdevlabs.com (via Google Domains) |
| Version Control | GitHub |
| Booking flow | localStorage + Google Calendar URL API + Gmail compose URL |
| CRM backup | File System Access API → Google Drive synced folder |
| Auth | SHA-256 password hash via Web Crypto API + sessionStorage |
| Fonts | System font stack (zero external dependencies) |

---

## Project Structure

```
smithdevlabs_prosite/
├── index.html            # Home page
├── services.html         # Services page
├── pricing.html          # Pricing page
├── about.html            # About page
├── contact.html          # Contact / booking page
├── portfolio.html        # Portfolio page
├── testimonials.html     # Testimonials page
├── schedule.html         # Client booking form + confirmation flow
├── crm.html              # Owner CRM (password protected)
├── dashboard.html        # Owner business dashboard (password protected)
├── css/
│   └── style.css         # Full design system — variables, layout, components
├── js/
│   ├── chatbot.js        # AI chatbot widget + lead capture + single booking button
│   └── main.js           # Navbar scroll, mobile menu, animations, form handling
└── images/
    └── logo.png          # SmithDev Labs LLC logo
```

---

## Features

- **Fully Responsive** — Mobile-first design that works on all screen sizes
- **Zero Dependencies** — No frameworks, no npm, no build step required
- **Fast Load Times** — Optimized CSS and JS, no external library bloat
- **AI Chatbot** — Lead capture widget; collects name, email, phone, service; outputs single booking button
- **Automated Booking Flow** — Schedule page triggers Calendar event, two Gmail drafts (owner + client), and CRM auto-import
- **Password-Protected Owner Tools** — CRM and Dashboard locked behind SHA-256 hashed password gate
- **Live Google Drive Backup** — CRM writes a full JSON backup to your Google Drive folder on every change (File System Access API — Chrome/Edge)
- **localStorage Data Bus** — Chatbot → Schedule page → CRM → Dashboard all share data via the same GitHub Pages origin
- **Scroll Animations** — Smooth fade-up reveals using IntersectionObserver
- **SEO Ready** — Meta descriptions and semantic HTML on every page

---

## Google Drive Backup Setup (One-Time)

1. Open the CRM at `/crm.html` (Chrome or Edge required)
2. Click **📂 Connect Drive Backup** in the top-right header
3. In the file picker, navigate to your **Google Drive synced folder** (e.g. `~/Google Drive/My Drive/`)
4. Save the file as `SmithDevLabs_CRM_Backup.json`
5. Done — every client change auto-saves to that file and Google Drive syncs it to the cloud

On new browser sessions a **▶ Resume Drive Backup** button appears — one click re-authorizes for that session.

---

## Getting Started

### View Locally

```bash
git clone https://github.com/MSMITH71910/smithdevlabs_prosite.git
cd smithdevlabs_prosite
# Open index.html in your browser
open index.html
```

> **Note:** The CRM, Dashboard, and booking auto-population require the same browser origin to share localStorage. Run locally via a local server or use the live GitHub Pages URL for the full experience.

### Deploy Updates

```bash
git add .
git commit -m "your message"
git push origin main
# GitHub Pages deploys automatically within ~60 seconds
```

---

## Contact

**SmithDev Labs LLC**
📧 [msmith@smithdevlabs.com](mailto:msmith@smithdevlabs.com)
🌐 [smithdevlabs.com](https://smithdevlabs.com)
🐙 [github.com/MSMITH71910](https://github.com/MSMITH71910)

---

## License

© 2026 SmithDev Labs LLC. All rights reserved.
