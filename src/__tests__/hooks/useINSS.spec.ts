import { renderHook } from '@testing-library/react-hooks';
import useINSS from '~/hooks/useINSS';

describe('useINSS hook', () => {
  it('should be return a value when the salary is less than or equal to 1.045,00', () => {
    const { result } = renderHook(() => useINSS());

    const value = result.current.aliquotINSS(1000);

    expect(value).toBe(75);
  });

  it('should be return a value when the salary is equal to 1.045,01 or less or equal to 2.089,60', () => {
    const { result } = renderHook(() => useINSS());

    const value = result.current.aliquotINSS(2000);

    expect(value).toBe(180);
  });

  it('should be return a value when the salary is equal to 2.089,61 or less or equal to 3.134,40', () => {
    const { result } = renderHook(() => useINSS());

    const value = result.current.aliquotINSS(3000);

    expect(value).toBe(360);
  });

  it('should be return a value when the salary is equal to 3.134,41 or less or equal to 6.101,06', () => {
    const { result } = renderHook(() => useINSS());

    const value = result.current.aliquotINSS(5000);

    expect(value).toBe(700);
  });

  it('should be return 0 when salary is greater than 6.101,06', () => {
    const { result } = renderHook(() => useINSS());

    const value = result.current.aliquotINSS(7000);

    expect(value).toBe(854.15);
  });
});
