import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/modules/todolist";
import Todo from "../todo/Todo";

function List() {
  const todos = useSelector((state) => state.todolist.todos);

  // console.log(todos);

  return (
    <div className="list-container">
      <h2>Working...!</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return <Todo key={todo.id} todo={todo}></Todo>;
          } else {
            return null;
          }
        })}
      </div>

      <h2>Done...!</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return <Todo key={todo.id} todo={todo}></Todo>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
