import React from 'react';
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import styled from '@emotion/styled';

// Test: passing a value through a context from the parent app to the child app
// Here the theme is provided from the parent app and is consumed by ui-blue
const MyStyledComponent = styled('h2')`
  color: ${p => p.theme.blue};
`;

const App = props => {
  console.log(props);
  return (
    <Switch>
      <Route
        path={props.match.url}
        exact
        render={matchProps => {
          <MyStyledComponent>Styled React here</MyStyledComponent>;
        }}
      />
      <Route
        path={`/purple`}
        exact
        render={matchProps => {
          console.log(matchProps);
          return <div>I am Purple</div>;
        }}
      />
    </Switch>
  );
};
export default withRouter(App);
