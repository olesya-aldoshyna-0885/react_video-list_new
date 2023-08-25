import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Reader } from './components/Reader/Reader.jsx';
import { Example1 } from './components/Example1.jsx';
import publications from './publications.json';
import './index.css';
import { GlobalStyle } from 'components/GlobalStyle.jsx';

const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Reader items={publications} />
      < Example1 />
      </ThemeProvider>
  </React.StrictMode>
);
