import styled from "styled-components";

export const ContentWrapper = styled.section`
  padding: 24px;
`;

export const ContentDarkContainer = styled(ContentWrapper)`
  border-radius: 40px;

  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => props.theme.color.dark};
`;
