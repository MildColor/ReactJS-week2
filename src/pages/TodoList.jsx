import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";

const StBox = styled.div`
  background-color: pink;
`;

function TodoList() {
  return (
    <StBox>
      <Layout></Layout>
    </StBox>
  );
}

export default TodoList;
