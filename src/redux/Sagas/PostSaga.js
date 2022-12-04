import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { fetchPostFailure, fetchPostSuccess } from "../Post/PostAction";
import { FETCH_POST_REQUEST } from "../Post/PostType";

function* fetchPost(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}`;
    
    const response = yield call(() => axios.get(apiEndPoint));
    yield put(fetchPostSuccess(response.data));
  } catch (error) {
    yield put(fetchPostFailure(error.message));
  }
}
export function* wathFetchPost() {
  yield takeEvery(FETCH_POST_REQUEST, fetchPost);
}
