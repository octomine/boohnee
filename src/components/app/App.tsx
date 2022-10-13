import React from "react";
import { useStore } from "effector-react";
import { ThemeProvider } from "styled-components";

import { Theme } from "../../styles/Theme";
import { RadioGroup } from "../radio-group";
import { Menu } from "../menu";
import { ItemAdd } from "../item-add";
import { Order } from "../order";

import { getMenuFx } from "../../effects";
import { $selected } from "../radio-group/store";

import { Container } from "./styled";

function App() {
  getMenuFx();

  const selected = useStore($selected);

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <RadioGroup>
          {[{ label: "МЕНЮ" }, { label: "ЗАКАЗ", info: "7 новых" }]}
        </RadioGroup>
        {selected === 0 && (
          <>
            <Menu></Menu>
            <ItemAdd></ItemAdd>
          </>
        )}
        {selected === 1 && <Order></Order>}
      </Container>
    </ThemeProvider>
  );
}

export default App;
