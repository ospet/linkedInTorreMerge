import { combineReducers } from 'redux';
import torre from './torre/torreReducer';

const rootReducer = combineReducers({
  torre,
});

export default rootReducer;