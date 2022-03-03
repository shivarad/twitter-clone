import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const PageWrapper=styled.div`
display:flex;
flex-direction:row;
height:100vh;

`
export const Navigation=styled.div`
height:100%;
padding:0 20px;
`

export const TimeLine=styled.div`
flex-grow:3;
border:1px solid ${Colors.DoubleExtraLightGray}

`
export const SearchContainer=styled.div`
flex-grow:1;
`