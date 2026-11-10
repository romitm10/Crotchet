// ==========================================================================
// KNOT & BLOOM ATELIER - PRODUCT CATALOG (VERSION 2)
// 100% Authentic, High-Resolution Editorial Product Photography
// ==========================================================================

const PRODUCTS_DATA = [
  // ------------------------------------------------------------------------
  // CATEGORY: Hair Accessories
  // ------------------------------------------------------------------------
  {
    id: "hair-01",
    name: "Petal & Bloom Daisy Hair Clip Set",
    category: "hair",
    categoryLabel: "Hair Accessories",
    price: 499,
    comparePrice: 650,
    rating: 4.9,
    reviewsCount: 38,
    status: "ready_to_ship",
    leadTime: "Dispatches within 24 hours",
    craftTime: "2.5 hours of needlework",
    yarnType: "Combed Milk Cotton Yarn",
    badge: "Bestseller",
    shortDesc: "Hand-crocheted botanical daisy flower barrettes on gold alligator clips lined with grosgrain ribbon.",
    description: "Handcrafted petal-by-petal using feather-soft combed milk cotton yarn. Each clip features double-layer 3D floral petals with a sunny buttercup center, mounted onto non-slip, teeth-lined metal alligator clips lined with soft grosgrain ribbon. Gentle on fine hair and holds tight without tugging.",
    dimensions: "6.5 cm diameter flower, 5 cm metal clip base",
    care: "Spot clean gently with a damp cloth and mild baby shampoo. Lay flat to dry.",
    colorways: [
      { name: "Daisy Cream & Gold", hex: "#FFF8EA", img: "assets/hair-01-daisy.jpg" },
      { name: "Pastel Lavender", hex: "#D8C7E8", img: "assets/hair-01-daisy.jpg" },
      { name: "Blossom Rose", hex: "#E8B4B8", img: "assets/hair-01-daisy.jpg" }
    ],
    images: [
      "assets/hair-01-daisy.jpg"
    ],
    tags: ["Daisy", "Floral", "Gift Set", "Clips"]
  },
  {
    id: "hair-02",
    name: "Cottagecore Scalloped Headband",
    category: "hair",
    categoryLabel: "Hair Accessories",
    price: 749,
    comparePrice: 899,
    rating: 5.0,
    reviewsCount: 22,
    status: "made_to_order",
    leadTime: "Handmade in 3-4 business days",
    craftTime: "4.5 hours of micro-crochet",
    yarnType: "Egyptian Mercerized Cotton",
    badge: "Staff Pick",
    shortDesc: "Intricate openwork lace-stitch headband with flexible inner frame and velvet temple cushions.",
    description: "Designed for all-day comfort with zero headache pressure behind your ears. Hand-crocheted using fine mercerized cotton over a lightweight padded band, finished with smooth velvet tips. Perfect for everyday cottagecore charm, zoom meetings, or weekend brunch dates.",
    dimensions: "Width: 3.5 cm; flexible one-size fit for teens & adults",
    care: "Hand wash in cold water with gentle detergent. Reshape around a curved surface to dry.",
    colorways: [
      { name: "Forest Sage Green", hex: "#7E9F83", img: "assets/hair-02-headband.jpg" },
      { name: "Warm Oat Milk", hex: "#EFE8DA", img: "assets/hair-02-headband.jpg" },
      { name: "Terracotta Clay", hex: "#C87D6B", img: "assets/hair-02-headband.jpg" }
    ],
    images: [
      "assets/hair-02-headband.jpg"
    ],
    tags: ["Headband", "Lace Stitch", "Zero Pressure"]
  },
  {
    id: "hair-03",
    name: "Marshmallow Velvet Scrunchie Trio",
    category: "hair",
    categoryLabel: "Hair Accessories",
    price: 599,
    comparePrice: 750,
    rating: 4.8,
    reviewsCount: 47,
    status: "ready_to_ship",
    leadTime: "Dispatches within 24 hours",
    craftTime: "3 hours of velvet stitching",
    yarnType: "Cloud Chenille Velvet",
    badge: "Restocked",
    shortDesc: "Set of three cloud-soft velvet ruffled scrunchies with reinforced high-elastic inner core.",
    description: "Treat your hair to ultimate zero-crease luxury. Crocheted with super plush chenille yarn around custom-tested extra durable elastic bands that retain elasticity for hundreds of wears. Prevents hair breakage, friction frizz, and split ends while adding effortless aesthetic texture to messy buns.",
    dimensions: "Outer diameter: 12 cm, stretch extends up to 22 cm",
    care: "Delicate hand wash in cold water. Air dry flat.",
    colorways: [
      { name: "Sage, Oat & Dusty Rose", hex: "#A8BCA1", img: "assets/hair-03-scrunchies.jpg" },
      { name: "Mocha & Cream", hex: "#D4A373", img: "assets/hair-03-scrunchies.jpg" }
    ],
    images: [
      "assets/hair-03-scrunchies.jpg"
    ],
    tags: ["Scrunchie", "Velvet", "Hair Care", "Gift"]
  },

  // ------------------------------------------------------------------------
  // CATEGORY: Bags & Totes
  // ------------------------------------------------------------------------
  {
    id: "bag-01",
    name: "The Meadow Granny-Square Tote",
    category: "bags",
    categoryLabel: "Bags & Totes",
    price: 2499,
    comparePrice: 3200,
    rating: 5.0,
    reviewsCount: 54,
    status: "made_to_order",
    leadTime: "Stitched in 5-7 business days",
    craftTime: "18.5 hours (18 granny squares)",
    yarnType: "100% Recycled Natural Cotton Cord",
    badge: "Iconic Signature",
    shortDesc: "Flagship bohemian tote constructed from 18 distinct hand-blocked floral squares with unbleached cotton lining.",
    description: "The statement piece that launched our studio. Each tote features 18 heirloom granny squares stitched seamlessly together with double-reinforced flat slip stitches. Lined with organic undyed unbleached cotton canvas with an internal slip pocket for your phone and keys. Handles are reinforced with hidden herringbone webbing so they never stretch out.",
    dimensions: "Width: 38 cm (15 in), Height: 40 cm (15.7 in). Comfortably holds a 14” laptop.",
    care: "Spot clean or gentle hand wash in lukewarm water with wool detergent. Dry flat on a clean towel.",
    colorways: [
      { name: "Botanical Olive & Sunflower", hex: "#606C38", img: "assets/bag-01-tote.jpg" },
      { name: "Pastel Meadow", hex: "#CCD5AE", img: "assets/bag-01-tote.jpg" }
    ],
    images: [
      "assets/bag-01-tote.jpg"
    ],
    tags: ["Granny Square", "Laptop Friendly", "Lined Canvas", "Heirloom"]
  },
  {
    id: "bag-02",
    name: "Tulip Blossom Crossbody Pouch",
    category: "bags",
    categoryLabel: "Bags & Totes",
    price: 1699,
    comparePrice: 2199,
    rating: 4.9,
    reviewsCount: 29,
    status: "ready_to_ship",
    leadTime: "Dispatches within 24 hours",
    craftTime: "8 hours of 3D stitchwork",
    yarnType: "Milk Cotton & Waxed Cord Strap",
    badge: "Viral on Reels",
    shortDesc: "Textured 3D tulip stitch pouch with antique brass kiss-lock closure and detachable crossbody strap.",
    description: "Turn heads with vibrant dimensional tulip clusters blooming across every row. Perfectly sized for your phone, card wallet, passport, and lipstick. Finished with an antique brass magnetic clasp and a detachable hand-twisted cotton shoulder strap.",
    dimensions: "20 cm x 15 cm x 5 cm. Strap length: 110 cm (adjustable)",
    care: "Gently wipe with a damp microfiber cloth. Store stuffed with tissue paper to preserve flower volume.",
    colorways: [
      { name: "Blushing Tulip (Rose & Cream)", hex: "#D48C8C", img: "assets/bag-02-tulip.jpg" }
    ],
    images: [
      "assets/bag-02-tulip.jpg"
    ],
    tags: ["Crossbody", "3D Tulip", "Phone Pouch", "Antique Brass"]
  },
  {
    id: "bag-03",
    name: "Riviera Raffia-Style Summer Clutch",
    category: "bags",
    categoryLabel: "Bags & Totes",
    price: 1899,
    comparePrice: 2400,
    rating: 4.8,
    reviewsCount: 16,
    status: "made_to_order",
    leadTime: "Handmade in 4 business days",
    craftTime: "10 hours of basketweave stitch",
    yarnType: "Eco-friendly Natural Plant Raffia",
    badge: "Resort Special",
    shortDesc: "Lightweight, water-resistant eco-raffia clutch with hand-carved teakwood ball kiss-lock closure.",
    description: "Crafted from 100% natural biodegradable plant fiber raffia. Durable, feather-light, and completely structured without synthetic stiffeners. Accented with hand-carved sustainable teakwood hardware, this clutch elevates beach vacations, garden weddings, and alfresco dinners.",
    dimensions: "28 cm x 18 cm x 6 cm. Includes removable wristlet loop.",
    care: "Wipe with a slightly damp cloth. Steam lightly from 6 inches away to restore crisp shape.",
    colorways: [
      { name: "Natural Honey Wheat", hex: "#D9C39E", img: "assets/bag-03-raffia.jpg" }
    ],
    images: [
      "assets/bag-03-raffia.jpg"
    ],
    tags: ["Raffia", "Resort Wear", "Eco-friendly", "Teakwood"]
  },

  // ------------------------------------------------------------------------
  // CATEGORY: Teddies & Amigurumi (Plushies)
  // ------------------------------------------------------------------------
  {
    id: "plush-01",
    name: "Barnaby the Gentleman Teddy Bear",
    category: "teddies",
    categoryLabel: "Teddies & Amigurumi",
    price: 1999,
    comparePrice: 2600,
    rating: 5.0,
    reviewsCount: 63,
    status: "made_to_order",
    leadTime: "Stitched in 4-6 business days",
    craftTime: "14 hours (1,800+ stitches)",
    yarnType: "Super Soft Chenille Velvet + Hypoallergenic Polyfill",
    badge: "Keepsake Favorite",
    shortDesc: "Beloved collectible plush bear with embroidered baby-safe features and a removable mustard scarf.",
    description: "Barnaby is crafted for heirloom snuggles. Stuffed with hypoallergenic non-clumping fiberfill and weighted with a gentle pellet base so he sits upright on bedside tables, nurseries, or work desks. Baby-safe with 100% hand-embroidered facial details (no hard plastic choking hazards). Includes a removable mini knit scarf in mustard gold.",
    dimensions: "Sitting height: 26 cm (10.2 in); Full height: 34 cm",
    care: "Spot clean with gentle wool foam. Surface wash only. Do not machine spin.",
    colorways: [
      { name: "Warm Biscuit & Mustard", hex: "#B88E67", img: "assets/plush-01-bear.jpg" }
    ],
    images: [
      "assets/plush-01-bear.jpg"
    ],
    tags: ["Teddy Bear", "Baby Safe", "Nursery", "Desk Companion"]
  },
  {
    id: "plush-02",
    name: "Penelope the Ballerina Bunny",
    category: "teddies",
    categoryLabel: "Teddies & Amigurumi",
    price: 1849,
    comparePrice: 2399,
    rating: 4.9,
    reviewsCount: 31,
    status: "ready_to_ship",
    leadTime: "Dispatches within 24 hours",
    craftTime: "12 hours of delicate shaping",
    yarnType: "Organic Combed Milk Cotton",
    badge: "Limited Drop",
    shortDesc: "Floppy-eared whimsical rabbit dressed in a crocheted petal tulle tutu with ballet ribbon slippers.",
    description: "A whimsical heirloom companion. Penelope features long cuddly floppy ears, blushed rosy cheeks (tinted with natural mineral pigment), and a removable petal skirt. Crafted with zero tension gaps to ensure filling never pokes out even after years of love.",
    dimensions: "Height: 32 cm from ear tip to ballet slippers",
    care: "Hand wash gently in lukewarm water; squeeze water out with a towel (do not wring). Lay flat to dry.",
    colorways: [
      { name: "Soft Milk White & Ballet Pink", hex: "#F3D8D8", img: "assets/plush-02-bunny.jpg" }
    ],
    images: [
      "assets/plush-02-bunny.jpg"
    ],
    tags: ["Bunny", "Ballerina", "Keepsake", "Baby Shower Gift"]
  },
  {
    id: "plush-03",
    name: "Matcha Froggy Stress-Relief Companion",
    category: "teddies",
    categoryLabel: "Teddies & Amigurumi",
    price: 899,
    comparePrice: 1199,
    rating: 5.0,
    reviewsCount: 42,
    status: "ready_to_ship",
    leadTime: "Dispatches within 24 hours",
    craftTime: "5 hours of round stitches",
    yarnType: "Super Squishy Velvet Chenille",
    badge: "Desk Favorite",
    shortDesc: "Viral pocket-sized squishy green frog with tiny daisy crown, designed for desktop stress relief.",
    description: "Created specifically for fellow working professionals! This delightful palm-sized amigurumi frog sits serenely next to your monitor, bringing instant dopamine during hectic workdays. Incredibly squishy and therapeutic to hold during meetings.",
    dimensions: "10 cm x 9 cm (fits comfortably in the palm of your hand)",
    care: "Spot clean with damp cloth.",
    colorways: [
      { name: "Matcha Green with White Daisy", hex: "#95B46A", img: "assets/plush-03-froggy.jpg" }
    ],
    images: [
      "assets/plush-03-froggy.jpg"
    ],
    tags: ["Froggy", "Desk Buddy", "Stress Relief", "Matcha"]
  },

  // ------------------------------------------------------------------------
  // CATEGORY: Tops & Wearables
  // ------------------------------------------------------------------------
  {
    id: "top-01",
    name: "Sunburst Halter Crop Top",
    category: "tops",
    categoryLabel: "Tops & Wearables",
    price: 2899,
    comparePrice: 3800,
    rating: 4.9,
    reviewsCount: 49,
    status: "made_to_order",
    leadTime: "Custom made to your bust measurement in 5-8 days",
    craftTime: "16 hours of mandala pattern work",
    yarnType: "100% Breathable Combed Cotton",
    badge: "Festival Staple",
    shortDesc: "Intricate sunburst mandala bodice with fully adjustable criss-cross lace-up back and scallop hem.",
    description: "Slow fashion at its finest. Designed to mold like a second skin without requiring a bra. Features a dense, non-see-through central sunburst motif, scallop lace underbust border, and long reinforced cord ties that allow you to adjust the fit exactly to your body shape. Sweat-resistant, completely natural, and comfortable in summer heat.",
    dimensions: "Available in XS, S, M, L, XL or Custom Bust Measurements upon checkout.",
    care: "Hand wash in cool water with gentle detergent. Dry flat on a towel. Never hang wet crochet clothing.",
    colorways: [
      { name: "Terracotta Sunset & Ochre", hex: "#C76D58", img: "assets/top-01-halter.jpg" }
    ],
    images: [
      "assets/top-01-halter.jpg"
    ],
    tags: ["Halter Top", "Adjustable Fit", "Summer Wear", "Custom Sizing"]
  },
  {
    id: "top-02",
    name: "Botanical Lace Cardigan & Bolero",
    category: "tops",
    categoryLabel: "Tops & Wearables",
    price: 4499,
    comparePrice: 5800,
    rating: 5.0,
    reviewsCount: 19,
    status: "made_to_order",
    leadTime: "Heirloom piece made in 8-12 business days",
    craftTime: "28 hours of trellis & leaf lace",
    yarnType: "Silk Bamboo & Cotton Blend",
    badge: "Masterpiece",
    shortDesc: "Breathtaking openwork lace cardigan with balloon sleeves, scalloped neckline, and Mother-of-Pearl buttons.",
    description: "An absolute dream of slow fashion architecture. Drapes effortlessly over slip dresses, tank tops, or swimwear. Knitted with ultra-luxurious bamboo-cotton blend that possesses a soft liquid-silk drape and natural antibacterial cooling properties. Finished with real Mother-of-Pearl shell buttons along the placket.",
    dimensions: "Relaxed silhouette. S/M (Bust 32-38”), L/XL (Bust 40-46”), or Custom Sleeves/Length.",
    care: "Dry clean recommended, or careful cold hand wash using delicate wool shampoo. Dry flat.",
    colorways: [
      { name: "Frosted Sage Leaf", hex: "#8DAA91", img: "assets/top-02-cardigan.jpg" }
    ],
    images: [
      "assets/top-02-cardigan.jpg"
    ],
    tags: ["Cardigan", "Bamboo Silk", "Balloon Sleeve", "Heirloom"]
  },
  {
    id: "top-03",
    name: "Autumn Nostalgia Patchwork Vest",
    category: "tops",
    categoryLabel: "Tops & Wearables",
    price: 3299,
    comparePrice: 4200,
    rating: 4.9,
    reviewsCount: 27,
    status: "made_to_order",
    leadTime: "Handmade in 6-8 business days",
    craftTime: "20 hours of granny square joining",
    yarnType: "Organic Merino Wool & Cotton Blend",
    badge: "Trending Autumn",
    shortDesc: "Relaxed fit layered sweater vest with retro earth-tone granny squares and ribbed elastic hemlines.",
    description: "Channel cozy 70s nostalgia with modern artisanal tailoring. Featuring rich harmonious shades of forest green, burnt orange, mustard, and oatmeal. Perfectly proportioned to layer over white collared shirts, turtlenecks, or wide-leg corduroy trousers.",
    dimensions: "Unisex regular fit: Small (Length 52cm), Medium (Length 56cm), Large (Length 60cm).",
    care: "Hand wash in cold water with wool detergent. Never wring or tumble dry. Dry flat on a towel.",
    colorways: [
      { name: "Woodland Autumn (Olive, Rust, Ochre)", hex: "#8B5A2B", img: "assets/top-03-vest.jpg" }
    ],
    images: [
      "assets/top-03-vest.jpg"
    ],
    tags: ["Sweater Vest", "Patchwork", "Autumn Layering", "Retro Style"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS_DATA;
}
