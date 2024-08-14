import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import { Color, FontSize, FontWeight } from "@/helpers/types";
import { mobile } from "@/helpers/theme";

interface TypographyProps {
  readonly $size: keyof FontSize;
  readonly $weight: keyof FontWeight;
  readonly $color?: keyof Color;
}

interface Props extends Partial<TypographyProps> {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Text = forwardRef<HTMLParagraphElement, Props>(
  (
    { children, className, style, $color, $size = "sm", $weight = "normal" },
    ref,
  ) => {
    return (
      <Typography
        ref={ref}
        className={className}
        style={style}
        $color={$color}
        $size={$size}
        $weight={$weight}
      >
        {children}
      </Typography>
    );
  },
);

Text.displayName = "Text";

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
