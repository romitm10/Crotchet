// ==========================================================================
// KNOT & BLOOM ATELIER — VERSION 2 CORE INTERACTION ENGINE
// Smooth animations, mobile nav drawer, cart management, currency & WhatsApp
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    currentCategory: 'all',
    currency: 'INR', // 'INR' or 'USD'
    cart: JSON.parse(localStorage.getItem('knot_bloom_cart') || '[]'),
    activeProductInModal: null
  };

  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const freeShippingText = document.getElementById('free-shipping-text');
  const freeShippingBar = document.getElementById('free-shipping-bar');
  const toastEl = document.getElementById('toast-notice');
  const currencyBtns = document.querySelectorAll('.curr-btn');

  // Mobile Menu Elements
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Modal Elements
  const modalOverlay = document.getElementById('quickview-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Initialize
  initApp();

  function initApp() {
    renderProducts();
    updateCartUI();
    setupEventListeners();
    setupMobileNav();
    setupDayNightSwitcher();
    setupCommissionWizard();
    setupScrollReveals();
  }

  // ------------------------------------------------------------------------
  // CURRENCY HELPERS
  // ------------------------------------------------------------------------
  function formatPrice(amountInINR) {
    if (state.currency === 'USD') {
      const usdVal = Math.round(amountInINR * (BRAND_CONFIG?.storePolicies?.usdConversionRate || 0.012));
      return `$${usdVal}`;
    }
    return `₹${amountInINR.toLocaleString('en-IN')}`;
  }

  // ------------------------------------------------------------------------
  // PRODUCT RENDERING & FILTERING
  // ------------------------------------------------------------------------
  function renderProducts() {
    if (!productsGrid) return;

    const filtered = state.currentCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter(p => p.category === state.currentCategory);

    productsGrid.innerHTML = '';

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4.5rem 1rem;">
          <p style="font-size: 1.15rem; color: var(--color-text-muted);">No handcrafted creations found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((product, idx) => {
      const card = createProductCardElement(product, idx);
      productsGrid.appendChild(card);
    });
  }

  function createProductCardElement(product, idx) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.dataset.category = product.category;

    const statusBadge = product.status === 'ready_to_ship'
      ? `<span class="badge badge-ready">⚡ Ready to Ship</span>`
      : `<span class="badge badge-order">✨ Made to Order</span>`;

    const highlightBadge = product.badge
      ? `<span class="badge badge-terracotta">${product.badge}</span>`
      : '';

    card.innerHTML = `
      <div class="product-image-wrap" data-action="quickview" data-id="${product.id}" title="Tap to view details">
        <img src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy">
        <div class="product-badges-layer">
          ${statusBadge}
          ${highlightBadge}
        </div>
        <div class="product-craft-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${product.craftTime}
        </div>
        <div class="product-quick-actions">
          <button class="quick-view-btn" data-action="quickview" data-id="${product.id}">
            Quick Look
          </button>
        </div>
      </div>

      <div class="product-content">
        <span class="product-category-sub">${product.categoryLabel}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-short-desc">${product.shortDesc}</p>

        <div class="product-footer">
          <div class="price-box">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.comparePrice ? `<span class="price-compare">${formatPrice(product.comparePrice)}</span>` : ''}
          </div>
          <button class="card-add-btn" data-action="add-to-cart" data-id="${product.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Bag
          </button>
        </div>
      </div>
    `;

    return card;
  }

  // ------------------------------------------------------------------------
  // MOBILE NAVIGATION DRAWER
  // ------------------------------------------------------------------------
  function setupMobileNav() {
    if (mobileMenuBtn && mobileNavDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNavDrawer.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }

    if (mobileNavClose && mobileNavDrawer) {
      mobileNavClose.addEventListener('click', () => {
        closeMobileNav();
      });
    }

    if (mobileNavDrawer) {
      mobileNavDrawer.addEventListener('click', (e) => {
        if (e.target === mobileNavDrawer) {
          closeMobileNav();
        }
      });
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });
  }

  function closeMobileNav() {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ------------------------------------------------------------------------
  // EVENT LISTENERS
  // ------------------------------------------------------------------------
  function setupEventListeners() {
    // Category Filter Buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentCategory = btn.dataset.category;
        renderProducts();
      });
    });

    // Currency Switcher
    currencyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currencyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currency = btn.dataset.curr;
        renderProducts();
        updateCartUI();
        if (state.activeProductInModal) {
          updateModalPrice(state.activeProductInModal);
        }
      });
    });

    // Product Card Delegation (Quickview & Add to Cart)
    if (productsGrid) {
      productsGrid.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('[data-action]');
        if (!actionBtn) return;

        const action = actionBtn.dataset.action;
        const productId = actionBtn.dataset.id;
        const product = PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return;

        if (action === 'quickview') {
          openQuickViewModal(product);
        } else if (action === 'add-to-cart') {
          addToCart(product, 1, product.colorways ? product.colorways[0].name : 'Natural');
          showToast(`Added "${product.name}" to your bag!`);
        }
      });
    }

    // Cart Drawer Toggle
    if (cartToggleBtn) {
      cartToggleBtn.addEventListener('click', () => openCart());
    }
    if (cartCloseBtn) {
      cartCloseBtn.addEventListener('click', () => closeCart());
    }
    if (cartOverlay) {
      cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) closeCart();
      });
    }

    // Modal Close
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => closeQuickViewModal());
    }
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeQuickViewModal();
      });
    }

    // Escape Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCart();
        closeQuickViewModal();
        closeYouTubeModal();
        closeMobileNav();
      }
    });

    // Cart Quantity & Item Removal
    if (cartItemsContainer) {
      cartItemsContainer.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;

        const action = target.dataset.cartAction;
        const index = parseInt(target.dataset.index, 10);
        if (isNaN(index) || !state.cart[index]) return;

        if (action === 'increment') {
          state.cart[index].quantity += 1;
        } else if (action === 'decrement') {
          if (state.cart[index].quantity > 1) {
            state.cart[index].quantity -= 1;
          } else {
            state.cart.splice(index, 1);
          }
        } else if (action === 'remove') {
          state.cart.splice(index, 1);
        }

        saveCart();
        updateCartUI();
      });
    }

    // WhatsApp Checkout Button
    const waCheckoutBtn = document.getElementById('cart-wa-checkout');
    if (waCheckoutBtn) {
      waCheckoutBtn.addEventListener('click', () => handleWhatsAppCheckout());
    }

    // Standard Checkout Button
    const standardCheckoutBtn = document.getElementById('cart-standard-checkout');
    if (standardCheckoutBtn) {
      standardCheckoutBtn.addEventListener('click', () => handleStandardCheckout());
    }

    // YouTube Card Trigger
    const ytTrigger = document.getElementById('yt-play-trigger');
    if (ytTrigger) {
      ytTrigger.addEventListener('click', () => openYouTubeModal());
    }
    const ytCardThumb = document.getElementById('yt-video-card-thumb');
    if (ytCardThumb) {
      ytCardThumb.addEventListener('click', () => openYouTubeModal());
    }
    const ytModalClose = document.getElementById('yt-modal-close');
    if (ytModalClose) {
      ytModalClose.addEventListener('click', () => closeYouTubeModal());
    }
  }

  // ------------------------------------------------------------------------
  // CART OPERATIONS & WHATSAPP GENERATOR
  // ------------------------------------------------------------------------
  function addToCart(product, quantity = 1, selectedColor = 'Natural') {
    const existingIndex = state.cart.findIndex(
      item => item.id === product.id && item.color === selectedColor
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.categoryLabel,
        craftTime: product.craftTime,
        color: selectedColor,
        quantity: quantity
      });
    }

    saveCart();
    updateCartUI();
  }

  function saveCart() {
    localStorage.setItem('knot_bloom_cart', JSON.stringify(state.cart));
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadges.forEach(b => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = formatPrice(subtotal);
    }

    // Free Shipping Progress
    if (freeShippingBar && freeShippingText) {
      const threshold = BRAND_CONFIG?.storePolicies?.freeShippingThreshold || 1499;
      if (subtotal >= threshold) {
        freeShippingText.innerHTML = `🎉 You've unlocked <strong>Free Insured Shipping</strong>!`;
        freeShippingBar.style.width = '100%';
      } else {
        const remaining = threshold - subtotal;
        const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
        freeShippingText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more for <strong>Free Shipping</strong>`;
        freeShippingBar.style.width = `${pct}%`;
      }
    }

    // Render Cart Items
    if (cartItemsContainer) {
      if (state.cart.length === 0) {
        cartItemsContainer.innerHTML = `
          <div class="cart-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1.2rem; color: #C0B7B0;">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
            </svg>
            <p style="font-weight: 600; color: var(--color-text-main); margin-bottom: 0.35rem; font-size: 1.05rem;">Your woven bag is empty</p>
            <p style="font-size: 0.88rem; line-height: 1.5;">Every stitch is crafted slowly by hand. Find a piece to cherish!</p>
          </div>
        `;
        return;
      }

      cartItemsContainer.innerHTML = state.cart.map((item, idx) => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h5>${item.name}</h5>
            <div class="cart-item-meta">
              <span>Colorway: ${item.color}</span> • <span>${item.craftTime}</span>
            </div>
            <div class="cart-qty-ctrls">
              <button class="qty-btn" data-cart-action="decrement" data-index="${idx}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" data-cart-action="increment" data-index="${idx}">+</button>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
            <button style="font-size: 0.74rem; color: #C87D6B; margin-top: 0.6rem; text-decoration: underline;" data-cart-action="remove" data-index="${idx}">Remove</button>
          </div>
        </div>
      `).join('');
    }
  }

  function openCart() {
    if (cartOverlay) cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (cartOverlay) cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // WhatsApp Instant Order Link Generator
  function handleWhatsAppCheckout() {
    if (state.cart.length === 0) {
      showToast('Your bag is empty! Add an item first.');
      return;
    }

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const threshold = BRAND_CONFIG?.storePolicies?.freeShippingThreshold || 1499;
    const shipping = subtotal >= threshold ? 0 : (BRAND_CONFIG?.storePolicies?.standardShippingFee || 99);
    const grandTotal = subtotal + shipping;

    let message = `🧵 *NEW ORDER INQUIRY — KNOT & BLOOM ATELIER*\n`;
    message += `───────────────────────\n`;
    message += `Hello Aanya! I would love to order the following handcrafted piece(s):\n\n`;

    state.cart.forEach((item, i) => {
      message += `${i + 1}. *${item.name}*\n`;
      message += `   • Quantity: ${item.quantity}\n`;
      message += `   • Colorway: ${item.color}\n`;
      message += `   • Item Total: ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n\n`;
    });

    message += `───────────────────────\n`;
    message += `*Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n`;
    message += `*Insured Shipping:* ${shipping === 0 ? 'FREE (Special Offer)' : `₹${shipping}`}\n`;
    message += `*Estimated Grand Total:* ₹${grandTotal.toLocaleString('en-IN')}\n\n`;
    message += `📍 *Delivery Address & Name:*\n`;
    message += `(Please reply with your name, phone number, and shipping address)\n\n`;
    message += `Looking forward to your confirmation and payment details! ✨`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${BRAND_CONFIG?.contact?.whatsappNumber || '919876543210'}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
  }

  function handleStandardCheckout() {
    if (state.cart.length === 0) {
      showToast('Your bag is empty! Add an item first.');
      return;
    }
    showToast('Redirecting to secure gateway... (Shopify / WooCommerce checkout hook)');
  }

  // ------------------------------------------------------------------------
  // QUICK VIEW MODAL
  // ------------------------------------------------------------------------
  function openQuickViewModal(product) {
    state.activeProductInModal = product;
    if (!modalOverlay) return;

    const modalBody = document.getElementById('modal-card-content');
    if (!modalBody) return;

    let selectedColor = product.colorways ? product.colorways[0].name : 'Natural';

    modalBody.innerHTML = `
      <div class="modal-gallery">
        <img src="${product.images[0]}" alt="${product.name}" class="modal-main-img" id="modal-img-display">
      </div>
      <div class="modal-details">
        <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
          <span class="badge ${product.status === 'ready_to_ship' ? 'badge-ready' : 'badge-order'}">
            ${product.status === 'ready_to_ship' ? '⚡ Ready to Ship' : '✨ Made to Order'}
          </span>
          <span class="badge badge-terracotta">${product.yarnType}</span>
        </div>

        <h2 style="font-size: 1.85rem; line-height: 1.25; margin-top: 0.25rem;">${product.name}</h2>
        
        <div style="display: flex; align-items: baseline; gap: 1rem;">
          <span style="font-family: var(--font-serif); font-size: 1.6rem; font-weight: 700;" id="modal-price-display">
            ${formatPrice(product.price)}
          </span>
          ${product.comparePrice ? `<span style="font-size: 0.95rem; text-decoration: line-through; color: var(--color-text-light);">${formatPrice(product.comparePrice)}</span>` : ''}
        </div>

        <p style="font-size: 0.94rem; color: var(--color-text-muted); line-height: 1.65;">${product.description}</p>

        <div style="background: var(--color-bg-alt); padding: 1.1rem; border-radius: var(--radius-md); font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.45rem;">
          <div><strong>⏳ Craft Lead Time:</strong> ${product.leadTime} (${product.craftTime})</div>
          <div><strong>📏 Sizing / Dimensions:</strong> ${product.dimensions}</div>
          <div><strong>🧼 Artisan Care:</strong> ${product.care}</div>
        </div>

        ${product.colorways ? `
          <div>
            <label style="font-size: 0.84rem; font-weight: 700; display: block; margin-bottom: 0.5rem;">Select Colorway:</label>
            <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;" id="modal-colorway-options">
              ${product.colorways.map((c, i) => `
                <button class="btn btn-secondary btn-sm ${i === 0 ? 'selected-color-pill' : ''}" 
                        style="border-radius: var(--radius-pill); font-size: 0.82rem; padding: 0.45rem 1rem;"
                        data-color-name="${c.name}">
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: ${c.hex}; display: inline-block; margin-right: 5px;"></span>
                  ${c.name}
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div style="display: flex; gap: 0.85rem; margin-top: 0.6rem; flex-wrap: wrap;">
          <button class="btn btn-primary" style="flex: 1; min-width: 160px;" id="modal-add-cart-btn">
            Add to Woven Bag
          </button>
          <button class="btn btn-whatsapp" id="modal-wa-btn" title="Chat directly with designer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z"/></svg>
            Inquire
          </button>
        </div>
      </div>
    `;

    // Modal colorway selection
    const colorPills = modalBody.querySelectorAll('#modal-colorway-options button');
    colorPills.forEach(pill => {
      pill.addEventListener('click', () => {
        colorPills.forEach(p => p.classList.remove('selected-color-pill'));
        pill.classList.add('selected-color-pill');
        selectedColor = pill.dataset.colorName;
      });
    });

    // Add to cart from modal
    const modalAddBtn = modalBody.querySelector('#modal-add-cart-btn');
    if (modalAddBtn) {
      modalAddBtn.addEventListener('click', () => {
        addToCart(product, 1, selectedColor);
        closeQuickViewModal();
        openCart();
        showToast(`Added "${product.name}" to your bag!`);
      });
    }

    // Modal WhatsApp Inquiry
    const modalWaBtn = modalBody.querySelector('#modal-wa-btn');
    if (modalWaBtn) {
      modalWaBtn.addEventListener('click', () => {
        const msg = encodeURIComponent(`Hi Aanya! I am interested in the handcrafted *${product.name}* (Colorway: ${selectedColor}). Can you share availability and timeline?`);
        window.open(`https://wa.me/${BRAND_CONFIG?.contact?.whatsappNumber || '919876543210'}?text=${msg}`, '_blank');
      });
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateModalPrice(product) {
    const priceDisplay = document.getElementById('modal-price-display');
    if (priceDisplay) {
      priceDisplay.textContent = formatPrice(product.price);
    }
  }

  function closeQuickViewModal() {
    if (modalOverlay) modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    state.activeProductInModal = null;
  }

  // ------------------------------------------------------------------------
  // DAY VS NIGHT STORY INTERACTIVE SWITCHER
  // ------------------------------------------------------------------------
  function setupDayNightSwitcher() {
    const tabBtns = document.querySelectorAll('.dual-tab-btn');
    const panes = document.querySelectorAll('.dual-content-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.dataset.tabTarget;
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // CUSTOM COMMISSION WIZARD & WHATSAPP GENERATOR
  // ------------------------------------------------------------------------
  function setupCommissionWizard() {
    const wizardForm = document.getElementById('commission-wizard-form');
    if (!wizardForm) return;

    // Handle Chip Selections
    const chipBtns = wizardForm.querySelectorAll('.chip-select-btn');
    chipBtns.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const group = chip.dataset.chipGroup;
        wizardForm.querySelectorAll(`.chip-select-btn[data-chip-group="${group}"]`).forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
      });
    });

    // Handle Form Submit
    wizardForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const selectedCategory = wizardForm.querySelector('.chip-select-btn[data-chip-group="category"].selected')?.dataset.value || 'Custom Piece';
      const selectedColor = wizardForm.querySelector('.chip-select-btn[data-chip-group="palette"].selected')?.dataset.value || 'Artisan Discretion';
      const selectedYarn = wizardForm.querySelector('.chip-select-btn[data-chip-group="yarn"].selected')?.dataset.value || 'Standard Milk Cotton';
      const notes = document.getElementById('commission-notes')?.value || 'No additional notes provided.';
      const customerName = document.getElementById('commission-name')?.value || 'Valued Client';

      let msg = `✨ *BESPOKE CROCHET COMMISSION INQUIRY*\n`;
      msg += `─────────────────────────\n`;
      msg += `Hello Aanya! I would love to commission a custom handcrafted piece from your atelier.\n\n`;
      msg += `👤 *Client Name:* ${customerName}\n`;
      msg += `🧶 *Item Category:* ${selectedCategory}\n`;
      msg += `🎨 *Color Mood / Palette:* ${selectedColor}\n`;
      msg += `🌱 *Yarn Preference:* ${selectedYarn}\n`;
      msg += `📝 *Notes & Sizing:* ${notes}\n\n`;
      msg += `─────────────────────────\n`;
      msg += `Could you let me know your estimated timeline and custom pricing quote? Thank you!`;

      const encoded = encodeURIComponent(msg);
      window.open(`https://wa.me/${BRAND_CONFIG?.contact?.whatsappNumber || '919876543210'}?text=${encoded}`, '_blank');
      showToast('Custom inquiry ready! Opening WhatsApp chat...');
    });
  }

  // ------------------------------------------------------------------------
  // YOUTUBE VIDEO MODAL
  // ------------------------------------------------------------------------
  function openYouTubeModal() {
    const ytOverlay = document.getElementById('yt-video-modal');
    const iframe = document.getElementById('yt-iframe-player');
    if (!ytOverlay || !iframe) return;

    iframe.src = `https://www.youtube-nocookie.com/embed/${BRAND_CONFIG?.contact?.featuredYouTubeEmbedId || 'dQw4w9WgXcQ'}?autoplay=1`;
    ytOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeYouTubeModal() {
    const ytOverlay = document.getElementById('yt-video-modal');
    const iframe = document.getElementById('yt-iframe-player');
    if (!ytOverlay || !iframe) return;

    iframe.src = '';
    ytOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ------------------------------------------------------------------------
  // SCROLL REVEALS (SMOOTH INTERSECTION OBSERVER)
  // ------------------------------------------------------------------------
  function setupScrollReveals() {
    if (!('IntersectionObserver' in window)) return;

    const revealElements = document.querySelectorAll('.product-card, .anatomy-card, .hero-composition-wrap, .dual-life-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  }

  // ------------------------------------------------------------------------
  // TOAST NOTIFICATIONS
  // ------------------------------------------------------------------------
  function showToast(message) {
    if (!toastEl) return;
    toastEl.querySelector('.toast-text').textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3400);
  }
});
