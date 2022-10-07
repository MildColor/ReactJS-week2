import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Headerdiv>
      <span className="header_title">ToDolist</span>
    </Headerdiv>
  );
}

export default Header;

const Headerdiv = styled.div`
  display: flex;
  font-size: 100px;
`;
