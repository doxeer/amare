import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

function Product({ Url, text, price, href, localLink }) {
  const navigate = useNavigate();

  const handleImageClick = (e) => {
    e.preventDefault();
    navigate(localLink);
  };
  return (
    <div className="product">
      <img
        src={Url}
        alt={text}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />
      <h3>{text}</h3>
      <h4>{price}</h4>
      <a href={href}>
        <button>BUY NOW</button>
      </a>
    </div>
  );
}

export default Product;
