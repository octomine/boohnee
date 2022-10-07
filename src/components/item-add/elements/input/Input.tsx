import React from "react";
import { useStore } from "effector-react";

import { setValue, $value } from "./store";

import { Field } from "./styled";

export const Input = () => {
  const value = useStore($value);

  const onChange = (evt: React.ChangeEvent) => {
    setValue(evt.target.value);
  };

  return <Field rows={2} onChange={onChange} value={value} />;
};
