import { createGlobalStyle } from "styled-components";

import "./font.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }
    
    .card{
        height: 40px;
        padding: 15px 18px;
        border-bottom: 1px solid #F4F5F7;
    }
    .icon {
  cursor: pointer;
  display: inline-block;
  min-width: 18px;
  min-height: 20px;
}
`;
