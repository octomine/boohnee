import React from "react";
import { useStore } from "effector-react";

import { Button } from "../common/button";

import { Input } from "./elements/input";

import { Contaienr } from "./styled";
import { setInputMode, $inputMode, resetInputMode, onAccept } from "./store";
import { Plate } from "../../styles/common";
import { ButtonIcon } from "../common/button-icon";

export const ItemAdd: React.FC = () => {
  const inputMode = useStore($inputMode);

  return (
    <Contaienr>
      {inputMode ? (
        <>
          <Plate>
            <Input />
          </Plate>
          <Plate>
            <ButtonIcon type="decline" onClick={resetInputMode}></ButtonIcon>
            <ButtonIcon type="accept" onClick={onAccept}></ButtonIcon>
          </Plate>
        </>
      ) : (
        <Plate>
          <Button onClick={setInputMode}>Дoбавить</Button>
        </Plate>
      )}
    </Contaienr>
  );
};
