import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import styled from "styled-components";

function Layout() {
  return (
    <Layoutdiv>
      <Header></Header>
      <Form></Form>
      <List></List>
    </Layoutdiv>
  );
}

export default Layout;

const Layoutdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  min-width: 800px;
  max-width: 1200px;
`;
