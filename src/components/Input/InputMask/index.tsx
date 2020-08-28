import React, { useRef, useEffect, useCallback, useState } from 'react';

import ReactInputMask from 'react-input-mask';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import colors from '~/styles/colors';

import { IInputMaskProps } from './interfaces';

import { Label, Container, Error } from '../styles';

const InputMask: React.FC<IInputMaskProps> = ({
  name,
  label,
  containerStyle,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

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
        data-testid="z-mask-input-container"
      >
        {Icon && <Icon size={20} data-testid="z-mask-input-icon" />}
        <ReactInputMask
          name={name}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && (
          <Error title={error} data-testid="z-mask-input-error">
            <FiAlertCircle color={colors.error} size={20} />
          </Error>
        )}
      </Container>
    </Label>
  );
};

export default InputMask;
