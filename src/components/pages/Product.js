import React from "react";
import "./Product.css";

function Product({ Url, text, price}) {
  return (
    <div className="product">
      <img src={Url} alt={text} />
      <h3>{text}</h3>
      <h4>{price}</h4>
      <button>BUY NOW</button>
    </div>
  );
}

export default Product;
