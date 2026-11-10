// ==========================================================================
// BRAND & STORE CONFIGURATION
// Easily adjust the store name, contact info, social links, and currencies here.
// ==========================================================================

const BRAND_CONFIG = {
  brandName: "Knot & Bloom Atelier",
  brandSubtitle: "Slow-Made Crochet by a Working Professional",
  tagline: "Woven with patience, worn with grace. Handcrafted slow-fashion, whimsical plushies, and timeless everyday accessories.",
  
  artisan: {
    name: "Aanya Sharma",
    profession: "Lead UX Architect & Fiber Artist",
    location: "Bengaluru, India",
    story: "By day, I design seamless digital systems; by dusk, my fingers trade keyboards for ergonomic birchwood crochet hooks. Every stitch in this atelier is a form of meditative slow fashion — deliberate, sustainable, and infused with hours of human warmth. No machines, no sweatshops, just pure artisan devotion.",
    quote: "In a world of mass-produced noise, crochet cannot be replicated by any industrial machine. Every single loop was tied by real hands."
  },

  contact: {
    whatsappNumber: "919876543210", // Format: CountryCode + Number (without + or spaces for api links)
    whatsappDisplay: "+91 98765 43210",
    email: "hello@knotandbloom.studio",
    instagramHandle: "@knotandbloom.studio",
    instagramUrl: "https://instagram.com",
    youtubeChannel: "Knot & Bloom Crochet Studio",
    youtubeUrl: "https://youtube.com",
    featuredYouTubeEmbedId: "dQw4w9WgXcQ", // Replace with client's actual video ID
    location: "Made in India • Worldwide Shipping Available"
  },

  storePolicies: {
    currencySymbol: "₹",
    currencyCode: "INR",
    usdConversionRate: 0.012, // approx 1 INR = $0.012 USD
    freeShippingThreshold: 1499,
    standardShippingFee: 99,
    estimatedHandmadeTime: "4 - 8 Days (Made-to-Order with Love)",
    readyToShipBadge: "⚡ Ready to Ship in 24h",
    customBadge: "✨ Hand-Stitched on Order"
  },

  yarnHighlights: [
    {
      name: "100% Combed Milk Cotton",
      desc: "Ultra-soft, skin-friendly, anti-pilling, breathable & ideal for sensitive skin and hair clips.",
      icon: "feather"
    },
    {
      name: "Organic Bamboo Silk Blend",
      desc: "Gentle sheen with luxury drape for airy summer tops and lightweight floral cardigans.",
      icon: "wind"
    },
    {
      name: "OEKO-TEX Certified Plush Chenille",
      desc: "Hypoallergenic velvet clouds used for durable, huggable amigurumi teddies.",
      icon: "heart"
    },
    {
      name: "Reinforced Natural Jute & Cotton Cord",
      desc: "Double-twisted structured rope yarn giving durability to tote bags and daily market bags.",
      icon: "shield-check"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BRAND_CONFIG;
}
