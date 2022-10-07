import { createStore } from "redux";
import { combineReducers } from "redux";
import todolist from "../modules/todolist";

// import counter from "../modules/counter";

const rootReducer = combineReducers({
  // counter: counter,
  todolist: todolist,
});
const store = createStore(rootReducer);

export default store;
