import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}
html {
  font-size: 16px;
}
body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  margin: 1rem 2rem;
  min-height: 100vh;
  background: no-repeat linear-gradient(${({ theme }) =>
    theme.backgroundGradient.color1} 0%, ${({ theme }) =>
  theme.backgroundGradient.color2} 100%);
  background-size: auto;
}
#root {
  max-width: 960px;
  width: 100%;

}
`;
