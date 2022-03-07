import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  color: ${Colors.Black};
  background: rgba(255, 255, 255, 0.7);
  box-shadow: rgb(31 38 135, 0.37);
  backdrop-filter: blur(9.4px);
  padding: 15px;
  z-index: 20;
`;

export const Title = styled.h1`
  font-size: 20px;
`;
