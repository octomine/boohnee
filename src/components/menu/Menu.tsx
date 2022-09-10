import React from "react";
import { useStore } from "effector-react";

import { LineMenu } from "./elements/line-menu";
import { LineAdd } from "./elements/line-add";

import { $menu, addLine } from "./store";
import { Container } from "./styled";

export const Menu: React.FC = () => {
  const menu: string[] = useStore($menu);

  const click = () => {
    fetch(`/api/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ value: 11 }),
    });
  };

  return (
    <Container onClick={() => click()}>
      {menu.map((name: string) => (
        <LineMenu name={name}></LineMenu>
      ))}
      <LineAdd></LineAdd>
    </Container>
  );
};
