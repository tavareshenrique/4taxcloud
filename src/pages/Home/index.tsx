import React, { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import useSWR from '~/hooks/useSWR';

import Table, { Td, Th, Tr } from '~/components/Table';
import BoxContent from '~/components/BoxContent';

import { IEmployeesAPI } from './interfaces';

import { Title, Description, TableContent } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const { data } = useSWR<IEmployeesAPI[]>({
    url: 'funcionarios',
  });

  const handleUpdateData = useCallback(
    (updateData: IEmployeesAPI) => {
      history.push(`employee/${updateData.id}`, {
        data: updateData,
      });
    },
    [history],
  );

  const tableColumns = useMemo(() => {
    return (
      <Tr>
        <Th colSpan={6}>Nome</Th>
        <Th>CPF</Th>
        <Th>Salário</Th>
        <Th>Desconto</Th>
        <Th>Dependentes</Th>
        <Th>Desconto IRPF</Th>
      </Tr>
    );
  }, []);

  const tableRows = useMemo(() => {
    if (!data) return null;

    return data.map(employee => (
      <Tr key={employee.id} onClick={() => handleUpdateData(employee)}>
        <Td colSpan={6}>{employee.nome}</Td>
        <Td>{employee.cpf}</Td>
        <Td>{employee.salario}</Td>
        <Td>{employee.desconto}</Td>
        <Td>{employee.dependentes}</Td>
        <Td>{employee.descontoIRPR}</Td>
      </Tr>
    ));
  }, [data, handleUpdateData]);

  return (
    <BoxContent>
      <Title>Tabelas e cálculos do IRRF</Title>
      <Description>
        A tabela do IR é um dos principais instrumentos para auxiliar os
        contribuentes na hora de enviar as informações fiscais para a Receita.
        Afinal, é nesse documento que constam as alíquotas do Imposto de Renda.
        <br />
        <br />
        Isso quer dizer que é essa a fonte para você saber qual é o percentual
        que deve ser aplicado sobre os seus rendimentos. Portando, na hora de
        fazer o cálculo e declarar seus rendimentos, ter essa tabela é
        fundamental para que você não envie nenhum dado errado e,
        consequentemente, não caia na malha fina.
      </Description>

      <Title>Seus Funcionários</Title>

      <TableContent>
        <Table columns={tableColumns} rows={tableRows} />
      </TableContent>
    </BoxContent>
  );
};

export default Home;
