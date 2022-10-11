import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import styled from "styled-components";

function TodoList() {
  return (
    <StBox>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </StBox>
  );
}

export default TodoList;

const StBox = styled.div`
  background-color: #f38181;
  display: flex;
  justify-content: center;
`;
