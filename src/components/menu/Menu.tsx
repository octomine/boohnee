import React from "react";
import { useStore } from "effector-react";

import { MenuItem } from "./elements/menu-item";
import { Container } from "./styled";

import { $menu, changeVisible } from "./store";

export const Menu: React.FC<{}> = () => {
  const list = useStore($menu);

  const onItem = (n: number) => {
    changeVisible(n);
  };

  return (
    <Container>
      {list.map(({ text, visible }, index) => (
        <MenuItem visible={visible} changeVisible={() => onItem(index)}>
          {text}
        </MenuItem>
      ))}
    </Container>
  );
};
