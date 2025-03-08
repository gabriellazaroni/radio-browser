import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #000;

    --gray-100: #C4C4CC;
    --gray-200: #7E7E7E;
    --gray-500: #505059;
    --gray-600: #4B4B50;
    --gray-700: #1A1A1E;
    --gray-800: #121214;

    --dark-900: #020202;


    --purple-100: #F1DAFF;
    --purple-500: #bf59fd;

    --red: #f20f4b;

    --font-xl: clamp(1.5rem, 5vw, 2rem); // 32px
    --font-md: clamp(0.875rem, 2vw , 1.125rem); //18px novo
    --font-n: clamp(0.9rem, 5vw , 1rem); // 16px
    --font-sm: clamp(0.9rem, 2vw , 0.875rem); // 14px
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    color: var(--white);

    ::-webkit-scrollbar {
      width: 0.5px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      border: 2px solid transparent;
    }

    scrollbar-width: thin;
    scrollbar-color: var(--purple-500) transparent;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    /* max-width: 1034px; */
    background-color: var(--dark-900);
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-family: "Noto Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-border-radius: 0;
border-radius: 0;
-webkit-box-shadow: none;
box-shadow: none;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #FFFFFF !important;
  }
`

export default GlobalStyle
