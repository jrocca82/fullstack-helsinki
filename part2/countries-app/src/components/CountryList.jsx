import React, { useState } from "react";
import CountryInfo from "./CountryInfo";

const CountryList = ({ filter, setFilter, countries }) => {
  const [selectedCountry, setSelectedCountry] = useState();
  const filteredCountries = countries.filter(
    (country) =>
    country.name.official.toLowerCase().includes(filter.toLowerCase()) ||
    country.name.common.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredCountries.length === 1 || selectedCountry) {
      return <CountryInfo country={selectedCountry || filteredCountries[0]} />;
    }

  if (!filter && !selectedCountry) {
    return <p>Please enter a search to begin.</p>;
  }

  if (filteredCountries.length > 10 && !selectedCountry) {
    return <p>Too many results, please narrow your search</p>;
  }


  return (
    <>
      <button onClick={() => setSelectedCountry(undefined)}>Clear</button>
      {filteredCountries.map((country) => (
        <>
          <p key={country.name.common}>{country.name.common}</p>
          <button
            onClick={() => {
              setFilter("");
              setSelectedCountry(country);
            }}
          >
            Show Details
          </button>
        </>
      ))}
    </>
  );
};

export default CountryList;
