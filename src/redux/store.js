import { applyMiddleware, createStore } from "redux";
import {thunk} from 'redux-thunk';

/* 
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
*/

import rootReducer from "./rootReducer";

// without logger we can use this code & composeWithDevTools() is used to connect redux dev tools with our app
const store = createStore(rootReducer, applyMiddleware(thunk));

// if we want to use redux dev tools then we can use this code
// const store = createStore(rootReducer, composeWithDevTools());

// With the help of logger we can see the state changes in the console log
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );
export default store;
