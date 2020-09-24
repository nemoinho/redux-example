import { createStore } from 'redux';

const reducers = (state = {}, {type, name}) => {
  const events = {
    increment: () => ({...state, [name]: (state[name] || 0) + 1}),
    decrement: () => ({...state, [name]: (state[name] || 0) - 1}),
  };
  return events[type] ? events[type]() : state;
}

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
