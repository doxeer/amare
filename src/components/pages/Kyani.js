import React from "react";
import "./Kyani.css";
import { Helmet } from "react-helmet-async";

const products = [
  {
    id: 1,
    name: "GBX Pep™ [12 Cans]",
    description:
      "Why You'll Love It Supports mental alertness and improved concentration.",
    price: "$35.95",

    imageUrl: "https://via.placeholder.com/150",
    buyLink: "https://example.com/buy-gbx-pep",
  },
  {
    id: 2,
    name: "Digestive",
    description:
      "Features & Benefits Delivers a balanced and comprehensive blend of digestive enzymes.",
    price: "$31.95",

    imageUrl: "https://via.placeholder.com/150",
    buyLink: "https://example.com/buy-digestive",
  },
  {
    id: 3,
    name: "Amare EDGE™ Grape [Stick Packs]",
    description:
      "Cutting edge gut-brain axis science packed into a refreshing strawberry cream beverage.",
    price: "$78.95",

    imageUrl: "https://via.placeholder.com/150",
    buyLink: "https://example.com/buy-edge-grape",
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
    <Helmet>
      <title>Amare - Kyani Products</title>
      <meta
        name="description"
        content="Explore our range of health supplements designed to support your wellness journey. Shop now for top products like GBX Pep, Digestive Enzymes, and Amare EDGE."
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
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
