import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

function Layout() {
  return (
    <div className="layout">
      <Header></Header>
      <Form></Form>
      <List></List>
    </div>
  );
}

export default Layout;
