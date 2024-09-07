import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import content from "./content";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const generateHreflangLinks = () => {
  return Object.keys(content).map((key) => ({
    lang:
      key === "united_states"
        ? "en"
        : key === "netherlands"
        ? "nl"
        : key === "austria"
        ? "de"
        : key === "czech_republic"
        ? "cs"
        : key === "france"
        ? "fr"
        : key === "germany"
        ? "de"
        : key === "liechtenstein"
        ? "de"
        : key === "luxembourg"
        ? "de"
        : key === "mexico"
        ? "es"
        : key === "new_zealand"
        ? "en"
        : key === "switzerland"
        ? "de"
        : key === "spain"
        ? "es"
        : key === "turkey"
        ? "tr"
        : key === "united_kingdom"
        ? "en"
        : "en",
    url: `https://amarewellnessproducts.com/${content[key].slug}`,
  }));
};

const CountrySignup = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState(null);
  const hreflangLinks = generateHreflangLinks();

  useEffect(() => {
    const data = Object.values(content).find((item) => item.slug === slug);

    if (!data) {
      navigate("/");
    } else {
      setCountryData(data);
    }
  }, [slug, navigate]);

  if (!countryData) {
    return <p>Loading...</p>;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{countryData.title}</title>
        <meta name="description" content={countryData.description} />
        <link
          rel="canonical"
          href={`https://amarewellnessproducts.com/${countryData.slug}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://amarewellnessproducts.com/${countryData.slug}`}
        />
        {hreflangLinks.map((link) => (
          <link
            key={link.lang}
            rel="alternate"
            hrefLang={link.lang}
            href={link.url}
          />
        ))}
      </Helmet>
    <div>
      <h1>{countryData.title}</h1>
      <p>{countryData.description}</p>
      <div dangerouslySetInnerHTML={{ __html: countryData.readyText }} />

      {/* Hreflang links */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://amarewellnessproducts.com/${countryData.slug}`}
      />
      {hreflangLinks.map((link) => (
        <link
          key={link.lang}
          rel="alternate"
          hrefLang={link.lang}
          href={link.url}
        />
      ))}
    </div>
    </HelmetProvider>
  );
};

export default CountrySignup;
