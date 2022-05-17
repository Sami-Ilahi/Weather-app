import styled from "styled-components";

export const WeatherContainer = styled.div`
  margin: 3rem 0;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
`;
export const Title = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.panelTitleColor};
`;
export const CurrentWeatherContainer = styled.div`
  max-width: 500px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 3rem;
`;

export const CurrentTemperature = styled.div`
h4 {
  font-weight: 600;
  font-size: 1.3rem;
  color: #396bae;
  margin-top: 0.2rem;
}
span {
  font-weight: 200;
  font-size: 7rem;
  color: #4a6fa1;
  line-height: 1;
  sup {
    line-height: 0;
  }
`;
export const CurrentWeatherIcon = styled.div`
  text-align: center;
  h6 {
    font-size: 1.3rem;
    color: #7b98b2;
  }
`;
export const CurrentFeelLike = styled.div``;
export const CurrentWeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FeelsLike = styled.p`
  font-size: 1.25rem;
  color: #4a6fa1;
`;
export const HighLowContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 2rem;
`;
export const WeatherDegree = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  color: #3a86ca;
  margin-top: 0.8rem;
  margin-right: 1rem;
  svg {
    fill: ${({ theme }) => theme.smallIconColor};
    margin-right: 0.5rem;
  }
`;
export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  div {
    color: ${({ theme }) => theme.smallIconTextColor};
    display: flex;
    align-items: center;
    font-size: 1rem;
    width: 6.5rem;
  }
  svg {
    fill: ${({ theme }) => theme.smallIconColor};
    width: 1.6rem;
  }
  span {
    color: #3080c8;
    font-weight: 500;
    font-size: 1rem;
  }
`;
