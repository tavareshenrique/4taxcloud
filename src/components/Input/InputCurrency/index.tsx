import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import IntlCurrencyInput from 'react-intl-currency-input';

import colors from '~/styles/colors';

import { IInputProps } from '../interfaces';

import { Label, Container, Error } from '../styles';

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

const InputCurrency: React.FC<IInputProps> = ({
  name,
  label,
  containerStyle,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Label
      isFocused={isFocused}
      isErrored={!!error}
      htmlFor={name}
      style={containerStyle}
    >
      {!!label && label}
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFocused={isFocused}
        data-testid="z-input-container"
      >
        {Icon && <Icon size={20} data-testid="z-input-icon" />}
        <IntlCurrencyInput
          name={name}
          currency="BRL"
          config={currencyConfig}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error && (
          <Error title={error} data-testid="z-input-error">
            <FiAlertCircle color={colors.error} size={20} />
          </Error>
        )}
      </Container>
    </Label>
  );
};

export default InputCurrency;
