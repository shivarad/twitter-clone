import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 0px 8px #d9d9d9;
  background: white;
  position: absolute;
  bottom:${props=>props.position==="down"?"auto":"70%"};
  right:0;
  margin: 15px;
  z-index: 10000;

`;

export const MenuOption = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px;
  cursor: pointer;
  color: ${Colors.Black};
  & span {
    width: fit-content;
    margin-right: 5px;
  }
  &:hover {
    background: ${Colors.DoubleExtraLightGray};
  }
`;
