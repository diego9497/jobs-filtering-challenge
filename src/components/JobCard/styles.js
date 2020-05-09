import styled from "styled-components";

export const Card = styled.article`
  background: #ffffff;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 4px;
  border-left: 5px solid transparent;
  box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.09);

  :hover {
    border-left: 5px solid ${(props) => props.theme.colors.mediumCyan};
  }

  @media screen and (max-width: 900px) {
    position: relative;
    flex-direction: column;
    padding: 20px;
    align-items: flex-start;
  }

  @media screen and (max-width: 675px) {
    padding-top: 40px;
    margin-bottom: 50px;
  }
`;

export const Logo = styled.img`
  border-radius: 50%;
  margin-right: 20px;

  @media screen and (max-width: 675px) {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -25px;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;

  h3 {
    color: ${(props) => props.theme.colors.mediumCyan};
    margin-right: 15px;
  }
`;

export const CompanyBadge = styled.span`
  color: white;
  border-radius: 15px;
  padding: 9px 10px;
  padding-top: 12px;
  margin-right: 7px;
  font-size: 0.8em;
  font-weight: 700;
  line-height: 0;

  &.light {
    background: ${(props) => props.theme.colors.mediumCyan};
  }

  &.dark {
    background: ${(props) => props.theme.colors.darkCyan};
  }
`;

export const Info = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
    margin-bottom: 15px;
    align-items: flex-start;
    width: 100%;
  }

  @media screen and (max-width: 675px) {
    flex-direction: column;
  }
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.veryDarkCyan};
  font-size: 1.2em;
  cursor: pointer;
  margin: 10px 0;

  :hover {
    color: ${(props) => props.theme.colors.mediumCyan};
  }
`;

export const Resume = styled.p`
  color: gray;
  display: flex;
  font-size: 0.9em;
  span {
    margin-right: 14px;
    display: flex;
    align-items: center;
  }
  span::after {
    content: "";
    height: 3px;
    width: 3px;
    background: gray;
    margin-left: 14px;
    border-radius: 50%;
  }
  span:last-child::after {
    display: none;
  }
`;
