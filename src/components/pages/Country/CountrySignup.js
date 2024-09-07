import React from "react";
import { useParams } from "react-router-dom";
import content from "../Country/content";
import { Helmet } from "react-helmet-async";

const CountrySignup = () => {
  const { registrationText, country } = useParams();
  const countryContent = content[country.toLowerCase()];

  if (!countryContent || registrationText !== countryContent.registrationText) {
    return <div>Content not available for this country or URL is incorrect.</div>;
  }

  const hreflangLinks = Object.keys(content).map((key) => ({
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
    url: `https://amarewellnessproducts.com/create-an-amare-brand-partner-account-from/${key}`,
  }));
  const readyTextWithLink = countryContent.readyText.replace(
    "link",
    `<a href="${countryContent.registerLink}">link</a>`
  );

  return (
    <div>
      <Helmet>
        <title>{countryContent.title}</title>
        <meta name="description" content={countryContent.description} />
        <link
          rel="canonical"
          href={`https://amarewellnessproducts.com/create-an-amare-brand-partner-account-from/${country}`}
        />
        {hreflangLinks.map((link, index) => (
          <link
            key={index}
            rel="alternate"
            hreflang={link.lang}
            href={link.url}
          />
        ))}
      </Helmet>
      <h2>{countryContent.title}</h2>
      <p>{countryContent.description}</p>
      <p dangerouslySetInnerHTML={{ __html: readyTextWithLink }} />
    </div>
  );
};

export default CountrySignup;
