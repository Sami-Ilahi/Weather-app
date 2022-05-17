import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as HighIcon } from "../../assets/high-icon.svg";
import { ReactComponent as HumidityIcon } from "../../assets/humidity-icon.svg";
import { ReactComponent as LowIcon } from "../../assets/low-icon.svg";
import { ReactComponent as PressureIcon } from "../../assets/pressure-icon.svg";
import { ReactComponent as WindIcon } from "../../assets/wind-icon.svg";
import { AppStore } from "../../store/store";
import { changeTempUnit } from "../../store/reducers/appReducer";
import { kmToMile, TempUnit } from "../../utils/unitConversion";
import ToggleSwitch from "../ui/ToggleSwitch/ToggleSwitch";
import WeatherIcon from "./WeatherIcon";
import {
  CurrentWeatherContainer,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  Title,
  WeatherContainer,
  WeatherDegree,
  Header,
  CurrentTemperature,
  CurrentWeatherIcon,
  CurrentFeelLike,
  CurrentWeatherDetails,
} from "./styled";
import Temperature from "./Temperature";

const CurrentWeather: React.FC = () => {
  const { weather, degreeType, isInitial, isError } = useSelector(
    (store: AppStore) => ({
      weather: store.weather.weatherData,
      degreeType: store.app.tempUnit,
      isInitial: store.app.isInitial,
      isError: store.weather.isError,
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log("Cannot load weather for this place");
    }
  }, [isError]);

  if (isInitial) return <></>;

  return (
    <WeatherContainer>
      <Header>
        <Title>Current Conditions</Title>
        <div>
          <ToggleSwitch onClick={() => dispatch(changeTempUnit())} />
        </div>
      </Header>
      <CurrentWeatherContainer>
        <CurrentTemperature>
          <span>
            <Temperature value={weather.main.temp} />
            <sup>&deg;</sup>
          </span>
          <h4>{weather.name}</h4>
        </CurrentTemperature>
        <CurrentWeatherIcon>
          <WeatherIcon code={weather.weather.id} big />
          <h6>{weather.weather.description}</h6>
        </CurrentWeatherIcon>
        <CurrentFeelLike>
          <FeelsLike>
            Feels like <Temperature value={weather.main.feels_like} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={weather.main.temp_max} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={weather.main.temp_min} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
        </CurrentFeelLike>
        <CurrentWeatherDetails>
          <InfoRow>
            <div>
              <HumidityIcon /> Humidity
            </div>
            <span>{weather.main.humidity}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> Wind
            </div>
            <span>
              {degreeType === TempUnit.CELCIUS
                ? weather.wind.speed
                : kmToMile(weather.wind.speed)}
              {degreeType === TempUnit.CELCIUS ? "kph" : "mph"}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> Pressure
            </div>
            <span>{weather.main.pressure}hPa</span>
          </InfoRow>
        </CurrentWeatherDetails>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default CurrentWeather;
