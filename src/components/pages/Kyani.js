import React from "react";
import "./Kyani.css";
import { Helmet } from "react-helmet-async";
import kyanisunset from "../images/Kyanisunset.png"
import Kyaniberrylemonade from "../images/Kyaniberrylemonade.png"
import kyanipeach from "../images/Kyanipeach.png"


const products = [
  {
    id: 1,
    name: "Kyäni Sunset",
    description:
      "Kyäni Sunset is your go-to for supporting your most important organs---your brain and your heart---while also helping maintain healthy cholesterol levels, cognitive function, immune support, and healthy blood sugar levels. Featuring a proprietary blend of lipid-soluble nutrients including wild-sourced omega-3 fatty acids, tocotrienols, astaxanthin, and more, Kyäni Sunset is the nightly routine that helps you wake up ready to slay your day!",
    price: "$49.95",
    imageUrl: kyanisunset,
    alt: "kyanisunset",
    buyLink: "https://www.amare.com/1942935/en-us/kyani-sunset",
    linkName: "kyani-sunset",
  },
  {
    id: 2,
    name: "Kyäni HL5 Berry Lemonade",
    description:
      "Our game-changing collagen support formula, Kyäni HL5, contains clean-sourced, hydrolyzed collagen protein and other premium ingredients to support collagen resiliency to help us to look younger, feel younger, and move younger in a convenient on-the-go pouch",
    price: "$77.95",
    imageUrl: Kyaniberrylemonade,
    alt: "kyanihl5berrylemonade",
    buyLink: "https://www.amare.com/1942935/en-us/kyani-hl5-berry",
    linkName: "kyani-hl5-berry-lemonade",
  },
  {
    id: 3,
    name: "Kyäni HL5 Peach",
    description:
      "Our game-changing collagen support formula, Kyäni HL5, contains clean-sourced, hydrolyzed collagen protein and other premium ingredients to support collagen resiliency to help us to look younger, feel younger, and move younger in a convenient on-the-go pouch.*",
    price: "$77.95",
    alt: "kyanihl5berrypeach",
    imageUrl: kyanipeach ,
    buyLink: "https://www.amare.com/1942935/en-us/kyani-hl5-peach",
    linkName: "kyani-hl5-peach",
  },
  {
    id: 4,
    name: "Amare EDGE™ Watermelon [Jar]",
    description:
      "Amare EDGE, the all-natural nootropic, that helps give you the motivation to t.",
    price: "$78.95",

    imageUrl: "https://via.placeholder.com/150",
    buyLink: "https://example.com/buy-edge-watermelon",
  },
  {
    id: 5,
    name: "Amare EDGE™ Watermelon [Jar]",
    description:
      "Amare EDGE, the all-natural nootropic, that helps give you the motivation to t.",
    price: "$78.95",

    imageUrl: "https://via.placeholder.com/150",
    buyLink: "https://example.com/buy-edge-watermelon",
  },
  {
    id: 6,
    name: "Amare EDGE™ Watermelon [Jar]",
    description:
      "Amare EDGE, the all-natural nootropic, that helps give you the motivation to t.",
    price: "$78.95",

    imageUrl: "https://via.placeholder.com/150",
    buyLink: "https://example.com/buy-edge-watermelon",
  },
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.name} className="product-image" />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p className="price">
      <span className="new-price">{product.price}</span>
    </p>
    <a href={product.buyLink} className="buy-button">
      BUY NOW
    </a>
  </div>
);

const ProductList = () => (
  <div>
    <head>
      <Helmet>
        <title>Amare - Kyani Products</title>
        <meta
          name="description"
          content="Explore our range of health supplements designed to support your wellness journey. Shop now for top products like GBX Pep, Digestive Enzymes, and Amare EDGE."
        />
        <meta
          name="keywords"
          content="health supplements, wellness, GBX Pep, Digestive Enzymes, Amare EDGE, Kyani Products"
        />
        <meta
          property="og:title"
          content="Our Products - Kyani Health Supplements"
        />
        <meta
          property="og:description"
          content="Explore our range of health supplements designed to support your wellness journey. Shop now for top products like GBX Pep, Digestive Enzymes, and Amare EDGE."
        />
        <meta property="og:image" content="https://via.placeholder.com/150" />
      </Helmet>
    </head>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
