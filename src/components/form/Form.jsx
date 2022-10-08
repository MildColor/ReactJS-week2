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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const todo = { title, body, id, isDone };
    dispatch(addTodo(todo));
    setInputs(initInputs);
  };

  // console.log(todos);

  return (
    <StForm onSubmit={onSubmitHandler}>
      <label htmlFor="title">제목</label>
      <input name="title" onChange={onChangHandler} value={title} />
      <label htmlFor="body">내용</label>
      <input name="body" onChange={onChangHandler} value={body} />
      <button className="form-btn">ADD</button>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 10px;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: palevioletred;
  border-radius: 10px;
  box-sizing: border-box;

  && input {
    margin: 0 10px;
  }
  && label {
    font-weight: 800;
  }
  && button {
    background-color: pink;
    border: 1px solid pink;
    border-radius: 3px;
  }
`;
