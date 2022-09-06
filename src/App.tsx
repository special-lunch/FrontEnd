import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Regist } from "./pages";
import { Paths } from "./paths";

function App() {
  return (
    <>
      <Routes>
        <Route path={Paths.index} element={<Main />} />
        <Route path={Paths.regist.index} element={<Regist />} />
      </Routes>
    </>
  );
}

export default App;
