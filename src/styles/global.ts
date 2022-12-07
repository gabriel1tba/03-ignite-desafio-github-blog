import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['blue']};
  }
  body {
    background: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  body,
  input,
  textarea,
  button {
    font: 400 1rem Nunito, 'sans-serif';
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['base-profile']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.blue};
  }
`;

export default GlobalStyle;
