describe('Pages | Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be visited the rigister employee page', () => {
    cy.contains('Registrar Funcionário').click();

    cy.contains('Cadastro de Funcionário').should('be.visible');
  });

  it('should be visited the updated employee page', () => {
    cy.registerAnEmployee();

    cy.get('[data-cy="table"]').within(() => {
      cy.get('tbody').within(() => {
        cy.get('tr').first().click();
      });
    });

    cy.contains('Alteração de Funcionário').should('be.visible');
  });
});
