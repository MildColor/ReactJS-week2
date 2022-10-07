import React from "react";

function Todo({ todo, handleRemove, handleDone, handleModal }) {
  //받은 todo의 false값을 바꿔주기 위해

  return (
    <div className="todo-container">
      <h2 className="h2-container">nothing</h2>
      <div>{todo.body}</div>
      <div className="btn-box">
        <button className="form-btn ">삭제하기</button>
        <button className="form-btn "></button>
      </div>
    </div>
  );
}

export default Todo;
