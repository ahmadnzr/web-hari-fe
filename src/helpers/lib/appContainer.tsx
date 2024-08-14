"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import { XMarkIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Button, ContentDarkContainer, Text } from "@/components";
import { mobile, tablet } from "../theme";

interface Props {
  children: React.ReactNode;
}

export const AppContainer = ({ children }: Props) => {
  const navMenuRef = useRef<HTMLDivElement | null>(null);

  const [openMobileNav, setOpenMobileNav] = useState(false);

  const toggleNavMenu = () => {
    setOpenMobileNav((prev) => !prev);
  };

  useEffect(() => {
    if (openMobileNav) {
      document.documentElement.classList.add("no-scroll");
      return;
    } else {
      document.documentElement.classList.remove("no-scroll");
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [openMobileNav]);

  useGSAP(
    () => {
      if (navMenuRef.current) {
        gsap.from(navMenuRef.current.children, {
          y: 50,
          opacity: 0,
          ease: "linear",
          stagger: {
            amount: 0.5,
          },
        });
      }
    },
    { dependencies: [openMobileNav] },
  );

  return (
    <>
      <Navbar>
        <MobileNavbar className={openMobileNav ? "open-nav-mobile" : undefined}>
          <NavHeader>
            <CloseButton onClick={toggleNavMenu}>
              <XMarkIcon className="close-btn" />
            </CloseButton>
          </NavHeader>
          <NavItemMobileList ref={navMenuRef}>
            <Link href="/" onClick={toggleNavMenu}>
              <Text
                $color="light"
                className="nav-menu"
                $size="xl"
                $weight="semiBold"
              >
                Home
              </Text>
            </Link>
            <Link href="/about" onClick={toggleNavMenu}>
              <Text
                $color="light"
                className="nav-menu"
                $size="xl"
                $weight="semiBold"
              >
                About
              </Text>
            </Link>
            <Link href="/" onClick={toggleNavMenu}>
              <Text
                $color="light"
                className="nav-menu"
                $size="xl"
                $weight="semiBold"
              >
                Works
              </Text>
            </Link>
            <Link href="/" onClick={toggleNavMenu}>
              <Text
                $color="light"
                className="nav-menu"
                $size="xl"
                $weight="semiBold"
              >
                Contact
              </Text>
            </Link>
          </NavItemMobileList>
          <NavLogo>
            <Image
              src="/images/logo/hary.svg"
              alt="logo"
              height={40}
              width={40}
            />
          </NavLogo>
        </MobileNavbar>
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
        <NavLogo>
          <Image
            src="/images/logo/hary.svg"
            alt="logo"
            height={40}
            width={40}
          />
        </NavLogo>
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
        <BurgerMenu onClick={toggleNavMenu}>
          <span />
          <span />
          <span />
        </BurgerMenu>
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
            <Text className="avatar_title" $size="lg">
              Visual Designer Based in Indonesia
            </Text>
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

  ${mobile(css`
    justify-content: space-between;
    padding: 0 1rem;
    height: 70px;
  `)}
`;

const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  ${mobile(css`
    width: fit-content;
  `)}
`;

const BurgerMenu = styled.button`
  width: 25px;
  height: 15px;
  display: none;
  border: none;
  background: none;

  & > span {
    display: block;
    width: 100%;
    height: 2px;
    background: black;
  }

  ${mobile(css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `)}
`;

const NavItem = styled.div<{ $width?: string; $active?: boolean }>`
  text-transform: uppercase;

  ${(props) => css`
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

  ${mobile(css`
    display: none;
  `)}
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

  ${mobile(css`
    min-height: 500px;
    margin-top: 1rem;
    padding: 2rem 1rem 0;

    border-radius: 20px 20px 0 0;

    & .footer_photo {
      width: 90px;
      height: 90px;
    }
  `)}
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

  ${mobile(css`
    width: 100%;
    padding: 1rem;

    gap: 1rem;
  `)}
`;

const FooterDetail = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  border-top: 1px solid rgb(51, 51, 51);
  border-bottom: 1px solid rgb(51, 51, 51);

  ${tablet(css`
    flex-direction: column;
    gap: 1rem;
  `)}

  ${mobile(css`
    padding: 1rem 0;
  `)}
`;

const Avatar = styled.div`
  width: 300px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  ${tablet(css`
    align-items: center;
    text-align: center;
  `)}

  ${mobile(css`
    width: 100%;
    .avatar_title {
      max-width: 200px;
    }
  `)}
`;

const FooterMenu = styled.div`
  display: flex;
  gap: 6rem;

  ${mobile(css`
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  `)}
`;

const FooterMenuItem = styled.div`
  & :first-child {
    padding-bottom: 1rem;
  }

  & :not(:first-child) {
    padding-bottom: 0.8rem;
  }

  ${mobile(css`
    & :first-child {
      padding-bottom: 0.5rem;
    }

    & :not(:first-child) {
      padding-bottom: 0.3rem;
    }
  `)}
`;

const FooterCopy = styled.div`
  padding: 2rem 0;

  ${mobile(css`
    padding: 1rem 0;
  `)}
`;

const MobileNavbar = styled.div<{ $open?: boolean }>`
  display: none;
  transition: ${(props) => props.theme.animation.medium};

  ${mobile(css`
    position: fixed;
    z-index: 999;
    top: 0;

    width: 100vw;
    min-height: 100vh;
    padding: 2rem;
    right: -100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme.color.dark};
    text-align: center;

    &.open-nav-mobile {
      right: 0;
    }
  `)}
`;

const NavHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;

  border-radius: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  color: ${(props) => props.theme.color.light};
`;

const NavItemMobileList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
