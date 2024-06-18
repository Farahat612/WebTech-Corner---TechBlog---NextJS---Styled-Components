import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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

  :root {
    --bg: #f9f9f9;
    --text: #333;
    --accent: #ff4500;

    --button-bgColor: #67C656;
    --button-textColor: #fff;
    --button-hoverBgColor: #5AB14A;
    --button-hoverTextColor: #fff;
  }

  [data-theme='dark'] {
    --bg: #333;
    --text: #fff;
    --accent: #ff4500;
  }
`
