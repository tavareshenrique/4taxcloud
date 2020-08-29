import React from 'react';
import { render } from '@testing-library/react';

import Table, { Th, Tr, Td } from '~/components/Table';

const names = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Doe',
  },
];

const tableColumns = (
  <Tr>
    <Th>Id</Th>
    <Th colSpan={6}>Name</Th>
  </Tr>
);

const tableRows = names.map(name => (
  <Tr key={name.id}>
    <Td>{name.id}</Td>
    <Td colSpan={6}>{name.name}</Td>
  </Tr>
));

describe('Table Component', () => {
  it('should be able to render an table', () => {
    const { findByTestId } = render(
      <Table columns={tableColumns} rows={tableRows} />,
    );

    expect(findByTestId('z-table')).toBeTruthy();
  });
});
