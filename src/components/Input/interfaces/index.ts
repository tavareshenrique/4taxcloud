import { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  containerStyle?: Record<string, unknown>;
  icon?: React.ComponentType<IconBaseProps>;
  onBlur?: () => void;
}
