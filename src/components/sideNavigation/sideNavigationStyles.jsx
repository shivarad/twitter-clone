import styled from "styled-components";
import { Colors } from "../../styles/colors";

export const Navigation=styled.div`
display:flex;
flex-direction:column;
height:100%;
width:fit-content;
margin:0 auto;
cursor:pointer;
@media screen and (max-width:1280px){
    margin-right:0;
}
`

export const TwitterIcon=styled.button`
color:${Colors.Blue};
font-size:30px;
height:50px;
width:50px;
border-radius:50%;
padding:10px;
cursor:pointer;
background:none;
border:none;
&:hover{
    background:${Colors.LightBlue}
}

`

export const TweetButton=styled.button`
color:white;
font-size:18px;
font-weight:bold;
background:${Colors.darkBlue};
height:50px;
border-radius:50px;
border:none;
width:230px;
margin:10px 0;
&:hover{
    background:${Colors.Blue};

}
@media screen and (max-width:1280px){
    display:none;
}
`