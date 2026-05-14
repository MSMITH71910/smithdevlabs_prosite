(function () {
  const BOT_NAME = 'Sam — SDL Assistant';
  const BOT_AVATAR = '🤖';
  const TYPING_DELAY = 900;

  const KB = [
    {
      keys: ['hello', 'hi', 'hey', 'howdy', 'sup', 'good morning', 'good afternoon', 'good evening'],
      reply: `Hey there! 👋 I'm Sam, the AI assistant for **SmithDev Labs**. I can answer questions about our services, pricing, and the developer behind it all.\n\nWhat can I help you with today?`,
      quick: ['Services & Pricing', 'About the Developer', 'Book a Free Audit']
    },
    {
      keys: ['who built', 'who made', 'who created', 'developer', 'founder', 'michael', 'about michael', 'about you', 'who is', 'who are', 'tell me about the', 'meet the'],
      reply: `Meet **Michael R. Smith** — the founder of SmithDev Labs LLC! 👨‍💻\n\nMichael is a versatile technologist based near **Philadelphia, PA** with a unique background that spans:\n\n🤖 AI/ML development & chatbot engineering\n🌐 Full-stack web development (React, Node.js, Django)\n📊 Business intelligence & data analytics\n🔧 IT support & computer forensics (8+ years)\n🏗️ Construction tech — bringing field experience to software\n\nHe has completed **12+ professional certifications** from Meta, Google, CompTIA, and Zero To Mastery.\n\nWant to know more about his skills, projects, or certifications?`,
      quick: ['Skills & Tech Stack', 'Projects & Portfolio', 'Certifications', 'Book a Free Audit']
    },
    {
      keys: ['skill', 'tech stack', 'tech', 'language', 'framework', 'python', 'react', 'node', 'what can you build', 'experience with'],
      reply: `Michael brings a **broad and battle-tested skill set** to every project:\n\n**AI & Machine Learning:**\n• Python, TensorFlow, PyTorch\n• NLP & LLM fine-tuning\n• BCG GenAI simulation (financial chatbot)\n• CrewAI multi-agent systems\n\n**Full-Stack Web Development:**\n• React, Angular, TypeScript\n• Node.js, Django, Golang (basics)\n• C# / .NET / Blazor\n• Meta Front-End Developer Certified\n\n**Business Intelligence:**\n• Power BI, Tableau, Excel/VBA\n• Data pipelines & anonymization\n• Google Business Intelligence (in progress)\n\n**IT & Infrastructure:**\n• CompTIA A+ Certified\n• 8 years computer forensics\n• Linux / Windows sysadmin\n• Remote troubleshooting\n\nNeed something specific built? Let us know!`,
      quick: ['Projects & Portfolio', 'Certifications', 'Book a Free Audit']
    },
    {
      keys: ['project', 'portfolio', 'built before', 'past work', 'example', 'show me', 'github'],
      reply: `Here are some of **Michael's standout projects** on GitHub:\n\n🏗️ **ConstructPro Manager** — Full ERP for construction companies (payroll, takeoff, estimating, blueprints)\n\n📈 **Real-Time Stock Predictor** — MLOps pipeline with automated retraining using PyTorch & Airflow\n\n🤖 **Fine-Tuned LLM Chatbot** — Financial Q&A bot pulling data from 10-K/10-Q SEC reports\n\n🎯 **AI Interview Coach** — Multi-agent coaching system using CrewAI & GPT-4\n\n📊 **Data Analyst Portfolio** — Concrete mix performance dashboards, Bigfoot sighting analysis & budget trackers\n\n🛍️ **Crwn Clothing** — Full e-commerce frontend in React & Firebase\n\n🎮 **Clips Gaming Platform** — Streaming-style platform built in Angular & TypeScript\n\n👉 See everything at **[github.com/MSMITH71910](https://github.com/MSMITH71910)**`,
      quick: ['Skills & Tech Stack', 'Certifications', 'Book a Free Audit']
    },
    {
      keys: ['certif', 'degree', 'education', 'credential', 'qualified', 'trained', 'background', 'comptia', 'meta', 'google'],
      reply: `Michael has earned **12+ professional certifications** (2024–2026):\n\n🤖 Complete Machine Learning & Data Science — *Zero To Mastery*\n🐍 Complete Python Developer — *Zero To Mastery*\n🌐 Meta Front-End Developer Professional Certificate — *Meta/Coursera*\n🔧 C# / .NET Full-Stack Bootcamp — *ASP.NET Core & Blazor*\n☁️ DevOps Bootcamp: Linux SysAdmin — *Zero To Mastery*\n📊 Google Business Intelligence *(in progress)* — *Google/Coursera*\n🔧 CompTIA A+ — *CompTIA*\n🧠 BCG GenAI Job Simulation — *Forage*\n📊 Commonwealth Bank Data Science Simulation — *Forage*\n📈 Goldman Sachs Excel Skills Simulation — *Forage*\n🎨 3D Modeling with Blender — *Online*\n\nPlus **8 years** of hands-on computer forensics experience in the field.`,
      quick: ['Skills & Tech Stack', 'Projects & Portfolio', 'Book a Free Audit']
    },
    {
      keys: ['location', 'philadelphia', 'philly', 'where is michael', 'based', 'local', 'area', 'remote', 'nationwide'],
      reply: `SmithDev Labs is **fully remote** — Michael is based near **Philadelphia, PA** but works with businesses anywhere in the US and beyond! 🌎\n\nAll project work, calls, and demos happen via Google Meet, Zoom, or email. No travel needed on your end.\n\nWant to jump on a quick call?`,
      quick: ['Book a Free Audit', "What's the pricing?", 'What services do you offer?']
    },
    {
      keys: ['service', 'what do you do', 'offer', 'build', 'provide', 'specialize', 'help with'],
      reply: `Great question! SmithDev Labs offers **4 core services**:\n\n🌐 **Business Websites** — Professional, fast, mobile-ready sites that turn visitors into leads\n\n🤖 **AI Chatbots** — 24/7 intelligent assistants (like me!) that capture leads and answer questions automatically\n\n⚙️ **Business Automation** — Automate repetitive tasks using Make.com, n8n & more — saves you hours every week\n\n🧠 **AI Agents** — Advanced AI that can research, draft emails, qualify leads, and handle complex tasks\n\nWhich one interests you most?`,
      quick: ['Website pricing', 'Chatbot pricing', 'Automation pricing', 'Book a Free Audit']
    },
    {
      keys: ['price', 'pricing', 'cost', 'how much', 'rates', 'fee', 'charge', 'package', 'plan'],
      reply: `Here's a quick overview of our pricing:\n\n**One-Time Projects:**\n• Starter Website — **$800–$1,500**\n• Business Website + Chatbot — **$1,500–$3,000**\n• Full AI Automation Setup — **$2,500–$5,000**\n• Enterprise AI System — **$10,000+**\n\n**Monthly Retainers (ongoing support):**\n• Basic Care — **$300/mo**\n• Growth Plan — **$750/mo**\n• Full AI Partner — **$2,000/mo**\n\nEvery project starts with a **free 15-minute audit call** so we can give you an exact quote! 🎯`,
      quick: ['Book a Free Audit', "What's included?", 'How long does it take?']
    },
    {
      keys: ['website', 'web site', 'web design', 'landing page', 'webpage'],
      reply: `Our websites are built to **look great and generate leads** — not just sit there. Here's what's included:\n\n✅ Mobile-first responsive design\n✅ Fast load times (no bloated page builders)\n✅ Contact forms that actually work\n✅ SEO-optimized structure\n✅ Google Analytics setup\n✅ Delivered in **5–7 business days**\n\nPricing starts at **$800** for a clean 3–5 page site. We can also add a chatbot, booking system, or automation on top.\n\nWant to see a live demo?`,
      quick: ['Book a Free Audit', 'Add a chatbot too', 'What about pricing?']
    },
    {
      keys: ['chatbot', 'chat bot', 'bot', 'assistant', 'ai chat', 'live chat', 'like you'],
      reply: `You're talking to one right now! 😄\n\nOur AI chatbots are custom-built for your business. They can:\n\n💬 Answer customer questions 24/7\n📋 Qualify leads automatically\n📅 Book appointments\n🔗 Connect to your CRM or email\n📣 Follow up with prospects\n\nMost clients see a **40–60% increase in captured leads** within the first 30 days.\n\nSetup starts at **$500** standalone, or bundled with a website from **$1,500**. Want us to build one live on a call so you can see it in action?`,
      quick: ['Book a Free Audit', "What's the pricing?", 'How long to set up?']
    },
    {
      keys: ['automat', 'workflow', 'n8n', 'make.com', 'zapier', 'integration', 'connect', 'system'],
      reply: `Business automation is one of our specialties! We use tools like **Make.com**, **n8n**, and **Zapier** to connect your apps and eliminate repetitive work.\n\nExamples of what we automate:\n\n📥 Auto-send follow-up emails when a form is submitted\n📊 Sync leads from your website to your CRM\n🗓️ Auto-schedule appointments and send reminders\n📦 Order & invoice processing\n📱 Post to social media on a schedule\n\nMost automation projects run **$1,000–$3,000** one-time, and clients typically save **5–15 hours per week**.\n\nWant to talk through what we could automate for you?`,
      quick: ['Book a Free Audit', "What's the cost?", 'How long does it take?']
    },
    {
      keys: ['ai agent', 'agent', 'openai', 'gpt', 'artificial intelligence', 'generative', 'llm'],
      reply: `AI Agents are the next level — beyond a simple chatbot, they can **think, research, and take action**.\n\nHere's what an AI agent can do for your business:\n\n🔍 Research prospects and summarize findings\n✉️ Draft personalized emails and proposals\n📞 Qualify inbound leads and score them\n📝 Generate reports and content\n🔄 Run complex multi-step workflows automatically\n\nWe build agents using **OpenAI, Relevance AI, Voiceflow**, and custom APIs.\n\nPricing starts at **$2,500** depending on complexity. Want to see a demo?`,
      quick: ['Book a Free Audit', "What's the pricing?", 'Tell me about chatbots']
    },
    {
      keys: ['how long', 'timeline', 'turnaround', 'delivery', 'when', 'days', 'weeks', 'fast', 'quick'],
      reply: `We move fast! Here are our typical turnaround times:\n\n🌐 **Website** — 5–7 business days\n🤖 **Chatbot** — 2–3 business days\n⚙️ **Automation** — 3–7 business days\n🧠 **AI Agent** — 1–3 weeks depending on complexity\n\nEvery project includes revision rounds and a walkthrough call before delivery.\n\nNeed something faster? Let us know on the audit call and we'll do our best to accommodate! ⚡`,
      quick: ['Book a Free Audit', "What's the pricing?", 'What services do you offer?']
    },
    {
      keys: ['book', 'audit', 'call', 'meeting', 'demo', 'schedule', 'appointment', 'consult', 'talk', 'chat with'],
      reply: `Awesome — let's make it happen! 🎉\n\nOur **free 15-minute AI Audit call** is the perfect first step. Here's what happens:\n\n1️⃣ You tell us about your business\n2️⃣ We build a live demo using your actual business name\n3️⃣ We give you a clear plan and exact quote\n\nNo pressure, no commitment — just a clear picture of what's possible.\n\n👉 **[Click here to book your free audit](contact.html)**`,
      quick: ['What services do you offer?', "What's the pricing?"]
    },
    {
      keys: ['contact', 'email', 'reach', 'get in touch', 'phone', 'number', 'message'],
      reply: `You can reach us directly here:\n\n📧 **Email:** msmith@smithdevlabs.com\n🌐 **Website:** smithdevlabs.com\n\nOr fill out the form on our **[Contact page](contact.html)** and we'll get back to you within a few hours.\n\nThe fastest way to get started is a **free 15-minute audit call** — we can show you a live demo of exactly what we'd build for you! 🚀`,
      quick: ['Book a Free Audit', "What's the pricing?"]
    },
    {
      keys: ['location', 'where', 'based', 'local', 'area', 'remote', 'online', 'nationwide'],
      reply: `SmithDev Labs is a **fully remote agency** — so we work with businesses anywhere in the US and beyond! 🌎\n\nAll our calls, demos, and project updates are done via Google Meet, Zoom, or email. Distance is never a barrier.\n\nWant to jump on a quick call?`,
      quick: ['Book a Free Audit', "What's the pricing?", 'What services do you offer?']
    },
    {
      keys: ['about', 'company', 'who are you', 'smithdev', 'michael', 'smith', 'llc', 'background', 'team', 'founder'],
      reply: `**SmithDev Labs LLC** is a boutique AI solutions agency helping small and medium businesses compete with bigger companies using the power of AI.\n\nWe specialize in making **AI practical and affordable** — not just a buzzword. Our founder has hands-on experience with:\n\n🤖 Building AI chatbots and agents\n🌐 Designing high-converting websites\n⚙️ Automating business workflows\n\nWe believe every small business deserves the same AI tools that Fortune 500 companies use — at a fraction of the cost.\n\nWant to see what we can do for you?`,
      quick: ['Book a Free Audit', 'What services do you offer?', "What's the pricing?"]
    },
    {
      keys: ['guarantee', 'refund', 'warranty', 'what if', 'risk', 'trial'],
      reply: `Great question — we stand behind our work. Here's our promise:\n\n✅ **Revision rounds included** — we keep refining until you're happy\n✅ **Clear scope upfront** — no surprise costs or scope creep\n✅ **Walkthrough call** before every delivery\n✅ **30-day support** included after launch\n\nWe don't get paid in full until you're satisfied with the direction. Your success is our reputation. 🤝`,
      quick: ['Book a Free Audit', "What's the pricing?"]
    },
    {
      keys: ['thank', 'thanks', 'awesome', 'great', 'perfect', 'amazing', 'helpful', 'love it'],
      reply: `You're welcome! 😊 That's what I'm here for.\n\nIf you're ready to take the next step, a **free 15-minute audit call** is the best way to get started — we'll show you a live demo built around your specific business.\n\nIs there anything else I can help you with?`,
      quick: ['Book a Free Audit', 'What services do you offer?', "What's the pricing?"]
    },
    {
      keys: ['bye', 'goodbye', 'see you', 'later', 'done', 'no thanks'],
      reply: `Thanks for stopping by! 👋\n\nWhenever you're ready to explore what AI can do for your business, we're here. Feel free to come back anytime or reach us at **msmith@smithdevlabs.com**.\n\nHave a great day! 🚀`,
      quick: []
    }
  ];

  function matchReply(input) {
    const text = input.toLowerCase().trim();
    for (const entry of KB) {
      if (entry.keys.some(k => text.includes(k))) {
        return entry;
      }
    }
    return {
      reply: `That's a great question! I want to make sure I give you the right answer.\n\nThe best next step is a **free 15-minute call** with our founder — he can answer that directly and show you a live demo.\n\n👉 **[Book your free audit here](contact.html)**\n\nOr email us at **msmith@smithdevlabs.com** and we'll reply within a few hours!`,
      quick: ['Book a Free Audit', 'What services do you offer?', "What's the pricing?"]
    };
  }

  function formatMessage(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_self">$1</a>')
      .replace(/\n/g, '<br>');
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
              <div id="sdl-header-status"><span id="sdl-status-dot"></span> Online · Replies instantly</div>
            </div>
          </div>
          <button id="sdl-close-btn" aria-label="Close chat">✕</button>
        </div>
        <div id="sdl-chat-messages"></div>
        <div id="sdl-quick-replies"></div>
        <div id="sdl-chat-input-row">
          <input id="sdl-chat-input" type="text" placeholder="Ask me anything…" autocomplete="off" />
          <button id="sdl-send-btn" aria-label="Send">➤</button>
        </div>
      </div>
    `;
    document.body.appendChild(widget);
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
      btn.className = 'sdl-quick-btn';
      btn.textContent = r;
      btn.addEventListener('click', () => handleInput(r));
      container.appendChild(btn);
    });
  }

  function handleInput(text) {
    if (!text.trim()) return;
    document.getElementById('sdl-chat-input').value = '';
    document.getElementById('sdl-quick-replies').innerHTML = '';
    addMessage('user', text, true);
    showTyping();
    const match = matchReply(text);
    setTimeout(() => {
      removeTyping();
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
      addMessage('bot', formatMessage(`👋 Hi! I'm **Sam**, the AI assistant for SmithDev Labs.\n\nI can answer questions about our services, pricing, timelines, and more. What can I help you with today?`), true);
      setQuickReplies(['Services & Pricing', 'How long does it take?', 'What makes you different?', 'Book a Free Audit']);
    }, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
