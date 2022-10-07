// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const ISDONE_TODO = "ISDONE_TODO";

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

    //ES6
    todoId,
  };
};

export const isDoneTodo = (todoId) => {
  return {
    type: ISDONE_TODO,

    //ES6
    todoId,
  };
};

// Initial State
const initialState = {
  todos: [],
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
    default:
      return state;
  }
};

// export default reducer
export default inputs;
