import Slider from "react-slick";
import "./RelatedProducts.css";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
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
  
  
  const navigate = useNavigate();
  const handleNavigate = (linkName) => {
    navigate(`/${linkName}`);
  };


  return (
    <div className="related-products-carousel">
      <h3>Related Products</h3>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="related-product-card" >
            <img src={product.imageUrl} alt={product.name} onClick={()=>handleNavigate(product.linkName)} />
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
