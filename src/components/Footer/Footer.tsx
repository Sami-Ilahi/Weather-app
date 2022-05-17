import React from "react";
import { FooterContainer } from "./styled";

const Footer: React.FC = () => {
  let year = new Date().getFullYear();
  return (
    <FooterContainer>
      <p>&copy; WETHERIFY {year}</p>
    </FooterContainer>
  );
};

export default Footer;
