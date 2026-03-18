import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  // console.log(country.name.common);
  // console.log(country.flags.flags.png);
  // console.log(country.population.population);
  // console.log(country.area.area);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    console.log("Button Clicked");

    // if (visited) {
    //   setVisited(false);
    // }
    // else {
    //   setVisited(true);
    // }

    // visited ? setVisited(false) : setVisited(true);

    setVisited(!visited);

    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />

      <h3>Name: {country.name.common}</h3>

      <p>Population: {country.population.population}</p>

      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
