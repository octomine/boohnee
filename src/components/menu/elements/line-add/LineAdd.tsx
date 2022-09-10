import React from "react";
import { useStore } from "effector-react";

import { Container } from "./styled";
import { setInput, $isInput, resetInput } from "./store";
import { addLine } from "../../store";

export const LineAdd: React.FC = () => {
  const isInput = useStore($isInput);

  const keyUp = (e) => {
    const {
      code,
      target: { value },
    } = e;

    switch (code) {
      case "Enter":
        if (value) {
          addLine(value);
          resetInput();
        }
        break;
      case "Escape":
        resetInput();
        break;
      default:
    }
  };

  return (
    <Container onClick={() => setInput()}>
      {isInput ? <input onKeyUp={(e) => keyUp(e)} /> : "+"}
    </Container>
  );
};
