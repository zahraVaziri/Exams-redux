import { FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE } from "./userType";

const initialState = {
  loading: false,
  data:[],
  error:''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_FAILURE:
      return { loading: false ,error:action.payload,data:[]};
    case FETCH_USER_SUCCESS:
      return { loading: false, error: '', data: action.payload };

    default:
      return state;
  }
};
