import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import urunListe from "./urunListe";
import "./ProductPage.css";
import KyaniProducts from "./KyaniProducts";
import RelatedProducts from "./RelatedProducts";
import CommentForm from "./Admin/CommentForm";
import CommentList from "./Admin/CommentList";

function ProductPage() {
  const { linkName } = useParams();
  const navigate = useNavigate();
  const product =
    urunListe.find((item) => item.linkName === linkName) ||
    KyaniProducts.find((item) => item.linkName === linkName);

  if (!product) {
    navigate("/", { replace: true });
    return null;
  }

  const relatedProducts = urunListe
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .concat(
      KyaniProducts.filter(
        (item) => item.category === product.category && item.id !== product.id
      )
    );

  return (
    <div className="productpage">
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta
          name="keywords"
          content={`${product.name}, ${product.description}, health supplements, wellness products`}
        />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
      </Helmet>

      <div className="productpage-product">
        <div className="productpage-image-center">
          <img src={product.imageUrl} alt={product.name} id="productpage-image"/>
        </div>
        <div className="productpage-side">
          <h2>{product.name}</h2>
          <div id="description">{product.description}</div>
          <div id="price">{product.price}</div>
          <small id="description">
            Use Amare Promo Code 1942935 during checkout to save $10 off your
            first order.
          </small>
          <a href={product.buyLink}>
            <button>BUY NOW</button>
          </a>
        </div>
      </div>
      <div className="related-products">
        <RelatedProducts products={relatedProducts} />
      </div>
      {/* Yorumlar */}
      <div className="comments-section">
        <CommentForm productId={product.id} />
        <CommentList productId={product.id} />
      </div>
    </div>
  );
}

export default ProductPage;
