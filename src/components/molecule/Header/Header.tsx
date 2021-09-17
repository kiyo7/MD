import React from 'react';

import styled from 'styled-components';

import { MdIcon } from '../../atom/icon/MdIcon';

const SHeader = styled.header`
  height: 2rem;
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
`;

const SHeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-family: 'Impact';
`;

export const Header = () => {
  return (
    <SHeader>
      <SHeaderContents>
        <MdIcon />
        <SHeaderTitle>MarkDown Editor</SHeaderTitle>
      </SHeaderContents>
    </SHeader>
  );
};
