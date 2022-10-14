import styled from "styled-components";
import { BoxH } from "../../../common/box";

export const Ready = styled(BoxH)`
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 60px);
  height: 100%;

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
