(function () {
  const BOT_NAME = 'Sam — SDL Assistant';
  const BOT_AVATAR = '🤖';
  const TYPING_DELAY = 900;

  const BUSINESS_HOURS = {
    open: 9,
    close: 17,
    days: [1, 2, 3, 4, 5],
    label: 'Mon–Fri 9:00 AM – 5:00 PM EST'
  };

  function isBusinessHours() {
    const now = new Date();
    const est = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    return BUSINESS_HOURS.days.includes(est.getDay()) &&
      est.getHours() >= BUSINESS_HOURS.open &&
      est.getHours() < BUSINESS_HOURS.close;
  }

  const KB = [
    {
      keys: ['hello', 'hi', 'hey', 'howdy', 'sup', 'good morning', 'good afternoon', 'good evening'],
      reply: `Hey there! 👋 I'm **Sam**, the AI assistant for **SmithDev Labs**.\n\nI can answer questions about our services, pricing, and book a free discovery call for you!\n\nWhat can I help you with today?`,
      quick: ['Services & Pricing', 'Business Hours', 'Book a Free Audit', 'About the Developer']
    },
    {
      keys: ['hour', 'open', 'available', 'when can i reach', 'when are you', 'office hour', 'business hour', 'schedule', 'contact time', 'when do you', 'what time'],
      reply: `Here are our **SmithDev Labs business hours**:\n\n🕘 **Monday – Friday: 9:00 AM – 5:00 PM EST**\n\nNeed help after hours? No problem! 📬\n• **Email:** msmith@smithdevlabs.com\n• **Text:** leave a message and we reply ASAP\n• **Chatbot:** book an appointment below — I'll make sure Michael gets it!\n\n${isBusinessHours() ? '✅ **We are currently OPEN** — Michael can respond right now!' : '🌙 **We are currently outside office hours** — book a time below and we\'ll confirm ASAP.'}`,
      quick: ['Book a Free Audit', 'Email Michael', "What's the pricing?"]
    },
    {
      keys: ['email michael', 'email us', 'send email', 'contact michael', 'reach michael'],
      reply: `You can reach Michael directly at:\n\n📧 **msmith@smithdevlabs.com**\n\nOr use the quick link below to send a pre-addressed email. He typically responds within a few hours during business hours (Mon–Fri 9AM–5PM EST).\n\nWant me to also help you **schedule a call** on the calendar?`,
      quick: ['Book a Free Audit', 'Book a Free Audit', "What's the pricing?"],
      action: 'open_email'
    },
    {
      keys: ['book', 'appointment', 'schedule', 'call', 'meeting', 'free audit', 'discovery', 'consultation', 'demo', 'talk to', 'speak with'],
      reply: `I'd love to set that up! 📅\n\nLet me collect a few quick details so Michael can prepare for your call. This takes about 60 seconds.\n\n**First — what's your name?**`,
      quick: [],
      action: 'start_booking'
    },
    {
      keys: ['who built', 'who made', 'who created', 'developer', 'founder', 'michael', 'about michael', 'about you', 'who is', 'who are', 'tell me about the', 'meet the'],
      reply: `Meet **Michael R. Smith** — the founder of SmithDev Labs LLC! 👨‍💻\n\nMichael is a versatile technologist based near **Philadelphia, PA** with a unique background that spans:\n\n🤖 AI/ML development & chatbot engineering\n🌐 Full-stack web development (React, Node.js, Django)\n📊 Business intelligence & data analytics\n🔧 IT support & computer forensics (8+ years)\n🏗️ Construction tech — bringing field experience to software\n\nHe has completed **12+ professional certifications** from Meta, Google, CompTIA, and Zero To Mastery.\n\n📅 **Office hours: Mon–Fri 9AM–5PM EST**\n\nWant to know more about his skills, projects, or certifications?`,
      quick: ['Skills & Tech Stack', 'Projects & Portfolio', 'Certifications', 'Book a Free Audit']
    },
    {
      keys: ['skill', 'tech stack', 'tech', 'language', 'framework', 'python', 'react', 'node', 'what can you build', 'experience with'],
      reply: `Michael brings a **broad and battle-tested skill set** to every project:\n\n**AI & Machine Learning:**\n• Python, TensorFlow, PyTorch\n• NLP & LLM fine-tuning\n• BCG GenAI simulation (financial chatbot)\n• CrewAI multi-agent systems\n\n**Full-Stack Web Development:**\n• React, Angular, TypeScript\n• Node.js, Django, Golang (basics)\n• C# / .NET / Blazor\n• Meta Front-End Developer Certified\n\n**Business Intelligence:**\n• Power BI, Tableau, Excel/VBA\n• Data pipelines & anonymization\n\n**IT & Infrastructure:**\n• CompTIA A+ Certified\n• 8 years computer forensics\n• Linux / Windows sysadmin\n\nNeed something specific built? Let us know!`,
      quick: ['Projects & Portfolio', 'Certifications', 'Book a Free Audit']
    },
    {
      keys: ['project', 'portfolio', 'built before', 'past work', 'example', 'show me', 'github'],
      reply: `Here are some of **Michael's standout projects** on GitHub:\n\n🏗️ **ConstructPro Manager** — Full ERP for construction companies\n📈 **Real-Time Stock Predictor** — MLOps pipeline with PyTorch & Airflow\n🤖 **Fine-Tuned LLM Chatbot** — Financial Q&A bot from SEC reports\n🎯 **AI Interview Coach** — Multi-agent coaching system (CrewAI & GPT-4)\n📊 **Data Analyst Portfolio** — Dashboards & business analytics\n\n👉 See everything at **[github.com/MSMITH71910](https://github.com/MSMITH71910)**`,
      quick: ['Skills & Tech Stack', 'Certifications', 'Book a Free Audit']
    },
    {
      keys: ['certif', 'degree', 'education', 'credential', 'qualified', 'trained', 'background', 'comptia', 'meta', 'google'],
      reply: `Michael has earned **12+ professional certifications** (2024–2026):\n\n🤖 Complete Machine Learning & Data Science — *Zero To Mastery*\n🐍 Complete Python Developer — *Zero To Mastery*\n🌐 Meta Front-End Developer Professional Certificate\n🔧 C# / .NET Full-Stack Bootcamp\n☁️ DevOps Bootcamp: Linux SysAdmin\n📊 Google Business Intelligence *(in progress)*\n🔧 CompTIA A+\n🧠 BCG GenAI Job Simulation\n\nPlus **8 years** of hands-on computer forensics experience.`,
      quick: ['Skills & Tech Stack', 'Projects & Portfolio', 'Book a Free Audit']
    },
    {
      keys: ['location', 'philadelphia', 'philly', 'where is michael', 'based', 'local', 'area', 'remote', 'nationwide'],
      reply: `SmithDev Labs is **fully remote** — Michael is based near **Philadelphia, PA** but works with businesses anywhere in the US and beyond! 🌎\n\nAll project work, calls, and demos happen via Google Meet or Zoom.\n\n📅 **Office hours: Mon–Fri 9AM–5PM EST**\n\nWant to jump on a quick call?`,
      quick: ['Book a Free Audit', "What's the pricing?", 'What services do you offer?']
    },
    {
      keys: ['service', 'what do you do', 'offer', 'build', 'provide', 'specialize', 'help with'],
      reply: `Great question! SmithDev Labs offers **4 core services**:\n\n🌐 **Business Websites** — Professional, fast, mobile-ready sites that convert visitors into leads\n\n🤖 **AI Chatbots** — 24/7 intelligent assistants that capture leads and answer questions\n\n⚙️ **Business Automation** — Automate repetitive tasks using Make.com, n8n & more\n\n🧠 **AI Agents** — Advanced AI that researches, drafts emails, qualifies leads, and handles complex tasks\n\nWhich one interests you most?`,
      quick: ['Website pricing', 'Chatbot pricing', 'Automation pricing', 'Book a Free Audit']
    },
    {
      keys: ['price', 'pricing', 'cost', 'how much', 'rates', 'fee', 'charge', 'package', 'plan'],
      reply: `Here's a quick overview of our pricing:\n\n**One-Time Projects:**\n• Starter Website — **$800–$1,500**\n• Business Website + Chatbot — **$1,500–$3,000**\n• Full AI Automation Setup — **$2,500–$5,000**\n• Enterprise AI System — **$10,000+**\n\n**Monthly Retainers:**\n• Basic Care — **$300/mo**\n• Growth Plan — **$750/mo**\n• Full AI Partner — **$2,000/mo**\n\nEvery project starts with a **free 15-minute audit call**! 🎯`,
      quick: ['Book a Free Audit', "What's included?", 'How long does it take?']
    },
    {
      keys: ['website', 'web site', 'web design', 'landing page', 'webpage'],
      reply: `Our websites are built to **look great and generate leads**:\n\n✅ Mobile-first responsive design\n✅ Fast load times\n✅ Contact forms that actually work\n✅ SEO-optimized structure\n✅ Google Analytics setup\n✅ Delivered in **5–7 business days**\n\nPricing starts at **$800** for a clean 3–5 page site.`,
      quick: ['Book a Free Audit', 'Add a chatbot too', 'What about pricing?']
    },
    {
      keys: ['chatbot', 'chat bot', 'bot', 'assistant', 'ai chat', 'live chat', 'like you'],
      reply: `You're talking to one right now! 😄\n\nOur AI chatbots can:\n💬 Answer customer questions 24/7\n📋 Qualify leads automatically\n📅 **Book appointments directly to Google Calendar**\n🗂️ **Push lead info to your CRM**\n📣 Follow up with prospects\n\nMost clients see a **40–60% increase in captured leads** within 30 days.\n\nSetup starts at **$500** standalone, or bundled with a website from **$1,500**.`,
      quick: ['Book a Free Audit', "What's the pricing?", 'How long to set up?']
    },
    {
      keys: ['automat', 'workflow', 'n8n', 'make.com', 'zapier', 'integration', 'connect', 'system'],
      reply: `Business automation is one of our specialties! We use **Make.com**, **n8n**, and **Zapier** to connect your apps and eliminate repetitive work.\n\nExamples:\n🔗 Lead form → CRM entry + SMS alert to owner\n📧 New client → automated onboarding email sequence\n📅 Appointment booked → confirmation + reminder texts\n⭐ Job complete → Google review request after 3 days\n\nAutomation packages start at **$2,500** one-time.`,
      quick: ['Book a Free Audit', "What's the pricing?", 'What services do you offer?']
    },
    {
      keys: ['how long', 'timeline', 'turnaround', 'delivery', 'when can i get', 'how fast'],
      reply: `Here's a typical timeline:\n\n📅 **Starter Website** — 5–7 business days\n📅 **Website + Chatbot** — 7–10 business days\n📅 **Full Automation System** — 10–21 business days\n📅 **Enterprise AI System** — 4–8 weeks\n\nWe deliver fast without cutting corners. Every project includes a walkthrough call before final handoff.`,
      quick: ['Book a Free Audit', "What's the pricing?"]
    },
    {
      keys: ['included', 'what do i get', "what's in", 'package include', 'details'],
      reply: `Every project at SmithDev Labs includes:\n\n✅ Initial strategy call (free)\n✅ Custom design built around your brand\n✅ Mobile & desktop testing\n✅ Live walkthrough before delivery\n✅ 30-day support after launch\n✅ Full ownership of everything we build\n\nNo subscriptions, no lock-ins. You own it.`,
      quick: ['Book a Free Audit', "What's the pricing?"]
    },
    {
      keys: ['process', 'how does it work', 'steps', 'start', 'get started', 'next step'],
      reply: `Getting started is easy:\n\n**1️⃣ Free 15-min Audit Call** — We learn about your business and what you need\n**2️⃣ Custom Proposal** — Sent within 24 hours with exact scope + price\n**3️⃣ 50% Deposit** — We start building immediately\n**4️⃣ Build & Review** — You review progress and give feedback\n**5️⃣ Launch & Handoff** — Full walkthrough + 30 days support\n\nWant to kick things off with a free call?`,
      quick: ['Book a Free Audit', "What's the pricing?"]
    },
    {
      keys: ['website pricing', 'how much is a website', 'website cost'],
      reply: `**Website Pricing:**\n\n🌐 Starter (3–5 pages) — **$800–$1,500**\n🌐 Business (5–8 pages + chatbot) — **$1,500–$2,500**\n🌐 Premium (10+ pages + automation) — **$2,500–$5,000**\n\nAll sites are mobile-ready, SEO-optimized, and come with a contact form + Google Analytics. Delivered in 5–10 business days.`,
      quick: ['Book a Free Audit', 'Add a chatbot too', 'How long does it take?']
    },
    {
      keys: ['chatbot pricing', 'how much is a chatbot', 'chatbot cost'],
      reply: `**AI Chatbot Pricing:**\n\n🤖 Standalone Chatbot — **$500**\n🤖 Chatbot + Website Bundle — **$1,500–$3,000**\n🤖 Chatbot + CRM Integration — **$2,000–$3,500**\n🤖 Full Automation + Chatbot — **$3,000–$5,000**\n\nAll chatbots include lead capture, 24/7 availability, and **direct Google Calendar booking**!`,
      quick: ['Book a Free Audit', "What's included?", 'How long does it take?']
    },
    {
      keys: ['automation pricing', 'how much is automation', 'automation cost'],
      reply: `**Automation Pricing:**\n\n⚙️ Single Automation (1 workflow) — **$500–$1,500**\n⚙️ Full Business Automation Suite — **$2,500–$5,000**\n⚙️ Enterprise AI System — **$10,000+**\n\nMonthly maintenance retainers start at **$300/mo** to keep everything running smoothly.`,
      quick: ['Book a Free Audit', 'What services do you offer?']
    },
    {
      keys: ['location', 'where', 'based', 'local', 'area', 'remote', 'online', 'nationwide'],
      reply: `SmithDev Labs is a **fully remote agency** — we work with businesses anywhere in the US and beyond! 🌎\n\n📅 **Office hours: Mon–Fri 9AM–5PM EST**\n\nAll calls and demos happen via Google Meet or Zoom. Distance is never a barrier.`,
      quick: ['Book a Free Audit', "What's the pricing?", 'What services do you offer?']
    },
    {
      keys: ['about', 'company', 'who are you', 'smithdev', 'smith', 'llc', 'team'],
      reply: `**SmithDev Labs LLC** is a boutique AI solutions agency helping small and medium businesses compete using the power of AI.\n\nWe make **AI practical and affordable** — not just a buzzword.\n\n📅 **Office hours: Mon–Fri 9AM–5PM EST**\nAfter hours? Email msmith@smithdevlabs.com or book via chatbot!`,
      quick: ['Book a Free Audit', 'What services do you offer?', "What's the pricing?"]
    },
    {
      keys: ['guarantee', 'refund', 'warranty', 'what if', 'risk', 'trial'],
      reply: `We stand behind our work:\n\n✅ **Revision rounds included** — we keep refining until you're happy\n✅ **Clear scope upfront** — no surprise costs\n✅ **Walkthrough call** before every delivery\n✅ **30-day support** included after launch\n\nWe don't get paid in full until you're satisfied. Your success is our reputation. 🤝`,
      quick: ['Book a Free Audit', "What's the pricing?"]
    },
    {
      keys: ['thank', 'thanks', 'awesome', 'great', 'perfect', 'amazing', 'helpful', 'love it'],
      reply: `You're welcome! 😊 That's what I'm here for.\n\nIf you're ready to take the next step, a **free 15-minute audit call** is the best way to start — Mon–Fri 9AM–5PM EST, or book anytime below!\n\nIs there anything else I can help you with?`,
      quick: ['Book a Free Audit', 'What services do you offer?', "What's the pricing?"]
    },
    {
      keys: ['bye', 'goodbye', 'see you', 'later', 'done', 'no thanks'],
      reply: `Thanks for stopping by! 👋\n\nWhenever you're ready to explore what AI can do for your business, we're here.\n\n📧 msmith@smithdevlabs.com\n📅 Mon–Fri 9AM–5PM EST\n\nHave a great day! 🚀`,
      quick: []
    }
  ];

  let bookingState = null;
  let leadData = {};

  const BOOKING_STEPS = ['name', 'email', 'phone', 'service'];
  const BOOKING_PROMPTS = {
    name:    `What's your **full name**?`,
    email:   `Great! What's the best **email address** to reach you?`,
    phone:   `And your **phone number**? (We may text you a confirmation)`,
    service: `Almost there! What **service** are you most interested in?\n\n• Website\n• AI Chatbot\n• Business Automation\n• Full AI System\n• Not sure yet — just exploring`
  };

  function matchReply(input) {
    const text = input.toLowerCase().trim();
    for (const entry of KB) {
      if (entry.keys.some(k => text.includes(k))) {
        return entry;
      }
    }
    return {
      reply: `That's a great question! I want to make sure I give you the right answer.\n\nThe best next step is a **free 15-minute call** with our founder — he can answer that directly and show you a live demo.\n\n📅 **Office hours: Mon–Fri 9AM–5PM EST**\n\n👉 Or email us at **msmith@smithdevlabs.com** and we'll reply within a few hours!`,
      quick: ['Book a Free Audit', 'Business Hours', 'What services do you offer?']
    };
  }

  function formatMessage(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_self">$1</a>')
      .replace(/\n/g, '<br>')
      .replace(/_(.*?)_/g, '<em>$1</em>');
  }

  function buildWidget() {
    const widget = document.createElement('div');
    widget.id = 'sdl-chat-widget';
    widget.innerHTML = `
      <div id="sdl-chat-bubble" title="Chat with Sam, our AI assistant">
        <span id="sdl-bubble-icon">💬</span>
        <span id="sdl-unread-dot"></span>
      </div>
      <div id="sdl-chat-window">
        <div id="sdl-chat-header">
          <div id="sdl-header-info">
            <div id="sdl-header-avatar">${BOT_AVATAR}</div>
            <div>
              <div id="sdl-header-name">${BOT_NAME}</div>
              <div id="sdl-header-status"><span id="sdl-status-dot"></span>${isBusinessHours() ? ' Open now · Replies instantly' : ' After hours · Books 24/7'}</div>
            </div>
          </div>
          <button type="button" id="sdl-close-btn" aria-label="Close chat">✕</button>
        </div>
        <div id="sdl-chat-messages"></div>
        <div id="sdl-quick-replies"></div>
        <div id="sdl-chat-input-row">
          <input id="sdl-chat-input" type="text" placeholder="Ask me anything…" autocomplete="off" />
          <button type="button" id="sdl-send-btn" aria-label="Send">➤</button>
        </div>
        <div id="sdl-chat-footer">Mon–Fri 9AM–5PM EST · <a href="mailto:msmith@smithdevlabs.com">msmith@smithdevlabs.com</a></div>
      </div>
    `;
    document.body.appendChild(widget);

    const style = document.createElement('style');
    style.textContent = `
      #sdl-chat-footer {
        text-align: center;
        font-size: 0.65rem;
        color: #94a3b8;
        padding: 4px 12px 8px;
        border-top: 1px solid #f1f5f9;
      }
      #sdl-chat-footer a { color: #94a3b8; text-decoration: underline; }
      .sdl-booking-card {
        background: linear-gradient(135deg, #eff6ff, #f0fdf4);
        border: 1px solid #bfdbfe;
        border-radius: 12px;
        padding: 14px;
        margin-top: 8px;
        font-size: 0.82rem;
      }
      .sdl-booking-card h4 { margin: 0 0 8px; font-size: 0.9rem; color: #1e3a5f; }
      .sdl-booking-card .sdl-lead-row { margin: 3px 0; color: #334155; }
      .sdl-booking-card .sdl-lead-row strong { color: #1e40af; }
      .sdl-booking-actions { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; }
      .sdl-booking-actions a, .sdl-booking-actions button {
        display: block;
        width: 100%;
        text-align: center;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        border: none;
        box-sizing: border-box;
      }
      .sdl-btn-calendar { background: #1a73e8; color: white; }
      .sdl-btn-email { background: #16a34a; color: white; }
      .sdl-btn-copy { background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1 !important; }
      .sdl-btn-copy:hover { background: #e2e8f0; }
      .sdl-copy-success { color: #16a34a; font-size: 0.75rem; text-align: center; margin-top: 4px; display: none; }
    `;
    document.head.appendChild(style);
  }

  function addMessage(role, html, animate) {
    const messages = document.getElementById('sdl-chat-messages');
    const wrap = document.createElement('div');
    wrap.className = `sdl-msg-wrap sdl-msg-${role}${animate ? ' sdl-msg-in' : ''}`;
    const bubble = document.createElement('div');
    bubble.className = 'sdl-bubble';
    bubble.innerHTML = html;
    wrap.appendChild(bubble);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
    return wrap;
  }

  function showTyping() {
    const messages = document.getElementById('sdl-chat-messages');
    const wrap = document.createElement('div');
    wrap.className = 'sdl-msg-wrap sdl-msg-bot sdl-msg-in';
    wrap.id = 'sdl-typing';
    wrap.innerHTML = '<div class="sdl-bubble sdl-typing-bubble"><span></span><span></span><span></span></div>';
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('sdl-typing');
    if (t) t.remove();
  }

  function setQuickReplies(replies) {
    const container = document.getElementById('sdl-quick-replies');
    container.innerHTML = '';
    replies.forEach(r => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sdl-quick-btn';
      btn.textContent = r;
      btn.addEventListener('click', () => handleInput(r));
      container.appendChild(btn);
    });
  }

  function buildGCalURL(lead) {
    const title = encodeURIComponent(`Discovery Call — SmithDev Labs × ${lead.name}`);
    const details = encodeURIComponent(
      `New lead from SmithDev Labs chatbot\n\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nService: ${lead.service}\n\nNotes: Booked via website chatbot.`
    );
    const guests = encodeURIComponent(lead.email);
    return `https://calendar.google.com/calendar/r/eventedit?text=${title}&details=${details}&add=${guests}&src=msmith%40smithdevlabs.com`;
  }

  function buildMailtoURL(lead) {
    const subject = encodeURIComponent(`🆕 New Lead: ${lead.name} — SmithDev Labs Chatbot`);
    const body = encodeURIComponent(
      `New lead captured from the SmithDev Labs website chatbot:\n\n` +
      `Name:      ${lead.name}\n` +
      `Email:     ${lead.email}\n` +
      `Phone:     ${lead.phone}\n` +
      `Service:   ${lead.service}\n\n` +
      `Captured:  ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST\n\n` +
      `---\nTo add this client to your CRM, open SmithDevLabs_CRM.html and click "Import Lead".`
    );
    return `mailto:msmith@smithdevlabs.com?subject=${subject}&body=${body}`;
  }

  function buildLeadJSON(lead) {
    return JSON.stringify({
      id: Date.now().toString(),
      name: lead.name,
      business: '',
      email: lead.email,
      phone: lead.phone,
      service: lead.service,
      status: 'Lead',
      value: '',
      date: new Date().toISOString().split('T')[0],
      notes: `Booked via website chatbot on ${new Date().toLocaleDateString()}.`
    }, null, 2);
  }

  function getScheduleURL() {
    const base = window.location.href.replace(/\/[^/]*$/, '/');
    return base + 'schedule.html';
  }

  function saveLeadToStorage(lead) {
    try {
      const leads = JSON.parse(localStorage.getItem('sdl-chatbot-leads') || '[]');
      leads.unshift({ ...lead, timestamp: new Date().toISOString() });
      localStorage.setItem('sdl-chatbot-leads', JSON.stringify(leads));
    } catch (e) {}
  }

  function showBookingConfirmation(lead) {
    const scheduleURL = getScheduleURL();
    const gcalURL = buildGCalURL(lead);
    const mailtoURL = buildMailtoURL(lead);
    const leadJSON = buildLeadJSON(lead);

    saveLeadToStorage(lead);

    const card = `
      <div class="sdl-booking-card">
        <h4>🎉 Perfect, ${lead.name.split(' ')[0]}! One last step →</h4>
        <div class="sdl-lead-row" style="margin-bottom:10px;font-size:0.8rem;color:#475569;">Your info is saved. Now <strong style="color:#1e40af;">pick a time that works for you</strong> using the button below:</div>
        <div class="sdl-booking-actions">
          <a class="sdl-btn-calendar" href="${scheduleURL}" target="_blank" style="font-size:0.85rem;padding:10px 12px;">📅 Pick Your Time — Open Scheduler</a>
          <a class="sdl-btn-email" href="${mailtoURL}" style="font-size:0.8rem;">📧 Email Michael Instead</a>
          <button type="button" class="sdl-btn-copy" onclick="(function(btn){
            navigator.clipboard.writeText(${JSON.stringify(leadJSON)}).then(function(){
              btn.textContent = '✅ Copied!';
              var s = btn.nextElementSibling;
              if(s) { s.style.display = 'block'; }
              setTimeout(function(){ btn.textContent = '📋 Copy Info (for CRM import)'; }, 2000);
            });
          })(this)">📋 Copy Info (for CRM import)</button>
          <div class="sdl-copy-success">Paste into SmithDevLabs CRM → Import Lead</div>
        </div>
        <div style="font-size:0.72rem;color:#94a3b8;text-align:center;margin-top:8px;">
          📞 Michael will confirm within 2 hours during business hours (Mon–Fri 9AM–5PM EST)
        </div>
      </div>
    `;

    addMessage('bot', card, true);
    setQuickReplies(['What services do you offer?', "What's the pricing?"]);
  }

  function handleBookingStep(text) {
    const step = BOOKING_STEPS[bookingState];

    if (step === 'name') leadData.name = text;
    else if (step === 'email') leadData.email = text;
    else if (step === 'phone') leadData.phone = text;
    else if (step === 'service') leadData.service = text;
    else if (step === 'time') {
      leadData.time = text;
      bookingState = null;
      showTyping();
      setTimeout(() => {
        removeTyping();
        showBookingConfirmation(leadData);
      }, TYPING_DELAY);
      leadData = {};
      return;
    }

    bookingState++;
    const nextStep = BOOKING_STEPS[bookingState];
    showTyping();
    setTimeout(() => {
      removeTyping();
      addMessage('bot', formatMessage(BOOKING_PROMPTS[nextStep]), true);
    }, TYPING_DELAY);
  }

  function handleInput(text) {
    if (!text.trim()) return;
    document.getElementById('sdl-chat-input').value = '';
    document.getElementById('sdl-quick-replies').innerHTML = '';
    addMessage('user', text, true);

    if (bookingState !== null) {
      showTyping();
      setTimeout(() => {
        removeTyping();
        handleBookingStep(text);
      }, 400);
      return;
    }

    showTyping();
    const match = matchReply(text);

    setTimeout(() => {
      removeTyping();

      if (match.action === 'start_booking') {
        bookingState = 0;
        leadData = {};
        addMessage('bot', formatMessage(match.reply), true);
        return;
      }

      if (match.action === 'open_email') {
        addMessage('bot', formatMessage(match.reply), true);
        const link = document.createElement('a');
        link.href = 'mailto:msmith@smithdevlabs.com';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        if (match.quick && match.quick.length) setQuickReplies(match.quick);
        return;
      }

      addMessage('bot', formatMessage(match.reply), true);
      if (match.quick && match.quick.length) setQuickReplies(match.quick);
    }, TYPING_DELAY);
  }

  function openChat() {
    document.getElementById('sdl-chat-window').classList.add('sdl-open');
    document.getElementById('sdl-chat-bubble').classList.add('sdl-hidden');
    document.getElementById('sdl-unread-dot').style.display = 'none';
    document.getElementById('sdl-chat-input').focus();
  }

  function closeChat() {
    document.getElementById('sdl-chat-window').classList.remove('sdl-open');
    document.getElementById('sdl-chat-bubble').classList.remove('sdl-hidden');
  }

  function init() {
    buildWidget();

    document.getElementById('sdl-chat-bubble').addEventListener('click', openChat);
    document.getElementById('sdl-close-btn').addEventListener('click', closeChat);

    document.getElementById('sdl-send-btn').addEventListener('click', () => {
      handleInput(document.getElementById('sdl-chat-input').value);
    });

    document.getElementById('sdl-chat-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') handleInput(e.target.value);
    });

    setTimeout(() => {
      openChat();
      const open = isBusinessHours();
      addMessage('bot', formatMessage(
        `👋 Hi! I'm **Sam**, the AI assistant for SmithDev Labs.\n\n` +
        `${open
          ? '✅ **Michael is available right now** (Mon–Fri 9AM–5PM EST).'
          : '🌙 **After hours** — but I can still book your appointment and Michael will confirm ASAP!'
        }\n\nWhat can I help you with today?`
      ), true);
      setQuickReplies(['Book a Free Audit', 'Services & Pricing', 'Business Hours', 'About the Developer']);
    }, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
