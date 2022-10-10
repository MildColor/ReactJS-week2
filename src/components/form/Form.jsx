import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/modules/todolist";
import styled from "styled-components";

function Form() {
  const dispatch = useDispatch();
  // const nextId = useRef(1);
  const todos = useSelector((state) => state.todolist.todos);

  const [todoObj, setTodoObj] = useState({
    title: "",
    body: "",
    isDone: false,
    id: 0,
  });
  const { title, body, id, isDone } = todoObj;

  const onChangHandler = (e) => {
    const { name, value } = e.target;
    setTodoObj({ ...todoObj, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const todo = { ...todoObj };

    dispatch(addTodo({ ...todo, id: todos[todos.length - 1]?.id + 1 || 0 }));

    setTodoObj({
      ...todoObj,
      title: "",
      body: "",
      id: 0,
    });
  };

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
  background-color: #b1b2ff;
  border-radius: 10px;
  box-sizing: border-box;

  && input {
    margin: 0 10px;
  }
  && label {
    font-weight: 800;
  }
  && button {
    background-color: #aac4ff;
    border: 1px solid #d2daff;
    border-radius: 3px;
  }
`;
