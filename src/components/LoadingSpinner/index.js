import React from 'react';
import styled from 'styled-components';
import PacmanLoader from 'react-spinners/PacmanLoader';
import db from '../../../db.json';

const Div = styled.div`
  display: flex;
  margin: 1em 1em;
  height: 40px;
`;

const LoadingSpinner = () => (
  <Div>
    <PacmanLoader
      color={db.theme.colors.secondary}
      loading
      size={30}
    />
  </Div>
);

export default LoadingSpinner;
