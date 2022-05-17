import React from "react";
import { ContentContainer, Title } from "./styled";

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <Title>
        Weather Forecasts
        <br /> For Thousands Of Locations <br />
        Around The World.
      </Title>
    </ContentContainer>
  );
};

export default Content;
