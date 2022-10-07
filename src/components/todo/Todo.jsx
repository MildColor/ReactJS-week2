import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, isDoneTodo } from "../../redux/modules/todolist";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todolist.todos);

  let isComplete;

  if (todo.isDone === false) {
    isComplete = "완료하기";
  } else if (todo.isDone === true) {
    isComplete = "취소하기";
  }

  return (
    <div className="todo-container">
      <div>상세페이지</div>
      <h2 className="h2-container">{todo.title}</h2>
      <div>{todo.body}</div>
      <div className="btn-box">
        <button
          className="form-btn "
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          삭제하기
        </button>
        <button
          className="form-btn "
          onClick={() => dispatch(isDoneTodo(todo.id))}
        >
          {isComplete}
        </button>
      </div>
    </div>
  );
}

export default Todo;
