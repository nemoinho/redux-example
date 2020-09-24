import React from 'react';
import useReduxCounter from './redux-counter';

export default ({name}) => {
  const [counter] = useReduxCounter(name);
  return (
    <div>
      Some: {counter}
    </div>
  );
}

