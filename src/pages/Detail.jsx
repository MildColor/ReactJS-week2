import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodoById } from "../redux/modules/todolist";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch]);
  const todo = useSelector((state) => state.todolist);
  console.log(todo);

  return (
    <div>
      <div>
        <span>ID:{id}</span>
        <button onClick={() => navigate("/")}>이전으로</button>
      </div>
      {/* <h1>{todo.title}</h1>
      <div>{todo.body}</div> */}
    </div>
  );
}

export default Detail;
