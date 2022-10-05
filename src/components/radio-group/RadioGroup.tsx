import React from "react";

import { Button } from "../common/button";

import { RadioGroupProps } from "./types";
import { Plate } from "./styled";

export const RadioGroup: React.FC<RadioGroupProps> = (
  {
    // children,
    // onSelect,
  }
) => {
  return (
    <Plate>
      {/* {children.map(({ label }, index) => {
        return <Button onClick={() => onSelect(index)}>{label}</Button>;
      })} */}
    </Plate>
  );
};
