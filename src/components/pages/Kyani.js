import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import KyaniProducts from "./KyaniProducts";
import SearchBar from "./SearchBar";
import "./Kyani.css";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(KyaniProducts);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = KyaniProducts.filter((product) =>
      product.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
  };

  const handleNavigate = (linkName) => {
    navigate(`/${linkName}`);
  };

  return (
    <div>
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
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <section className="product-list" aria-label="Product List">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <header
                  onClick={() => handleNavigate(product.linkName)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                  />
                </header>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">
                  <span className="new-price">{product.price}</span>
                </p>
                <a href={product.buyLink} className="buy-button">
                  BUY NOW
                </a>
              </article>
            ))
          ) : (
            <p>No products found</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProductList;
