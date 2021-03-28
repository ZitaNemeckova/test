context('Click', () => {
  let baseUrl = Cypress.config().baseUrl;

  it('click and fail on async', () => {
    cy.visit(baseUrl);
    cy.contains('Issues').click();
    cy.contains('Pull requests').click();
    cy.contains('Discussions').click();
    cy.contains('Actions').click();
    cy.contains('Security').click();
    cy.contains('Insights').click();
  })
  it('click and wait 300', () => {
    cy.visit(baseUrl);
    cy.contains('Issues').click();
    cy.wait(300);
    cy.contains('Pull requests').click();
    cy.wait(300);
    cy.contains('Discussions').click();
    cy.wait(300);
    cy.contains('Actions').click();
    cy.wait(300);
    cy.contains('Security').click();
    cy.wait(300);
    cy.contains('Insights').click();
    cy.wait(300);
  })
  it('click and wait for request', () => {
    cy.visit(baseUrl);
    cy.server();
    cy.route('GET', baseUrl + 'issues?_pjax=%23js-repo-pjax-container').as('issues');
    cy.route('GET', baseUrl + 'pulls?_pjax=%23js-repo-pjax-container').as('pulls');
    cy.route('GET', baseUrl + 'discussions*').as('discussions');
    cy.route('GET', baseUrl + 'actions').as('actions');
    cy.route('GET', baseUrl + 'security').as('security');
    cy.route('GET', baseUrl + 'insights').as('insights');
    cy.contains('Issues').click();
    cy.wait("@issues");
    cy.contains('Pull requests').click();
    cy.wait("@pulls");
    cy.contains('Discussions').click();
    cy.wait("@discussions");
    cy.contains('Actions').click();
    cy.wait("@actions");
    cy.contains('Security').click();
    cy.wait("@security");
    cy.contains('Insights').click();
    cy.wait("@insights");
  })

})
