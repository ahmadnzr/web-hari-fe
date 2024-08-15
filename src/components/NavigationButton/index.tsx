import React from "react";
import styled from "styled-components";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  $type?: "prev" | "next";
  $dark?: boolean;
}

export const NavigationButton = ({ $type, $dark, ...other }: Props) => {
  return (
    <Button $type={$type} $dark={$dark} {...other}>
      <ChevronRightIcon className="nav-btn_icon" />
    </Button>
  );
};

const Button = styled.button<{
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
