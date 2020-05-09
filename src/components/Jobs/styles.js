import styled from "styled-components";

export const Container = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 0;

  @media screen and (max-width: 1080px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 675px) {
    padding: 50px 20px;
  }
`;
