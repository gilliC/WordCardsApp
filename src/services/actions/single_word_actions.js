import axios from 'axios';
import {
  serverRequestsHandler,
  FETCH_SINGLE_WORD_ANSWER_BEGIN,
  FETCH_SINGLE_WORD_ANSWER_FAILURE,
  FETCH_SINGLE_WORD_ANSWER_SUCCESS,
  CLEAR_SINGLE_WORD_ANSWER,
} from '../constants';
import {INSERT_WORD} from '../../classes/ServerRequests';
import {handleErrors, capitalizeFirstLetter} from '../functionsUtilities';

export const fetchAnswerBegin = () => ({
  type: FETCH_SINGLE_WORD_ANSWER_BEGIN,
});
export const fetchAnswerSuccess = answer => ({
  type: FETCH_SINGLE_WORD_ANSWER_SUCCESS,
  payload: {answer},
});
export const fetchAnswerFailure = error => ({
  type: FETCH_SINGLE_WORD_ANSWER_FAILURE,
  payload: {error: error},
});
export const clearAnswer = () => ({
  type: CLEAR_SINGLE_WORD_ANSWER,
});

export function insertWord(germanWord, translation, gender) {
  return dispatch => {
    dispatch(fetchAnswerBegin());
    germanWord = capitalizeFirstLetter(germanWord);
    translation = capitalizeFirstLetter(translation);
    console.log({germanWord, translation, gender});
    axios
      .get(
        serverRequestsHandler.getRequestUrl(INSERT_WORD, [
          germanWord,
          translation,
          gender,
        ]),
      )
      .then(res => dispatch(fetchAnswerSuccess(res.data)))
      .catch(error => dispatch(fetchAnswerFailure(error)));
    /**
    const url =
      serverURL +
      ':' +
      serverPort +
      '/insert/' +
      germanWord.toString() +
      '/' +
      englishTrans.toString() +
      '/' +
      gender.toString();
    fetch(url)
      .then(handleErrors)
      .then(res => {
        return res.json();
      })
      .then(answer => {
        dispatch(fetchAnswerSuccess(answer));
        return answer;
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchAnswerFailure(error));
      });
     **/
  };
}
