import React from 'react';

import { ITooltipProps } from './interfaces';

import { Container } from './styles';

const Tooltip: React.FC<ITooltipProps> = ({
  title,
  className = '',
  type = 'information',
  children,
}) => {
  return (
    <Container className={className} type={type}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
