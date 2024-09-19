"use client";

import React from "react";
import styled from "styled-components";

import { ContentDarkContainer, SectionTitle, Text } from "@/components";
import Image from "next/image";

const Page = () => {
  return (
    <ContactStyled>
      <ContactForm>
        <Left>
          <SectionTitle>Contact</SectionTitle>
          <Image
            className="avatar"
            src="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
            alt="photo"
            height={230}
            width={230}
          />
        </Left>
        <Right>
          <Text $size="xxl" $weight="semiBold">
            Let&apos;s Collaborate!
          </Text>

          <Text $color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud.
          </Text>

          <Field>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Address" />
            <button>Submit</button>
          </Field>
        </Right>
      </ContactForm>
    </ContactStyled>
  );
};

export default Page;

const ContactStyled = styled.div``;
const ContactForm = styled(ContentDarkContainer)`
  padding: 64px;
  display: flex;

  & .avatar {
    border-radius: 50%;
  }
`;

const Left = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
`;

const Field = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & input,
  textarea {
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    outline: none;
  }

  & button {
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    background-color: ${(props) => props.theme.color["brand-light"]};
    font-weight: bold;
  }
`;
