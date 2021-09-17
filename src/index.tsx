import * as React from 'react';
import { render } from 'react-dom';

//style
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

//components
import { Editor } from './pages/Editor';

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}`;

const Main = (
  <>
    <GlobalStyle />
    <Editor />
  </>
);

render(Main, document.getElementById('root'));
