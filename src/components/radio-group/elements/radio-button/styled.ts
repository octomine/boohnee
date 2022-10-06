import styled, { css } from "styled-components";
import PropTypes from 'prop-types'
import { BoxV } from "../../../common/box";

const selected = css`
  color: ${({ theme }) => theme.colors.main.light};
  border-bottom: 3px solid ${({ theme }) => theme.colors.main.light};
`;
const unselected = css`
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

// TODO: !!! width !!!
export const Wrapper = styled(BoxV)`
  ${({ theme }) => theme.font.family}
  height: 43px;
  width: 250px;

  ${({ isSelected }) => isSelected ? selected : unselected}
`;

Wrapper.propTypes = {
  isSelected: PropTypes.bool.isRequired,
}

export const Label = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.l};
`;

export const Info = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.m};
`;
