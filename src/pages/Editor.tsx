import React, { useState } from 'react';

import styled from 'styled-components';

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
  const [text, setText] = useState<string>(
    localStorage.getItem(StorageKey) || ''
  );

  return (
    <>
      <Wrapper>
        <TextArea
          onChange={(e) => {
            const changedText = e.target.value;
            localStorage.setItem(StorageKey, changedText);
            setText(changedText);
          }}
          value={text}
        />
        <Preview>プレビューエリア</Preview>
      </Wrapper>
    </>
  );
};