import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { Colors } from "../../styles/colors";
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: ${(props) => (props.isAction ? `20px` : `25px`)};
  background: none;
  border: none;
  color: ${(props) => props.color};
  padding: 10px;
  border-radius: ${(props) => (props.isAction ? `40px` : `50px`)};
  height: ${(props) => (props.isAction ? `40px` : `50px`)};
  min-width: ${(props) => (props.isAction ? `40px` : `50px`)};
  width: fit-content;
  text-transform: capitalize;
  cursor: pointer;
  & span {
    font-size: 20px;
    padding-right: 20px;
    @media screen and (max-width: 1280px) {
      display: none;
      padding: 0;
    }
  }

`;

export const CustomTooltip = styled(ReactTooltip)`
  font-size: 12px !important;
  padding: 4px !important;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover > button {
    border-radius: ${(props) => (props.isAction ? `40px` : `50px`)};
    background: ${(props) => props.hover};
    color: ${(props) => (props.hoverColor ? props.hoverColor : props.color)};
  }
  &:hover > span {
    color: ${(props) => (props.hoverColor ? props.hoverColor : props.color)};
  }
`;
