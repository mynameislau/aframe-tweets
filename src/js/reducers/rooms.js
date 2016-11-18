import { Map, Record, List, fromJS } from 'Immutable';
import { GET_ROOMS_FROM_FILE, EDIT_POS, CREATE_ANCHOR } from '../actions/rooms';

const createAnchor = (prevState, name) => {
  console.log(name, prevState
    .getIn([name, 'navAnchors'])
    .keys());
  const highestID = prevState
    .getIn([name, 'navAnchors'])
    .keySeq()
    .max((a, b) =>
      Number(a) > Number(b) ? Number(a) : Number(b)
    );

  console.log(highestID);

  return prevState.updateIn([name, 'navAnchors'], navAnchors => {
    return navAnchors.set(String(highestID + 1), Map({ href: '#', position: [0, 0, 5] }));
  });
};

const defaultState = Map({});

export const roomsReducer = (prevState = defaultState, action) => {
  const payload = action.payload;
  const type = action.type;

  switch (type) {

    case GET_ROOMS_FROM_FILE:
      return fromJS(payload.data);

    case EDIT_POS:
      return prevState.setIn([payload.name, 'navAnchors', payload.id, 'position'], payload.position);

    case CREATE_ANCHOR:
      return createAnchor(prevState, payload.name);

    default:
      return prevState;

  }
};
