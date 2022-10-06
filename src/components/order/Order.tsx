import React from "react";
import { useStore } from "effector-react";

import { OrderItem } from "./elements/order-item";
import { $order } from "./store";

export const Order: React.FC = () => {
  const order = useStore($order);

  return (
    <>
      {order.map((item) => (
        <OrderItem>{item}</OrderItem>
      ))}
    </>
  );
};
