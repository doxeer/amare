import kyanisunset from "../images/Kyanisunset.png";
import Kyaniberrylemonade from "../images/Kyaniberrylemonade.png";
import kyanipeach from "../images/Kyanipeach.png";
import kyaninitroxtreme from "../images/kyaninitroxtreme.png";
import kyanisunrise from "../images/kyanisunrise.png";
import kyanitrianglepack from "../images/kyanitrianglepack.png"
import fit from "../images/fit20.png"
import { Link } from "react-router-dom";

const KyaniProducts = [
  {
    id: 1,
    name: "Kyäni Sunset",
    description:
      "Kyäni Sunset is your go-to for supporting your most important organs---your brain and your heart---while also helping maintain healthy cholesterol levels, cognitive function, immune support, and healthy blood sugar levels. Featuring a proprietary blend of lipid-soluble nutrients including wild-sourced omega-3 fatty acids, tocotrienols, astaxanthin, and more, Kyäni Sunset is the nightly routine that helps you wake up ready to slay your day!",
    price: "$49.95",
    imageUrl: kyanisunset,
    alt: "kyanisunset",
    buyLink: "https://www.amare.com/1942935/en-us/kyani-sunset",
    linkName: "kyani-sunset",
  },
  {
    id: 2,
    name: "Kyäni HL5 Berry Lemonade",
    description:
      "Our game-changing collagen support formula, Kyäni HL5, contains clean-sourced, hydrolyzed collagen protein and other premium ingredients to support collagen resiliency to help us to look younger, feel younger, and move younger in a convenient on-the-go pouch",
    price: "$77.95",
    imageUrl: Kyaniberrylemonade,
    alt: "kyanihl5berrylemonade",
    buyLink: "https://www.amare.com/1942935/en-us/kyani-hl5-berry",
    linkName: "kyani-hl5-berry-lemonade",
  },
  {
    id: 3,
    name: "Kyäni HL5 Peach",
    description:
      "Our game-changing collagen support formula, Kyäni HL5, contains clean-sourced, hydrolyzed collagen protein and other premium ingredients to support collagen resiliency to help us to look younger, feel younger, and move younger in a convenient on-the-go pouch.*",
    price: "$77.95",
    alt: "kyanihl5berrypeach",
    imageUrl: kyanipeach,
    buyLink: "https://www.amare.com/1942935/en-us/kyani-hl5-peach",
    linkName: "kyani-hl5-peach",
  },
  {
    id: 4,
    name: "Kyäni Nitro Xtreme",
    description:
      "Supports Nitric Oxide production in your body.",
    price: "$64.95",
    alt: "kyaninitroxtreme",
    imageUrl: kyaninitroxtreme,
    buyLink: "https://www.amare.com/1942935/en-us/kyani-nitro-xtreme-56ml",
    linkName: "kyani-nitro-xtreme",
  },
  {
    id: 5,
    name: "Kyäni Sunrise",
    description:
      "Begin your day with a mouthwatering blend of wild blueberry, pomegranate, acai berry, and a total of 22 antioxidant superfoods, 10 essential vitamins, and 60+ minerals with Kyäni Sunrise. Formulated with bioavailable ingredients for optimal nutrient absorption, Sunrise provides antioxidant support to help your body fight oxidative stress and maintain cellular health. Perfectly portioned in a delicious on-the-go pouch",
    price: "$55.95",
    alt: "kyanisunrise",
    imageUrl: kyanisunrise,
    buyLink: "https://www.amare.com/1942935/en-us/kyani-sunrise",
    linkName: "kyani-sunrise",
  },
  {
    id: 6,
    name: "Triangle of Health™ Pack",
    description:
      "The Triangle of Health™ Pack features Kyäni Sunrise, Kyäni Sunset, and Kyäni Nitro Xtreme or Kyäni Nitro FX. Together, the products work synergistically to provide you with unmatched nutrition for optimal health.",
    price: "$137.95",
    alt: "triangleofhealthpack",
    imageUrl: kyanitrianglepack,
    buyLink: "https://www.amare.com/1942935/en-us/triangle-health-pack",
    linkName: "kyani-triangle-of-health-pack",
  },
  {
    id: 7,
    name: "FIT20®",
    description:
      "If you want superior quality protein for building lean muscle, optimizing metabolism, supporting bone and joint health, and supporting long-term Nitric Oxide production, then FIT20 is for you! FIT20 contains MCT for fast fuel and 20 grams of best-in-class whey protein and hydrolyzed collagen for long-lasting energy.*",
    price: "$55.95",
    alt:"fit20",
    imageUrl: fit,
    buyLink: "https://www.amare.com/1942935/en-us/kyani-fit20",
    linkName: "kyani-fit-20",
  },
];

KyaniProducts.map((product) => (
  <div key={product.id}>
    <Link
      to={`/${product.linkName}`}
      state={product}
    >
      {product.name}
    </Link>
  </div>
));

export default KyaniProducts;
