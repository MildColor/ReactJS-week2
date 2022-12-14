import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <Layoutdiv>{children}</Layoutdiv>;
}

export default Layout;

const Layoutdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100vh;
  min-width: 800px;
  max-width: 1200px;
`;
