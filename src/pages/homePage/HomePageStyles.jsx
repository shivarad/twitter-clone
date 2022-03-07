import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;
export const Navigation = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  padding: 0 20px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const TimeLine = styled.div`
  display: flex;
  border: 1px solid ${Colors.ExtraLightGray};
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  max-width: 600px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  padding: 10px;
  height: 100vh;
  overflow: hidden;
  flex-grow: 1;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
