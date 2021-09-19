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

const SWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 0;
  bottom: 0;
  left: 0;
`;

const STextArea = styled.textarea`
  position: absolute;
  width: 50vw;
  top: 0;
  bottom: 0;
  left: 0;
  font-size: 1rem;
  padding: 0.5rem;
  border-right: 3px solid silver;
  border-top: 3px solid silver;
`;

const SPreview = styled.div`
  position: absolute;
  width: 50vw;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  padding: 0.5rem;
  border-top: 3px solid silver;
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
      <Header title="MarkDown Editor">
        <div style={{ marginRight: '15px' }}>
          <Link to="/history">履歴を見る</Link>
        </div>
        <Button onClick={() => setShowModal(true)}>完成</Button>
      </Header>

      <SWrapper>
        <STextArea
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <SPreview>
          <ReactMarkdown children={text} />
        </SPreview>
      </SWrapper>
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
