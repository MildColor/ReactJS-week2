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

  useEffect(() => {
    dispatch(getTodoById(id));
  }, []);

  // dispatch(getTodoById(id));

  // store.subscribe(() => console.log(store.getState()));
  const todo = useSelector((state) => state.todolist.todo);
  console.log(todo);

  return (
    <Detaildiv>
      <div className="detail-top">
        <span>ID:{id}</span>
        <button onClick={() => navigate("/")}>이전으로</button>
      </div>
      <h2>{todo.title}</h2>
      <div>{todo.body}</div>
    </Detaildiv>
  );
}

const Detaildiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 300px;
  border: 3px solid palevioletred;
  margin: 20px;
  padding: 15px;
  border-radius: 12px;
  background-color: #fad2e6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  && h2,
  div {
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  && button {
    background-color: pink;
    border: 1px solid palevioletred;
    border-radius: 3px;
    font-size: 20px;
  }
  .detail-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
`;

export default Detail;
