import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const ResultContainer=styled.div`
display:flex;
align-items:center;
justify-content:space-around;
&:hover{
    background:${Colors.DoubleExtraLightGray}
}
`;

export const ResultContent=styled.div`
display:flex;
flex-direction:column;
padding:10px;

`;

export const Header=styled.p`
color:${Colors.Black};
font-weight:bold;
`;
export const Content=styled.p`
color:${Colors.LightGray}
`;