import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  padding: 24px;
  margin: 0 auto;
`;

export const DarkContainer = styled(Container)`
  border-radius: 40px;

  color: ${(props) => props.theme.color.light};
  background-color: ${(props) => props.theme.color.dark};
`;
