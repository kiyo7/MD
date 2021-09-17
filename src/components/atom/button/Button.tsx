import React from 'react';

//lib
import styled from 'styled-components';

interface Props {
  children: string;
  onClick: () => void;
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
`;

export const Button: React.FC<Props> = (props) => {
  const { onClick, children } = props;

  return <SButton onClick={onClick}>{children}</SButton>;
};
