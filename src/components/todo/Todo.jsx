import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, isDoneTodo } from "../../redux/modules/todolist";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Todo({ todo }) {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todolist.todos);

  return (
    <Tododiv>
      <Link to={`/${todo.id}`}>
        <div>상세보기</div>
      </Link>
      <h2 className="h2-container">{todo.title}</h2>
      <div>{todo.body}</div>
      <TodoBtndiv>
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
          {todo.isDone === false ? "완료하기" : "취소하기"}
        </button>
      </TodoBtndiv>
    </Tododiv>
  );
}

export default Todo;

const Tododiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 220px;
  height: 180px;
  border: 3px solid palevioletred;
  margin: 20px;
  padding: 7px;
  border-radius: 12px;
  background-color: #fad2e6;
  && h2,
  div {
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  && a {
    text-decoration: none;
    color: palevioletred;
  }
`;

const TodoBtndiv = styled.div`
  display: flex;
  justify-content: space-evenly;

  && button {
    background-color: pink;
    border: 1px solid palevioletred;
    border-radius: 3px;
  }
`;
