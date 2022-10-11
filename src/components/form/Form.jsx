import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteAll, deleteTodo } from "../../redux/modules/todolist";
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
  const { title, body } = todoObj;

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

  const onDeleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteAll());
  };

  return (
    <StFormDiv>
      <StForm onSubmit={onSubmitHandler}>
        <label htmlFor="title">제목</label>
        <input name="title" onChange={onChangHandler} value={title} />
        <label htmlFor="body">내용</label>
        <input name="body" onChange={onChangHandler} value={body} />
        <button className="form-btn">ADD</button>
        <button className="form-btn" onClick={onDeleteHandler}>
          DELETE ALL
        </button>
      </StForm>
    </StFormDiv>
  );
}

export default Form;

const StForm = styled.form`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  & label {
    margin: 0 20px;
    writing-mode: vertical-lr;
    color: ${(props) => props.theme.secondaryyellow};
    font-weight: bold;
  }
  & input {
    border: 3px solid ${(props) => props.theme.lightlime};
    border-radius: 10px;
  }

  .form-btn {
    margin: 0 10px;
    background-color: ${(props) => props.theme.primaryred};
    border-radius: 5px;
    border: 3px solid ${(props) => props.theme.lightlime};
    color: ${(props) => props.theme.secondaryyellow};
    font-weight: bold;
  }
`;

const StFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.primaryred};
  border: 3px solid ${(props) => props.theme.lightlime};
  width: 70%;
  height: 50px;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
`;
