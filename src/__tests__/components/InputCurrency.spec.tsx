import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { FiDollarSign } from 'react-icons/fi';

import colors from '~/styles/colors';

import InputCurrency from '~/components/Input/InputCurrency';

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

describe('InputCurrency Component', () => {
  it('should be able to render an input currency mask', () => {
    const { findByPlaceholderText } = render(
      <InputCurrency name="salary" placeholder="Type your Salary" />,
    );

    expect(findByPlaceholderText('Type your Salary')).toBeTruthy();
  });

  it('should render highlight on input currency focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <InputCurrency name="salary" placeholder="Type your Salary" />,
    );

    const inputElement = getByPlaceholderText('Type your Salary');
    const containerElement = getByTestId('input-currency-container');

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

  it('should be able to render an input currency with an label', () => {
    const { findByLabelText } = render(
      <InputCurrency
        name="salary"
        placeholder="Type your Salary"
        label="Salary"
      />,
    );

    expect(findByLabelText('Salary')).toBeTruthy();
  });

  it('should be able to render an input currency with an icon', () => {
    const { getByTestId } = render(
      <InputCurrency
        name="salary"
        placeholder="Type your Salary"
        icon={FiDollarSign}
      />,
    );

    expect(getByTestId('input-currency-icon')).toBeTruthy();
  });

  it('should be able activate onBlur props', () => {
    let blurValue = 0;

    function onBlurValue(): void {
      blurValue = 1;
    }

    const { getByTestId } = render(
      <InputCurrency
        name="salary"
        placeholder="Type your Salary"
        onBlur={onBlurValue}
      />,
    );

    const inputCurrency = getByTestId('input-currency');

    fireEvent.blur(inputCurrency);

    expect(blurValue).toBe(1);
  });
});
