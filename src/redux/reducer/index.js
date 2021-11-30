import {combineReducers} from 'redux';
import {contactReducer} from './contact';
import {inputContactReducer, photoReducer} from './inputContact';

const reducer = combineReducers({
  contactReducer,
  photoReducer,
  inputContactReducer,
});

export default reducer;
