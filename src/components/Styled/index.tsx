import { mobile } from "@/helpers/theme";
import styled, { css } from "styled-components";

export const ContentWrapper = styled.section`
  padding: 24px;
`;

export const ContentDarkContainer = styled(ContentWrapper)`
  border-radius: 40px;

  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => props.theme.color.dark};
`;

export const SlideButton = styled.div`
  & > * {
    margin: 0 4px;
  }

  ${mobile(css`
    display: none;
  `)}
`;
