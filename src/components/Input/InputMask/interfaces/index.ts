import { IconBaseProps } from 'react-icons';

import { Props } from 'react-input-mask';

export interface IInputMaskProps extends Props {
  name: string;
  label?: string;
  containerStyle?: Record<string, unknown>;
  icon?: React.ComponentType<IconBaseProps>;
}
