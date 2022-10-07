import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";

function TodoList() {
  return (
    <StBox>
      <Layout></Layout>
    </StBox>
  );
}

export default TodoList;

const StBox = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
`;
