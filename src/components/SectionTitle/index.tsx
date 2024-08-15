import React, { forwardRef } from "react";
import { Text } from "../Text";

interface Props {
  children: string;
}

export const SectionTitle = forwardRef<HTMLParagraphElement, Props>(
  ({ children }, ref) => {
    return (
      <Text
        ref={ref}
        $size="sm"
        $color="gray"
        style={{
          textTransform: "uppercase",
          letterSpacing: "0.2rem",
        }}
      >
        {children}
      </Text>
    );
  },
);

SectionTitle.displayName = "SectionTitle";
