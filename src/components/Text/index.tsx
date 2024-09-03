import React, { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

import { Color, FontSize, FontWeight } from "@/helpers/types";
import { mobile } from "@/helpers/theme";

interface TypographyProps {
  $size: keyof FontSize;
  $weight: keyof FontWeight;
  $color?: keyof Color;
}

interface Props
  extends HTMLAttributes<HTMLParagraphElement>,
    Partial<TypographyProps> {}

export const Text = ({
  children,
  $color,
  $size = "sm",
  $weight = "normal",
  ...other
}: Props) => {
  return (
    <Typography $color={$color} $size={$size} $weight={$weight} {...other}>
      {children}
    </Typography>
  );
};

const Typography = styled.p<TypographyProps>`
  ${(props) => css`
    font-size: ${props.theme.fontSize[props.$size]};
    font-weight: ${props.theme.fontWeight[props.$weight]};
    color: ${props.$color ? props.theme.color[props?.$color] : undefined};

    ${mobile(css`
      font-size: ${props.theme.mobile.fontSize[props.$size]};
    `)}
  `}
`;
