import React from "react";
import "./App.css";

import Count from "./components/Count";
import List from "./components/List";
import List2 from "./components/List2";

import Contador  from "./components/Contador"

function App() {
  return (
    <>
    <div>
      <Count initialCount={1} />
      <p>-------------</p>
      <List />
      <p>-------------</p>
      <List2 />
    </div>
    <div>
      <Contador numeroInicial={10} />
    </div>
    </>
  );
}

export default App;
