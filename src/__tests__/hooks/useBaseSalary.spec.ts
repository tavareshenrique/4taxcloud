import { renderHook } from '@testing-library/react-hooks';
import useBaseSalary from '~/hooks/useBaseSalary';

describe('useBaseSalary hook', () => {
  it('should be return the base salary', () => {
    const { result } = renderHook(() => useBaseSalary());

    const value = result.current.calculationBaseSalary({
      salary: 998,
      discount: 74.85,
      dependentsNumber: 2,
    });

    const valueNormalize = String(value).normalize();

    expect(valueNormalize).toBe('594.03');
  });
});
