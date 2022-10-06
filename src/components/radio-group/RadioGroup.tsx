import React from "react";

import { RadioGroupProps } from "./types";
import { Plate } from "./styled";

import { RadioButton } from "./elements/radio-button";

import { setSelected, $selected } from "./store";
import { useStore } from "effector-react";

export const RadioGroup: React.FC<RadioGroupProps> = ({ children }) => {
  const selected = useStore($selected);

  const onSelect = (n: number) => {
    setSelected(n);
  };

  return (
    <Plate>
      {children.map(({ label, info }, index) => {
        return (
          <RadioButton
            isSelected={selected === index}
            onClick={() => onSelect(index)}
            info={info}
          >
            {label}
          </RadioButton>
        );
      })}
    </Plate>
  );
};
