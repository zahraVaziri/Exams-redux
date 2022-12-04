import { wathFetchPost } from "./PostSaga";
import {all} from 'redux-saga/effects'
export function* rootSaga(){
    yield all([wathFetchPost()])
}