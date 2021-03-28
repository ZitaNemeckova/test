context('Visit', () => {
  let baseUrl = Cypress.config().baseUrl;

  it('goes to correct url', () => {
    cy.visit(baseUrl);
    cy.contains('cypress-io').should('exist');
    cy.contains('cypress').should('exist');
  })

})
