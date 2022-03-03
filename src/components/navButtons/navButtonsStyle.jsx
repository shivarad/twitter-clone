import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const Button=styled.button`
display:flex;
align-items:center;
justify-content:flex-start;
gap:15px;
font-size:25px;
background:none;
border:none;
color:${Colors.Black};
padding:10px;
border-radius:50px;
height:50px;
width:fit-content;
min-width:50px;
text-transform:capitalize;
cursor:pointer;
& span{
    font-size:20px;
    padding-right:20px;
    @media screen and (max-width:1280px){
        display:none;
    }
}
&:hover{
    background:${Colors.ExtraLightGray}
}

`