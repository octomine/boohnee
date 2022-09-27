import React from "react";
import "./App.css";

import { Menu } from "./components/menu";
import { getMenuFx } from "./components/menu/store";

function App() {
  getMenuFx();
  
  return (
    <div className="App">
      <Menu></Menu>
    </div>
  );
}

export default App;
