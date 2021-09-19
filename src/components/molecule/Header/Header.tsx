//lib
import React from 'react';
import styled from 'styled-components';

//components
import { MdIcon } from '../../atom/icon/MdIcon';

const SHeaderWrapper = styled.header`
  align-content: center;
  display: flex;
  height: 2rem;
  justify-content: space-between;
  line-height: 2rem;
  padding: 0.5rem 1rem;
`;

const SHeaderLeft = styled.div`
  display: flex;
  line-height: 0.5rem;
  height: 2rem;
`;

const SHeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-family: 'Impact';
`;

const SHeaderRight = styled.div`
  display: flex;
`;

const SHeaderControl = styled.div`
  align-content: center;
  display: flex;
  height: 2rem;
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
    <SHeaderWrapper>
      <SHeaderLeft>
        <MdIcon />
        <SHeaderTitle>{title}</SHeaderTitle>
      </SHeaderLeft>
      <SHeaderRight>
        <SHeaderControl>{children}</SHeaderControl>
      </SHeaderRight>
    </SHeaderWrapper>
  );
};
