import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  * {
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=Source+Sans+Pro:wght@400;600;700&display=swap');
  }

  body {
    background: #262626;
    color: #fafafa;
    font-family: 'Noto Sans', sans-serif !important;
  }

  // anything else you would like to include
`;
