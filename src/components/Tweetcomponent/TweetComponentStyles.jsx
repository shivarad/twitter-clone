import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const TweetContainer = styled.div`
  display:flex;
  border-bottom: 1px solid ${Colors.ExtraLightGray};
  cursor:pointer;
  padding:20px;
  &:hover{
      background:${Colors.DoubleExtraLightGray};
  }
  
`;
export const TweetContent = styled.div`
  display:flex;
  flex-direction: column;
  color: ${Colors.Black};
  flex:1;
  margin:0 10px;

`;
export const TweetHeader = styled.div`
display:flex;
justify-content:space-between;
width:100%;
position:relative;
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
  color: ${Colors.DarkGray};
  max-width:600px;

  & span{
    display:flex;
    align-items:center;
  }
  & p{
      font-size:14px;
      padding:0 10px;
  }
`;
