export interface Theme {
  appTitleColor: string;

  backgroundGradient: {
    color1: string;
    color2: string;
  };
  panelBgColor: string;
  panelTitleColor: string;
  forecastPanelBgColor: string;
  searchInput: {
    color: string;
    placeholderColor: string;
  };
  temperatureSwitch: {
    backgroundColor: string;
    sliderColor: string;
    textColor: string;
  };
  searchSuggestion: {
    backgroundColor: string;
    hoverBackgroundColor: string;
    seperatorLineColor: string;
  };
  smallIconColor: string;
  smallIconTextColor: string;
}

export const lightTheme: Theme = {
  appTitleColor: "#2F5D8A",
  backgroundGradient: {
    color1: "#Fff",
    color2: "#fff",
  },
  panelBgColor: "#69c7ff",
  panelTitleColor: "#727E8E",
  forecastPanelBgColor: "rgba(105, 199, 255, 0.7)",
  searchInput: {
    color: "#727E8E",
    placeholderColor: "#6898d5",
  },
  temperatureSwitch: {
    backgroundColor: "#69c7ff",
    sliderColor: "#fff",
    textColor: "#fff",
  },
  searchSuggestion: {
    backgroundColor: "#fff",
    hoverBackgroundColor: "#f9f9f9",
    seperatorLineColor: "#ccc",
  },
  smallIconColor: "#A1B9CE",
  smallIconTextColor: "#7B98B2",
};

export const darkTheme: Theme = {
  appTitleColor: "#2F5D8A",
  backgroundGradient: {
    color1: "#031027",
    color2: "#02101D",
  },
  panelBgColor: "#051A33",
  panelTitleColor: "#216397",
  forecastPanelBgColor: "rgba(5, 26, 51, 0.75)",
  searchInput: {
    color: "#5f8bbf",
    placeholderColor: "#235A84",
  },
  temperatureSwitch: {
    backgroundColor: "#1b3657",
    sliderColor: "#437abd",
    textColor: "#718cac",
  },
  searchSuggestion: {
    backgroundColor: "#0f2744",
    hoverBackgroundColor: "#183553",
    seperatorLineColor: "#356097",
  },
  smallIconColor: "#153C5E",
  smallIconTextColor: "#3975AB",
};
