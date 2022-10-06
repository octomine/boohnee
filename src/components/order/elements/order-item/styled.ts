import styled from "styled-components";

export const Label = styled.div`
  ${({ theme }) => theme.font.family}
  width: calc(100% - 100px);
  padding: 0 15px;
  color: ${({ theme, visible }) => visible ? theme.colors.main.dark : theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.m};
`;

export const Time = styled.div`
  ${({ theme }) => theme.font.family}
  padding-right: 15px;
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme, visible }) => visible ? theme.colors.grade['4'] : theme.colors.grade['3']}
`;
