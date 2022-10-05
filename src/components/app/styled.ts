import styled from "styled-components";

import { BoxV } from "../common/box";

export const Container = styled(BoxV)`
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.colors.main.light}
`;
