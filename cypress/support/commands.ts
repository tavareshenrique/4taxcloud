import { name } from 'faker';

// add new command to the existing Cypress interface
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Yields "selectFirstTableRowModalAndClick"
       *
       * @returns {typeof void}
       * @memberof Chainable
       *
       */
      registerAnEmployee(): void;
    }
  }
}

// create a commands to Cypress:
export const registerAnEmployee = (): void => {
  cy.contains('Registrar Funcionário').click();

  const employeeName = name.findName();

  cy.get('input[name="nome"]').type(employeeName);

  cy.get('input[name="cpf"]').type(Cypress.env('cpf'));

  cy.get('input[name="salario"]').type(Cypress.env('salary'));

  cy.get('input[name="salario"]').focus();

  cy.get('input[name="dependentes"]').type(Cypress.env('dependents'));

  cy.contains('Salvar').click();

  cy.wait(5000);
};

// add commands to Cypress:
Cypress.Commands.add('registerAnEmployee', registerAnEmployee);
