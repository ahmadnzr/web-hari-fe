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
  },
  mobile: {
    fontSize: {
      xs: "0.833rem",
      sm: "1rem",
      md: "1.2rem",
      lg: "1.44rem",
      xl: "1.728rem",
    },
  },
  color: {
    brand: "#fc7540",
    dark: "#131315",
    light: "#fff",
    gray: "#B3B3B9",
  },
  animation: {
    medium: "0.3s ease",
    fast: "0.1s ease",
    slow: "1s ease",
  },
};
