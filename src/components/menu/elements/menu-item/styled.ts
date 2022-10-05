import styled from "styled-components";
import { BoxH } from "../../../common/box";

export const Plate = styled(BoxH)`
  align-items: center;
  justify-content: space-between;

  margin: 1px;

  border-radius: 5px;
  background: #cccccc;
`;

export const Label = styled.div`
  width: calc(100% - 50px);
`;
