# WORDPRESS & WOOCOMMERCE INTEGRATION GUIDE
## How to use Knot & Bloom Atelier code in WordPress

WordPress gives the client ultimate ownership of their content and blog/tutorial publishing. Here are the 3 simple ways to use this codebase in WordPress:

---

### Option 1: Using Elementor or Gutenberg (Fastest, No Coding Required)

If the client is using WordPress with **Elementor**, **Divi**, or the default **Gutenberg Block Editor**:

1. In WordPress Admin, install the free plugin **WPCode** (Insert Headers and Footers).
2. In WPCode:
   - Paste the Google Fonts link into the **Header**.
   - Paste the CSS from `css/style.css` into a **Global CSS Snippet** (or in **Appearance > Customize > Additional CSS**).
   - Paste `js/brand-config.js`, `js/products-data.js`, and `js/app.js` into a **Footer JavaScript Snippet**.
3. Create a new Page (e.g. "Home").
4. Add an **HTML Block** or **Elementor HTML Widget**, and paste the inner markup of `index.html`.
5. Click **Publish** — the entire animated website will run natively inside WordPress with live cart and WhatsApp functionality!

---

### Option 2: Use as a Standalone Custom WordPress Theme

If the client wants this as an ultra-fast, lightweight dedicated WordPress theme:
1. Create a folder named `knot-and-bloom` inside `wp-content/themes/`.
2. Copy:
   - `wordpress-integration/style.css`
   - `wordpress-integration/functions.php`
   - `wordpress-integration/front-page.php`
   - `css/` folder
   - `js/` folder
3. In WordPress Admin, go to **Appearance > Themes** and click **Activate** on **Knot & Bloom Atelier Theme**.

---

### Option 3: Connecting with WooCommerce

To connect the products and cart to WooCommerce:
1. Install and activate the free **WooCommerce** plugin.
2. In WooCommerce, create your 4 categories:
   - Hair Accessories
   - Bags & Totes
   - Teddies & Amigurumi
   - Tops & Wearables
3. In `functions.php`, WooCommerce product loops can automatically populate the product grid.
4. The WhatsApp checkout button can be combined with plugins like **"Order on WhatsApp for WooCommerce"** or our built-in WhatsApp generator.
