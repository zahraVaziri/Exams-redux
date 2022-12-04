import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from './Sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();
 const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
 );

sagaMiddleware.run(rootSaga);

export default store