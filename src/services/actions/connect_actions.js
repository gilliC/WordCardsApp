import axios from 'axios';
import {
  CONNECT_BEGIN,
  CONNECT_FAILURE,
  CONNECT_SUCCESS,
  serverRequestsHandler,
} from '../constants';
import {CONNECT_SERVER} from '../../classes/ServerRequests';
import {handleErrors} from '../functionsUtilities';

export const connectBegin = () => ({type: CONNECT_BEGIN});
export const connectSuccess = () => ({type: CONNECT_SUCCESS});
export const connectFailure = error => ({
  type: CONNECT_FAILURE,
  payload: {error: error},
});

export function connectServer() {
  return dispatch => {
    dispatch(connectBegin());
    axios
      .get(serverRequestsHandler.getRequestUrl(CONNECT_SERVER))
      .then(res => {
        if (res.data.answer === 'connection succeed')
          dispatch(connectSuccess());
      })
      .catch(error => {
        dispatch(connectFailure(error));
      });
  };
}
