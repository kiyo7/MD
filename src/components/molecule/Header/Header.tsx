//lib
import React from 'react';
import styled from 'styled-components';

//components
import { MdIcon } from '../../atom/icon/MdIcon';

const SHeaderArea = styled.div`
  position: fixed;
  height: 60px;
  top: 0;
  right: 0;
  left: 0;
  background-color: tomato;
`;

const SHeaderWrapper = styled.header`
  display: flex;
  height: 2rem;
  align-content: center;
  justify-content: space-between;
  line-height: 2rem;
  padding: 0.5rem 1rem;
`;

const SHeaderLeft = styled.div`
  display: flex;
  height: 2rem;
  line-height: 0.5rem;
`;

const SHeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-family: 'Impact';
`;

const SHeaderRight = styled.div`
  display: flex;
`;

const SHeaderControl = styled.div`
  display: flex;
  height: 2rem;
  align-content: center;
  justify-content: center;

  & > * {
    margin-left: 0.5rem;
  }
`;

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Header: React.FC<Props> = (props) => {
  const { title, children } = props;

  return (
    <SHeaderArea>
      <SHeaderWrapper>
        <SHeaderLeft>
          <MdIcon />
          <SHeaderTitle>{title}</SHeaderTitle>
        </SHeaderLeft>
        <SHeaderRight>
          <SHeaderControl>{children}</SHeaderControl>
        </SHeaderRight>
      </SHeaderWrapper>
    </SHeaderArea>
  );
};
