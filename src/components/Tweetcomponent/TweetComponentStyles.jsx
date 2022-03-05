import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const TweetContainer = styled.div`
  display:flex;
  border-bottom: 1px solid ${Colors.ExtraLightGray};
  font-size:16px;
  padding-top:20px;
  cursor:pointer;
  &:hover{
      background:${Colors.DoubleExtraLightGray};
  }
`;
export const TweetContent = styled.div`
  display:flex;
  flex-direction: column;
  color: ${Colors.DarkGray};
  flex:1;
  margin:10px;

`;
export const TweetHeader = styled.div`
display:flex;
justify-content:space-between;
width:100%;

& p{
    color:${Colors.Black};
    font-weight:bold;
    
}
& span{
    color:${Colors.LightGray};
    font-weight:normal
}
`;
export const TweetActions = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${Colors.LightGray};
  max-width:600px;

  & span{
    display:flex;
    align-items:center;
  }
  & p{
      font-size:14px;
      padding:0 5px;
  }
`;
