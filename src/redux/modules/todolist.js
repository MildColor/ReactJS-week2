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
  todo: {},
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
        // 두개의 프로퍼티를 가진 initial state를 조작할때에는 하나만 return 해주면 나머지하나는 삭제가 되어버린다.
        // 때문에 둘다 만들어 주는것이 맞는 것 같다.
        // 또 action에서 온  todoId는 문자열이기 때문에 ===으로 비교하면 에러가 난다.
        todos: [...state.todos],
        todo: {
          ...state.todos.find((todo) => todo.id == action.todoId),
        },
      };
    default:
      return state;
  }
};

// export default reducer
export default inputs;
