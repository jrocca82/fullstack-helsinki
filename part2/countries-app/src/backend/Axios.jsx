import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";
const weatherApi =
"https://api.openweathermap.org/data/2.5/weather?";

// Placeholder for when .env can't be read
const apiKey = process.env.WEATHER_API_KEY || "ab66d76085c6114ec50def06ba93f6a6";

const getAll = async () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const findOne = async (countryName) => {
  const request = axios.get(`${baseUrl}/name/${countryName}`);
  return request.then((response) => response.data);
};

const getWeather = async (lat, long) => {
  const request = axios.get(
    `${weatherApi}lat=${lat}&lon=${long}&appid=${apiKey}`
  );
  return request.then((response) => response.data);
};

export { getAll, findOne, getWeather };
