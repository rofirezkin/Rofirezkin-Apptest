import {combineReducers} from 'redux';
import {contactReducer} from './contact';
import {globalReducer} from './global';
const reducer = combineReducers({
  contactReducer,
  globalReducer,
});

export default reducer;
