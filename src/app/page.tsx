"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

import { Button, Text } from "@/components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
      <Hero>
        <HeroDetail>
          <Text className="hero-title" $weight="bold" $size="xxl">
            Visual Designer Based in Indonesia
          </Text>
          <Text className="hero-desc" $color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud.
          </Text>
          <Button text="Contact Me" />
        </HeroDetail>
        <HeroHighlight>
          <HeroCard $url="https://www.whiteboardjournal.com/wp-content/uploads/2023/06/nothing-phone-2-specs-leak-summer-release-1050x591.jpg">
            <CardContent>
              <Text $size="lg" $weight="bold" style={{ lineHeight: "100%" }}>
                Branding Project
              </Text>
              <CardButton>
                <Text
                  className="card-btn_text"
                  $size="xs"
                  $weight="semiBold"
                  $color="brand-light"
                >
                  Learn More
                </Text>
                <div className="card_icon-container">
                  <BtnIcon />
                </div>
              </CardButton>
            </CardContent>
          </HeroCard>
          <HeroCard $url="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202405161717">
            <CardContent>
              <Text $size="lg" $weight="bold" style={{ lineHeight: "100%" }}>
                Branding Project
              </Text>
              <CardButton>
                <Text
                  className="card-btn_text"
                  $size="xs"
                  $weight="semiBold"
                  $color="brand-light"
                >
                  Learn More
                </Text>
                <div className="card_icon-container">
                  <BtnIcon />
                </div>
              </CardButton>
            </CardContent>
          </HeroCard>
        </HeroHighlight>
      </Hero>
    </main>
  );
}

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

const Hero = styled.section`
  width: 95%;
  min-height: 920px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  border-radius: 40px;

  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => props.theme.color.dark};
`;

const HeroDetail = styled.div`
  width: 800px;
  margin: 60px auto 0;
  text-align: center;

  & .hero-title {
    line-height: 100%;
    margin-bottom: 16px;
  }
  & .hero-desc {
    margin-bottom: 32px;
  }
`;

const HeroHighlight = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  gap: 24px;
`;

const HeroCard = styled.div<{ $url?: string }>`
  flex: 1;

  display: flex;
  align-items: end;

  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
  background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${(props) => props.$url});
  border-radius: 30px;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const CardButton = styled.button`
  position: relative;
  min-width: 32px;
  height: 32px;
  padding: 0 12px;

  border-radius: 32px;

  cursor: pointer;
  overflow: hidden;
  background: ${(props) => props.theme.color.light};

  & > * {
    transition: ${(props) => props.theme.animation.medium};
  }

  & .card-btn_text {
    margin-right: -120px;
    white-space: nowrap;
  }

  & .card_icon-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;

    width: 20px;
    height: 32px;
    background: ${(props) => props.theme.color.light};
  }

  &:hover {
    & .card-btn_text {
      margin-right: 16px;
    }
  }
`;

const BtnIcon = styled(ArrowRightIcon)`
  position: absolute;
  top: 5px;
  right: 6px;

  height: 18px;
  width: 18px;

  color: ${(props) => props.theme.color["brand-dark"]};
`;
