"use client";

import React from "react";
import styled from "styled-components";

import { Footer, Navbar } from "@/components";

interface Props {
  children: React.ReactNode;
}

export const AppContainer = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.main`
  width: 95%;
  margin: 0 auto;
`;
