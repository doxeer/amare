import React from 'react';
import { Link } from 'react-router-dom';
import content from './content'; // Ensure this path is correct

const SignupLinks = () => {
  return (
    <div>
      {Object.values(content).map((country) => (
        <div key={country.slug}>
          <Link to={`/${country.slug}`}>{country.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default SignupLinks;
