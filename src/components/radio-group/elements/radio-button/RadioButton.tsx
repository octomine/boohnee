import React from "react";

import { RadioButtonProps } from "./types";
import { Wrapper, Label, Info } from "./styled";

export const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  isSelected,
  onClick,
  info,
}) => {
  return (
    <Wrapper isSelected={isSelected} onClick={onClick}>
      <Label>{children}</Label>
      {info && <Info>{info}</Info>}
    </Wrapper>
  );
};
