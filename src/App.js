import React from 'react';
import {Provider} from 'react-redux';
import store from './count-redux-store';
import Counter from './Counter';
import Output from './Output';


function App() {
  return (
    <Provider store={store}>
      <Counter name="a" />
      <Counter name="b" />
      <Counter name="c" />
      <Counter name="a" />
        <p>bfejcbejbekbhj</p>
      <Output name="c"/>
    </Provider>
  );
}

export default App;
