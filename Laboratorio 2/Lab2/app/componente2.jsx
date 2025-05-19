import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ffbb00;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #e0a800;
  }
`;

export default function Uiverse2() {
  return <Button>Click Me</Button>;
}
