import {CONNECT_BEGIN, CONNECT_FAILURE, CONNECT_SUCCESS} from '../constants';

const initialState = {
  isConnect: null,
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONNECT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CONNECT_SUCCESS:
      console.log('connect succeed');
      return {
        ...state,
        loading: false,
        isConnect: true,
      };

    case CONNECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        isConnect: false,
      };

    default:
      return state;
  }
}
