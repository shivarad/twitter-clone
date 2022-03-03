import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const HeaderContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
height:60px;
width:100%;
color:${Colors.Black};
background: #FFF, 
box-shadow: rgb(31 38 135, 0.37 ) 
backdrop-filter: blur(9.0px);
padding:15px;
`

export const Title=styled.h1`
font-size:20px;

`


