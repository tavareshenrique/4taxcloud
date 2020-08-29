import { useCallback } from 'react';

interface ICalculationBaseSalaryProps {
  salary: number;
  discount: number;
  dependentsNumber: number;
}

interface IResponse {
  calculationBaseSalary: ({
    discount,
    salary,
    dependentsNumber,
  }: ICalculationBaseSalaryProps) => number;
}

const deductionPerDependent = 164.56;

const useBaseSalary = (): IResponse => {
  const calculationBaseSalary = useCallback(
    ({ discount, salary, dependentsNumber }: ICalculationBaseSalaryProps) => {
      const dependentsNumberValue = dependentsNumber * deductionPerDependent;

      const baseSalary = salary - discount - dependentsNumberValue;

      return baseSalary;
    },
    [],
  );

  return {
    calculationBaseSalary,
  };
};

export default useBaseSalary;
