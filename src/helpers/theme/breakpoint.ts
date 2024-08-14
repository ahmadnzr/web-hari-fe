import { css, RuleSet } from "styled-components";

const size = {
  mobile: "431px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

export const mobile = (inner: RuleSet<object>) => css`
  @media (max-width: ${size.mobile}) {
    ${inner};
  }
`;

export const tablet = (inner: RuleSet<object>) => css`
  @media (max-width: ${size.tablet}) {
    ${inner};
  }
`;
