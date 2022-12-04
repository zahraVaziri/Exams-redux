import axios from "axios";
import { FETCH_USER_FAILURE,FETCH_USER_SUCCESS,FETCH_USER_REQUEST } from "./userType"

export const fetchUserRequest = ()=>{
    return{
        type: FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload:data
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload:error
  };
};

export const FetchUser = ()=>{
    return function(dispatch){
dispatch(fetchUserRequest())
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    const user = res.data;
    dispatch(fetchUserSuccess(user));
  })
  .catch((error) => {
    dispatch(fetchUserFailure(error.message));
  });
    }
}