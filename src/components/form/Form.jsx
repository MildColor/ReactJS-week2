import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/modules/todolist";
import styled from "styled-components";

function Form() {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todolist.todos);
  const initInputs = {
    title: "",
    body: "",
    isDone: false,
    id: 0,
  };
  const [inputs, setInputs] = useState(initInputs);
  const { title, body, id, isDone } = inputs;

  const onChangHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onClickAdd = () => {
    const todo = { title, body, id, isDone };
    dispatch(addTodo(todo));
    setInputs(initInputs);
  };

  // console.log(todos);

  return (
    <div>
      <Formdiv>
        <label htmlFor="title">제목</label>
        <input name="title" onChange={onChangHandler} value={title} />
        <label htmlFor="body">내용</label>
        <input name="body" onChange={onChangHandler} value={body} />
        <button className="form-btn" onClick={onClickAdd}>
          ADD
        </button>
      </Formdiv>
    </div>
  );
}

export default Form;

const Formdiv = styled.div`
  display: flex;

  justify-content: center;

  margin: 20px 0;
`;
