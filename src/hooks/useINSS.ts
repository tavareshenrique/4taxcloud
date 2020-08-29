import { useCallback } from 'react';

interface IResponse {
  aliquotINSS: (salary: number) => number;
}

const useINSS = (): IResponse => {
  const aliquotINSS = useCallback((salary: number) => {
    if (salary <= 1_045.0) {
      return (salary * 7.5) / 100;
    }

    if (salary === 1_045.01 || salary <= 2_089.6) {
      return (salary * 9) / 100;
    }

    if (salary === 2_089.61 || salary <= 3_134.4) {
      return (salary * 12) / 100;
    }

    return (salary * 14) / 100;
  }, []);

  return {
    aliquotINSS,
  };
};

export default useINSS;
