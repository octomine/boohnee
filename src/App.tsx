import React, { useState } from "react";

import { BoxV } from "./components/common/box";
// import { RadioGroup } from "./components/radio-group";
import { Menu } from "./components/menu/Menu";

function App() {
  const rg = [{ label: "меню" }, { label: "заказ" }];

  const [selected, setSelected] = useState(0);

  return (
    <BoxV>
      <Menu></Menu>
    </BoxV>
  );
}

export default App;
