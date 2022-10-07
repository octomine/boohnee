import styled from "styled-components";
import { BoxV } from '../common/box';

export const Contaienr = styled(BoxV)`
  width: 100%;
  background: ${({ theme }) => theme.colors.grade['2']};
`;
