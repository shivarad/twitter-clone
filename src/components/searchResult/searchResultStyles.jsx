import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const ResultContainer = styled.div`
display:flex;
align-items:center;
padding:10px 20px;
&:hover{
    background:${Colors.DoubleExtraLightGray}
}
& span{
    width:50px;
    height:50px:
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;
}
`;

export const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Header = styled.div`
  color: ${Colors.Black};
  font-weight: bold;
`;
export const Content = styled.div`
  color: ${Colors.LightGray};
`;
