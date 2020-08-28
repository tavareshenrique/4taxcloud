import React from 'react';

import { Container, Title } from './styles';

const Home: React.FC = () => (
  <Container>
    <Title>Tabelas e cálculos do IRRF</Title>

    <p>
      A tabela do IR é um dos principais instrumentos para auxiliar os
      contribuentes na hora de enviar as informações fiscais para a Receita.
      Afinal, é nesse documento que constam as alíquotas do Imposto de Renda.
      <br />
      <br />
      Isso quer dizer que é essa a fonte para você saber qual é o percentual que
      deve ser aplicado sobre os seus rendimentos. Portando, na hora de fazer o
      cálculo e declarar seus rendimentos, ter essa tabela é fundamental para
      que você não envie nenhum dado errado e, consequentemente, não caia na
      malha fina.
    </p>

    <Title>Seus Funcionários</Title>
  </Container>
);

export default Home;
