import { Outlet, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="promo-code">Get a $10 off Coupon Promo Code:1942935</div>
      <nav>
        <div className="logo" onClick={() => navigate("/")}></div>
        <div className="nav-button" onClick={() => navigate("products")}>
          PRODUCTS
        </div>
        <div className="nav-button" onClick={() => navigate("kyani-products")}>
          KYANI PRODUCTS
        </div>
        <div
          className="nav-button"
          onClick={() => navigate("join-as-brand-partner")}
        >
          JOIN AS BRAND PARTNER
        </div>
      </nav>
      <div className="var-page">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Home;
