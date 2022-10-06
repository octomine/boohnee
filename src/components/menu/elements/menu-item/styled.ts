import styled from "styled-components";
import { BoxH } from "../../../common/box";

export const Plate = styled(BoxH)`
  align-items: center;
  justify-content: space-between;

  height: ${({ theme }) => theme.lineHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grade['2']};
`;

export const Label = styled.div`
  ${({ theme }) => theme.font.family}
  width: calc(100% - 100px);
  padding: 0 15px;
  color: ${({ theme, visible }) => visible ? theme.colors.main.dark : theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.m}
`;
