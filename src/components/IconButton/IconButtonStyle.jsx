import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const Button=styled.button`
display:flex;
align-items:center;
justify-content:flex-start;
gap:15px;
font-size:${(props)=>(props.isAction?`20px`:`25px`)};;
background:none;
border:none;
color:${(props)=>(props.isBlue?Colors.Blue:Colors.Black)};
padding:10px;
border-radius:${(props)=>(props.isAction?`40px`:`50px`)};
height:${(props)=>(props.isAction?`40px`:`50px`)};;
min-width:${(props)=>(props.isAction?`40px`:`50px`)};;
width:fit-content;
text-transform:capitalize;
cursor:pointer;
& span{
    font-size:20px;
    padding-right:20px;
    @media screen and (max-width:1280px){
        display:none;
        padding:0;
    }
}
&:hover{
    background:${props=>!props.isBlue?Colors.ExtraLightGray:Colors.LightBlue}
}

`