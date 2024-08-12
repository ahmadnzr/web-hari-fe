"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

import { Button, SectionTitle, Text } from "@/components";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
      <AboutMe>
        <AboutContent>
          <SectionTitle>About Me</SectionTitle>
          <Image
            className="about_photo"
            src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
            alt="photo"
            height={230}
            width={230}
          />
        </AboutContent>
        <AboutContent>
          <Text $size="xl" $weight="semiBold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
        </AboutContent>
      </AboutMe>
      <Service>
        <SectionTitle>What I&apos;m doing</SectionTitle>
        <ServiceMenu>
          <Text $size="xxl" $weight="semiBold" className="service_menu-title">
            Branding Design
          </Text>
          <Text $size="xxl" $weight="semiBold" className="service_menu-title">
            UI/UX Design
          </Text>
          <Text $size="xxl" $weight="semiBold" className="service_menu-title">
            Development
          </Text>
          <Text $size="xxl" $weight="semiBold" className="service_menu-title">
            Illustration
          </Text>
          <Text $size="xxl" $weight="semiBold" className="service_menu-title">
            Logo Creation
          </Text>
        </ServiceMenu>
        <Project>
          <div className="service_project-title">
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
          <ProjectCard $url="https://i.ytimg.com/vi/1a1C3VeJEl0/maxresdefault.jpg">
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
        <div className="review_title">
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
          <Text className="review_text" $size="xl" $weight="semiBold">
            Hari transformed our brand identity and website into a modern, sleek
            and professional representation of our company. Their design skills
            are second to none
          </Text>
          <ReviewUser>
            <ReviewAvatar></ReviewAvatar>
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

const Container = styled.section`
  width: 95%;
  padding: 24px;
  margin: 0 auto;
`;

const DarkContainer = styled(Container)`
  border-radius: 40px;

  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => props.theme.color.dark};
`;

const Hero = styled(DarkContainer)`
  display: flex;
  flex-direction: column;
  gap: 64px;
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
  height: 615px;
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

const AboutMe = styled(Container)`
  height: 750px;
  padding: 0 250px;
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
`;

const AboutContent = styled.div`
  flex: 1;
`;

const Service = styled(DarkContainer)`
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
`;

const ServiceMenu = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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
  height: 800px;
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
`;

const ProjectFooter = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
`;

const DescItem = styled.div`
  text-align: left;
  width: 250px;
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
`;

const Review = styled(Container)`
  margin: 8rem 0;
  & .review_title {
    display: flex;
    justify-content: space-between;
  }

  & .review_text {
    padding: 2rem 0;
  }
`;

const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`;

const Footer = styled(DarkContainer)`
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
