//lib
import React from 'react';
import { useHistory } from 'react-router-dom';

//components
import { Button } from '../components/atom/button/Button';

export const History: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>履歴</h1>
      <Button onClick={() => history.push('/editor')}>エディタに戻る</Button>
    </>
  );
};
