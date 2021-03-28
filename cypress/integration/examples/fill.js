context('Fill', () => {
  let baseUrl = Cypress.config().baseUrl;

  it('goes to correct url', () => {
    cy.visit(baseUrl);
  })

})
