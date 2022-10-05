import React from "react";

import { ThemeProvider } from "styled-components";
import { Theme } from "../../styles/Theme";
import { RadioGroup } from "../radio-group";
import { Menu } from "../menu/Menu";

import { Container } from "./styled";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <RadioGroup></RadioGroup>
        <Menu></Menu>
      </Container>
    </ThemeProvider>
  );
}

export default App;
