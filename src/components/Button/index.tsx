import React, { useMemo } from 'react';

import { FaSpinner } from 'react-icons/fa';

import Tooltip from '~/components/Tooltip';

import { ButtonProps } from './types';

import colors from '~/styles/colors';
import { Container } from './styles';

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  buttonStyle = 'default',
  tooltip,
  ...rest
}) => {
  const loadingColor = useMemo(() => {
    return buttonStyle === 'default' ? colors.buttonWhite : colors.buttonRed;
  }, [buttonStyle]);

  return (
    <Container
      buttonStyle={buttonStyle}
      loading={loading ? 1 : 0}
      disabled={loading || disabled}
      data-testid="z-button"
      {...rest}
    >
      {tooltip?.showTooltip ? (
        <Tooltip title={tooltip?.title} type={tooltip?.type}>
          <>
            {loading ? (
              <FaSpinner className="fa-spin" size={20} color={loadingColor} />
            ) : (
              children
            )}
          </>
        </Tooltip>
      ) : (
        <>
          {loading ? (
            <FaSpinner className="fa-spin" size={20} color={loadingColor} />
          ) : (
            children
          )}
        </>
      )}
    </Container>
  );
};

export default Button;
