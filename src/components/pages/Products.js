import './Products.css';
import React from "react";


const products = [
  {
    id: 1,
    name: "Amare Happy Juice™ Pack",
    description: "Award-Winning Daily Gut-Brain Axis Drink to Support Stress Resilience",
    price: "$129.95",
    
    imageUrl:`${process.env.PUBLIC_URL}/images/amarehappyjuicepack.jpg`,
    alt:"amarehappyjuicepack",
    buyLink: "https://www.amare.com/1942935/en-us/happy-juice-boosters-pack"
  },
  {
    id: 2,
    name: "Amare EDGE+™",
    description: "Advanced Plant-Based Nootropic Drink For Motivation with Lion's Mane and Natural Caffeine",
    price: "$155.95",
    
    imageUrl: `${process.env.PUBLIC_URL}/images/AmareEDGE.png` ,
    alt:"Amare EDGE Product",
    buyLink: "https://www.amare.com/1942935/en-us/amareedge-plus-mango-2pack"
  },
  {
    id: 3,
    name: "Amare EDGE+™",
    description: "Plant-Based Sugar Free Nootropic Drink for Motivation",
    price: "$155.95",
   
    imageUrl:`${process.env.PUBLIC_URL}/images/amareedgegrape.png`,
    alt:"Amare EDGE+",
    buyLink: "https://www.amare.com/1942935/en-us/amareedge-plus-grape-2pack"
  },
  {
    id: 4,
    name: "Amare EDGE™ Watermelon [Jar]",
    description: "Plant-Based Sugar Free Nootropic Drink for Motivation ",
    price: "$155.95",
    
    imageUrl: `${process.env.PUBLIC_URL}/images/edgewatermelon.png`,
    buyLink: "https://www.amare.com/1942935/en-us/amareedge-plus-watermelon-2pack"
  },
  
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.name} className="product-image" />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p className="price">
      <span className="new-price">{product.price}</span>
    </p>
    <a href={product.buyLink} className="buy-button">BUY NOW</a>
  </div>
);

const ProductList = () => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
