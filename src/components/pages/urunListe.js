import amarehappyjuicepack from "../images/amarehappyjuicepack.JPG";
import FundaMentalsPack from "../images/FundaMentalsPack.png";
import VarietyPack from "../images/VarietyPack.png";
import AmareEDGE from "../images/product4.jpeg";
import MentaBiotics from "../images/MentaBiotics.png";
import MentaFocus from "../images/MentaFocus.png";
import EnergyPlus from "../images/Energy.png";
import EnergyPlusdragon from "../images/Energydragon.png";
import MentaSync from "../images/MentaSync.png";
import MentaHeart from "../images/MentaHeart.png";
import moodplus from "../images/moodplus.png";
import Gbxsuperfood from "../images/Gbxsuperfood.png";
import KidsMoodplus from "../images/KidsMoodplus.png";
import Gbxfit from "../images/Gbxfit.png";
import sleepplus from "../images/sleepplus.png";
import ommega from "../images/ommega.png";
import Gbxprotein from "../images/Gbxprotein.png";

const urunListe = [
    {
      id: 1,
      name: "Amare Happy Juice™ Pack",
      description:
        "Award-Winning Daily Gut-Brain Axis Drink to Support Stress Resilience",
      price: "$129.95",
      imageUrl: amarehappyjuicepack,
      alt: "amarehappyjuicepack",
      buyLink: "https://www.amare.com/1942935/en-us/happy-juice-boosters-pack",
      linkName: "amare-happy-juice™-pack"
    },
    {
      id: 2,
      name: "Amare EDGE+™",
      description:
        "Advanced Plant-Based Nootropic Drink For Motivation with Lion's Mane and Natural Caffeine",
      price: "$155.95",
      imageUrl: `${process.env.PUBLIC_URL}/images/AmareEDGE.png`,
      alt: "Amare EDGE Product",
      buyLink: "https://www.amare.com/1942935/en-us/amareedge-plus-mango-2pack",
    },
    {
      id: 3,
      name: "Amare EDGE+™",
      description: "Plant-Based Sugar Free Nootropic Drink for Motivation",
      price: "$155.95",
      imageUrl: `${process.env.PUBLIC_URL}/images/amareedgegrape.png`,
      alt: "Amare EDGE+",
      buyLink: "https://www.amare.com/1942935/en-us/amareedge-plus-grape-2pack",
    },
    {
      id: 4,
      name: "Amare EDGE™ Watermelon [Jar]",
      description: "Plant-Based Sugar Free Nootropic Drink for Motivation",
      price: "$155.95",
      imageUrl: `${process.env.PUBLIC_URL}/images/edgewatermelon.png`,
      alt: "Amare EDGE™ Watermelon [Jar]",
      buyLink:
        "https://www.amare.com/1942935/en-us/amareedge-plus-watermelon-2pack",
    },
    {
      id: 5,
      name: "Amare FundaMentals Pack",
      description:
        "Comprehensive Gut-Brain Axis Nutrition Trio Pack Raspberry Hibiscus",
      price: "$146.95",
      imageUrl: FundaMentalsPack,
      alt: "Amare FundaMentals Pack",
      buyLink: "https://www.amare.com/1942935/en-us/fundamentals-pack-rh",
    },
    {
      id: 6,
      name: "Amare EDGE® Variety Pack",
      description:
        "Plant-Based Nootropic Drink For Motivation and Healthy Memory Variety Pack",
      price: "$202.95",
      imageUrl: VarietyPack,
      alt: "Amare EDGE® Variety Pack",
      buyLink: "https://www.amare.com/1942935/en-us/amareedge-variety-pack",
    },
    {
      id: 7,
      name: "Amare EDGE",
      description: "Plant-Based Sugar Free Nootropic Drink for Motivation",
      price: "$78.95",
      imageUrl: AmareEDGE,
      alt: "Amare EDGE®",
      buyLink: "https://www.amare.com/1942935/en-us/amareedgewatermelon",
    },
    {
      id: 8,
      name: "MentaBiotics®",
      description:
        "Advanced Gut-Brain Axis Nutrition Stick Packs with Probiotics and Prebiotics for Mind and Body",
      price: "$73.95",
      imageUrl: MentaBiotics,
      alt: "MentaBiotics",
      buyLink: "https://www.amare.com/1942935/en-us/MentaBioticsSugarFreeSP",
    },
    {
      id: 9,
      name: "MentaFocus",
      description:
        "Phytonutrients for the Brain to Optimize Cognition, Mental Sharpness, Focus, and Clarity",
      price: "$45.95",
      imageUrl: MentaFocus,
      alt: "MentaFocus",
      buyLink: "https://www.amare.com/1942935/en-us/MentaFocus",
    },
    {
      id: 10,
      name: "Energy+™",
      description: "Plant-Based Daily Drink for Mental and Physical Energy",
      price: "$47.95",
      imageUrl: EnergyPlus,
      alt: "EnergyPlus",
      buyLink: "https://www.amare.com/1942935/en-us/EnergyPlus",
    },
    {
      id: 11,
      name: "Energy+DragonFruit",
      description: "Plant-Based Daily Drink for Mental and Physical Energy",
      price: "$47.95",
      imageUrl: EnergyPlusdragon,
      alt: "EnergyPlusdragonSugarFree",
      buyLink: "https://www.amare.com/1942935/en-us/EnergyPlusSugarFree",
    },
    {
      id: 12,
      name: "MentaSync®",
      description:
        "Prime your immune system to optimize the communication sync of chemical messengers between your brain and your gut with the clinically studied key ingredients in MentaSync.*",
      price: "$55.95",
      imageUrl: MentaSync,
      alt: "MentaSync",
      buyLink: "https://www.amare.com/1942935/en-us/MentaSync",
    },
    {
      id: 13,
      name: "MentaHeart™",
      description:
        "The first product of its kind to support mental wellness through the heart-brain axis, MentaHeart features key ingredients backed by multiple clinical studies shown to help optimize the heart, the body’s third brain.*",
      price: "$78.95",
      imageUrl: MentaHeart,
      alt: "MentaHeart",
      buyLink: "https://www.amare.com/1942935/en-us/MentaHeart",
    },
    {
      id: 14,
      name: "Mood+",
      description:
        "The key ingredients in Mood+ have multiple scientific studies that show significant benefits for mood support such as relief from anxious feelings, sadness, restlessness, and overall stress relief.*",
      price: " $60.95",
      imageUrl: moodplus,
      alt: "moodplus",
      buyLink: "https://www.amare.com/1942935/en-us/MoodPlus",
    },
    {
      id: 15,
      name: "GBX SuperFood",
      description:
        "GBX SuperFood™ provides the phytonutrient equivalent of three servings of fruits and vegetables per scoop. This phytobiotic-rich blend delivers cellular level anti-stress benefits and helps protect cells from a variety of different stressors, helping the brain and gut run at peak efficiency.*",
      price: "$30.95",
      imageUrl: Gbxsuperfood,
      alt: "Gbxsuperfood",
      buyLink: "https://www.amare.com/1942935/en-us/GBXSuperFood",
    },
    {
      id: 16,
      name: "Kids Mood+™",
      description:
        "Multiple scientific studies have shown the key ingredients in Kids Mood+ provide significant benefits for mood support, including stress resilience, cognitive performance, calmness, focus, and positivity. All in a delicious, easy to digest powder — perfect for kids and teens.*",
      price: "$45.95",
      imageUrl: KidsMoodplus,
      alt: "KidsMoodplus",
      buyLink: "https://www.amare.com/1942935/en-us/KidsMoodPlus",
    },
    {
      id: 17,
      name: "Amare GBX FIT™",
      description:
        "The world's first QUADbiotic formula in a convenient & cool purple pill that targets the gut microbiome for healthy weight loss.",
      price: "$69.95 ",
      imageUrl: Gbxfit,
      alt: "Amare GBX FIT™",
      buyLink: "https://www.amare.com/1942935/en-us/gbxfit",
    },
    {
      id: 18,
      name: "Sleep+",
      description:
        "The key ingredients in Sleep+ have multiple scientific studies that show significant benefits including helping you to fall asleep faster, stay asleep longer, and experience higher quality plus more rejuvenating sleep.*",
      price: "$60.95",
      imageUrl: sleepplus,
      alt: "sleepplus",
      buyLink: "https://www.amare.com/1942935/en-us/SleepPlus",
    },
    {
      id: 19,
      name: "OmMega®",
      description:
        "OmMega is a sustainably sourced, lavender-infused fish oil that features a 5:1 ratio of EPA to DHA scientifically shown to support mental wellness.*",
      price: "$31.95",
      imageUrl: ommega,
      alt: "ommega",
      buyLink: "https://www.amare.com/1942935/en-us/OmMEGA",
    },
    {
      id: 20,
      name: "GBX Protein®",
      description:
        "GBX Protein® delivers 17 grams of pure plant protein. This unique chickpea, brown rice, and pea protein blend nourishes good bacteria in the gut and improves microbiome balance, while controlling appetite and supporting muscle mass. Fully-loaded with only functional ingredients, this potent formula supports the gut microbiome, helping fuel a healthy lifestyle.* ",
      price: "$40.95",
      imageUrl: Gbxprotein,
      alt: "GBX Protein",
      buyLink: "https://www.amare.com/1942935/en-us/GBXProteinPumpkinSpice",
    },
  ];
  
  export default urunListe;