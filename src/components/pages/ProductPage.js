import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./ProductPage.css";

function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  // Eğer `state` boşsa kullanıcıyı ana sayfaya yönlendirin.
  if (!product) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div className="productpage">
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, ${product.description}, health supplements, wellness products`} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
      </Helmet>
      <div className="productpage-product">
        <img src={product.imageUrl} alt={product.name} />
        <div className="productpage-side">
          <h2>{product.name}</h2>
          <div id="description">{product.description}</div>
          <div id="price">{product.price}</div>
          <small id="description">
            Use Amare Promo Code 1942935 during checkout to save $10 off your first order.
          </small>
          <a href={product.buyLink}>
            <button>BUY NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;