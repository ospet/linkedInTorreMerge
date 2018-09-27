import { combineReducers } from 'redux';
import torre from './torre/torreReducer';
import li from './linkedin/linkedinReducer';

const rootReducer = combineReducers({
  torre,
  li
});

export default rootReducer;