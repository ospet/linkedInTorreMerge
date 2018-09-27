import * as actionsTypes from './linkedinConstants';

const initialState = {
  liProfile: null,
  liToken: ''
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.GOT_LI_PROFILE:
      return { ...state, liProfile: action.profile };
    case actionsTypes.GOT_TOKEN:
      return { ...state, liToken: action.liToken };
    default:
      return { ...state };
  }
}
