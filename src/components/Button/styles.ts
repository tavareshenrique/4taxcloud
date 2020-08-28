import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

import { ButtonStyleProps } from './types/styles';

import colors from '~/styles/colors';

const faSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export const Container = styled.button<ButtonStyleProps>`
  background: ${({ buttonStyle }) =>
    buttonStyle === 'default' ? colors.buttonGreen : 'transparent'};
  height: 35px;
  border-radius: 5px;
  border: ${({ buttonStyle }) =>
    buttonStyle === 'default' ? 0 : `2px solid ${colors.buttonRed}`};
  padding: 0 16px;
  color: ${({ buttonStyle }) =>
    buttonStyle === 'default' ? colors.buttonWhite : colors.buttonRed};
  max-width: 180px;
  width: 180px;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 16px;
  transition: background 0.2s;
  outline: none !important;

  .fa-spin {
    animation: ${faSpin} 2s infinite linear;
  }

  &:hover {
    background: ${({ buttonStyle }) =>
      buttonStyle === 'default'
        ? shade(0.2, colors.buttonGreen)
        : shade(0.2, colors.buttonRed)};

    ${({ buttonStyle, loading }) =>
      buttonStyle === 'outline' &&
      css`
        border: 2px solid ${shade(0.2, colors.buttonRed)};
        color: ${colors.buttonWhite};

        svg {
          color: ${loading === 1
            ? colors.buttonWhite
            : colors.buttonRed} !important;
        }
      `}
  }

  ${({ buttonStyle, loading, disabled }) =>
    buttonStyle === 'default' &&
    loading === 0 &&
    disabled &&
    css`
      background: ${colors.buttonDisabled};
      color: ${colors.buttonTextDisabled};
      cursor: default;

      &:hover {
        background: ${shade(0.2, colors.buttonDisabled)};
        color: ${shade(0.2, colors.buttonTextDisabled)};
      }
    `}
`;
