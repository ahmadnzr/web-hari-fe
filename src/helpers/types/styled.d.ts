import "styled-components";

export interface FontSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface FontWeight {
  normal: number;
  bold: number;
  semiBold: number;
  medium: number;
}

export interface Color {
  "brand-dark": string;
  "brand-light": string;
  dark: string;
  light: string;
  gray: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontWeight: FontWeight;
    fontSize: FontSize;
    mobile: {
      fontSize: FontSize;
    };
    color: Color;
    animation: {
      medium: string;
      fast: string;
      slow: string;
    };
  }
}
