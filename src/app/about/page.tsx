"use client";

import React, { useContext, useRef } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  ContentWrapper,
  SectionTitle,
  ServiceSection,
  Text,
} from "@/components";
import { mobile, tablet } from "@/helpers/theme";
import { AnimationContext } from "@/helpers/lib";

const experiences = [
  {
    date: "2022 - Present",
    title: "Senior Designer GoTo",
  },
  { date: "2019 - 2022", title: "UI/UX Designer at Shoppy" },
  { date: "2015 - 2029", title: "Junior Designer at MyBank" },
];

const Page = () => {
  const { animateItemRef } = useContext(AnimationContext);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (aboutRef.current) {
      gsap.from(aboutRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: {
          each: 0.2,
        },
      });
    }
  });
  return (
    <>
      <AboutMe ref={aboutRef}>
        <AvatarContainer>
          <Image
            className="about_photo"
            src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
            alt="photo"
            height={230}
            width={230}
          />
          <Text $size="xl" $weight="bold">
            Rizky Hary
          </Text>
        </AvatarContainer>
        <AboutContent>
          <Text $size="xl" $weight="semiBold">
            7+ years of experience in the field of digital design working with
            national and international clients. Currently working as a freelance
            helping brands solve problems through beautiful design and
            experiences.
          </Text>
          <Text $size="xl" $weight="semiBold">
            These are some of the clients I’ve been lucky to work with:
          </Text>
          <ClientContainer>
            <Text $weight="semiBold" $size="lg">
              Facebook
            </Text>
            <Text $weight="semiBold" $size="lg">
              Google
            </Text>
            <Text $weight="semiBold" $size="lg">
              Twitter
            </Text>
            <Text $weight="semiBold" $size="lg">
              E-coffee
            </Text>
          </ClientContainer>
        </AboutContent>
      </AboutMe>
      <ServiceSection />
      <Expreiences>
        <Left>
          <SectionTitle ref={animateItemRef}>Experiences</SectionTitle>
          <Text
            ref={animateItemRef}
            className="experience_desc"
            $color="dark-gray"
          >
            Didn’t expect Myspace to be a career-launcher, but that’s how I got
            my start in design. As a mostly self-taught designer, I’ve worked
            for startups, agencies, and even solo. These days I’m based in
            Denver—but I’m a big remote work advocate.
          </Text>
        </Left>
        <Right>
          {experiences.map((item) => (
            <ExperinceItem key={item.date} ref={animateItemRef}>
              <Text className="experience-item_title" $color="gray">
                {item.date}
              </Text>
              <Text
                className="experience-item_desc"
                $weight="semiBold"
                $size="lg"
              >
                {item.title}
              </Text>
            </ExperinceItem>
          ))}
        </Right>
      </Expreiences>
    </>
  );
};

export default Page;

const AboutMe = styled(ContentWrapper)`
  min-height: 80dvh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & .about_photo {
    width: 300px;
    height: 300px;
    border-radius: 300px;
    object-fit: cover;
  }

  ${tablet(css`
    min-height: fit-content;
    flex-direction: column;
    text-align: justify;
    gap: 1rem;
  `)}

  ${mobile(css`
    & .about_photo {
      width: 150px;
      height: 150px;
      border-radius: 150px;
    }
  `)}
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const AboutContent = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ClientContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Expreiences = styled(ContentWrapper)`
  min-height: 40dvh;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 4rem 2rem;

  & .experience_desc {
    max-width: 400px;
    text-align: justify;
  }

  ${tablet(css`
    flex-direction: column;

    & .experience_desc {
      max-width: 100%;
    }
  `)}

  ${mobile(css`
    padding: 2rem 1rem;
  `)}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const Right = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const ExperinceItem = styled.div`
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};

  & .experience-item_title {
    letter-spacing: 0.5rem;
    flex: 1;
  }

  & .experience-item_desc {
    text-align: right;
    flex: 0.5;
  }

  ${tablet(css`
    & .experience-item_desc {
      flex: 1;
    }
  `)}
`;
