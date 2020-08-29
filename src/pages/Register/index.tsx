import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  ChangeEvent,
  useEffect,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FiUser, FiCreditCard, FiUsers } from 'react-icons/fi';
import { uuid } from 'uuidv4';
import { useToasts } from 'react-toast-notifications';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

import Swal from 'sweetalert2';

import api from '~/services/api';

import useINSS from '~/hooks/useINSS';
import useBaseSalary from '~/hooks/useBaseSalary';
import useDiscountIRRF from '~/hooks/useDiscountIRRF';

import Input from '~/components/Input';
import InputMask from '~/components/Input/InputMask';
import InputCurrency from '~/components/Input/InputCurrency';
import Button from '~/components/Button';

import { IEmployeeData, IEmployeeDataLocation } from './interfaces';
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

  const history = useHistory();
  const location = useLocation<IEmployeeDataLocation>();
  const locationData = location?.state?.data;

  const { addToast } = useToasts();

  const { aliquotINSS } = useINSS();
  const { calculationBaseSalary } = useBaseSalary();
  const { calculationDiscountIRRF } = useDiscountIRRF();

  const [title, setTitle] = useState('Cadastro de Funcionário');
  const [description, setDescription] = useState(
    'Informe os dados do funcionário',
  );
  const [secondaryButton, setSecondaryButton] = useState('Resetar');
  const [salary, setSalary] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [dependents, setDependents] = useState(0);
  const [cpf, setCPF] = useState('');
  const [baseSalary, setBaseSalary] = useState(0);
  const [discountIRRF, setDiscountIRRF] = useState<string | number>(0);

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

  const handleCalculateSalaryAndDiscountValues = useCallback(() => {
    const baseSalaryValue = calculationBaseSalary({
      salary,
      discount,
      dependentsNumber: dependents,
    });

    const discountIRRFValue = calculationDiscountIRRF(baseSalaryValue);

    setBaseSalary(baseSalaryValue);
    setDiscountIRRF(discountIRRFValue);
  }, [
    calculationBaseSalary,
    calculationDiscountIRRF,
    dependents,
    discount,
    salary,
  ]);

  const setDiscountAmount = useCallback(() => {
    const aliquotINSSValue = aliquotINSS(salary);
    setDiscount(aliquotINSSValue);
  }, [aliquotINSS, salary]);

  const handleSecondaryButton = useCallback(async () => {
    if (!locationData) {
      formRef.current?.clearField('nome');
      setCPF('');
      setSalary(0);
      setDiscount(0);
      setDependents(0);
      setBaseSalary(0);
      setDiscountIRRF(0);

      return;
    }

    const locationDataName = locationData.nome;

    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Não será possível recuperar esse funcionário depois de excluido.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deleta!',
      cancelButtonText: 'Não, vou pensar um pouco',
    }).then(result => {
      if (result.value) {
        api
          .delete(`funcionarios/${locationData.id}`)
          .then(() => {
            Swal.fire(
              'Deletado!',
              `Diga adeus para o ${locationDataName}! 😭`,
              'success',
            );
            history.push('/');
          })
          .catch(() => {
            addToast(
              `Houve um problema ao excluir esse funcionário, tente novamente, por favor!`,
              {
                appearance: 'error',
                autoDismiss: true,
              },
            );
          });
      }
    });
  }, [addToast, history, locationData]);

  const fieldsValidation = useCallback((data: IEmployeeData) => {
    const cpfIsValid = cpfValidator.isValid(data.cpf.trim().normalize());

    const isValid =
      data.nome.trim().normalize() !== '' &&
      data.cpf.trim().normalize() !== '' &&
      data.salario !== 0 &&
      cpfIsValid;

    if (data.nome.trim().normalize() === '') {
      formRef.current?.setFieldError('nome', 'Nome é obrigatório.');
    }

    if (data.cpf.trim().normalize() === '') {
      formRef.current?.setFieldError('cpf', 'CPF é obrigatório.');
    } else if (!cpfIsValid) {
      formRef.current?.setFieldError('cpf', 'CPF informado é inválido.');
    }

    if (data.salario === 0) {
      formRef.current?.setFieldError('salario', 'Salário é obrigatório.');
    }

    return isValid;
  }, []);

  const handleSubmit = useCallback(
    async (data: IEmployeeData) => {
      const descontoIRPR =
        discountIRRF !== 'ISENTO'
          ? Number(discountIRRF).toFixed(2)
          : discountIRRF;

      const employeeData = {
        ...data,
        id: uuid(),
        salario: salary,
        desconto: discount,
        descontoIRPR,
      };

      if (!fieldsValidation(employeeData)) return;

      api
        .post('funcionarios', employeeData)
        .then(() => {
          addToast(
            `O funcionário ${employeeData.nome} foi salvo com sucesso!`,
            {
              appearance: 'success',
              autoDismiss: true,
            },
          );
          history.push('/');
        })
        .catch(() => {
          addToast(
            `Houve um problema ao salvar esse funcionário, tente novamente, por favor!`,
            {
              appearance: 'error',
              autoDismiss: true,
            },
          );
        });
    },
    [addToast, discount, discountIRRF, fieldsValidation, history, salary],
  );

  useEffect(() => {
    handleCalculateSalaryAndDiscountValues();
  }, [
    calculationBaseSalary,
    calculationDiscountIRRF,
    dependents,
    discount,
    handleCalculateSalaryAndDiscountValues,
    salary,
  ]);

  useEffect(() => {
    if (locationData) {
      setTitle('Alteração de Funcionário');
      setDescription('Altere os dados do funcionário.');
      setSecondaryButton('Excluir');
      setCPF(locationData.cpf);
      setDependents(Number(locationData.dependentes));
      setSalary(locationData.salario);
      setDiscount(locationData.desconto);
      // handleCalculateSalaryAndDiscountValues();
    }
  }, [locationData]);

  const baseSalaryCurrency = useMemo(() => {
    return baseSalary.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }, [baseSalary]);

  const discountIRRFCurrency = useMemo(() => {
    if (discountIRRF === 'ISENTO') return discountIRRF;

    return discountIRRF.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }, [discountIRRF]);

  return (
    <Container>
      <Title>{title}</Title>
      <p>{description}</p>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={locationData}>
          <Row xs={1} md={2}>
            <Col>
              <FieldContent>
                <Input
                  name="nome"
                  label="Nome"
                  placeholder="Informe o nome do funcionário."
                  icon={FiUser}
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
                  icon={FiCreditCard}
                  value={cpf}
                  onChange={event => {
                    setCPF(event.target.value);
                  }}
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
                  onBlur={setDiscountAmount}
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
                  onBlur={handleCalculateSalaryAndDiscountValues}
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
                  icon={FiUsers}
                  value={dependents}
                  onChange={event => {
                    setDependents(Number(event.target.value));
                  }}
                />
              </FieldContent>
            </Col>
          </Row>

          <Row xs={1} md={2}>
            <Col>
              <SalaryFieldContent fieldType="salary">
                <strong>Salário Base IR</strong>
                <span>{baseSalaryCurrency}</span>
              </SalaryFieldContent>
            </Col>

            <Col>
              <SalaryFieldContent fieldType="discount">
                <strong>Desconto IRRF</strong>
                <span>{discountIRRFCurrency}</span>
              </SalaryFieldContent>
            </Col>
          </Row>

          <Footer>
            <Button
              type="button"
              buttonStyle="outline"
              onClick={() => handleSecondaryButton()}
            >
              {secondaryButton}
            </Button>
            <Button type="submit">Salvar</Button>
          </Footer>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
