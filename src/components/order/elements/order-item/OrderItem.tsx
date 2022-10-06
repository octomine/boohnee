import React from "react";

import { ButtonIcon } from "../../../common/button-icon";

import { OrderItemProps } from "./types";
import { Plate, Label, Time } from "./styled";

export const OrderItem: React.FC<OrderItemProps> = ({ children }) => {
  const { text, time, visible } = children;

  return (
    <Plate>
      <ButtonIcon type="del" onClick={() => console.log("REMOVE!!1")} />
      <Label visible={visible}>{text}</Label>
      <Time visible={visible}>{time}</Time>
    </Plate>
  );
};
