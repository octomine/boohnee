import React from "react";
import { Container } from "./styled";

interface LineMenuProps {
  name: string;
}

export const LineMenu: React.FC<LineMenuProps> = ({ name }: LineMenuProps) => {
  return <Container>{name}</Container>;
};
