// ── NAVBAR SCROLL ─────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE MENU ───────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── CONTACT FORM ──────────────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');

    const firstName = document.getElementById('firstName')?.value.trim() || '';
    const lastName  = document.getElementById('lastName')?.value.trim()  || '';
    const email     = document.getElementById('email')?.value.trim()     || '';
    const phone     = document.getElementById('phone')?.value.trim()     || '';
    const business  = document.getElementById('business')?.value.trim()  || '';
    const service   = document.getElementById('service')?.value          || '';
    const challenge = document.getElementById('challenge')?.value.trim() || '';

    const subject = encodeURIComponent(`🆕 Free Audit Request — ${firstName} ${lastName} (${business})`);
    const body = encodeURIComponent(
      `New free audit request from the SmithDev Labs website:\n\n` +
      `Name:       ${firstName} ${lastName}\n` +
      `Email:      ${email}\n` +
      `Phone:      ${phone}\n` +
      `Business:   ${business}\n` +
      `Interested: ${service}\n` +
      `Challenge:  ${challenge}\n\n` +
      `Submitted:  ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST`
    );

    window.location.href = `mailto:msmith@smithdevlabs.com?subject=${subject}&body=${body}`;

    btn.textContent = '✅ Opening your email…';
    btn.disabled = true;

    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'block';
      form.reset();
      btn.textContent = 'Book My Free AI Audit Call →';
      btn.disabled = false;
    }, 1500);
  });
}

// ── SMOOTH ACTIVE NAV ─────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
});
