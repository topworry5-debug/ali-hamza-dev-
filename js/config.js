/**
 * ==========================================================================
 * ALI HAMZA PORTFOLIO - CENTRAL CONFIGURATION FILE
 * ==========================================================================
 * Edit the values below to update contact information, live availability,
 * launch pricing, and social media links across the entire website instantly.
 */

const SITE_CONFIG = {
  // ------------------------------------------------------------------------
  // 1. CONTACT INFORMATION
  // ------------------------------------------------------------------------
  contact: {
    // Digits only with country code (923072538314 for +92 307 2538314)
    whatsappNumber: "923072538314",
    // User-facing formatted display text
    whatsappDisplay: "+92 307 2538314",
    // Primary contact email address
    email: "topworry5@gmail.com",
    // Geographic location badge text
    location: "Pakistan (Global Remote)"
  },

  // ------------------------------------------------------------------------
  // 2. LIVE AVAILABILITY & CLIENT CAPACITY
  // ------------------------------------------------------------------------
  availability: {
    // "available" | "busy" | "booked"
    status: "available",
    // Number of client project slots open this month (e.g. 2, 1, or 0)
    slotsOpen: 2,
    // Average response time shown on trust badges
    responseTime: "Under 2 hours"
  },

  // ------------------------------------------------------------------------
  // 3. INTRODUCTORY LAUNCH PRICING (USD)
  // ------------------------------------------------------------------------
  pricing: {
    currency: "USD",
    currencySymbol: "$",
    // Display ranges for service cards
    webDevRange: "$60–$100",
    aiAutomationRange: "$150–$250",
    whatsappBotRange: "$70–$120",
    landingPageRange: "$50–$90",

    // Base rates used by the Interactive Cost Estimator (Starter tier)
    estimatorBase: {
      "web-dev": 80,
      "ai-auto": 150,
      "whatsapp-bot": 70,
      "full-funnel": 60
    },

    // Scale tier multipliers / minimums
    estimatorTiers: {
      starter: 1.0,
      business: 1.8,
      enterprise: 3.5
    },

    // Add-on feature costs
    estimatorAddons: {
      openai: 40,
      crm: 35,
      seo: 25,
      admin: 70,
      priority: 50
    }
  },

  // ------------------------------------------------------------------------
  // 4. SOCIAL PROFILES
  // ------------------------------------------------------------------------
  // Leave empty ("") to keep them hidden. Add full URL when ready.
  social: {
    linkedin: "", // e.g. "https://linkedin.com/in/yourprofile"
    github: ""     // e.g. "https://github.com/yourusername"
  }
};

// Export for node/module environments if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
