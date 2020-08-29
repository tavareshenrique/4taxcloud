import React from 'react';

import { ITableProps } from './interfaces';

import { Container, Tr, Th, Td } from './styles';

const Table: React.FC<ITableProps> = ({ columns, rows }) => {
  return (
    <Container data-cy="table" striped bordered hover>
      <thead>{columns}</thead>
      <tbody>{rows}</tbody>
    </Container>
  );
};

export { Tr, Th, Td };

export default Table;
