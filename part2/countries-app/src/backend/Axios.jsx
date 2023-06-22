import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";
const weatherApi =
  "https://api.openweathermap.org/data/2.5/weather?";

const getAll = async () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const findOne = async (countryName) => {
  const request = axios.get(`${baseUrl}/name/${countryName}`);
  return request.then((response) => response.data);
};

const getWeather = async (lat, long) => {
  const apiKey = process.env.WEATHER_API_KEY || "";
  const request = axios.get(
    `${weatherApi}lat=${lat}&lon=${long}&appid=${apiKey}`
  );
  return request.then((response) => response.data);
};

export { getAll, findOne, getWeather };
