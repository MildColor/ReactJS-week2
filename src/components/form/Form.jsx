import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteAll, deleteTodo } from "../../redux/modules/todolist";
import styled from "styled-components";

function Form() {
  // dispatch를 사용하기 위해
  const dispatch = useDispatch();

  // input에서 바뀐 값을 담을 todoObj
  const [todoObj, setTodoObj] = useState({
    title: "",
    body: "",
    isDone: false,
    id: 0,
  });

  // todoObj를 구조분해 할당
  const { title, body } = todoObj;

  // input값들이 바뀌면 setTodoObj를 통해 바뀐값을 적용
  const onChangHandler = (e) => {
    // 각 input의 name과 value를 구조분해 할당
    const { name, value } = e.target;

    // 변화가 발생한 input의 name과 value를 todoObj의 프로퍼티 키와 vaule로 넣어줌
    // 불변성을 위해 스프레드 문법으로 obj을 얕은 복사하여 이용.
    setTodoObj({ ...todoObj, [name]: value });
  };

  // 제출시
  const onSubmitHandler = (e) => {
    // 새로고침 방지
    e.preventDefault();
    // dispatch에 action을 addTodo 하여 바뀐 todoObj 값을 인자로 보내준다.
    dispatch(addTodo({ ...todoObj }));
    // todoObj를 초기화
    setTodoObj({
      ...todoObj,
      title: "",
      body: "",
      id: 0,
    });
  };

  // 전부 삭제
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
    padding: 0 2px;
    padding-top: 1px;
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
  margin-bottom: 50px;
  background-color: ${(props) => props.theme.primaryred};
  border: 3px solid ${(props) => props.theme.lightlime};
  width: 70%;
  padding: 20px 0;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
`;
