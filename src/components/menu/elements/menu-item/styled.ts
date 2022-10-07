import styled from "styled-components";

export const Label = styled.div<{ visible: boolean }>`
  ${({ theme }) => theme.font.family}
  width: calc(100% - 100px);
  padding: 0 15px;
  color: ${({ theme, visible }) => visible ? theme.colors.main.dark : theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.m}
`;
