import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { Table as ReactTable } from 'react-bootstrap';

import { ITRProps } from './interfaces/styles';

import colors from '~/styles/colors';

export const Container = styled(ReactTable)`
  height: 100px;
  justify-content: flex-start;
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
  cursor: pointer;
`;

export const Tr = styled.tr<ITRProps>`
  font-size: 0.9rem;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${colors.red} !important;
      color: ${colors.white} !important;
      font-weight: 700 !important;

      &:hover {
        background: ${shade(0.1, colors.red)} !important;
      }
    `}
`;

export const Th = styled.th`
  font-size: 1.2rem;
  font-weight: 700;
  border: 0 !important;
  background: ${colors.white};
  text-align: center;
  color: ${colors.primary};
`;

export const Td = styled.td`
  text-align: center;
  height: 72px;
  vertical-align: middle !important;
  display: table-cell;
`;
