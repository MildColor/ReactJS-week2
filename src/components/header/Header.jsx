import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Headerdiv>
      <h1 className="header_title">ToDolist</h1>
    </Headerdiv>
  );
}

export default Header;

const Headerdiv = styled.div`
  display: flex;
  font-size: 60px;
  margin: 50px;

  color: ${(props) => props.theme.secondaryyellow};

  :hover {
    color: ${(props) => props.theme.lightlime};
  }
`;
