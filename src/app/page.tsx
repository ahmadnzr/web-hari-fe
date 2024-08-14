"use client";

import Image from "next/image";
import styled, { css } from "styled-components";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  Button,
  ContentWrapper,
  ContentDarkContainer,
  SectionTitle,
  Text,
} from "@/components";
import { mobile, tablet } from "@/helpers/theme";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const animateScrollListRef = useRef<(HTMLParagraphElement | null)[]>([]);

  const animateItemRef = (el: HTMLParagraphElement | null) => {
    if (el && !animateScrollListRef.current.includes(el)) {
      animateScrollListRef.current.push(el);
    }
  };

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

  useGSAP(() => {
    animateScrollListRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 60%",
              scrub: 1,
            },
          },
        );
      }
    });
  });

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

      <Service>
        <SectionTitle ref={animateItemRef}>What I&apos;m doing</SectionTitle>
        <ServiceMenu id="service_menu">
          <Text
            ref={animateItemRef}
            $size="xxl"
            $weight="semiBold"
            className="service_menu-title"
          >
            Branding Design
          </Text>
          <Text
            ref={animateItemRef}
            $size="xxl"
            $weight="semiBold"
            className="service_menu-title"
          >
            UI/UX Design
          </Text>
          <Text
            ref={animateItemRef}
            $size="xxl"
            $weight="semiBold"
            className="service_menu-title"
          >
            Development
          </Text>
          <Text
            ref={animateItemRef}
            $size="xxl"
            $weight="semiBold"
            className="service_menu-title"
          >
            Illustration
          </Text>
          <Text
            ref={animateItemRef}
            $size="xxl"
            $weight="semiBold"
            className="service_menu-title"
          >
            Logo Creation
          </Text>
        </ServiceMenu>
        <Project>
          <div ref={animateItemRef} className="service_project-title">
            <SectionTitle>Selected Project</SectionTitle>
            <SlideButton>
              <NavigationButton $type="prev">
                <ChevronRightIcon className="nav-btn_icon" />
              </NavigationButton>
              <NavigationButton $type="next">
                <ChevronRightIcon className="nav-btn_icon" />
              </NavigationButton>
            </SlideButton>
          </div>
          <ProjectCard
            ref={animateItemRef}
            $url="https://i.ytimg.com/vi/1a1C3VeJEl0/maxresdefault.jpg"
          >
            <Text $color="gray" className="project_card-title">
              20/04/2024
            </Text>
            <ProjectFooter>
              <Desc>
                <DescItem>
                  <Text className="desc_title" $color="gray">
                    Project
                  </Text>
                  <Text $weight="semiBold">
                    Duis volutpat porttitor sem, eget ornare nisl feugiat sed.
                    In tempus tincidunt.
                  </Text>
                </DescItem>
                <DescItem>
                  <Text className="desc_title" $color="gray">
                    Type
                  </Text>
                  <div className="desc_type">
                    <Text $weight="semiBold">Branding Project</Text>
                    <Text $weight="semiBold">Logo Creation</Text>
                    <Text $weight="semiBold">Illustration</Text>
                  </div>
                </DescItem>
              </Desc>
              <ProjectButton>
                <ArrowRightIcon className="project-button_icon" />
              </ProjectButton>
            </ProjectFooter>
          </ProjectCard>
        </Project>
      </Service>
      <Review>
        <div ref={animateItemRef} className="review_title">
          <SectionTitle>Past Client</SectionTitle>
          <SlideButton>
            <NavigationButton $type="prev" $dark>
              <ChevronRightIcon className="nav-btn_icon" />
            </NavigationButton>
            <NavigationButton $type="next" $dark>
              <ChevronRightIcon className="nav-btn_icon" />
            </NavigationButton>
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

const Service = styled(ContentDarkContainer)`
  text-align: center;

  & .service_menu-title {
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    line-height: 100%;
  }

  & .service_project-title {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${mobile(css`
    & .service_project-title {
      text-align: left;
      margin: 1rem 0;
    }
  `)}
`;

const ServiceMenu = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  ${mobile(css`
    margin: 2rem 0;
    gap: 1rem;
  `)}
`;

const Project = styled.div`
  & .project_card-title {
    letter-spacing: 0.2rem;
  }
`;

const SlideButton = styled.div`
  & > * {
    margin: 0 4px;
  }

  ${mobile(css`
    display: none;
  `)}
`;

const NavigationButton = styled.button<{
  $type?: "prev" | "next";
  $dark?: boolean;
}>`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: none;
  background: ${(props) =>
    props.$dark ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4);"};
  opacity: 0.5;
  cursor: pointer;
  transform: ${(props) =>
    props.$type === "prev" ? "rotate(180deg)" : undefined};
  transition: ${(props) => props.theme.animation.fast};

  & .nav-btn_icon {
    color: ${(props) => props.theme.color.light};
  }

  &:hover {
    opacity: 1;
  }
`;

const ProjectCard = styled.div<{ $url?: string }>`
  width: 100%;
  min-height: 800px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: start;

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
    min-height: 400px;
    padding: 1rem;
  `)}
`;

const ProjectFooter = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${mobile(css`
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1rem;
  `)}
`;

const Desc = styled.div`
  display: flex;
  gap: 2rem;

  & .desc_title {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 0.5rem;
  }
  & .desc_type {
    & > * {
      padding: 2px 0;
    }
  }

  ${mobile(css`
    flex-direction: column;
    gap: 1.5rem;
  `)}
`;

const DescItem = styled.div`
  text-align: left;
  width: 250px;

  ${mobile(css`
    width: 100%;
  `)}
`;

const ProjectButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50px;

  background: ${(props) => props.theme.color.light};
  border: none;
  cursor: pointer;

  & > * {
    transition: ${(props) => props.theme.animation.fast};
  }

  & .project-button_icon {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    color: ${(props) => props.theme.color["brand-light"]};
  }

  &:hover {
    & .project-button_icon {
      transform: rotate(-45deg);
    }
  }

  ${mobile(css`
    width: 2rem;
    height: 2rem;
  `)}
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
