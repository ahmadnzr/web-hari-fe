"use client";

import { useContext, useRef } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  Button,
  ContentWrapper,
  ContentDarkContainer,
  SectionTitle,
  Text,
  SlideButton,
  NavigationButton,
  ServiceSection,
} from "@/components";
import { mobile, tablet } from "@/helpers/theme";
import { AnimationContext } from "@/helpers/lib";

export default function Home() {
  const { animateItemRef } = useContext(AnimationContext);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 2 } })
        .from("#hero-detail > *", {
          y: 30,
          opacity: 0,
          stagger: {
            each: 0.2,
          },
        })
        .from(
          "#hero-highlight > *",
          {
            y: 50,
            opacity: 0,
            stagger: {
              each: 0.2,
            },
          },
          "<",
        );
    },
    { scope: heroRef },
  );

  return (
    <main>
      <Hero ref={heroRef}>
        <HeroDetail id="hero-detail">
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
        <HeroHighlight id="hero-highlight">
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

      <AboutMe>
        <AboutContent ref={animateItemRef}>
          <SectionTitle>About Me</SectionTitle>
          <Image
            className="about_photo"
            src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
            alt="photo"
            height={230}
            width={230}
          />
        </AboutContent>
        <AboutContent ref={animateItemRef}>
          <Text $size="xl" $weight="semiBold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </Text>
        </AboutContent>
      </AboutMe>

      <ServiceSection />

      <Review>
        <div ref={animateItemRef} className="review_title">
          <SectionTitle>Past Client</SectionTitle>
          <SlideButton>
            <NavigationButton $type="prev" $dark />
            <NavigationButton $type="next" $dark />
          </SlideButton>
        </div>
        <ReviewItem>
          <Text
            ref={animateItemRef}
            className="review_text"
            $size="xl"
            $weight="semiBold"
          >
            Hari transformed our brand identity and website into a modern, sleek
            and professional representation of our company. Their design skills
            are second to none
          </Text>
          <ReviewUser ref={animateItemRef}>
            <ReviewAvatar />
            <div>
              <Text $weight="semiBold" $size="md">
                Ahmad Nizar
              </Text>
              <Text $size="xs" $color="gray">
                Software Engineer
              </Text>
            </div>
          </ReviewUser>
        </ReviewItem>
      </Review>
    </main>
  );
}

const Hero = styled(ContentDarkContainer)`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${mobile(css`
    gap: 2rem;
  `)}
`;

const HeroDetail = styled.div`
  max-width: 800px;
  margin: 4rem auto 0;
  text-align: center;

  & .hero-title {
    line-height: 100%;
    margin-bottom: 1rem;
  }
  & .hero-desc {
    margin-bottom: 2rem;
  }

  ${mobile(css`
    width: 80%;
    margin: 2rem auto 0;

    & .hero-title {
      margin-bottom: 0.5rem;
    }
    & .hero-desc {
      margin-bottom: 1rem;
    }
  `)}
`;

const HeroHighlight = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  gap: 1.5rem;

  ${mobile(css`
    flex-direction: column;
    gap: 1rem;
  `)}
`;

const HeroCard = styled.div<{ $url?: string }>`
  min-height: 400px;
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

  ${mobile(css`
    min-height: 200px;
  `)}
`;

const CardContent = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;

  ${mobile(css`
    padding: 1rem;
  `)}
`;

const CardButton = styled.button`
  position: relative;
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.6rem;

  border-radius: 2rem;

  cursor: pointer;
  overflow: hidden;
  background: ${(props) => props.theme.color.light};

  & > * {
    transition: ${(props) => props.theme.animation.medium};
  }

  & .card-btn_text {
    margin-right: -10rem;
    white-space: nowrap;
  }

  & .card_icon-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;

    width: 1.5rem;
    height: 2rem;
    background: ${(props) => props.theme.color.light};
  }

  &:hover {
    & .card-btn_text {
      margin-right: 1.5rem;
    }
  }

  ${mobile(css``)}
`;

const BtnIcon = styled(ArrowRightIcon)`
  position: absolute;
  top: 5px;
  right: 6px;

  height: 1.2rem;
  width: 1.2rem;

  color: ${(props) => props.theme.color["brand-dark"]};
`;

const AboutMe = styled(ContentWrapper)`
  min-height: 750px;
  padding: 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .about_photo {
    margin-top: 1rem;
    width: 230px;
    height: 230px;
    border-radius: 230px;
    object-fit: cover;
  }

  ${tablet(css`
    min-height: fit-content;
    padding: 1rem;
    flex-direction: column;
    text-align: center;
  `)}

  ${mobile(css`
    & .about_photo {
      width: 150px;
      height: 150px;
      border-radius: 150px;
    }
  `)}
`;

const AboutContent = styled.div`
  flex: 1;
`;

const Review = styled(ContentWrapper)`
  margin: 8rem 0;

  & .review_title {
    display: flex;
    justify-content: space-between;
  }

  & .review_text {
    padding: 2rem 0;
  }

  ${mobile(css`
    margin: 2rem 0;

    & .review_text {
      padding: 1rem 0;
    }
  `)}
`;

const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;

  ${mobile(css``)}
`;

const ReviewUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ReviewAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: gray;

  ${mobile(css`
    width: 40px;
    height: 40px;
    border-radius: 40px;
  `)}
`;
