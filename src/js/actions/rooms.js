export const GET_ROOMS_FROM_FILE = 'GET_ROOMS_FROM_FILE';
export const EDIT_POS = 'EDIT_POS';
export const CREATE_ANCHOR = 'CREATE_ANCHOR';


export const getRoomsFromFileAction = data => ({
  type: GET_ROOMS_FROM_FILE,
  payload: {
    data
  }
});

export const editPosAction = (name, id, position) => ({
  type: EDIT_POS,
  payload: {
    name,
    id,
    position
  }
});

export const createAnchorAction = name => ({
  type: CREATE_ANCHOR,
  payload: {
    name
  }
});
