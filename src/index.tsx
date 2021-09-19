//lib
import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//hooks
import { useStateWithStorage } from './hooks/use_state_with_storage';

//style
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

//components
import { Editor } from './pages/Editor';
import { History } from './pages/History';
import { Page404 } from './pages/Page404';

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
}`;

const StorageKey = '/editor:text';

const Main: React.FC = () => {
  const [text, setText] = useStateWithStorage('', StorageKey);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/editor">
            <Editor text={text} setText={setText} />
          </Route>
          <Route exact path="/history">
            <History setText={setText} />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

render(<Main />, document.getElementById('root'));
