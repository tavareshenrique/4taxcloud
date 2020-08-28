import styled from 'styled-components';

import { IContainerProps } from './interfaces/styles';
import { TooltipTypes } from './types';

import colors from '~/styles/colors';

const handleTypeColor = (typeColor: TooltipTypes | undefined): string => {
  switch (typeColor) {
    case 'error':
      return colors.red;
    case 'alert':
      return colors.orange;
    default:
      return colors.blue;
  }
};

export const Container = styled.div<IContainerProps>`
  position: relative;

  z-index: 1;

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  span {
    width: 160px;
    background: ${({ type }) => handleTypeColor(type)};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: ${colors.white};

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ type }) => handleTypeColor(type)} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
