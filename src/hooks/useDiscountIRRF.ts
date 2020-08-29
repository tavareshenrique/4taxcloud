import { useCallback } from 'react';

interface IResponse {
  calculationDiscountIRRF: (baseSalary: number) => number | string;
}

const useDiscountIRRF = (): IResponse => {
  const calculationDiscountIRRF = useCallback((baseSalary: number) => {
    if (baseSalary <= 1_903.98) {
      return 'ISENTO';
    }

    if (baseSalary === 1_903.9 || baseSalary <= 2_826.65) {
      return (baseSalary * 7.5) / 100 - 142.8;
    }

    if (baseSalary === 2_826.66 || baseSalary <= 3_751.05) {
      return (baseSalary * 15) / 100 - 354.8;
    }

    if (baseSalary === 3_751.06 || baseSalary <= 4_664.68) {
      return (baseSalary * 22.5) / 100 - 636.13;
    }

    return (baseSalary * 27.5) / 100 - 869.36;
  }, []);

  return {
    calculationDiscountIRRF,
  };
};

export default useDiscountIRRF;
