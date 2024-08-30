import React from "react";
import "./Product.css";

function Product({ Url, text, price, href}) {
  return (
    <div className="product">
      <img src={Url} alt={text} />
      <h3>{text}</h3>
      <h4>{price}</h4>
      <a href={href}><button>BUY NOW</button></a>
    </div>
  );
}

export default Product;
