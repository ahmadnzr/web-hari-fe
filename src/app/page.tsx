"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

import { Text } from "@/components";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}

const Navbar = styled.nav`
  height: 80px;
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
