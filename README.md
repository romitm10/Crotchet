# Knot & Bloom Atelier — Version 2 (Premium Artisanal Edition)

> **A luxury, editorial, unforgettable digital storefront for a handcrafted crochet designer & YouTube creator.**  
> Built with modern modular HTML5, bespoke high-resolution crochet product photography, and pure vanilla JavaScript.  
> Ready to run standalone or integrate seamlessly into **Shopify (Online Store 2.0)** or **WordPress (WooCommerce / Elementor)**.

---

## 🌟 What's New in Version 2

1. **100% Authentic, High-Resolution Editorial Product Photography**:
   - Replaced all generic or placeholder imagery with authentic, bespoke, luxury studio photographs matching every listed item:
     - 🌸 **Hair Accessories**: Daisy hair clip set, Scalloped lace headband, Velvet chenille scrunchie trio.
     - 👜 **Bags & Totes**: The Meadow floral granny-square tote, 3D Tulip blossom crossbody pouch, Riviera raffia summer clutch.
     - 🧸 **Amigurumi Plushies**: Barnaby the teddy bear in biscuit brown with yellow scarf, Penelope ballerina bunny, Matcha froggy desk companion.
     - 🧶 **Tops & Wearables**: Sunburst mandala halter crop top, Botanical lace cardigan with balloon sleeves, Autumn nostalgia patchwork vest.
     - 🎨 **Hero Showcase**: High-fashion editorial flatlay showing bags, clips, teddy, yarn balls, and wooden crochet hooks.
2. **WOW-Worthy Hero Section**:
   - Expressive editorial typography: *"Crafted with patience, slow stitches for mindful living."*
   - Continuously rotating gold/terracotta artisan seal: `100% HANDMADE • ATELIER QUALITY • REAL HANDS •`
   - Asymmetric composition with floating detail card: `"The Meadow Tote • 18 Hand-Blocked Squares"`.
3. **The Anatomy of a Crochet Stitch**:
   - Educational storytelling breaking down why true crochet cannot be automated by any machine on Earth.
4. **Enhanced Micro-Interactions & Scroll Animations**:
   - Smooth `IntersectionObserver` scroll reveals.
   - Refined slide-over cart drawer with live free-shipping calculation and 1-click WhatsApp order generator.
   - Quick-look modal with yarn fiber composition, lead time, dimensions, and care instructions.

---

## 🚀 Quick Start (Local Preview)

### Direct Browser Open:
```bash
xdg-open "/home/romit/Projects/Crotchet Business/index.html"
```

### Local Dev Server:
```bash
cd "/home/romit/Projects/Crotchet Business"
python3 -m http.server 8080
```
Open **`http://localhost:8080`** in any web browser.

---

## 📁 Project Directory

```
Crotchet Business/
├── index.html                 # Version 2 responsive website
├── assets/                    # High-resolution bespoke crochet photography (13 files)
│   ├── hero-showcase.jpg
│   ├── bag-01-tote.jpg
│   ├── bag-02-tulip.jpg
│   ├── bag-03-raffia.jpg
│   ├── hair-01-daisy.jpg
│   ├── hair-02-headband.jpg
│   ├── hair-03-scrunchies.jpg
│   ├── plush-01-bear.jpg
│   ├── plush-02-bunny.jpg
│   ├── plush-03-froggy.jpg
│   ├── top-01-halter.jpg
│   ├── top-02-cardigan.jpg
│   └── top-03-vest.jpg
├── css/
│   └── style.css              # Version 2 luxury design system
├── js/
│   ├── brand-config.js        # Configurable brand info, WhatsApp number, YouTube ID
│   ├── products-data.js       # Centralized catalog with local high-res asset references
│   └── app.js                 # Cart engine, currency toggle, modals, WhatsApp checkout
├── shopify-integration/       # Online Store 2.0 Liquid sections
│   ├── README_SHOPIFY.md
│   ├── crochet-hero.liquid
│   ├── crochet-showcase.liquid
│   └── crochet-commission.liquid
├── wordpress-integration/     # WooCommerce / Theme templates
│   ├── README_WORDPRESS.md
│   ├── front-page.php
│   ├── functions.php
│   └── style.css
└── RESEARCH_AND_STRATEGY.md   # Market research on top Indian & global crochet brands
```
