import "./DefaultPage.css";
import Slider from "react-slick";
import product1 from "../images/product1.jpeg";
import product2 from "../images/product2.jpeg";
import product3 from "../images/product3.jpeg";
import product4 from "../images/product4.jpeg";
import amarebanner1 from "../images/amarebanner.JPG";
import amarebanner2 from "../images/amarebanner2.JPG";
import ad1 from "../images/ad1.jpeg";
import ad2 from "../images/ad2.jpeg";
import Product from "./Product";
import amare from "../images/amare.png";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function DefaultPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const images = [amarebanner1, amarebanner2];
  const navigate = useNavigate();
  return (
    <main className="defaultPage" id="start">
      <Helmet>
        <title>Amare</title>
        <meta
          name="description"
          content="Explore our range of Amare products including new arrivals and special offers."
        />
        <meta property="og:title" content="Amare Products - Home" />
        <meta
          property="og:description"
          content="Explore our range of Amare products including new arrivals and special offers."
        />
        <meta
          name="keywords"
          content="Amare, health products, supplements, new arrivals, special offers"
        />
        <meta property="og:image" content={amarebanner1} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <section className="carousel" aria-label="Amare Product Slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
              <a href="https://www.amare.com/1942935/en-us/shop-all">
                <button className="carousel-button">Shop Now</button>
              </a>
            </div>
          ))}
        </Slider>
      </section>

      <section className="product-section">
        <h1>New Products</h1>
        <article className="products">
          <Product
            Url={product1}
            text="Amare EDGE"
            price={"78.95$"}
            alt="Amare EDGE Product"
            href={"https://www.amare.com/1942935/en-us/amareedgegrape"}
            localLink="amare-edge-plus-grape"
          />
          <Product
            Url={product2}
            text="MentaBiotics®"
            price={"73.95$"}
            alt="Amare MentaBiotics®"
            href={"https://www.amare.com/1942935/en-us/MentaBioticsSugarFree"}
            localLink="mentaBiotics"
          />
          <Product
            Url={product3}
            text="Energy+™"
            price={"47.95$"}
            alt="Amare Energy+"
            href={"https://www.amare.com/1942935/en-us/EnergyPlusSugarFree"}
            localLink="energy-plus-dragon-fruit"
          />
          <Product
            Url={product4}
            text="Amare EDGE™ Watermelon [Jar]"
            price={"78.95$"}
            alt="Amare EDGE™ Watermelon [Jar]"
            href={"https://www.amare.com/1942935/en-us/amareedge"}
            localLink="amare-edge"
          />
        </article>
      </section>

      <section className="wide-ads" aria-labelledby="ad1-heading">
        <img src={ad1} alt="MentaBiotics Ad" />
        <article className="wide-ads-side">
          <h2 id="ad1-heading">Enjoy MentaBiotics® Raspberry Hibiscus</h2>
          <p>
            Live life in full bloom with this berry-botanical twist on our
            best-selling MentaBiotics stick pack, available in refreshing
            Raspberry Hibiscus. Try it individually or bundled with your
            favorites!
          </p>
          <a href="https://www.amare.com/1942935/en-us/MentaBioticsRaspberryHibiscus">
            <button>Shop Now</button>
          </a>
        </article>
      </section>

      <section className="wide-ads" aria-labelledby="ad2-heading">
        <article className="wide-ads-side">
          <h2 id="ad2-heading">Kids Calm</h2>
          <p>
            Kids Calm is the perfect solution for parents struggling to get
            their children to sleep. With a blend of B and D vitamins, plus key
            ingredients that support the body's own production of melatonin,
            Kids Calm promotes mind and body relaxation, making it easier for
            kids to wind down and fall asleep.
          </p>
          <a href="https://www.amare.com/1942935/en-us/kids-calm">
            <button>Shop Now</button>
          </a>
        </article>
        <img src={ad2} alt="Kids Calm Ad" />
      </section>
      <section className="blogs">
        <h2>You Can Access Our Blog Pages Here</h2>
        <p>
          Visit our blog pages to explore the latest articles and news on health
          and products. Read our articles on health and products and click now
          to stay updated with the latest information.
        </p>
        <div className="blog-button" onClick={()=>navigate('/blogs')}>
          <strong>Blogs</strong>
        </div>
      </section>
      <footer>
        <img src={amare} alt="Amare logo" />
        <p id="p">
          This is an Amare Global Independent Distributor website. This site is
          not owned or operated by Amare Global. Any information, views, or
          representations on this website are my own and not endorsed by Amare
          Global. For official information and inquiries, please visit the
          Official Amare Website Amare Brand Partner #1942935
        </p>
        <address className="footer-side">
          <h4 id="h4">Customer Service</h4>
          <p>
            If you have any questions about your order, please contact customer
            service:
          </p>
          <p>Phone: +1 888-898-8551</p>
        </address>
      </footer>
    </main>
  );
}

export default DefaultPage;
