import styled from "styled-components";

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
  border-color: ${({ theme, type }) => {
    switch (type) {
      case 'del':
        return theme.colors.diff.warn;
      case 'shown':
        return theme.colors.secondary;
      case 'hidden':
        return theme.colors.grade['3'];
      default:
        return null;
    }
  }};
  background: ${({ theme, type }) => theme.icons[type]};
`;