import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, isDoneTodo } from "../../redux/modules/todolist";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Todo({ todo }) {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todolist.todos);

  let isComplete;

  if (todo.isDone === false) {
    isComplete = "완료하기";
  } else if (todo.isDone === true) {
    isComplete = "취소하기";
  }

  return (
    <Tododiv>
      <Link to={`/${todo.id}`}>
        <div>상세페이지</div>
      </Link>
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
    </Tododiv>
  );
}

export default Todo;

const Tododiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 150px;
  border: 3px solid #7d65e6;
  margin: 20px;
  padding: 7px;
  border-radius: 12px;
  && h2,
  div {
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
