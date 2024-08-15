"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ContentWrapper, ServiceSection, Text } from "@/components";
import { mobile, tablet } from "@/helpers/theme";

const Page = () => {
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
