//lib
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

//function
import { getMemos, MemoRecord, getMemoPageCount } from '../indexeddb/memos';

//components
import { Header } from '../components/molecule/Header/Header';

const SWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 0;
  bottom: 3rem;
  left: 0;
  overflow-y: scroll;
  padding: 0 1rem;
`;

const SMemo = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0;
  border: 2px solid black;
`;

const SMemoTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-family: 'Impact';
`;

const SMemoText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.85rem;
`;

const SPaging = styled.div`
  position: fixed;
  height: 3rem;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  line-height: 2rem;
  padding: 0.5rem;
`;

const SPagingButton = styled.button`
  display: inline-block;
  height: 2rem;
  background: none;
  padding: 0.5rem 1rem;
  border: none;

  &:disabled {
    color: silver;
  }
`;

interface Props {
  setText: (text: string) => void;
}

export const History: React.FC<Props> = (props) => {
  const { setText } = props;

  const [memos, setMemos] = useState<MemoRecord[]>([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const history = useHistory();

  useEffect(() => {
    getMemos(1).then(setMemos);
    getMemoPageCount().then(setMaxPage);
  }, []);

  const canNextPage: boolean = page < maxPage;
  const canPrevPage: boolean = page > 1;

  const movePage = (targetPage: number) => {
    if (targetPage < 1 || maxPage < targetPage) {
      return;
    }
    setPage(targetPage);
    getMemos(targetPage).then(setMemos);
  };

  return (
    <>
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
      <SPaging>
        <SPagingButton
          onClick={() => movePage(page - 1)}
          disabled={!canPrevPage}
        >
          ＜
        </SPagingButton>
        {page} / {maxPage}
        <SPagingButton
          onClick={() => movePage(page + 1)}
          disabled={!canNextPage}
        >
          ＞
        </SPagingButton>
      </SPaging>
    </>
  );
};
