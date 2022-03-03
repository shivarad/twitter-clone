
   
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
    body {
        margin: 0;
        padding:0;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
        min-height: 100vh;
        min-height: -webkit-fill-available;
}
    html {
        height: -webkit-fill-available;
}
      
      
`