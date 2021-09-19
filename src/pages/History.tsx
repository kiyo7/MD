//lib
import React from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

//components
import { Header } from '../components/molecule/Header/Header';

const SHeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
`;

const SWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
`;

export const History: React.FC = () => {
  return (
    <SHeaderArea>
      <Header title="History">
        <Link to="/editor">エディタに戻る</Link>
      </Header>
      <SWrapper>TODO: 履歴表示</SWrapper>
    </SHeaderArea>
  );
};
