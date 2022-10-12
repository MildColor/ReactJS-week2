// Action Value
// 유지보수, 가독성, 오타가 발생할 경우를 대비하여 변수에 할당.
// 액션 객체를 한곳에서 관리
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const ISDONE_TODO = "ISDONE_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_ALL = "DELETE_ALL";

// Action Creator
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
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

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

// Initial State
const initialState = {
  todos: [],
  todo: { id: 0, title: "", body: "", isDone: false },
};

// Reducer
const inputs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // 인자로 받아온 action.todo값을 state의 todo배열에 넣어준다.
      return {
        ...state,
        // 넣어줄때 state의 불변성을 지켜주기 위해 얕은 복사하여 값을 바꿔줌
        todos: [
          ...state.todos,
          {
            ...action.todo,
            // 옵셔널 체이닝을 통해 todos배열에 마지막 요소가 존재하면 그 id값에 + 1해서 바꿔준다.
            // 없다면 0을 넣어준다.
            id: state.todos[state.todos.length - 1]?.id + 1 || 0,
            isDone: false,
          },
        ],
      };

    case DELETE_TODO:
      //삭제하기를 눌렀을 때, 그 todo의 id를 payload(todoId)로 받아온다.
      // filter메서드를 이용해 받아온 값인 action.todoId와 state의 todos배열의 요소중 id값이 일치하는 요소만 제외하고 반환
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.todoId)],
      };

    case ISDONE_TODO:
      // 완료하기를 누른 경우
      // map메서드를 이용해 받아온 id값과 일치하는 todo를 찾아서 일치하면 isDone값을 바꿔준다.
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
        // state의 todos 배열의 요소중에서 action으로 받아온 id 값과 일치하는 요소를 반환하여 todo 객체로 만들어 준다.
        // action에서 온  todoId는 문자열이기 때문에 ===으로 비교하면 에러가 난다. parseInt로 정수변환
        ...state,
        todo: {
          ...state.todos.find((todo) => todo.id === parseInt(action.todoId)),
        },
      };

    case DELETE_ALL:
      // 전부 삭제하기
      // 버튼을 누르면 state를 초기값으로 만든다.
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

// export default reducer
export default inputs;
