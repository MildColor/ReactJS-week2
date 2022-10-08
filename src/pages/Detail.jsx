import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodoById } from "../redux/modules/todolist";
import styled from "styled-components";
import store from "../redux/config/configStore";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getTodoById(id));
  // }, []);

  dispatch(getTodoById(id));

  // store.subscribe(() => console.log(store.getState()));
  const todo = useSelector((state) => state.todolist.todo);
  console.log(todo);

  return (
    <Tododiv>
      <div>
        <span>ID:{id}</span>
        <button onClick={() => navigate("/")}>이전으로</button>
      </div>
      <h1>{todo.title}</h1>
      <div>{todo.body}</div>
    </Tododiv>
  );
}

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
`;

export default Detail;
