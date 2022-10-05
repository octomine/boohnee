import React from "react";

import { BoxH } from "../common/box";
import { Button } from "../common/button";

import { RadioGroupProps } from "./types";

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  onSelect,
}) => {
  return (
    <BoxH>
      {children.map(({ label }, index) => {
        return <Button onClick={() => onSelect(index)}>{label}</Button>;
      })}
    </BoxH>
  );
};
