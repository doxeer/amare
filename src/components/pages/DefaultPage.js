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

  return (
    <div className="defaultPage" id="start">
      <div className="carousel">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
              <a href="https://www.amare.com/1942935/en-us/shop-all">
                <button className="carousel-button">Shop Now</button>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <div className="product-section">
        <h1>NEW PRODUCTS</h1>
        <div className="products">
          <Product
            Url={product1}
            text="Amare EDGE"
            price={"78.95$"}
            alt="Amare EDGE Product"
            href={"https://www.amare.com/1942935/en-us/amareedgegrape"}
          />
          <Product
            Url={product2}
            text="MentaBiotics®"
            price={"73.95$"}
            alt="Amare MentaBiotics® "
            href={"https://www.amare.com/1942935/en-us/MentaBioticsSugarFree"}
          />
          <Product
            Url={product3}
            text="Energy+™"
            price={"47.95$"}
            alt="Amare Energy+ "
            href={"https://www.amare.com/1942935/en-us/EnergyPlusSugarFree"}
          />
          <Product
            Url={product4}
            text="Amare EDGE™ Watermelon [Jar]"
            price={"78.95$"}
            alt="Amare EDGE™ Watermelon [Jar]"
            href={"https://www.amare.com/1942935/en-us/amareedge"}
          />
        </div>
      </div>

      <div className="wide-ads">
        <img src={ad1} alt="Ad 1" />
        <div className="wide-ads-side">
          <h1>Enjoy MentaBiotics® Raspberry Hibiscus</h1>
          <p>
            Live life in full bloom with this berry-botanical twist on our
            best-selling MentaBiotics stick pack, available in refreshing
            Raspberry Hibiscus. Try it individually or bundled with your
            favorites!
          </p>
          <a href="https://www.amare.com/1942935/en-us/MentaBioticsRaspberryHibiscus">
            <button>Shop Now</button>
          </a>
        </div>
      </div>

      <div className="wide-ads">
        <div className="wide-ads-side">
          <h1>Kids Calm</h1>
          <p>
            Kids Calm is the perfect solution for parents struggling to get
            their children to sleep. With a blend of B and D vitamins, plus key
            ingredients that support the body's own production of melatonin,
            Kids Calm promotes mind and body relaxation, making it easier for
            kids to wind down and fall asleep. Say goodbye to bedtime battles
            and hello to a peaceful night's sleep with the help of Kids Calm.
          </p>
          <a href="https://www.amare.com/1942935/en-us/kids-calm">
            <button>Shop Now</button>{" "}
          </a>
        </div>
        <img src={ad2} alt="Ad 2" />
      </div>

      <footer>
        <img src={amare} alt="Amare" />
        <p id="p">
          This is an Amare Global Independent Distributor website. This site is
          not owned or operated by Amare Global. Any information, views, or
          representations on this website are my own and not endorsed by Amare
          Global. For official information and inquiries, please visit the
          Official Amare Website Amare Brand Partner #1942935
        </p>
        <div className="footer-side">
          <h4 id="h4">Customer Service</h4>
          <p>
            If you have any questions about your order, please contact customer
            service:
          </p>
          <p>Phone: +1 888-898-8551</p>
        </div>
      </footer>
    </div>
  );
}

export default DefaultPage;
