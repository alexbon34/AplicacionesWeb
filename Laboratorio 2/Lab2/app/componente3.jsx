import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: #ffbb00;
  border-radius: 20px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Uiverse3() {
  return <Box>I'm a UIverse Box</Box>;
}
