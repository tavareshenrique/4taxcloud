import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { Table as ReactTable } from 'react-bootstrap';

import { ITRProps } from './interfaces/styles';

import colors from '~/styles/colors';

export const Container = styled(ReactTable)`
  height: 6.25rem;
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

  @media only screen and (max-width: 735px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 670px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 570px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.7rem;
  }

  /* @media only screen and (max-width: 415px) {
    font-size: 0.6rem;
  } */

  @media only screen and (max-width: 420px) {
    font-size: 0.5rem;
  }

  @media only screen and (max-width: 360px) {
    font-size: 0.4rem;
  }

  @media only screen and (max-width: 320px) {
    font-size: 0.3rem;
  }
`;

export const Td = styled.td`
  font-size: 1rem;
  text-align: center;
  height: 4.5rem;
  vertical-align: middle !important;
  display: table-cell;

  @media only screen and (max-width: 735px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 670px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 570px) {
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.6rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 0.4rem;
  }

  @media only screen and (max-width: 360px) {
    font-size: 0.3rem;
  }

  @media only screen and (max-width: 320px) {
    font-size: 0.2rem;
  }
`;
