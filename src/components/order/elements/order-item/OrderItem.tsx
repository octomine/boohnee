import React from "react";

import { Plate } from "../../../../styles/common";
import { ButtonIcon } from "../../../common/button-icon";

import { OrderItemProps } from "./types";
import { Label, Time, Ready } from "./styled";
import { removeOrderItemFx, readyOrderItemFx } from "../../../../effects";

export const OrderItem: React.FC<OrderItemProps> = ({ children }) => {
  const { id, text, time, visible } = children;
  const timeSpent: number = new Date().getTime() - new Date(time).getTime();

  return (
    <Plate>
      <ButtonIcon type="del" onClick={() => removeOrderItemFx(id)} />
      <Ready onClick={() => readyOrderItemFx(id)}>
        <Label visible={visible}>{text}</Label>
        <Time visible={visible}>{timeSpent}</Time>
      </Ready>
    </Plate>
  );
};
