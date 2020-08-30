/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';
import { IEmployeeState } from './interfaces';

const INITIAL_STATE: IEmployeeState = {
  employees: [],
};

const employee: Reducer<IEmployeeState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_EMPLOYEE': {
        const { employee: employeeData } = action.payload;

        draft.employees.push(employeeData);

        break;
      }

      case 'UPDATE_EMPLOYEE': {
        const { employee: employeeData } = action.payload;

        const employeeIndex = draft.employees.findIndex(
          empl => empl.id === employeeData.id,
        );

        draft.employees[employeeIndex] = employeeData;

        break;
      }

      case 'REMOVE_EMPLOYEE': {
        const { employee: employeeData } = action.payload;

        draft.employees.splice(
          draft.employees.findIndex(empl => empl.id === employeeData.id),
          1,
        );

        break;
      }

      default:
        return draft;
    }
  });
};

export default employee;
