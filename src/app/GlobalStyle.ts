import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }
  section {
    padding: 3rem 0 2rem;
  }


  :root {
    --bg: #D9D9D9;
    --text: #211D1D;
    --primary-Color: #67C656;
    --primary-hoverColor: #5AB14A;
    --primary-textColor: #211D1D;

    --secondary-Color: #121212;
    --secondary-hoverColor: #1a1a1a;
    --secondary-textColor: #ffffff;
  }
  ::selection {
    background-color: var(--primary-Color);
    color: var(--primary-textColor);
  }

`
