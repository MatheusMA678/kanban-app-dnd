import React from "react";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-purple-500 text-white h-screen grid grid-cols-[15rem_auto]">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
