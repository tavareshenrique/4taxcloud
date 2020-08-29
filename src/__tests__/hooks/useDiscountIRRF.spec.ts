import { renderHook } from '@testing-library/react-hooks';

import useDiscountIRRF from '~/hooks/useDiscountIRRF';
import useBaseSalary from '~/hooks/useBaseSalary';

describe('useDiscountIRRF hook', () => {
  it('should be return IRRF discount amount EXEMPT', () => {
    const { result: baseSalaryResult } = renderHook(() => useBaseSalary());

    const { result } = renderHook(() => useDiscountIRRF());

    const baseSalary = baseSalaryResult.current.calculationBaseSalary({
      salary: 998,
      discount: 74.85,
      dependentsNumber: 2,
    });

    const discountIRRFvalue = result.current.calculationDiscountIRRF(
      baseSalary,
    );

    const valueNormalize = String(discountIRRFvalue).normalize();

    expect(valueNormalize).toBe('ISENTO');
  });

  it('should be return an IRRF discount value when the base salary is equal to 1.903,90 or less or equal to 2.826,65', () => {
    const { result: baseSalaryResult } = renderHook(() => useBaseSalary());

    const { result } = renderHook(() => useDiscountIRRF());

    const baseSalary = baseSalaryResult.current.calculationBaseSalary({
      salary: 2500,
      discount: 300,
      dependentsNumber: 0,
    });

    const discountIRRFvalue = result.current.calculationDiscountIRRF(
      baseSalary,
    );

    const valueNormalize = String(discountIRRFvalue).normalize();

    expect(valueNormalize).toBe('22.19999999999999');
  });

  it('should be return an IRRF discount value when the base salary is equal to 2.826,66 or less or equal to 3.751,05', () => {
    const { result: baseSalaryResult } = renderHook(() => useBaseSalary());

    const { result } = renderHook(() => useDiscountIRRF());

    const baseSalary = baseSalaryResult.current.calculationBaseSalary({
      salary: 3500,
      discount: 490,
      dependentsNumber: 0,
    });

    const discountIRRFvalue = result.current.calculationDiscountIRRF(
      baseSalary,
    );

    const valueNormalize = String(discountIRRFvalue).normalize();

    expect(valueNormalize).toBe('96.69999999999999');
  });

  it('should be return an IRRF discount value when the base salary is equal to 3.751,06 or less or equal to 4.664.68', () => {
    const { result: baseSalaryResult } = renderHook(() => useBaseSalary());

    const { result } = renderHook(() => useDiscountIRRF());

    const baseSalary = baseSalaryResult.current.calculationBaseSalary({
      salary: 5500,
      discount: 770,
      dependentsNumber: 2,
    });

    const discountIRRFvalue = result.current.calculationDiscountIRRF(
      baseSalary,
    );

    const valueNormalize = String(discountIRRFvalue).normalize();

    expect(valueNormalize).toBe('354.068');
  });

  it('should be return an IRRF discount amount should be returned when the base salary is greater than 4,664.68', () => {
    const { result: baseSalaryResult } = renderHook(() => useBaseSalary());

    const { result } = renderHook(() => useDiscountIRRF());

    const baseSalary = baseSalaryResult.current.calculationBaseSalary({
      salary: 5500,
      discount: 770,
      dependentsNumber: 0,
    });

    const discountIRRFvalue = result.current.calculationDiscountIRRF(
      baseSalary,
    );

    const valueNormalize = String(discountIRRFvalue).normalize();

    expect(valueNormalize).toBe('431.39');
  });
});
