import React from "react";
import { useStore } from "effector-react";

import { Button } from "../common/button";

import { MenuItem } from "./elements/menu-item";
import { Container } from "./styled";

import { $menu } from "./store";

export const Menu: React.FC<{}> = () => {
  const list = useStore($menu);

  const onItem = (n: number) => {
    console.log(`onItem: ${n}`);
  };

  return (
    <Container>
      <Button>сохранить</Button>
      <Button>добавить</Button>
      {list.map((item, index) => (
        <MenuItem onClick={() => onItem(index)}>{item}</MenuItem>
      ))}
    </Container>
  );
};
