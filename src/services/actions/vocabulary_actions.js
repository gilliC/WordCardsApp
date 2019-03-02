import React from 'react';
import axios from 'axios';

import Word from '../../classes/Word';
import {FETCH_VOCABULARY} from '../../classes/ServerRequests';
import {
  serverRequestsHandler,
  FETCH_VOCABULARY_BEGIN,
  FETCH_VOCABULARY_FAILURE,
  FETCH_VOCABULARY_SUCCESS,
} from '../constants';
import {handleErrors} from '../functionsUtilities';

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

export const fetchVocabularyBegin = () => ({
  type: FETCH_VOCABULARY_BEGIN,
});
export const fetchVocabularySuccess = vocabulary => ({
  type: FETCH_VOCABULARY_SUCCESS,
  payload: {vocabulary},
});
export const fetchVocabularyFailure = error => ({
  type: FETCH_VOCABULARY_FAILURE,
  payload: {error: error},
});

export function fetchData() {
  return dispatch => {
    dispatch(fetchVocabularyBegin());
    axios
      .get(serverRequestsHandler.getRequestUrl(FETCH_VOCABULARY))
      .then(response => {
        let vocabulary = mapDataToWords(response.data);
        dispatch(fetchVocabularySuccess(vocabulary));
        return response;
      })
      .catch(error => {
        dispatch(fetchVocabularyFailure(error));
      });
  };
}
