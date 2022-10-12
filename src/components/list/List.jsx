import { useSelector } from "react-redux";
import styled from "styled-components";

import Todo from "../todo/Todo";

function List() {
  const todos = useSelector((state) => state.todolist.todos);

  // todos 배열을 받아온 후에 isDone값을 기준으로 filter해준다.
  // 이후 map메소드를 이용해 filter된 배열의 요소를 Todo 컴포넌트에 적용시켜준다.
  const isDoneList = todos.filter((todo) => todo.isDone === false);
  const doneNum = todos.filter((todo) => todo.isDone === true);

  return (
    <ListdUl>
      <h2 className="list-name">Working...! ({isDoneList.length})</h2>
      <Wrapli>
        {isDoneList?.map((todo) => {
          return <Todo key={todo.id} todo={todo}></Todo>;
        })}
      </Wrapli>
      <h2 className="list-name">Done...! ({doneNum.length})</h2>
      <Wrapli>
        {doneNum?.map((todo) => {
          return <Todo key={todo.id} todo={todo}></Todo>;
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
