import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  @media screen and (max-width: 1080px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 675px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  margin-top: -35px;
  display: flex;
  width: 100%;
  background: white;
  padding: 20px 30px;
  border-radius: 4px;
  box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.09);
  justify-content: space-between;
`;

export const ListOfFilters = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Clear = styled.button`
  background: none;
  border: none;
  color: gray;
  font-weight: 700;
  font-size: 1.04em;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.mediumCyan};
  }
`;
