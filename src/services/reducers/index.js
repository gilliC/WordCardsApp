import {combineReducers} from 'redux';
import vocabularyReducer from './vocabulary_reducer';
export default combineReducers({
  vocabulary: vocabularyReducer,
});
