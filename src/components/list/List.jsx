import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/modules/todolist";
import styled from "styled-components";

import Todo from "../todo/Todo";

function List() {
  const todos = useSelector((state) => state.todolist.todos);
  // console.log(todos);

  return (
    <Listdiv>
      <h2>Working...!</h2>
      <Wrapdiv>
        {todos?.map((todo) => {
          if (todo.isDone === false) {
            return <Todo key={todo.id} todo={todo}></Todo>;
          } else {
            return null;
          }
        })}
      </Wrapdiv>

      <h2>Done...!</h2>
      <Wrapdiv>
        {todos?.map((todo) => {
          if (todo.isDone === true) {
            return <Todo key={todo.id} todo={todo}></Todo>;
          } else {
            return null;
          }
        })}
      </Wrapdiv>
    </Listdiv>
  );
}

export default List;

const Listdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
