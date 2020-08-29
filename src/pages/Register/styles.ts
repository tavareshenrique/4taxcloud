import styled, { css } from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

import { ISalaryFieldContent } from './interfaces/styles';

export const Title = styled.h1`
  margin: 3rem 0 0;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-top: 0.3rem;
`;

export const Content = styled.main`
  margin: 1rem;
  padding: 2rem;

  width: 100%;

  .col {
    margin-top: 1rem;
  }
`;

export const FieldContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin: 0 0.5rem;
    font-size: 1rem;
  }
`;

export const SalaryFieldContent = styled.div<ISalaryFieldContent>`
  background: ${colors.green};

  ${({ fieldType }) =>
    fieldType === 'discount' &&
    css`
      background: ${colors.red};
    `}

  border-radius: 1.25rem;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: ${darken(0.4, colors.green)};

    ${({ fieldType }) =>
      fieldType === 'discount' &&
      css`
        color: ${darken(0.4, colors.red)};
      `}

    font-size: 1.5rem;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.white};
  }
`;

export const Footer = styled.footer`
  margin-top: 1rem;

  display: flex;
  justify-content: flex-end;

  button + button {
    margin-left: 0.5rem;
  }
`;
