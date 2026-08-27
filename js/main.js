/**
 * ALI HAMZA PORTFOLIO - MAIN INTERACTION CONTROLLER
 * Handles Theme, Sticky Nav, Mobile Menu, Pakistan Clock, Scroll Reveal, FAQ & Contact Form
 */

// Initialize preloader immediately on script execution for smooth splash experience
initPreloader();

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initStickyHeader();
  initMobileMenu();
  initPakistanClock();
  initScrollReveal();
  initFaqAccordion();
  initContactForm();
  initBackToTop();
  initSkillsFilter();
  initHeroTypewriter();
  initInsightsAccordion();
});

/* --------------------------------------------------------------------------
   1. THEME SWITCHER (Dark/Light with localStorage persistence)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('ah_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ah_theme', newTheme);
    });
  }
}

/* --------------------------------------------------------------------------
   2. STICKY HEADER & ACTIVE NAV LINK HIGHLIGHT
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // ScrollSpy active link highlight
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-drawer-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');

  const openDrawer = () => {
    mobileDrawer?.classList.add('open');
    mobileOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer?.classList.remove('open');
    mobileOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  };

  mobileToggle?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  mobileOverlay?.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   4. PAKISTAN LIVE CLOCK WIDGET (PKT / UTC+5)
   -------------------------------------------------------------------------- */
function initPakistanClock() {
  const timeDisplay = document.getElementById('pakistan-clock');
  if (!timeDisplay) return;

  function updateClock() {
    try {
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const pktTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
      timeDisplay.textContent = `${pktTime} PKT`;
    } catch (e) {
      const now = new Date();
      timeDisplay.textContent = now.toLocaleTimeString();
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   5. SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-init');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. AEO / GEO FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const answerWrapper = item.querySelector('.faq-answer-wrapper');

    header?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close other accordion items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherWrapper = otherItem.querySelector('.faq-answer-wrapper');
          if (otherWrapper) otherWrapper.style.maxHeight = null;
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        if (answerWrapper) {
          answerWrapper.style.maxHeight = answerWrapper.scrollHeight + 'px';
        }
      } else {
        item.classList.remove('open');
        if (answerWrapper) {
          answerWrapper.style.maxHeight = null;
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. SKILLS FILTER & PROGRESS ANIMATION
   -------------------------------------------------------------------------- */
function initSkillsFilter() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  const skillItems = document.querySelectorAll('.skill-bar-item');

  // Animate skill progress bars on scroll into view
  const skillsContainer = document.querySelector('.skills-wrapper');
  if (skillsContainer) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.skill-progress-fill').forEach(bar => {
          const targetWidth = bar.getAttribute('data-fill') || '85%';
          bar.style.width = targetWidth;
        });
      }
    }, { threshold: 0.2 });

    observer.observe(skillsContainer);
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-skill-category');
      skillItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM & WHATSAPP INTEGRATION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const phone = '923072538314'; // Ali Hamza WhatsApp number

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const service = document.getElementById('form-service')?.value;
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !email || !message) {
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Please fill out all required fields.';
      }
      return;
    }

    // Build WhatsApp message
    const waText = encodeURIComponent(
      `Hello Ali Hamza! 👋\n\nI reached out via your portfolio website.\n\n*Name:* ${name}\n*Email:* ${email}\n*Service Interested In:* ${service}\n*Project Details:* ${message}\n\nLooking forward to hearing from you!`
    );

    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.textContent = 'Thank you! Redirecting to WhatsApp to send your inquiry directly to Ali...';
    }

    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${waText}`, '_blank');
      form.reset();
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   9. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.pointerEvents = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   10. HERO TYPEWRITER ANIMATION
   -------------------------------------------------------------------------- */
function initHeroTypewriter() {
  const textEl = document.getElementById('typewriter-text');
  if (!textEl) return;

  const phrases = [
    "I build Web Applications...",
    "I build AI Automations...",
    "I build WhatsApp Chatbots...",
    "I build Landing Pages that Convert..."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 70;       // 60-80ms typing speed
  const deleteSpeed = 35;     // 30-40ms deleting speed
  const pauseDuration = 1500; // 1.5s pause on complete phrase

  function tick() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      textEl.textContent = currentPhrase.substring(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, deleteSpeed);
    } else {
      charIndex++;
      textEl.textContent = currentPhrase.substring(0, charIndex);
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(tick, pauseDuration);
        return;
      }
      setTimeout(tick, typeSpeed);
    }
  }

  // Initial startup after a short delay
  setTimeout(tick, 400);
}

/* --------------------------------------------------------------------------
   11. INSIGHTS & RESOURCES ACCORDION TOGGLE
   -------------------------------------------------------------------------- */
function initInsightsAccordion() {
  const expandButtons = document.querySelectorAll('.btn-expand-insight');

  expandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.insight-card');
      if (!card) return;

      const isExpanded = card.classList.contains('expanded');
      
      if (isExpanded) {
        card.classList.remove('expanded');
        btn.innerHTML = '<span>Read Article</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('expanded');
        btn.innerHTML = '<span>Collapse</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   12. PAGE LOAD PRELOADER CONTROLLER
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('site-preloader');
  if (!preloader) return;

  const hidePreloader = () => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 450);
  };

  // Wait at least 500ms for smooth visual feel, or when window fully loads
  const startTime = Date.now();
  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, 500 - elapsed);
    setTimeout(hidePreloader, remaining);
  });

  // Safe fallback: never block user longer than 1.5 seconds even on slow networks
  setTimeout(hidePreloader, 1500);
}



