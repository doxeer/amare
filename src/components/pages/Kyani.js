import React from "react";
import "./Kyani.css";
import { Helmet } from "react-helmet-async";
import KyaniProducts from "./KyaniProducts";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${product.linkName}`);
  };

  return (
    <div className="product-card">
      <div onClick={handleNavigate} style={{ cursor: "pointer" }}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
        </div>
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
}

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
      {KyaniProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
