import { Map, List } from 'Immutable';
import { ADD_TWEET } from '../actions/tweets';

const defaultState = List();

export const tweetsReducer = (prevState = defaultState, action) => {
  const payload = action.payload;
  const type = action.type;

  switch (type) {

    case ADD_TWEET:
      if (payload.data.coordinates) {
        return prevState.push(payload.data.coordinates.coordinates).takeLast(50);
      }

    default:
      return prevState;

  }
};
