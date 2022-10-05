import React from "react";

import { Wrapper } from "./styled";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};
