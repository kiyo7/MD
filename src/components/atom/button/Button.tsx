import React from 'react';

//lib
import styled from 'styled-components';

interface Props {
  children: string;
  onClick: () => void;
  cancel?: boolean;
}

const SButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;

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
