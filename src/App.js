import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { GlobalStyle } from "./Styled/main-styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  )
}

export default App
