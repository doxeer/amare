import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import urunListe from "./urunListe";
import SearchBar from "./SearchBar"; // SearchBar bileşenini içe aktar
import "./Products.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${product.linkName}`);
  };

  return (
    <div>
      <Helmet>
        <title>Amare - Products</title>
        <meta name="description" content={product.description} />
        <meta
          name="keywords"
          content={`${urunListe
            .map((p) => `${p.name}, ${p.description}`)
            .join(", ")}, health products, wellness, Amare supplements`}
        />
        <meta
          property="og:title"
          content={`${urunListe.map((p) => `${p.name}`).join(", ")}`}
        />
        <meta
          property="og:description"
          content={`${urunListe.map((p) => `${p.description}`).join(", ")}`}
        />
        <meta
          property="og:image"
          content={`${urunListe.map((p) => `${p.imageUrl}`).join(", ")}`}
        />
      </Helmet>

      <div className="product-card">
        <div onClick={handleNavigate} style={{ cursor: "pointer" }}>
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
    </div>
  );
}

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(urunListe);

  const handleSearch = (query) => {
    const filtered = urunListe.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      {/* SearchBar kullanımı */}
      <SearchBar onSearch={handleSearch} />

      {/* Ürün Listesi */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.linkName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
