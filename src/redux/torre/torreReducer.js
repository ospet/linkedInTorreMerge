import * as actionsTypes from './torreConstants';

const initialState = {
  torreProfile: {}
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.GOT_TORRE_PROFILE:
      return { ...state, torreProfile: action.torreProfile };
    default:
      return { ...state };
  }
}
