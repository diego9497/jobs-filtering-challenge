import styled from "styled-components";

export const Button = styled.button`
  font-weight: 700;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.colors.lightCyan};
  color: ${(props) => props.theme.colors.mediumCyan};
  padding: 7px 10px;
  border-radius: 4px;
  margin: 5px 0;
  margin-right: 12px;
  font-size: 0.8em;

  :hover {
    background: ${(props) => props.theme.colors.mediumCyan};
    color: white;
  }
`;
