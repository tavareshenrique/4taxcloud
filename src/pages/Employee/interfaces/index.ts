export interface IEmployeeData {
  id: string;
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number;
  descontoIRPR: number | string;
}

export interface IEmployeeDataLocation {
  data: {
    id: string;
    nome: string;
    cpf: string;
    salario: number;
    desconto: number;
    dependentes: number;
    descontoIRPR: number | string;
  };
}
