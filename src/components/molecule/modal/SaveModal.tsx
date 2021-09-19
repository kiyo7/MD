//lib
import React, { useState } from 'react';
import styled from 'styled-components';

//components
import { Button } from '../../atom/button/Button';

const SWrapper = styled.div`
  align-items: center;
  background-color: #0002;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const SModal = styled.div`
  background: #fff;
  padding: 1rem;
  width: 32rem;
`;

const STitleInput = styled.input`
  width: 29rem;
  padding: 0.5rem;
`;

const SControl = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

interface Props {
  onSave: (title: string) => void;
  onCancel: () => void;
}

export const SaveModal: React.FC<Props> = (props) => {
  const { onSave, onCancel } = props;
  const [title, setTitle] = useState(new Date().toISOString());

  return (
    <SWrapper>
      <SModal>
        <p>テキストの内容を保存します。</p>
        <p>保存内容のタイトルを入力して「保存」ボタンを押してください。</p>
        <p>
          <STitleInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <SControl>
          <Button onClick={onCancel} cancel>
            キャンセル
          </Button>
          <Button onClick={() => onSave(title)}>保存</Button>
        </SControl>
      </SModal>
    </SWrapper>
  );
};
