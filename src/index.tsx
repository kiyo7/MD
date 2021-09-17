import * as React from 'react';
import { render } from 'react-dom';

//style
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/molecule/Header/Header';

//components
import { Editor } from './pages/Editor';

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}`;

const Main = (
  <>
    <GlobalStyle />
    <Header />
    <Editor />
  </>
);

render(Main, document.getElementById('root'));
