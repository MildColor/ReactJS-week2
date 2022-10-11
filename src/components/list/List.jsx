import { useSelector } from "react-redux";
import styled from "styled-components";

import Todo from "../todo/Todo";

function List() {
  const todos = useSelector((state) => state.todolist.todos);
  // console.log(todos);

  const isDoneNum = todos.filter((todo) => todo.isDone === false).length;
  const doneNum = todos.filter((todo) => todo.isDone === true).length;

  return (
    <ListdUl>
      <h2 className="list-name">Working...! ({isDoneNum})</h2>
      <Wrapli>
        {todos?.map((todo) => {
          if (todo.isDone === false) {
            return <Todo key={todo.id} todo={todo}></Todo>;
          } else {
            return null;
          }
        })}
      </Wrapli>
      <h2 className="list-name">Done...! ({doneNum})</h2>
      <Wrapli>
        {todos?.map((todo) => {
          if (todo.isDone === true) {
            return <Todo key={todo.id} todo={todo}></Todo>;
          } else {
            return null;
          }
        })}
      </Wrapli>
    </ListdUl>
  );
}

export default List;

const ListdUl = styled.ul`
  .list-name {
    color: ${(props) => props.theme.lightlime};
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  width: 100%;
`;

const Wrapli = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
