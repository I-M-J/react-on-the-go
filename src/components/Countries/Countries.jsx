import React, { use, useState } from "react";
import Country from "../Country/Country.jsx";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);

  const countries = countriesData.countries;

  // console.log(countries);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Handle Visited Country clicked!", country);

    let newVisitedCountries;

    // if (visitedCountries.includes(country)) {
    //   newVisitedCountries = [
    //     ...visitedCountries.filter(
    //       (visitedCountry) => country !== visitedCountry,
    //     ),
    //   ];
    // } else {
    //   newVisitedCountries = [...visitedCountries, country];
    // }

    visitedCountries.includes(country)
      ? (newVisitedCountries = [
          ...visitedCountries.filter(
            (visitedCountry) => country !== visitedCountry,
          ),
        ])
      : (newVisitedCountries = [...visitedCountries, country]);

    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    // console.log("Flag needed to be added", flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }

  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>

      <h3>Total Countries Visited: {visitedCountries.length}</h3>

      <h3>Total Flags Visited: {visitedFlags.length}</h3>

      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
