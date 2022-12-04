import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./PostType";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case FETCH_POST_FAILURE:
      return { loading: false, error: action.payload, data: {} };
    case FETCH_POST_SUCCESS:
      return { loading: false, error: "", data: action.payload };

    default:
      return state;
  }
};
