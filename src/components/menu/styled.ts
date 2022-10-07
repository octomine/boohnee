import styled from "styled-components";
import { BoxV } from "../common/box";

export const Container = styled(BoxV)`
  width: 100%;
  height: calc(100% - 100px);
  overflow: scroll;

  border-bottom: 2px solid ${({ theme }) => theme.colors.grade['2']};
`;
