"use client";

import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, myTheme } from "../theme";

interface Props {
  children: React.ReactNode;
}

export const MyThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
