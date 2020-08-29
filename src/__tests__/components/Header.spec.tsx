import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '~/components/Header';

describe('Header Component', () => {
  it('should be able to render a header component', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(getByTestId('header')).toBeTruthy();
  });
});
