import React from "react";
import styled, { css } from "styled-components";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { Text } from "../Text";
import { mobile } from "@/helpers/theme";

interface Props {
  text?: string;
}

export const Button = ({ text = "" }: Props) => {
  return (
    <ButtonContainer>
      <ButtonIconWrapper>
        <Text className="btn-text-icon" $weight="semiBold">
          {text}
        </Text>
        <BtnIcon />
      </ButtonIconWrapper>
    </ButtonContainer>
  );
};

const BtnIcon = styled(ArrowRightIcon)`
  position: absolute;
  right: 8px;
  z-index: 10;

  height: 16px;
  width: 16px;

  color: ${(props) => props.theme.color["brand-dark"]};

  ${mobile(css`
    height: 12px;
    width: 12px;
  `)}
`;

const ButtonIconWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 32px;
  padding: 0 6px;
  margin-right: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 28px;

  color: ${(props) => props.theme.color.light};

  &:before {
    content: "";
    z-index: 8;
    position: absolute;
    right: 0;

    width: 32px;
    height: 32px;

    border-radius: 32px;

    background: white;
    transition: ${(props) => props.theme.animation.fast};
  }

  ${mobile(css`
    height: 28px;
    padding: 0 2px;

    &:before {
      width: 28px;
      height: 28px;
    }
  `)}
`;

const ButtonContainer = styled.button`
  position: relative;
  height: 52px;
  width: 180px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border: none;
  cursor: pointer;
  border-radius: 50px;

  & .btn-text-icon {
    position: absolute;
    z-index: 9;
    top: 50%;
    transform: translateY(-50%);

    margin-left: 14px;

    transition: ${(props) => props.theme.animation.slow};
  }

  ${(props) => css`
    background: linear-gradient(
      180deg,
      ${props.theme.color["brand-dark"]} 0%,
      ${props.theme.color["brand-light"]} 100%
    );
  `}

  & > * {
    transition: ${(props) => props.theme.animation.medium};
  }

  &:hover {
    ${ButtonIconWrapper} {
      width: 100%;
      margin-right: 8px;

      &:before {
        width: 95%;
      }
    }
    & .btn-text-icon {
      margin-left: 20px;
      color: ${(props) => props.theme.color["brand-dark"]};
    }
  }

  ${mobile(css`
    height: 46px;
    width: 150px;

    gap: 8px;

    border-radius: 50px;

    & .btn-text-icon {
      margin-left: 10px;
    }

    &:hover {
      ${ButtonIconWrapper} {
        margin-right: 4px;
      }

      & .btn-text-icon {
        margin-left: 16px;
      }
    }
  `)}
`;
