import "styled-components";

export interface FontSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
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
      gradient1: string;
    };
  }
}
