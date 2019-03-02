import ServerRequests from '../classes/ServerRequests';
const appColors = {
  primaryColor: '#1d3767',
  secondaryColor: '#f2f4f3',
};
export const {primaryColor, secondaryColor} = appColors;
const questionsType = {
  byGender: 'BY_GENDER',
};
export const {byGender} = questionsType;
export const serverRequestsHandler = new ServerRequests();

export const CONNECT_BEGIN = 'CONNECT_BEGIN';
export const CONNECT_SUCCESS = 'CONNECT_SUCCESS';
export const CONNECT_FAILURE = 'CONNECT_FAILURE';

export const FETCH_VOCABULARY_BEGIN = 'FETCH_VOCABULARY_BEGIN';
export const FETCH_VOCABULARY_SUCCESS = 'FETCH_VOCABULARY_SUCCESS';
export const FETCH_VOCABULARY_FAILURE = 'FETCH_VOCABULARY_FAILURE';

export const FETCH_SINGLE_WORD_ANSWER_BEGIN = 'FETCH_SINGLE_WORD_ANSWER_BEGIN';
export const FETCH_SINGLE_WORD_ANSWER_SUCCESS =
  'FETCH_SINGLE_WORD_ANSWER_SUCCESS';
export const FETCH_SINGLE_WORD_ANSWER_FAILURE =
  'FETCH_SINGLE_WORD_ANSWER_FAILURE';
export const CLEAR_SINGLE_WORD_ANSWER = 'CLEAR_SINGLE_WORD_ANSWER';
