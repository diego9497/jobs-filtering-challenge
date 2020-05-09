import styled from "styled-components";

export const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
  margin: 0px 10px 12px 0;
  display: flex;
  align-items: center;

  span {
    font-weight: 700;
    border: none;
    background: ${(props) => props.theme.colors.lightCyan};
    color: ${(props) => props.theme.colors.mediumCyan};
    padding: 7px 8px;
    font-size: 0.8em;
    user-select: none;
  }

  button {
    background: ${(props) => props.theme.colors.mediumCyan};
    color: white;
    cursor: pointer;
    padding: 7px 10px;
    font-weight: 700;

    :hover {
      background: ${(props) => props.theme.colors.veryDarkCyan};
    }
  }
`;
