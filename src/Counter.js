import React from 'react';
import useReduxCounter from './redux-counter';

export default ({name}) => {
  const [counter, increment, decrement] = useReduxCounter(name);
  return (
    <div>
      Count: {counter}
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </div>
  );
}
