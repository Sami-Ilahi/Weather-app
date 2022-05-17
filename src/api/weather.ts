const baseUrl = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = async (
  city: string | { lat: number; lng: number }
) => {
  let url = `${baseUrl}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === "object") {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  }
  return await (await fetch(url)).json();
};

export const fetchExtendedForecastData = async (
  city: string | { lat: number; lng: number }
) => {
  // Get coordinates for a city using a free API
  let data = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}$&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  const coordinates = await data.json();

  // get forecast for the next 7 days
  let url = `${baseUrl}//onecall?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === "object") {
    url = `${baseUrl}//onecall?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  }

  return await (await fetch(url)).json();
};
