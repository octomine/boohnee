import React from "react";

import { Plate } from "../../../../styles/common";
import { ButtonIcon } from "../../../common/button-icon";

import { OrderItemProps } from "./types";
import { Label, Ready, Time } from "./styled";
import { removeOrderItemFx, readyOrderItemFx } from "../../../../effects";

export const OrderItem: React.FC<OrderItemProps> = ({ children }) => {
  const { id, text, visible, items } = children;
  // const timeSpent: number = new Date().getTime() - new Date(time).getTime();

  return (
    <Plate>
      <Ready onClick={() => readyOrderItemFx(id)}>
        <Label visible={visible}>{text}</Label>
        <Time visible={visible}>{items.length}</Time>
      </Ready>
      <ButtonIcon type="del" onClick={() => removeOrderItemFx(id)} />
    </Plate>
  );
};
