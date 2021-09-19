//lib
import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//style
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

//components
import { Editor } from './pages/Editor';
import { History } from './pages/History';

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}`;

const Main = (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/editor">
          <Editor />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Redirect to="/editor" path="*" />
      </Switch>
    </Router>
  </>
);

render(Main, document.getElementById('root'));
