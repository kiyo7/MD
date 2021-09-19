//lib
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

//components
import { Button } from '../components/atom/button/Button';

const STitle = styled.h1`
  font-size: 5rem;
  font-family: 'Impact';
`;

const SSubTitle = styled.p`
  font-size: 2rem;
  font-family: 'Impact';
`;

const SWrapper = styled.div`
  text-align: center;
`;

export const Page404: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <SWrapper>
        <STitle>Page404</STitle>
        <SSubTitle>Page Not Found</SSubTitle>
        <Button onClick={() => history.push('/editor')}>エディタに戻る</Button>
      </SWrapper>
    </>
  );
};
