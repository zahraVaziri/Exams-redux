import { combineReducers } from "redux";
import {cakeReducer} from './cake/cakeReducer'
import { IceReducer } from "./icecream/IceReducer";
import { postReducer } from "./Post/PostReducer";
import { userReducer } from "./user/userReducer";
const rootReducer = combineReducers({
cake: cakeReducer,
ice: IceReducer,
user: userReducer,
post: postReducer
})

export default rootReducer