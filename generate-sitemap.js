const fs = require("fs");
const path = require("path");
const xmlbuilder = require("xmlbuilder");

const products = [
  {
    id: 1,
    name: "Amare Happy Juice™ Pack",
    linkName: "amare-happy-juice-pack",
  },
  {
    id: 2,
    name: "Amare EDGE+™",
    linkName: "amare-edge-plus",
  },
  {
    id: 3,
    name: "Amare EDGE+™",
    linkName: "amare-edge-plus-grape",
  },
  {
    id: 4,
    name: "Amare EDGE™ Watermelon [Jar]",
    linkName: "amare-edge-watermelon-jar",
  },
  {
    id: 5,
    name: "Amare FundaMentals Pack",
    linkName: "amare-fundamentals-pack",
  },
  {
    id: 6,
    name: "Amare EDGE® Variety Pack",
    linkName: "amare-edge-variety-pack",
  },
  {
    id: 7,
    name: "Amare EDGE",
    linkName: "amare-edge",
  },
  {
    id: 8,
    name: "MentaBiotics®",
    linkName: "mentaBiotics",
  },
  {
    id: 9,
    name: "MentaFocus",
    linkName: "mentafocus",
  },
  {
    id: 10,
    name: "Energy+™",
    linkName: "energy-plus",
  },
  {
    id: 11,
    name: "Energy+DragonFruit",
    linkName: "energy-plus-dragon-fruit",
  },
  {
    id: 12,
    name: "MentaSync®",
    linkName: "mentaSync",
  },
  {
    id: 13,
    name: "MentaHeart™",
    linkName: "mentaHeart",
  },
  {
    id: 14,
    name: "Mood+",
    linkName: "mood-plus",
  },
  {
    id: 15,
    name: "GBX SuperFood",
    linkName: "gbx-super-food",
  },
  {
    id: 16,
    name: "Kids Mood+™",
    linkName: "kids-mood-plus",
  },
  {
    id: 17,
    name: "Amare GBX FIT™",
    linkName: "amare-gbx-fit",
  },
  {
    id: 18,
    name: "Sleep+",
    linkName: "sleep-plus",
  },
  {
    id: 19,
    name: "OmMega®",
    linkName: "ommega",
  },
  {
    id: 20,
    name: "GBX Protein®",
    linkName: "gbx-protein",
  },
  {
    id: 21,
    name: "Kyäni Sunset",
    linkName: "kyani-sunset",
  },
  {
    id: 22,
    name: "Kyäni HL5 Berry Lemonade",
    linkName: "kyani-hl5-berry-lemonade",
  },
  {
    id: 23,
    name: "Kyäni HL5 Peach",
    linkName: "kyani-hl5-peach",
  },
  {
    id: 24,
    name: "Kyäni Nitro Xtreme",
    linkName: "kyani-nitro-xtreme",
  },
  {
    id: 25,
    name: "Kyäni Sunrise",
    linkName: "kyani-sunrise",
  },
  {
    id: 26,
    name: "Triangle of Health™ Pack",
    linkName: "kyani-triangle-of-health-pack",
  },
  {
    id: 27,
    name: "FIT20®",
    linkName: "kyani-fit-20",
  },
];

// Static routes
const staticRoutes = [
  { path: "join-as-brand-partner", priority: "0.8" },
  { path: "kyani-products", priority: "0.8" },
  { path: "products", priority: "0.8" },
];

// Base URL of your site
const baseUrl = "https://amarewellnessproducts.com";

// Build XML structure
const urlset = xmlbuilder
  .create("urlset", { encoding: "UTF-8" })
  .att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

// Add home page
urlset
  .ele("url")
  .ele("loc", {}, `${baseUrl}/`)
  .up()
  .ele("lastmod", {}, new Date().toISOString().split("T")[0])
  .up()
  .ele("changefreq", {}, "daily")
  .up()
  .ele("priority", {}, "1.0");

// Add static routes
staticRoutes.forEach((route) => {
  urlset
    .ele("url")
    .ele("loc", {}, `${baseUrl}/${route.path}`)
    .up()
    .ele("lastmod", {}, new Date().toISOString().split("T")[0])
    .up()
    .ele("changefreq", {}, "monthly")
    .up()
    .ele("priority", {}, route.priority);
});

// Add product URLs
products.forEach((product) => {
  urlset
    .ele("url")
    .ele("loc", {}, `${baseUrl}/${product.linkName}`)
    .up()
    .ele("lastmod", {}, new Date().toISOString().split("T")[0])
    .up()
    .ele("changefreq", {}, "monthly")
    .up()
    .ele("priority", {}, "0.6");
});

// Write XML to file
fs.writeFileSync(
  path.join(__dirname, "public", "sitemap.xml"),
  urlset.end({ pretty: true })
);
