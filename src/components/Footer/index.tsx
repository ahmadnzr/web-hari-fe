import React from "react";

import Image from "next/image";
import styled, { css } from "styled-components";

import { Button, ContentDarkContainer, Text } from "@/components";
import { mobile, tablet } from "@/helpers/theme";

export const Footer = () => {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

const FooterContainer = styled(ContentDarkContainer)`
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

  ${tablet(css`
    width: 100%;
    padding: 2rem;
  `)}

  ${mobile(css`
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
