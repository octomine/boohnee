import React from "react";

import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/Theme";
import { RadioGroup } from "../radio-group";
import { Menu } from "../menu/Menu";

import { Container } from "./styled";
import { useStore } from "effector-react";
import { $selected } from "../radio-group/store";

function App() {
  const selected = useStore($selected);

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <RadioGroup>
          {[{ label: "МЕНЮ" }, { label: "ЗАКАЗ", info: "7 новых" }]}
        </RadioGroup>
        {selected === 0 && <Menu></Menu>}
        {selected === 1 && <div></div>}
      </Container>
    </ThemeProvider>
  );
}

export default App;
