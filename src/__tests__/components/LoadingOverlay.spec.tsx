import React from 'react';
import { render } from '@testing-library/react';

import LoadingOverlay from '~/components/LoadingOverlay';

describe('LoadingOverlay Component', () => {
  it('should be able to render an loading overlay', () => {
    const { getByTestId } = render(<LoadingOverlay />);

    expect(getByTestId('loading-overlay').textContent).toBe('Carregando...');
  });
});
