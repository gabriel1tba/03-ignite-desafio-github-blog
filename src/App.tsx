import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/themes/default';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
