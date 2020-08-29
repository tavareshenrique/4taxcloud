export interface IEmployeesAPI {
  id: string;
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number;
  descontoIRPR: number | string;
}
