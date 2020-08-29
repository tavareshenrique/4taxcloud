export interface IEmployeeData {
  id: string;
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number | string;
}
