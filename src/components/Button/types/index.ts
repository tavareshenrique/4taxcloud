import { ButtonHTMLAttributes } from 'react';

import { TooltipTypes } from '~/components/Tooltip/types';

export type ButtonStyle = 'default' | 'outline';

export type Tooltip = {
  showTooltip?: boolean;
  title: string;
  type: TooltipTypes;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle?: ButtonStyle;
  loading?: boolean;
  tooltip?: Tooltip;
};
