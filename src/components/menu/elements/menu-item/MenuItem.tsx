import React from "react";

import { Button } from "../../../common/button";

import { MenuItemProps } from "./types";

import { Plate, Label } from "./styled";

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <Plate>
      <Label>{children}</Label>
      <Button>скрыть</Button>
      <Button>удолить</Button>
    </Plate>
  );
};
