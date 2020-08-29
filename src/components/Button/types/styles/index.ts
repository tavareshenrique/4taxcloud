import { ButtonHTMLAttributes } from 'react';

import { ButtonStyle } from '..';

export type ButtonStyleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle?: ButtonStyle;
  loading?: number;
};
