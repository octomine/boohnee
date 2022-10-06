import styled from "styled-components";
import { BoxH } from "../common/box";

export const Plate = styled(BoxH)`
  align-items: flex-end;
  justify-content: space-evenly;

  width: 100%;
  height: 50px;

  background: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;
