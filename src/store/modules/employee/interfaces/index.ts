export interface IEmployeeData {
  id: string;
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number;
  descontoIRPR: number | string;
}

export interface IEmployeeState {
  employees: IEmployeeData[];
}

export interface IAddEmployeeResponse {
  type: string;
  payload: {
    employee: IEmployeeData;
  };
}

export interface IUpdateEmployeeResponse {
  type: string;
  payload: {
    employee: IEmployeeData;
  };
}

export interface IRemoveEmployeeResponse {
  type: string;
  payload: {
    employee: {
      id: string;
    };
  };
}
