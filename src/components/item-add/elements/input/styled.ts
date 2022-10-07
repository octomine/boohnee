import styled from "styled-components";

export const Field = styled.textarea`
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grade['3']};
  border-radius: 2px;
`;
