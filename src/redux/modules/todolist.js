import { Action } from "@remix-run/router";

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const ISDONE_TODO = "ISDONE_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

let num = 0;
// Action Creator
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: {
      title: todo.title,
      body: todo.body,
      isDone: todo.isDone,
      id: num++,
    },
  };
};
export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId,
  };
};

export const isDoneTodo = (todoId) => {
  return {
    type: ISDONE_TODO,
    todoId,
  };
};

export const getTodoById = (todoId) => {
  return {
    type: GET_TODO_BY_ID,
    todoId,
  };
};

// Initial State
const initialState = {
  todos: [],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

// Reducer
const inputs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.todo] };

    case DELETE_TODO:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.todoId)],
      };

    case ISDONE_TODO:
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.todoId
              ? { ...todo, isDone: !todo.isDone }
              : { ...todo }
          ),
        ],
      };

    case GET_TODO_BY_ID:
      return {
        todo: {
          ...state.todo,
          ...state.todos.find((todo) => todo.id === action.todoId),
        },
      };

    default:
      return state;
  }
};

// export default reducer
export default inputs;
