import Slider from "react-slick";
import "./RelatedProducts.css"; // Include this

const RelatedProducts = ({ products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="related-products-carousel">
      <h3>Related Products</h3>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="related-product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <a href={product.buyLink}>
              <button>Buy Now</button>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
