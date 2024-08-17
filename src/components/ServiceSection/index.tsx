"use client";

import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { mobile } from "@/helpers/theme";
import { AnimationContext } from "@/helpers/lib";
import { ContentDarkContainer, SlideButton } from "../Styled";
import { SectionTitle } from "../SectionTitle";
import { Text } from "../Text";
import { NavigationButton } from "../NavigationButton";

export const ServiceSection = () => {
  const { animateItemRef } = useContext(AnimationContext);

  return (
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
            <NavigationButton $type="prev" />
            <NavigationButton $type="next" />
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
                  Duis volutpat porttitor sem, eget ornare nisl feugiat sed. In
                  tempus tincidunt.
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
  );
};

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
