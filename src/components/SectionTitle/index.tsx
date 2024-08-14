import React, { forwardRef } from "react";
import { Text } from "../Text";

interface Props {
  children: string;
}
export const SectionTitle = forwardRef<HTMLParagraphElement, Props>(
  ({ children }, ref) => {
    return (
      <Text ref={ref} $size="lg" $color="gray">
        {children}
      </Text>
    );
  },
);

SectionTitle.displayName = "SectionTitle";
