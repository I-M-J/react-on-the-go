import React, { use, useState } from "react";
import Country from "../Country/Country.jsx";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);

  const countries = countriesData.countries;

  // console.log(countries);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Handle Visited Country clicked!", country);
  }

  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>

      <h3>Total Countries Visited: </h3>

      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
