import styled from "styled-components";
import { Plate as PlateBase } from '../../../../styles/common';

export const Plate = styled(PlateBase)`
  &:active {
    background: ${({ theme }) => theme.colors.diff.successLight};
  }
`;

export const Label = styled.div<{ visible: boolean }>`
  ${({ theme }) => theme.font.family}
  width: calc(100% - 100px);
  padding: 0 15px;
  color: ${({ theme, visible }) => visible ? theme.colors.main.dark : theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.m};
`;

export const Time = styled.div<{ visible: boolean }>`
  ${({ theme }) => theme.font.family}
  padding-right: 15px;
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme, visible }) => visible ? theme.colors.grade['4'] : theme.colors.grade['3']}
`;
