import "./country.css";

const CountryInfo = ({ country }) => (
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
    </div>
    <div>
      <img src={country.flags.png} alt={`Flag of ${country.name.official}`} />
    </div>
  </div>
);

export default CountryInfo;
