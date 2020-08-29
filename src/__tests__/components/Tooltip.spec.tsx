import React from 'react';
import { render } from '@testing-library/react';

import Tooltip from '~/components/Tooltip';

describe('Tooltip Component', () => {
  it('should be able to render a header component', () => {
    const { getByText } = render(<Tooltip title="ToolTip" />);

    expect(getByText('ToolTip')).toBeInTheDocument();
  });
});
