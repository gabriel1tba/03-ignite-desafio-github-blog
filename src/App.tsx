import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/themes/default';

import GlobalStyle from './styles/global';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <h1>My App</h1>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
