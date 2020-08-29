import React from 'react';
import { render } from '@testing-library/react';

import Button from '~/components/Button';

describe('Button Component', () => {
  it('should be able to render an default button', () => {
    const { getByText } = render(<Button>Default Button</Button>);

    expect(getByText('Default Button')).toBeTruthy();
  });

  it('should be able to render an outline button', () => {
    const { getByText } = render(
      <Button buttonStyle="outline">Outline Button</Button>,
    );

    expect(getByText('Outline Button')).toBeTruthy();
  });

  it('should be able to render an default button with a loading', () => {
    const { getByTestId } = render(<Button loading>Loading Button</Button>);

    expect(getByTestId('z-button').closest('button')).toBeDisabled();
  });
});
