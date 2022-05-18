import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./app.styled";
import Home from "./pages/Home";
import { AppStore } from "./store/store";
import { darkTheme, lightTheme } from "./theme";

const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <title>WEATHERIFY</title>
        <link rel='canonical' href='https://weathrify.netlify.app/' />
        <meta
          name='description'
          content='Weather forecasts for thousands of locations around the world'
        />
      </Helmet>
      <Home />
    </ThemeProvider>
  );
};

export default App;
