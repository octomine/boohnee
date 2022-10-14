import React from "react";
import { useStore } from "effector-react";

import { MenuItem } from "./elements/menu-item";
import { Container } from "./styled";

import { $menu } from "./store";
import { changeMenuItemFx, removeMenuItemFx } from "../../effects";

export const Menu: React.FC<{}> = () => {
  const list = useStore($menu);

  const onItem = (n: number) => {
    const objToSend = { ...list[n], visible: !list[n].visible };
    changeMenuItemFx(objToSend);
  };

  const onRemove = (n: number) => {
    removeMenuItemFx(list[n]);
  };

  return (
    <Container>
      {list.map(({ text, visible }, index) => (
        <MenuItem
          visible={visible}
          changeVisible={() => onItem(index)}
          removeItem={() => onRemove(index)}
        >
          {text}
        </MenuItem>
      ))}
    </Container>
  );
};
