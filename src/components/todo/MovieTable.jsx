import { useDispatch } from "react-redux";
import { deleteTodo, isDoneTodo } from "../../redux/modules/todolist";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MovieTable({ movieList }) {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todolist.todos);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, email, phone }) => (
          <tr key={name + email + phone}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieTable;
