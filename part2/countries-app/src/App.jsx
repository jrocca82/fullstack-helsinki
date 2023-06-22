import { useState } from "react";
import { getAll } from "./backend/Axios";
import { useEffect } from "react";
import FilterInput from "./components/FilterInput";
import CountryList from "./components/CountryList";
import "./App.css";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countryResults, setCountryResults] = useState([]);

  useEffect(() => {
    getAll()
      .then((response) => {
        setCountryResults(response);
      })
      .catch((e) => console.log("fail", e));
  }, []);

  return (
    <div>
      <h1>Countries App</h1>
      <h3>Enter a Country Name:</h3>
      <FilterInput filter={filter} setFilter={setFilter} />
      <CountryList
        filter={filter}
        countries={countryResults}
        setFilter={setFilter}
      />
    </div>
  );
};

export default App;
