import styled from "styled-components";
import { BoxH } from "../common/box";

export const Plate = styled(BoxH)`
  align-items: flex-end;
  justify-content: space-around;

  width: 100%;
  height: 50px;

  background: ${({ theme }) => theme.colors.primary};
`;
