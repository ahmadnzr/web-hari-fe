import "styled-components";

export interface FontSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export interface FontWeight {
  normal: number;
  bold: number;
  semiBold: number;
  medium: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontWeight: FontWeight;
    fontSize: FontSize;
    mobile: {
      fontSize: FontSize;
    };
    color: {
      brand: string;
      dark: string;
      light: string;
      gray: string;
    };
    animation: {
      medium: string;
      fast: string;
      slow: string;
    };
  }
}
