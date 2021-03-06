import {
  FETCH_VOCABULARY_BEGIN,
  FETCH_VOCABULARY_FAILURE,
  FETCH_VOCABULARY_SUCCESS,
} from '../constants';

const initialState = {
  vocabulary: [],
  vocabularyCount: NaN,
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_VOCABULARY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_VOCABULARY_SUCCESS:
      return {
        ...state,
        vocabularyCount: action.payload.vocabulary.length,
        loading: false,
        vocabulary: action.payload.vocabulary,
      };

    case FETCH_VOCABULARY_FAILURE:
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
