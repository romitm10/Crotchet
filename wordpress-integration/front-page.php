<?php
/**
 * The Front Page template for Knot & Bloom Atelier (Version 2 Mobile Optimized)
 */

get_header();
?>

<!-- Announcement Bar -->
<div class="announcement-bar">
  <div class="marquee-content">
    <span>✨ <strong>Handmade with care by a working professional</strong></span>
    <span class="announcement-dot"></span>
    <span>📦 Free Insured Shipping on orders over ₹1,499</span>
    <span class="announcement-dot"></span>
    <span>🧵 Custom commissions open for weddings, babies & gifts</span>
    <span class="announcement-dot"></span>
    <span>📺 Watch behind-the-scenes vlogs on our YouTube channel</span>
    <span class="announcement-dot"></span>
    <span>✨ <strong>Handmade with care by a working professional</strong></span>
    <span class="announcement-dot"></span>
    <span>📦 Free Insured Shipping on orders over ₹1,499</span>
  </div>
</div>

<!-- Header / Navigation -->
<header class="site-header">
  <div class="container">
    <nav class="navbar">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-logo">
        <svg class="logo-icon-svg" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
          <path d="M12 28C14 26 18 22 24 16C26 14 29 11 31 13C33 15 30 18 28 20C22 26 18 30 16 32" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M10 14C12 10 18 9 22 13C26 17 25 23 21 27" stroke="#C87D6B" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="13" cy="27" r="2.5" fill="#C87D6B"/>
        </svg>
        <div class="brand-text-wrap">
          <span class="brand-title"><?php bloginfo('name'); ?></span>
          <span class="brand-tagline">Atelier • Handcrafted</span>
        </div>
      </a>

      <ul class="nav-menu">
        <li><a href="#catalog" class="nav-link active">Seasonal Drops</a></li>
        <li><a href="#anatomy" class="nav-link">Craft Anatomy</a></li>
        <li><a href="#artisan-story" class="nav-link">The Maker</a></li>
        <li><a href="#yarn-guide" class="nav-link">Yarn Philosophy</a></li>
        <li><a href="#youtube-studio" class="nav-link">YouTube Studio</a></li>
        <li><a href="#custom-commission" class="nav-link">Custom Orders</a></li>
      </ul>

      <div class="nav-actions">
        <div class="currency-toggle">
          <button class="curr-btn active" data-curr="INR">₹ INR</button>
          <button class="curr-btn" data-curr="USD">$ USD</button>
        </div>

        <a href="https://wa.me/919876543210" target="_blank" class="icon-btn" title="Chat on WhatsApp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" color="#25D366"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z"/></svg>
        </a>

        <button class="icon-btn" id="cart-toggle-btn" aria-label="Open Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span class="badge-counter cart-count-badge" style="display: none;">0</span>
        </button>

        <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open Navigation Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </nav>
  </div>
</header>

<!-- Mobile Navigation Drawer -->
<div class="mobile-nav-drawer" id="mobile-nav-drawer">
  <div class="mobile-nav-panel">
    <div class="mobile-drawer-header">
      <span class="brand-title" style="font-size: 1.25rem;">Knot & Bloom</span>
      <button class="icon-btn" id="mobile-nav-close" style="width: 36px; height: 36px;">✕</button>
    </div>
    <ul class="mobile-nav-links">
      <li><a href="#catalog" class="mobile-nav-link"><span>Seasonal Drops</span> →</a></li>
      <li><a href="#anatomy" class="mobile-nav-link"><span>Craft Anatomy</span> →</a></li>
      <li><a href="#artisan-story" class="mobile-nav-link"><span>The Maker</span> →</a></li>
      <li><a href="#yarn-guide" class="mobile-nav-link"><span>Yarn Philosophy</span> →</a></li>
      <li><a href="#youtube-studio" class="mobile-nav-link"><span>YouTube Studio</span> →</a></li>
      <li><a href="#custom-commission" class="mobile-nav-link"><span>Custom Orders</span> →</a></li>
    </ul>
    <div style="margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--border-light);">
      <a href="https://wa.me/919876543210" target="_blank" class="btn btn-whatsapp" style="width: 100%;">
        Chat with Maker on WhatsApp
      </a>
    </div>
  </div>
</div>

<!-- Hero Section -->
<section class="hero-section" id="home">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-content-left">
        <div class="hero-pill-tag">
          <span class="hero-pill-badge">🧶</span>
          <span class="hero-pill-text">Zero Factory Looms • 100% Artisan Handcrafted</span>
        </div>
        <h1 class="hero-title">
          Crafted with patience,<br>
          <span class="hero-title-accent">slow stitches</span> for mindful living.
        </h1>
        <p class="hero-description">
          Heirloom granny-square totes, cloud-soft amigurumi teddies, breathable mandala tops, and delicate floral accessories. Every single loop was tied by real human hands.
        </p>
        <div class="hero-cta-group">
          <a href="#catalog" class="btn btn-primary">Explore Small Drops ↓</a>
          <a href="#custom-commission" class="btn btn-secondary">Commission a Custom Piece</a>
        </div>
        <div class="hero-stats-row">
          <div class="hero-stat-item">
            <span class="hero-stat-val">14.5 hrs</span>
            <span class="hero-stat-lbl">Avg Craft Time / Piece</span>
          </div>
          <div class="hero-stat-item">
            <span class="hero-stat-val">100%</span>
            <span class="hero-stat-lbl">Natural Combed Yarn</span>
          </div>
          <div class="hero-stat-item">
            <span class="hero-stat-val">4.9 ★</span>
            <span class="hero-stat-lbl">450+ Happy Patrons</span>
          </div>
        </div>
      </div>

      <div class="hero-composition-wrap">
        <div class="hero-main-card">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/hero-showcase.jpg" alt="Crochet Showcase" class="hero-main-img">
        </div>
        <div class="hero-secondary-card">
          <div class="secondary-card-thumb">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/bag-01-tote.jpg" alt="Meadow Tote detail">
          </div>
          <div>
            <div class="secondary-card-title">The Meadow Tote</div>
            <div class="secondary-card-sub">18 Hand-Blocked Squares</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Product Catalog -->
<section class="catalog-section" id="catalog">
  <div class="container">
    <div class="section-header-centered">
      <span class="section-tag">Handcrafted Drops</span>
      <h2 class="section-title">The Seasonal Collection</h2>
      <p class="section-subtitle">Small-batch releases & made-to-order commissions.</p>
    </div>

    <div class="filter-container">
      <button class="filter-btn active" data-category="all">✨ All Pieces</button>
      <button class="filter-btn" data-category="hair">🌸 Hair Accessories</button>
      <button class="filter-btn" data-category="bags">👜 Handcrafted Bags</button>
      <button class="filter-btn" data-category="teddies">🧸 Teddies & Amigurumi</button>
      <button class="filter-btn" data-category="tops">🧶 Tops & Wearables</button>
    </div>

    <div class="products-grid" id="products-grid">
      <!-- Dynamic Products Grid -->
    </div>
  </div>
</section>

<!-- Cart & Modals -->
<div class="cart-drawer-overlay" id="cart-overlay">
  <div class="cart-drawer">
    <div class="cart-drawer-header">
      <div class="cart-title">Your Woven Bag</div>
      <button class="icon-btn" id="cart-close-btn">✕</button>
    </div>
    <div class="free-shipping-progress">
      <div class="shipping-msg" id="free-shipping-text">Add items for free shipping</div>
      <div class="progress-track"><div class="progress-fill" id="free-shipping-bar"></div></div>
    </div>
    <div class="cart-items-body" id="cart-items-container"></div>
    <div class="cart-drawer-footer">
      <div class="cart-subtotal-row">
        <span>Subtotal</span>
        <span class="cart-total-val" id="cart-subtotal-val">₹0</span>
      </div>
      <button class="btn btn-whatsapp" id="cart-wa-checkout" style="width: 100%;">
        Order via WhatsApp (Instant Confirmation)
      </button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="quickview-modal">
  <div class="modal-card">
    <button class="modal-close-btn" id="modal-close-btn">✕</button>
    <div id="modal-card-content" style="display: contents;"></div>
  </div>
</div>

<div class="toast-notice" id="toast-notice">
  <span class="toast-text">Item added to your bag!</span>
</div>

<?php
get_footer();
?>
