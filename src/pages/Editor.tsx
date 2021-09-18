import React, { useState } from 'react';

//lib
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

//hooks
import { useStateWithStorage } from '../hooks/use_state_with_storage';

//functions
import { putMemo } from '../indexeddb/memos';

//components
import { MdIcon } from '../components/atom/icon/MdIcon';
import { Button } from '../components/atom/button/Button';
import { SaveModal } from '../components/molecule/modal/SaveModal';

const SHeader = styled.header`
  align-content: center;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`;

const SHeaderContents = styled.div`
  display: flex;
  line-height: 0.5rem;
  height: 2rem;
`;

const SHeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-family: 'Impact';
`;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`;

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`;

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`;

const StorageKey = 'pages/editor:text';

export const Editor: React.FC = () => {
  const [text, setText] = useStateWithStorage('', StorageKey);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SHeader>
        <SHeaderContents>
          <MdIcon />
          <SHeaderTitle>MarkDown Editor</SHeaderTitle>
        </SHeaderContents>
        <Button onClick={() => setShowModal(true)}>完成</Button>
      </SHeader>
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
