import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const animation = keyframes`
  from {
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s liner;
`;

function App() {
  return <Box />;
}

export default App;
