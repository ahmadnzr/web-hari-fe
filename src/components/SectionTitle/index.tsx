import React from "react";
import { Text } from "../Text";

interface Props {
  children: string;
}
export const SectionTitle = ({ children }: Props) => {
  return (
    <Text
      $size="lg"
      $color="gray"
      style={{ textTransform: "uppercase", letterSpacing: "0.3rem" }}
    >
      {children}
    </Text>
  );
};
