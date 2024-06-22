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
    background-color: var(--bg);
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

  .container{
    max-width: 1068px;
    margin: auto;
    padding: 0 1rem;
    width: 100%;
  }


  :root {
    --bg: #FAF9F6;
    --text: #211D1D;
    --textLight: #ffffff;
    --primary-Color: #67C656;
    --primary-hoverColor: #5AB14A;
    --primary-textColor: #172317;

    --secondary-Color: #1a1e21;
    --secondary-hoverColor: #1a1a1a;
    --secondary-textColor: #ffffff;
  }
  ::selection {
    background-color: var(--primary-Color);
    color: var(--primary-textColor);
  }

`
