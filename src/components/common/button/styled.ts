import styled from "styled-components";

import { BoxV } from '../box';

export const Wrapper = styled(BoxV)`
  align-items: center;
  justify-content: center;

  padding: 7px 15px;

  color: ${({ theme }) => theme.colors.main.dark};

  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.grade['3']};
  border-radius: ${ ({ theme }) => theme.radius.button};
`;
