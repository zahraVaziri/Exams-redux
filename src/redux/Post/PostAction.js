import {
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POST_REQUEST,
} from "./PostType";

export const fetchPostRequest = (id) => {
  return {
    type: FETCH_POST_REQUEST,
    payload: id,
  };
};
export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};
export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};
