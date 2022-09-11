import React from "react";
import { useStore } from "effector-react";

import { send } from "../../services/network";
import { LineMenu } from "./elements/line-menu";
import { LineAdd } from "./elements/line-add";

import { $menu } from "./store";
import { Container } from "./styled";

export const Menu: React.FC = () => {
  const menu: string[] = useStore($menu);

  const apply = () => {
    send(menu).then((data) => console.log(data));
  };

  return (
    <Container>
      <div onClick={() => apply()}>apply</div>
      {menu.map((name: string) => (
        <LineMenu name={name}></LineMenu>
      ))}
      <LineAdd></LineAdd>
    </Container>
  );
};
