import React from 'react';
import { Route } from 'react-router';

import App from './components/app';

const Greeting1 = () => {
  return <div>The Greeting page1 ...</div>;
};

const Greeting2 = () => {
  return <div>The Greeting page2 ...</div>;
};

const Greeting3 = () => {
  return <div>The Greeting page3 ...</div>;
};

export default (
  <Route path="/" component={App}>
    <Route path="greet1" component={Greeting1} />
    <Route path="greet2" component={Greeting2} />
    <Route path="greet3" component={Greeting3} />
  </Route>
);
