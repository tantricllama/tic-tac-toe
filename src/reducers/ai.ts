import {
  NEXT_TURN_REQUEST,
  NEXT_TURN_SUCCESS,
  NEXT_TURN_FAILURE,
  AIState,
  AIActions,
} from '../types';

const initialState: AIState = {
  loading: false,
  error: null,
  r: null,
  c: null,
};

export default function(state = initialState, action: AIActions) {
  switch (action.type) {

    case NEXT_TURN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        r: null,
        c: null,
      };

    case NEXT_TURN_SUCCESS:
      return {
        ...state,
        loading: false,
        r: action.data[3],
        c: action.data[4],
      };

    case NEXT_TURN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        r: null,
        c: null
      };

    default:
      return state;
  }
}