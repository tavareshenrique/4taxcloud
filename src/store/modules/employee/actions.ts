import {
  IEmployeeData,
  IAddEmployeeResponse,
  IUpdateEmployeeResponse,
  IRemoveEmployeeResponse,
} from './interfaces';

export function addEmployee(employee: IEmployeeData): IAddEmployeeResponse {
  return {
    type: 'ADD_EMPLOYEE',
    payload: {
      employee,
    },
  };
}

export function updateEmployee(
  employee: IEmployeeData,
): IUpdateEmployeeResponse {
  return {
    type: 'UPDATE_EMPLOYEE',
    payload: {
      employee,
    },
  };
}

export function removeEmployee(employeId: string): IRemoveEmployeeResponse {
  return {
    type: 'REMOVE_EMPLOYEE',
    payload: {
      employee: {
        id: employeId,
      },
    },
  };
}
