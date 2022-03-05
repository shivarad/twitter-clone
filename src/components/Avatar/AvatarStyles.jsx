import styled from "styled-components";


export const AvatarContainetr=styled.div`
height:50px;
width:50px;
border-radius:50px;
background-image:url(${props=>(props.profileImg)});
margin-left:10px;
overflow:hidden;
cursor:pointer;

`
