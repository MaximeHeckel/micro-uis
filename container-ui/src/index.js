import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import Red from 'ui-red';
import Blue from 'ui-blue';

const theme = {
  blue: '#007BFF'
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <p>Container UI!!</p>
      <Blue />
      <Red />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
