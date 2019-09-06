import React from 'react';
import styled from '@emotion/styled';

const MyStyledComponent = styled('h2')`
  color: ${p => p.theme.blue};
`;

const App = () => {
  return (
    <div>
      <MyStyledComponent>Styled React here!</MyStyledComponent>
    </div>
  );
};
export default App;
