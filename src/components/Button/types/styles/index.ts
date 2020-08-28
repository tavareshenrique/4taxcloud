import { ButtonHTMLAttributes } from 'react';

import { Tooltip, ButtonStyle } from '..';

export type ButtonStyleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle?: ButtonStyle;
  loading?: number;
  tooltip?: Tooltip;
};
