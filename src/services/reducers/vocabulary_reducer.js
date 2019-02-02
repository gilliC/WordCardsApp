import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from '../constants';

import Word from '../../classes/Word';

const mapDataToWords = data => {
  let vocabulary;
  if (Array.isArray(data)) {
    vocabulary = data.map(item => {
      let word = new Word(item);
      return word;
    });
    return vocabulary;
  }
  throw 'data should be an array';
};

const initialState = {
  vocabulary: [],
  vocabularyCount: 0,
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DATA_SUCCESS:
      const vocabulary = mapDataToWords(action.payload.data);
      return {
        ...state,
        vocabularyCount: vocabulary.length,
        loading: false,
        vocabulary: vocabulary,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        vocabularyCount: 0,
        vocabulary: [],
      };

    default:
      return state;
  }
}
