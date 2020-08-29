import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { FiUser } from 'react-icons/fi';

import colors from '~/styles/colors';

import InputMask from '~/components/Input/InputMask';

jest.mock('@unform/core', () => ({
  useField() {
    return {
      fieldName: 'email',
      defaultValue: '',
      error: '',
      registerField: jest.fn(),
    };
  },
}));

describe('InputMask Component', () => {
  it('should be able to render an input mask', () => {
    const { findByPlaceholderText } = render(
      <InputMask
        mask="999.999.999-99"
        name="cpf"
        placeholder="Type your CPF"
      />,
    );

    expect(findByPlaceholderText('Type your CPF')).toBeTruthy();
  });

  it('should render highlight on input mask focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <InputMask
        mask="999.999.999-99"
        name="cpf"
        placeholder="Type your CPF"
      />,
    );

    const inputElement = getByPlaceholderText('Type your CPF');
    const containerElement = getByTestId('z-mask-input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle(`border-color: ${colors.blue}`);
      expect(containerElement).toHaveStyle(`color: ${colors.blue}`);
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle(`border-color: ${colors.blue}`);
      expect(containerElement).not.toHaveStyle(`color: ${colors.blue}`);
    });
  });

  it('should be able to render an input mask with an label', () => {
    const { findByLabelText } = render(
      <InputMask
        mask="999.999.999-99"
        name="cpf"
        placeholder="Type your CPF"
        label="Mask Input"
      />,
    );

    expect(findByLabelText('Mask Input')).toBeTruthy();
  });

  it('should be able to render an input mask with an icon', () => {
    const { getByTestId } = render(
      <InputMask
        mask="999.999.999-99"
        name="cpf"
        placeholder="Type your CPF"
        icon={FiUser}
      />,
    );

    expect(getByTestId('z-mask-input-icon')).toBeTruthy();
  });
});
