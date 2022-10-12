import { createStore } from "redux";
import { combineReducers } from "redux";
import movies from "../modules/movies";
import todolist from "../modules/todolist";

// import counter from "../modules/counter";

const rootReducer = combineReducers({
  // counter: counter,
  todolist: todolist,
  movies: movies,
});
const store = createStore(rootReducer);

export default store;
