import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: sticky;
  height: 60px;
  bottom: 0;
  background: #fff;
  border-top: 1px solid ${Colors.ExtraLightGray};
  @media screen and (min-width: 500px) {
    display: none;
  }
`;
