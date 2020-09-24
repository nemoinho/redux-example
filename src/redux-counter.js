import {useSelector, useDispatch} from 'react-redux';

export default (name) => {
  const dispatch = useDispatch();
  return [
    useSelector(state => state[name] || 0),
    () => dispatch({type: 'increment', name}),
    () => dispatch({type: 'decrement', name})
  ];
}
