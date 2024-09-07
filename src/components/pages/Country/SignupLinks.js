import React from 'react';
import { Link } from 'react-router-dom';

const countries = [
  { text: "Create an Amare Brand Partner Account from Australia", link: "/create-an-amare-brand-partner-account-from/australia" },
  { text: "Maak een Amare Brand Partner Account aan vanuit Nederland", link: "/create-an-amare-brand-partner-account-from/netherlands" },
  { text: "Erstellen Sie ein Amare Brand Partner-Konto aus Österreich", link: "/create-an-amare-brand-partner-account-from/austria" },
  { text: "Maak een Amare Brand Partner-account aan vanuit België", link: "/create-an-amare-brand-partner-account-from/belgium" },
  { text: "Create an Amare Brand Partner Account from Canada", link: "/create-an-amare-brand-partner-account-from/canada" },
  { text: "Vytvořte si účet Amare Brand Partner z České Republiky", link: "/create-an-amare-brand-partner-account-from/czech-republic" },
  { text: "Créez un compte Amare Brand Partner depuis la France", link: "/create-an-amare-brand-partner-account-from/france" },
  { text: "Erstellen Sie ein Amare Brand Partner-Konto aus Deutschland" ,link: "/create-an-amare-brand-partner-account-from/germany"},
  { text: "Erstellen Sie ein Amare Brand Partner-Konto aus Liechtenstein", link: "/create-an-amare-brand-partner-account-from/liechtenstein" },
  { text: "Erstellen Sie ein Amare Brand Partner-Konto aus Luxemburg", link: "/create-an-amare-brand-partner-account-from/luxembourg" },
  { text: "Cree una cuenta de Amare Brand Partner desde México", link: "/create-an-amare-brand-partner-account-from/mexico" },
  { text: "Create an Amare Brand Partner Account from New Zealand", link: "/create-an-amare-brand-partner-account-from/new-zealand" },
  { text: "Erstellen Sie ein Amare Brand Partner-Konto aus der Schweiz", link: "/create-an-amare-brand-partner-account-from/switzerland" },
  { text: "Crea una cuenta de Socio de Marca Amare desde España", link: "/create-an-amare-brand-partner-account-from/spain" },
  { text: "Türkiye'den bir Amare Brand Partner hesabı oluşturun", link: "/create-an-amare-brand-partner-account-from/turkey" },
  { text: "Create an Amare Brand Partner Account from the United States", link: "/create-an-amare-brand-partner-account-from/united-states" },
  { text: "Create an Amare Brand Partner Account from the United Kingdom", link: "/create-an-amare-brand-partner-account-from/united-kingdom" }
];

const SignupLinks = () => {
  return (
    <div>
      <h2>Sign Up or Log In to Amare</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <Link to={country.link}>{country.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignupLinks;
