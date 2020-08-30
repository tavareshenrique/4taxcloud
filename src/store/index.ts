import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducer';

import { IEmployeeState } from './modules/employee/interfaces';

export interface IState {
  employee: IEmployeeState;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
