"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

import { Button, ContentDarkContainer, Text } from "@/components";

interface Props {
  children: React.ReactNode;
}

export const AppContainer = ({ children }: Props) => {
  return (
    <>
      <Navbar>
        <NavItem $active>
          <Link href="/">
            <Text className="nav-menu" $size="xs" $weight="semiBold">
              Home
            </Text>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/about">
            <Text className="nav-menu" $size="xs" $weight="semiBold">
              About
            </Text>
          </Link>
        </NavItem>
        <NavItem $width="150px">
          <Image
            src="/images/logo/hary.svg"
            alt="logo"
            height={40}
            width={40}
          />
        </NavItem>
        <NavItem>
          <Link href="/works">
            <Text className="nav-menu" $size="xs" $weight="semiBold">
              Works
            </Text>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">
            <Text className="nav-menu" $size="xs" $weight="semiBold">
              Contact
            </Text>
          </Link>
        </NavItem>
      </Navbar>
      <MainContainer>{children}</MainContainer>

      <Footer>
        <FooterTitle>
          <Text className="footer_title" $size="xxl" $weight="semiBold">
            Have a Cool Project ?
          </Text>
          <Button text="Contact Me" />
        </FooterTitle>
        <FooterDetail>
          <Avatar>
            <Image
              className="footer_photo"
              src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
              alt="photo"
              height={90}
              width={90}
            />
            <Text $size="md">Visual Designer Based in Indonesia</Text>
          </Avatar>
          <FooterMenu>
            <FooterMenuItem>
              <Text $size="md">Navigation</Text>
              <Text $color="gray">Home</Text>
              <Text $color="gray">About</Text>
              <Text $color="gray">Expertise</Text>
              <Text $color="gray">Work</Text>
            </FooterMenuItem>
            <FooterMenuItem>
              <Text $size="md">Services</Text>
              <Text $color="gray">Branding</Text>
              <Text $color="gray">UI/UX Design</Text>
              <Text $color="gray">Development</Text>
              <Text $color="gray">Digital Marketing</Text>
            </FooterMenuItem>
            <FooterMenuItem>
              <Text $size="md">Socials</Text>
              <Text $color="gray">Dribble</Text>
              <Text $color="gray">Twitter (X)</Text>
              <Text $color="gray">Instagram</Text>
              <Text $color="gray">Linkedin</Text>
            </FooterMenuItem>
          </FooterMenu>
        </FooterDetail>
        <FooterCopy>
          <Text $size="xs" className="footer_copy" $color="gray">
            2024 | Ahmad Nizar
          </Text>
        </FooterCopy>
      </Footer>
    </>
  );
};

const Navbar = styled.nav`
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const NavItem = styled.div<{ $width?: string; $active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  ${(props) => css`
    width: ${props.$width};

    & .nav-menu {
      transition: ${props.theme.animation.medium};
      text-decoration: ${props.$active ? "underline" : "none"};
    }
  `}

  & .nav-menu:hover {
    cursor: pointer;
    opacity: 0.5;
    text-decoration: underline;
  }
`;

const MainContainer = styled.main`
  width: 95%;
  margin: 0 auto;
`;

const Footer = styled(ContentDarkContainer)`
  width: 100%;
  min-height: 900px;
  margin-top: 2rem;
  padding: 0 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 40px 40px 0 0;

  & .footer_title {
    line-height: 100%;
  }

  & .footer_copy {
    opacity: 0.6;
    letter-spacing: 0.1rem;
  }

  & .footer_photo {
    width: 150px;
    height: 150px;
    border-radius: 90px;
  }
`;

const FooterTitle = styled.div`
  width: 400px;
  margin: 0 auto;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  text-align: center;
`;

const FooterDetail = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgb(51, 51, 51);
  border-bottom: 1px solid rgb(51, 51, 51);
`;

const Avatar = styled.div`
  width: 300px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const FooterMenu = styled.div`
  display: flex;
  gap: 6rem;
`;

const FooterMenuItem = styled.div`
  & :first-child {
    padding-bottom: 1rem;
  }

  & :not(:first-child) {
    padding-bottom: 0.8rem;
  }
`;

const FooterCopy = styled.div`
  padding: 2rem 0;
`;
