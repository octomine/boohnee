import React from "react";

import { setValue, $value } from "./store";
import { useStore } from "effector-react";

export const Input = () => {
  const value = useStore($value);

  const onChange = (evt: React.ChangeEvent) => {
    setValue(evt.target.value);
  };

  return <input onChange={onChange} value={value} />;
};
