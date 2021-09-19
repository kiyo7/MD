//lib
import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

//functions
import { putMemo } from '../indexeddb/memos';

//components
import { Header } from '../components/molecule/Header/Header';
import { Button } from '../components/atom/button/Button';
import { SaveModal } from '../components/molecule/modal/SaveModal';

const SHeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 3rem;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`;

const TextArea = styled.textarea`
  border-right: 3px solid silver;
  border-top: 3px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`;

const Preview = styled.div`
  border-top: 3px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`;

interface Props {
  text: string;
  setText: (text: string) => void;
}

export const Editor: React.FC<Props> = (props) => {
  const { text, setText } = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SHeaderArea>
        <Header title="MarkDown Editor">
          <div style={{ marginRight: '15px' }}>
            <Link to="/history">履歴を見る</Link>
          </div>
          <Button onClick={() => setShowModal(true)}>完成</Button>
        </Header>
      </SHeaderArea>
      <Wrapper>
        <TextArea
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <Preview>
          <ReactMarkdown children={text} />
        </Preview>
      </Wrapper>
      {showModal && (
        <SaveModal
          onSave={(title: string): void => {
            putMemo(title, text);
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};
