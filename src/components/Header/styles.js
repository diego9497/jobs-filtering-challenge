import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.mediumCyan};
  background-image: url("/images/bg-header-desktop.svg");
  height: 156px;

  @media screen and (max-width: 375px) {
    background-image: url("/images/bg-header-mobile.svg");
  }
`;
