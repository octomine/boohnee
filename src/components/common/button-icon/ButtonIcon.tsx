import React from "react";
import { IconWrapper } from "../../../styles/common";
import { ButtonIconProps } from "./types";

export const ButtonIcon: React.FC<ButtonIconProps> = ({ type, onClick }) => {
  return <IconWrapper type={type} onClick={onClick}></IconWrapper>;
};
