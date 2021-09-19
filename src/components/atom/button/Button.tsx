//lib
import React from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
  onClick: () => void;
  cancel?: boolean;
}

const SButton = styled.button`
  height: 2rem;
  min-width: 5rem;
  color: white;
  background-color: dodgerblue;
  padding: 0 1rem;
  font-size: 1rem;
  box-shadow: none;
  border: none;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &.cancel {
    color: gray;
    background: white;
    border: 1px solid gray;

    :hover {
      color: white;
      background-color: gray;
    }
  }
`;

export const Button: React.FC<Props> = (props) => {
  const { children, onClick, cancel } = props;

  return (
    <SButton onClick={onClick} className={cancel ? 'cancel' : ''}>
      {children}
    </SButton>
  );
};
