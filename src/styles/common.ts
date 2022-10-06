import styled, { css } from "styled-components";
import { BoxH } from "../components/common/box";

const getStyles = (type: string) => {
  switch (type) {
    case 'del':
      return css`
        border-color: ${({ theme }) => theme.colors.diff.warn};
        &:active {
          background: ${({ theme }) => `${theme.icons[type]}, ${theme.colors.diff.warnLight}`};
        }
      `;
    case 'shown':
      return css`border-color: ${({ theme }) => theme.colors.secondary};`;
    case 'hidden':
      return css`border-color: ${({ theme }) => theme.colors.grade['3']};`;
    default:
      return null;
  }
};

export const IconWrapper = styled.div`
  ${({ theme }) => {
    const d = theme.lineHeight;
    const arr = [
      `width: ${d};`,
      `height: ${d};`
    ];
    return arr.join('\n');
  }}
  margin: 0 2px;
  border-bottom: 2px solid;
  ${({ type }) => getStyles(type)}
  background: ${({ theme, type }) => theme.icons[type]};
`;

export const Plate = styled(BoxH)`
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${({ theme }) => theme.lineHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grade['2']};
`;
