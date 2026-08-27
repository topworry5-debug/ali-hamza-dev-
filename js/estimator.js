/**
 * ALI HAMZA PORTFOLIO - INTERACTIVE PROJECT SCOPE & COST ESTIMATOR
 * Calculates estimated budget, timeline, and builds an instant WhatsApp order link
 */

document.addEventListener('DOMContentLoaded', () => {
  initCostEstimator();
});

function initCostEstimator() {
  const serviceOptions = document.querySelectorAll('.estimator-service-option');
  const scopeOptions = document.querySelectorAll('.estimator-scope-option');
  const addonCheckboxes = document.querySelectorAll('.addon-input');
  
  const priceDisplay = document.getElementById('calc-price');
  const timelineDisplay = document.getElementById('calc-timeline');
  const summaryService = document.getElementById('calc-summary-service');
  const summaryScope = document.getElementById('calc-summary-scope');
  const summaryAddons = document.getElementById('calc-summary-addons');
  const whatsappBtn = document.getElementById('calc-whatsapp-btn');

  if (!priceDisplay) return;

  // Base Service Prices & Days (Competitive & Transparent)
  const serviceConfig = {
    'web-dev': { name: 'Custom Web Application', basePrice: 280, baseDays: 5 },
    'ai-auto': { name: 'AI Workflow Automation', basePrice: 320, baseDays: 4 },
    'whatsapp-bot': { name: 'WhatsApp AI Chatbot', basePrice: 260, baseDays: 4 },
    'full-funnel': { name: 'Landing Page + SEO + Bot', basePrice: 450, baseDays: 7 }
  };

  // Scope Multipliers
  const scopeConfig = {
    'starter': { name: 'Starter Tier (1-3 Pages/Workflows)', multiplier: 1.0, extraDays: 0 },
    'business': { name: 'Business Tier (4-8 Pages/Workflows)', multiplier: 1.6, extraDays: 3 },
    'enterprise': { name: 'Enterprise Tier (Full Stack & Scale)', multiplier: 2.4, extraDays: 6 }
  };

  // Addon Prices & Days
  const addonConfig = {
    'openai-api': { name: 'OpenAI GPT-4o Integration', price: 90, days: 1 },
    'crm-sync': { name: 'HubSpot / CRM Live Sync', price: 75, days: 1 },
    'schema-seo': { name: 'AEO / GEO Schema Rich Snippets', price: 60, days: 1 },
    'admin-panel': { name: 'Custom Admin Dashboard', price: 140, days: 2 },
    'rush-delivery': { name: 'Priority 48-Hour Rush Delivery', price: 110, days: -2 }
  };

  let selectedService = 'web-dev';
  let selectedScope = 'starter';

  function recalculate() {
    const srv = serviceConfig[selectedService];
    const scp = scopeConfig[selectedScope];

    let totalPrice = Math.round(srv.basePrice * scp.multiplier);
    let totalDays = srv.baseDays + scp.extraDays;
    const selectedAddonNames = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        const addonKey = cb.value;
        const addData = addonConfig[addonKey];
        if (addData) {
          totalPrice += addData.price;
          totalDays += addData.days;
          selectedAddonNames.push(addData.name);
        }
        cb.closest('.addon-checkbox-label')?.classList.add('checked');
      } else {
        cb.closest('.addon-checkbox-label')?.classList.remove('checked');
      }
    });

    if (totalDays < 2) totalDays = 2; // safety minimum

    // Update UI elements
    priceDisplay.textContent = `$${totalPrice} USD`;
    timelineDisplay.textContent = `${totalDays} - ${totalDays + 2} Business Days`;
    
    if (summaryService) summaryService.textContent = srv.name;
    if (summaryScope) summaryScope.textContent = scp.name;
    if (summaryAddons) {
      summaryAddons.textContent = selectedAddonNames.length > 0 
        ? selectedAddonNames.join(', ') 
        : 'Standard inclusions only';
    }

    // Build WhatsApp Pre-filled payload with real WhatsApp number
    const phone = '923072538314'; // Ali Hamza Real WhatsApp number
    const waMessage = 
`👋 Hello Ali Hamza! I configured a custom project estimate on your portfolio website:

🚀 *Service:* ${srv.name}
📦 *Scope:* ${scp.name}
✨ *Add-ons:* ${selectedAddonNames.length ? selectedAddonNames.join(', ') : 'None'}
💰 *Estimated Budget:* $${totalPrice} USD
⏱️ *Estimated Timeline:* ~${totalDays} Days

Can we discuss starting this project?`;

    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(waMessage)}`;
    }
  }

  // Service Selection Listeners
  serviceOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      serviceOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedService = opt.getAttribute('data-service-key') || 'web-dev';
      recalculate();
    });
  });

  // Scope Selection Listeners
  scopeOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      scopeOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedScope = opt.getAttribute('data-scope-key') || 'starter';
      recalculate();
    });
  });

  // Addon Checkbox Listeners
  addonCheckboxes.forEach(cb => {
    cb.addEventListener('change', recalculate);
  });

  // Run initial calculation
  recalculate();
}
