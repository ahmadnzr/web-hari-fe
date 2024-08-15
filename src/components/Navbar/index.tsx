"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styled, { css } from "styled-components";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { mobile } from "@/helpers/theme";
import { Text } from "../Text";
import { navbarMenu } from "./data";

export const Navbar = () => {
  const navMenuRef = useRef<HTMLDivElement | null>(null);

  const [openMobileNav, setOpenMobileNav] = useState(false);

  const toggleNavMenu = () => {
    setOpenMobileNav((prev) => !prev);
  };

  useEffect(() => {
    if (openMobileNav) {
      document.documentElement.classList.add("no-scroll");
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
    <NavbarContainer>
      <MobileNavbar className={openMobileNav ? "open-nav-mobile" : undefined}>
        <NavHeader>
          <CloseButton onClick={toggleNavMenu}>
            <XMarkIcon className="close-btn" />
          </CloseButton>
        </NavHeader>
        <NavItemMobileList ref={navMenuRef}>
          {navbarMenu.map((item) => (
            <Link key={item.url} href={item.url} onClick={toggleNavMenu}>
              <Text
                $color="light"
                className="nav-menu"
                $size="xl"
                $weight="semiBold"
              >
                {item.label}
              </Text>
            </Link>
          ))}
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
      {navbarMenu.slice(0, 2).map((item) => (
        <NavItem key={item.url}>
          <Link href={item.url}>
            <Text className="nav-menu" $size="xs" $weight="semiBold">
              {item.label}
            </Text>
          </Link>
        </NavItem>
      ))}
      <NavLogo>
        <Image src="/images/logo/hary.svg" alt="logo" height={40} width={40} />
      </NavLogo>
      {navbarMenu.slice(2).map((item) => (
        <NavItem key={item.url}>
          <Link href={item.url}>
            <Text className="nav-menu" $size="xs" $weight="semiBold">
              {item.label}
            </Text>
          </Link>
        </NavItem>
      ))}
      <BurgerMenu onClick={toggleNavMenu}>
        <span />
        <span />
        <span />
      </BurgerMenu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
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

const MobileNavbar = styled.div<{ $open?: boolean }>`
  display: none;
  transition: ${(props) => props.theme.animation.medium};

  ${mobile(css`
    position: fixed;
    z-index: 999;
    top: 0;

    width: 100vw;
    min-height: 100dvh;
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
