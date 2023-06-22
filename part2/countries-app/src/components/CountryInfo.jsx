import { getWeather } from "../backend/Axios";
import { useState, useEffect } from "react";
import "./country.css";

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState();
  useEffect(() => {
    getWeather(country.latlng[0], country.latlng[1])
      .then((response) => setWeather(response))
      .catch((e) => console.log("fail", e));
  }, [country.latlng]);

  return (
    <div className="country-wrapper">
      <div>
        <h3>Name: {country.name.common}</h3>
        <h4>Capital: {country.capital[0]}</h4>
        <h4>Languages:</h4>
        <ul>
          {Object.values(country.languages).map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
        <h4>Current weather: {weather.weather[0].main}</h4>
      </div>
      <div>
        <img src={country.flags.png} alt={`Flag of ${country.name.official}`} />
      </div>
    </div>
  );
};

export default CountryInfo;
