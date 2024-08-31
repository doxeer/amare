import { useLocation } from "react-router-dom";
import "./ProductPage.css";

function ProductPage() {
  const location = useLocation();
  const product = location.state;

  return (
    <div className="productpage">
      <div className="productpage-product">
        <img src={product.imageUrl} alt={product.name} />
        <div className="productpage-side">
          <h2>{product.name}</h2>
          <div id="description">{product.description}</div>
          <div id="price">{product.price}</div>
          <small id="description">
            Use Amare Promo Code 1942935 during checkout to save $10 off your
            first order.
          </small>
          <a href={product.buyLink}><button>BUY NOW</button></a>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
