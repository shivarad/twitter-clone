import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const TweetComponent = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${Colors.DoubleExtraLightGray};
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const TweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  flex: 1;
`;

export const TweetBox = styled.textarea`
  resize: none;
  border: none;
  font-size: 20px;
  overflow: hidden;
  outline: none;
  color: ${Colors.Black};
`;

export const TweetActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${Colors.DoubleExtraLightGray};
  padding: 10px;
  & div {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    @media screen and (max-width: 700px) {
      gap: 5px;
      & span {
        display: none;
      }
    }
  }
`;

export const TweetButton = styled.button`
  color: white;
  font-size: 15px;
  font-weight: bold;
  background: ${Colors.darkBlue};
  height: 40px;
  border-radius: 40px;
  border: none;
  width: 100px;
  &:hover {
    background: ${Colors.Blue};
  }
`;
