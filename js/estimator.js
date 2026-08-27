/**
 * ALI HAMZA PORTFOLIO - INTERACTIVE PROJECT SCOPE & COST ESTIMATOR
 * Launch Pricing Configuration - Transparent Budget & Timeline Calculator
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

  // Tiered Pricing per Service (Introductory Launch Rates)
  const serviceConfig = {
    'web-dev': {
      name: 'Custom Website Development',
      tiers: { 'starter': 80, 'business': 160, 'enterprise': 350 },
      baseDays: 4
    },
    'ai-auto': {
      name: 'Business & AI Automation',
      tiers: { 'starter': 150, 'business': 220, 'enterprise': 400 },
      baseDays: 4
    },
    'whatsapp-bot': {
      name: 'WhatsApp & Conversational Bot',
      tiers: { 'starter': 70, 'business': 120, 'enterprise': 300 },
      baseDays: 3
    },
    'full-funnel': {
      name: 'High-Converting Landing Page',
      tiers: { 'starter': 60, 'business': 90, 'enterprise': 280 },
      baseDays: 3
    }
  };

  // Scope Metadata & Timeline Modifiers
  const scopeConfig = {
    'starter': { name: 'Starter Tier (1-3 Pages/Workflows)', extraDays: 0 },
    'business': { name: 'Business Tier (4-8 Pages/Workflows)', extraDays: 2 },
    'enterprise': { name: 'Enterprise Custom Suite (Full Stack & Scale)', extraDays: 5 }
  };

  // Addon Prices (Discounted Launch Pricing) & Timelines
  const addonConfig = {
    'openai-api': { name: 'OpenAI GPT-4o Integration', price: 40, days: 1 },
    'crm-sync': { name: 'HubSpot / Google Sheets Live Sync', price: 35, days: 1 },
    'schema-seo': { name: 'AEO / GEO Schema Rich Snippets', price: 25, days: 1 },
    'admin-panel': { name: 'Custom Admin Dashboard', price: 70, days: 2 },
    'rush-delivery': { name: 'Priority Rush Delivery (as fast as 3 days)', price: 50, days: -1 }
  };

  let selectedService = 'web-dev';
  let selectedScope = 'starter';

  function recalculate() {
    const srv = serviceConfig[selectedService] || serviceConfig['web-dev'];
    const scp = scopeConfig[selectedScope] || scopeConfig['starter'];

    let totalPrice = srv.tiers[selectedScope] || srv.tiers['starter'];
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

    if (totalDays < 3) totalDays = 3; // Safe minimum turnaround

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

    // Dynamic WhatsApp destination phone from SITE_CONFIG
    const phone = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.contact && SITE_CONFIG.contact.whatsappNumber)
      ? SITE_CONFIG.contact.whatsappNumber
      : '923072538314';

    const waMessage = 
`👋 Hello Ali Hamza! I configured a custom project estimate on your portfolio website (Launch Pricing):

🚀 *Service:* ${srv.name}
📦 *Scope:* ${scp.name}
✨ *Add-ons:* ${selectedAddonNames.length ? selectedAddonNames.join(', ') : 'None'}
💰 *Estimated Budget:* $${totalPrice} USD (Launch Rate)
⏱️ *Estimated Timeline:* ~${totalDays} Business Days

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
