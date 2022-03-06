import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  border-radius: 4px;
  box-shadow: 0px 0px 8px #d9d9d9;
  background:white;
  position:absolute;
  right:0;
  z-index:10000;
  
`;

export const MenuOption = styled.div`
  display: flex;
  gap:10px;
  padding:15px;
  color:${Colors.Black};
  &:hover{
      background:${Colors.DoubleExtraLightGray};
  }

`;