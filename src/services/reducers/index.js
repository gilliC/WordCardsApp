import {combineReducers} from 'redux';
import connectReducer from './connect_reducer';
import vocabularyReducer from './vocabulary_reducer';
import singleWordReducer from './single_word_reducer';

export default combineReducers({
  connect: connectReducer,
  vocabulary: vocabularyReducer,
  singleWordAnswer: singleWordReducer,
});
