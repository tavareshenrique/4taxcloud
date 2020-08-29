import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { FiMail } from 'react-icons/fi';

import colors from '~/styles/colors';

import Input from '~/components/Input';

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

describe('Input Component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('z-input-container');

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

  it('should be able to render an input with an label', () => {
    const { findByLabelText } = render(
      <Input name="email" placeholder="E-mail" label="my-input" />,
    );

    expect(findByLabelText('my-input')).toBeTruthy();
  });

  it('should be able to render an input with an icon', () => {
    const { getByTestId } = render(
      <Input name="email" placeholder="E-mail" icon={FiMail} />,
    );

    expect(getByTestId('z-input-icon')).toBeTruthy();
  });
});
