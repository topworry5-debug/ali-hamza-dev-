/**
 * ALI HAMZA PORTFOLIO - PROJECT FILTERING & PREVIEW CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFilters();
  initProjectModals();
});

/* --------------------------------------------------------------------------
   1. PORTFOLIO FILTERING
   -------------------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetFilter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');

        if (targetFilter === 'all' || categories.includes(targetFilter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   2. PROJECT MODAL INSPECTOR
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalTechList = document.getElementById('modal-tech');
  const modalImage = document.getElementById('modal-image');
  const modalLiveBtn = document.getElementById('modal-live-btn');
  const modalDetailsBtns = document.querySelectorAll('.btn-view-project');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Project details registry
  const projectData = {
    'ai-engine': {
      title: 'Autonomous AI Multi-Agent Workflow Engine',
      category: 'AI Automation & LLMs',
      desc: 'An enterprise-grade autonomous agent pipeline utilizing OpenAI GPT-4o, n8n, and custom Python microservices. Automatically extracts high-intent leads from inbound webhooks, enriches company data via Clearbit, assesses intent scores, and triggers instant personalized follow-ups across CRM & WhatsApp in under 400 milliseconds.',
      tech: ['OpenAI API', 'n8n Workflow', 'Python', 'FastAPI', 'Webhooks', 'HubSpot CRM'],
      image: './assets/images/project-automation.png',
      liveLink: '#contact'
    },
    'whatsapp-agent': {
      title: 'Conversational WhatsApp AI Lead Bot',
      category: 'WhatsApp & Conversational AI',
      desc: 'A 24/7 intelligent conversational bot integrated directly with the official Meta WhatsApp Cloud API. Features natural language inquiry handling, automated catalog recommendations, appointment booking with Google Calendar sync, and direct handoff to human agents when complex inquiries occur.',
      tech: ['Meta Cloud API', 'Node.js', 'LangChain', 'Express', 'PostgreSQL', 'Google Calendar API'],
      image: './assets/images/project-whatsapp.png',
      liveLink: '#contact'
    },
    'saas-dashboard': {
      title: 'Enterprise Cloud SaaS Management Portal',
      category: 'Web Development & Fullstack',
      desc: 'A lightning-fast, modern cloud management dashboard engineered with modern JavaScript, modular CSS components, and RESTful telemetry feeds. Features sub-50ms render times, dark/light theme, interactive SVG charts, real-time webhook logging, and role-based access control.',
      tech: ['Vanilla JS / ES6+', 'Modern CSS3', 'REST APIs', 'Chart.js', 'HTML5 Semantic', 'Vercel'],
      image: './assets/images/project-webapp.png',
      liveLink: '#contact'
    },
    'conversion-landing': {
      title: 'Fintech High-Conversion Growth Landing Page',
      category: 'Landing Pages & Performance SEO',
      desc: 'A conversion-focused landing page engineered for maximum B2B client acquisition. Achieves a 100/100 Google Lighthouse speed score, fully configured JSON-LD Schema.org rich snippets for voice & answer engines (AEO), and an embedded quick quote calculator resulting in a +180% lead conversion lift.',
      tech: ['Semantic HTML5', 'Performance CSS', 'AEO / GEO Schema', 'Vanilla JS', 'Core Web Vitals 100'],
      image: './assets/images/project-landing.png',
      liveLink: '#contact'
    }
  };

  modalDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      const data = projectData[projectId];

      if (data) {
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalCategory) modalCategory.textContent = data.category;
        if (modalDesc) modalDesc.textContent = data.desc;
        if (modalImage) modalImage.src = data.image;
        if (modalLiveBtn) modalLiveBtn.href = data.liveLink;

        if (modalTechList) {
          modalTechList.innerHTML = '';
          data.tech.forEach(t => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.textContent = t;
            modalTechList.appendChild(span);
          });
        }

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });
}
