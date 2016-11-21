import { Map, List } from 'Immutable';
import { ADD_TWEET } from '../actions/tweets';

const defaultState = List([
  [0, 45],
  [0, 22],
  [0, 0],
  [-45, 0]
]);

export const tweetsReducer = (prevState = defaultState, action) => {
  const payload = action.payload;
  const type = action.type;

  switch (type) {

    case ADD_TWEET:
      if (payload.data.coordinates) {
        console.log('tweet');
        return prevState.push(payload.data.coordinates.coordinates).takeLast(200);
      }

    default:
      return prevState;

  }
};
