import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "dc0859fa742a4191b035e3cbd4f0c169";

export const fetchWeather = async (data) => {
  const response = await axios.get(url, {
    params: {
      q: data,
      appid: key,
    },
  });
  return response.data;
};
