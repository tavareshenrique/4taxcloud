import { name } from 'faker';

describe('Pages | Employee Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be register an employee', () => {
    cy.contains('Registrar Funcionário').click();

    const employeeName = name.findName();

    cy.get('input[name="nome"]').type(employeeName);

    cy.get('input[name="cpf"]').type(Cypress.env('cpf'));

    cy.get('input[name="salario"]').type(Cypress.env('salary'));

    cy.get('input[name="salario"]').focus();

    cy.get('input[name="dependentes"]').type(Cypress.env('dependents'));

    cy.contains('Salvar').click();

    cy.contains(employeeName).should('be.visible');
  });

  it('should be update an employee', () => {
    const employeeName = name.findName();

    cy.registerAnEmployee();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('tbody').within(() => {
        cy.get('tr').first().click();
      });
    });

    cy.get('input[name="nome"]').clear();

    cy.get('input[name="nome"]').type(employeeName);

    cy.contains('Salvar').click();

    cy.contains(employeeName).should('be.visible');
  });

  it('should be delete an employee', () => {
    cy.registerAnEmployee();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('tbody').within(() => {
        cy.get('tr').first().click();
      });
    });

    cy.get('input[name="nome"]')
      .invoke('val')
      .then(employeeCYName => {
        const employeeName = String(employeeCYName);

        cy.contains('Excluir').click();

        cy.wait(2000);

        cy.get('.swal2-confirm').click();

        cy.wait(2000);

        cy.get('.swal2-confirm').click();

        cy.contains(employeeName).should('not.be.visible');
      });
  });

  it('should be cancel an delete employee', () => {
    cy.registerAnEmployee();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('tbody').within(() => {
        cy.get('tr').first().click();
      });
    });

    cy.contains('Excluir').click();

    cy.get('.swal2-cancel').click();

    cy.get('input[name="nome"]').invoke('val').should('be.ok');
  });

  it('should be navigate to home page', () => {
    cy.contains('Registrar Funcionário').click();

    cy.contains('Tabelas e cálculos do IRRF').click();

    cy.get('h1').contains('Tabelas e cálculos do IRRF').should('be.visible');
  });
});
