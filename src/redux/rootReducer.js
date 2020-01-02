import { combineReducers } from 'redux';
import langReducer from './language/lang.reducer';
import dropDownReducer from './dropDown/dropDown.reducer';

export default combineReducers({
  lang: langReducer,
  dropDown: dropDownReducer
})