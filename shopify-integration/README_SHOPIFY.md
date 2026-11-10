# SHOPIFY INTEGRATION GUIDE
## How to use Knot & Bloom Atelier code in Shopify (Online Store 2.0)

This codebase is crafted cleanly in modular HTML, CSS, and JavaScript so you can easily deploy it on Shopify in 3 different ways:

---

### Option 1: Integrate as Custom Liquid Sections in Any Theme (e.g. Dawn, Sense, Craft)

Shopify themes use **Liquid sections**. We have prepared ready-to-copy Liquid sections in this folder:

1. In your Shopify Admin, go to **Online Store > Themes**.
2. Click **... (Actions) > Edit code**.
3. Under the **Assets** folder, click **Add a new asset**:
   - Upload or paste `css/style.css` as `crochet-atelier.css`.
   - Upload or paste `js/products-data.js` and `js/app.js` as `crochet-atelier.js`.
4. Under the **Sections** folder, click **Add a new section**:
   - Create `crochet-hero.liquid` (copy code from `shopify-integration/crochet-hero.liquid`).
   - Create `crochet-showcase.liquid` (copy code from `shopify-integration/crochet-showcase.liquid`).
   - Create `crochet-commission.liquid` (copy code from `shopify-integration/crochet-commission.liquid`).
5. In **Theme Editor (Customize)**, click **Add section** on any page and choose **Crochet Showcase** or **Custom Commission Wizard**!

---

### Option 2: Using the Shopify "Buy Button" (Simplest, Zero Theme Changes)

If the client wants the ultra-custom visual aesthetic of this website while using Shopify purely for inventory and checkout processing:
1. In Shopify Admin, install the free **Buy Button** sales channel app by Shopify.
2. Generate Buy Buttons for the products.
3. Replace the `add-to-cart` action in `js/app.js` with your Shopify checkout redirect link or embed the Shopify Buy Button iframe.
4. The client gets their exact dream design with Shopify's checkout and payment processing!

---

### Option 3: Connecting the Slide-Over Cart to Shopify's Cart API

To have items added to this cart update Shopify's native cart, simply wire `handleStandardCheckout()` in `js/app.js` to Shopify's standard AJAX API:

```javascript
// Example Shopify AJAX Cart Integration:
async function addItemsToShopifyCart(items) {
  const lineItems = items.map(item => ({
    id: item.shopifyVariantId, // Shopify Variant ID
    quantity: item.quantity,
    properties: {
      'Handmade Colorway': item.color,
      'Craft Time': item.craftTime
    }
  }));

  const response = await fetch('/cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: lineItems })
  });

  const cartData = await response.json();
  window.location.href = '/checkout';
}
```
