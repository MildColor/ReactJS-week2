import React from "react";
import Todo from "../todo/Todo";

//todos 객체배열을 상위 컴포넌트(Form)으로부터 받아옴
function List({
  todos,
  handleRemove,
  handleDone,
  setModalOpen,
  handleModal,
  openModal,
}) {
  return (
    <div className="list-container">
      <h2>Working...!</h2>
      <div className="list-wrapper"></div>

      <h2>Done...!</h2>
      <div className="list-wrapper"></div>
    </div>
  );
}

export default List;
