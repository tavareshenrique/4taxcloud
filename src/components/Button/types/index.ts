import { ButtonHTMLAttributes } from 'react';

export type ButtonStyle = 'default' | 'outline';

export type Tooltip = {
  showTooltip?: boolean;
  title: string;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle?: ButtonStyle;
  loading?: boolean;
};
