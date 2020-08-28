import React, { useRef, useState, useCallback, ChangeEvent } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Col, Row } from 'react-bootstrap';

import Input from '~/components/Input';
import InputMask from '~/components/Input/InputMask';
import InputCurrency from '~/components/Input/InputCurrency';
import Button from '~/components/Button';

import { FieldCurrencyType } from './types';

import {
  Container,
  Title,
  Content,
  FieldContent,
  SalaryFieldContent,
  Footer,
} from './styles';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [salary, setSalary] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleFormattingCurrencyValues = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      fieldCurrencyType: FieldCurrencyType,
    ) => {
      const formattedValue = event.target.value.replace(/\D/g, '');

      const originalValue = Number(formattedValue) / 100;

      if (fieldCurrencyType === 'salary') {
        setSalary(originalValue);
        return;
      }

      setDiscount(originalValue);
    },
    [],
  );

  const handleSubmit = useCallback(
    (data: any) => {
      const myData = {
        ...data,
        salario: salary,
        desconto: discount,
      };

      console.log(myData);
    },
    [discount, salary],
  );

  return (
    <Container>
      <Title>Cadastro de Funcionário</Title>
      <p>Informe os dados do funcionário</p>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Row xs={1} md={2}>
            <Col>
              <FieldContent>
                <Input
                  name="nome"
                  label="Nome"
                  placeholder="Informe o nome do funcionário."
                />
              </FieldContent>
            </Col>

            <Col>
              <FieldContent>
                <InputMask
                  mask="999.999.999-99"
                  name="cpf"
                  label="CPF"
                  placeholder="Informe o CPF do funcionário."
                />
              </FieldContent>
            </Col>
          </Row>

          <Row xs={1} md={3}>
            <Col>
              <FieldContent>
                <InputCurrency
                  name="salario"
                  label="Salário"
                  placeholder="Informe o salário do funcionário."
                  value={salary}
                  onChange={event => {
                    handleFormattingCurrencyValues(event, 'salary');
                  }}
                />
              </FieldContent>
            </Col>

            <Col>
              <FieldContent>
                <InputCurrency
                  name="desconto"
                  label="Desconto"
                  placeholder="Informe os descontos do funcionário."
                  value={discount}
                  onChange={event => {
                    handleFormattingCurrencyValues(event, 'discount');
                  }}
                />
              </FieldContent>
            </Col>

            <Col>
              <FieldContent>
                <Input
                  name="dependentes"
                  type="number"
                  label="Dependentes"
                  placeholder="Informe o número de dependentes."
                />
              </FieldContent>
            </Col>
          </Row>

          <Row xs={1} md={2}>
            <Col>
              <SalaryFieldContent fieldType="salary">
                <strong>Salário Base IR</strong>
                <span>R$ 200,00</span>
              </SalaryFieldContent>
            </Col>

            <Col>
              <SalaryFieldContent fieldType="discount">
                <strong>Desconto IRRF</strong>
                <span>R$ 200,00</span>
              </SalaryFieldContent>
            </Col>
          </Row>

          <Footer>
            <Button type="button" buttonStyle="outline">
              Voltar
            </Button>
            <Button type="submit">Salvar</Button>
          </Footer>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
