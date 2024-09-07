import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import content from './content';

const SignupLinks = () => {
  return (
    <div>
      <Helmet>
        <title>Amare Signup Links</title>
        <meta name="description" content="Signup as an Amare Brand Partner in various countries. Register today and start your journey!" />
        <meta name="keywords" content="Amare, Brand Partner, Signup, Register, Countries" />
      </Helmet>

      <h1>Signup Links</h1>
      <ul>
        {Object.values(content).map((country) => (
          <li key={country.slug}>
            <Link to={`/information/${country.slug}`}>{country.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignupLinks;