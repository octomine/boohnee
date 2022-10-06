import React from "react";

import { ButtonIcon } from "../../../common/button-icon";

import { MenuItemProps } from "./types";

import { Label } from "./styled";
import { Plate } from "../../../../styles/common";

export const MenuItem: React.FC<MenuItemProps> = ({
  visible,
  children,
  changeVisible,
}) => {
  return (
    <Plate>
      <Label visible={visible}>{children}</Label>
      <ButtonIcon type={visible ? "shown" : "hidden"} onClick={changeVisible} />
      <ButtonIcon type="del" onClick={() => console.log("CLICK!!1")} />
    </Plate>
  );
};
