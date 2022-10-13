import { combineReducers, createStore } from "redux";
import addReducer from "./calculator/addition";
import { clearReducer } from "./calculator/clearresult";
import { divideReducer } from "./calculator/division";
import { multiplyReducer } from "./calculator/multiply";
import { substractReducer } from "./calculator/substraction";

const rootereducer = combineReducers({
  addReducer,
  substractReducer,
  divideReducer,
  multiplyReducer,
  clearReducer,
});
export const store = createStore(rootereducer);
