import { DefaultTheme } from "styled-components";

export const myTheme: DefaultTheme = {
  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "0.833rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.44rem",
    xl: "1.728rem",
    xxl: "4rem",
  },
  mobile: {
    fontSize: {
      xs: "0.833rem",
      sm: "1rem",
      md: "1.2rem",
      lg: "1.44rem",
      xl: "1.728rem",
      xxl: "4rem",
    },
  },
  color: {
    "brand-dark": "rgb(255, 146, 104)",
    "brand-light": "rgb(249, 92, 31)",
    dark: "#131315",
    light: "#fff",
    gray: "#c4c4c4",
  },
  animation: {
    medium: "0.5s ease",
    fast: "0.3s ease",
    slow: "1s ease",
  },
};
