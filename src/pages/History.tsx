//lib
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

//function
import { getMemos, MemoRecord } from '../indexeddb/memos';

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

const SMemo = styled.button`
  display: block;
  background-color: white;
  border: 2px solid black;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  text-align: left;
`;

const SMemoTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: 'Impact';
`;

const SMemoText = styled.div`
  font-size: 0.85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Props {
  setText: (text: string) => void;
}

export const History: React.FC<Props> = (props) => {
  const { setText } = props;

  const [memos, setMemos] = useState<MemoRecord[]>([]);

  const history = useHistory();

  useEffect(() => {
    getMemos().then(setMemos);
  }, []);
  return (
    <SHeaderArea>
      <Header title="History">
        <Link to="/editor">エディタに戻る</Link>
      </Header>
      <SWrapper>
        {memos.map((memo) => {
          return (
            <SMemo
              key={memo.datetime}
              onClick={() => {
                setText(memo.text);
                history.push('/editor');
              }}
            >
              <SMemoTitle>{memo.title}</SMemoTitle>
              <SMemoText>{memo.text}</SMemoText>
            </SMemo>
          );
        })}
      </SWrapper>
    </SHeaderArea>
  );
};
