import styled, { css } from 'styled-components';

import { IContainerProps, ILabelProps } from './interfaces/styles';

import Tooltip from '../Tooltip';

import colors from '~/styles/colors/index';

export const Label = styled.label<ILabelProps>`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;

  width: 100%;

  color: ${({ isFocused }) => (isFocused ? colors.blue : colors.label)};

  ${({ isErrored }) =>
    isErrored &&
    css`
      color: ${colors.error};
    `}

  @media only screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`;

export const Container = styled.div<IContainerProps>`
  background: ${colors.inputWhite};
  border-radius: 10px;
  padding: 6.5px;
  width: 100%;

  color: ${colors.inputSelectPlaceholder};
  border: 2px solid ${colors.inputSelectBorder};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${colors.error};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${colors.blue};
      border-color: ${colors.blue};
    `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: none !important;
    color: ${colors.primary};

    font-size: 1.2rem;

    &::placeholder {
      color: ${colors.inputSelectPlaceholder};
      font-size: 1rem;
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  cursor: pointer;

  svg {
    margin: 0;
  }

  span {
    background: ${colors.error};
    color: ${colors.white};

    &::before {
      border-color: ${colors.error} transparent;
    }
  }
`;
