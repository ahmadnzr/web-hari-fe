import React from "react";
import styled, { css } from "styled-components";

import { FontSize, FontWeight } from "@/helpers/types";

interface TypographyProps {
  readonly $size: keyof FontSize;
  readonly $weight: keyof FontWeight;
  readonly $color?: string;
}

interface Props extends Partial<TypographyProps> {
  children: string;
  className?: string;
}

export const Text = ({
  children,
  className,
  $color,
  $size = "sm",
  $weight = "normal",
}: Props) => {
  return (
    <Typography
      className={className}
      $color={$color}
      $size={$size}
      $weight={$weight}
    >
      {children}
    </Typography>
  );
};

const Typography = styled.p<TypographyProps>`
  ${(props) => css`
    font-size: ${props.theme.fontSize[props.$size]};
    font-weight: ${props.theme.fontWeight[props.$weight]};
    color: ${props.color ? props.color : props.theme.color.dark};
  `}
`;
