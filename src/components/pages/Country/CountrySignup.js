import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import content from "./content";

const CountrySignup = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const data = Object.values(content).find(
      (item) => item.slug === slug
    );

    if (!data) {
      navigate("/"); // Redirect to home if no data is found
    } else {
      setCountryData(data);
    }
  }, [slug, navigate]);

  if (!countryData) {
    return <p>Loading...</p>;
  }
  const testSlug = "create-an-amare-brand-partner-account-from-australia";
const data = Object.values(content).find(
  (item) => item.slug === testSlug
);
console.log('Test Data:', data);

  return (
    <div>
      <h1>{countryData.title}</h1>
      <p>{countryData.description}</p>
      <div dangerouslySetInnerHTML={{ __html: countryData.readyText }} />
    </div>
  );
};

export default CountrySignup;
