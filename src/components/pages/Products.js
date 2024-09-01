import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import urunListe from "./urunListe";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${product.linkName}`, { state: product });
  };

  return (
    <div className="product-card">
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
      </Helmet>
      <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">
          <span className="new-price">{product.price}</span>
        </p>
      </div>
      <a href={product.buyLink} className="buy-button">
        BUY NOW
      </a>
    </div>
  );
}

const ProductList = () => (
  <div className="product-list">
    {urunListe.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
