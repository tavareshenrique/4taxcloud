import React from 'react';
import { render } from '@testing-library/react';

import BoxContent from '~/components/BoxContent';

describe('BoxContent Component', () => {
  it('should be able to render an box content', () => {
    const { getByTestId } = render(
      <BoxContent>
        <h1>Hello Word</h1>
      </BoxContent>,
    );

    expect(getByTestId('box-content')).toBeInTheDocument();
  });
});
