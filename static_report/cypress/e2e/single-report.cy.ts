describe('Single Report', () => {
  it('should expand the table overview by clicking items', () => {
    cy.visit('http://localhost:3000');

    const first = cy.get('[data-cy="sr-table-overview-btn"]').first();
    first.should('have.attr', 'aria-expanded', 'false');
    first.click();
    first.should('have.attr', 'aria-expanded', 'true');

    const second = cy.get('[data-cy="sr-table-overview-btn"]').eq(1);
    first.should('have.attr', 'aria-expanded', 'false');
    second.click();
    second.should('have.attr', 'aria-expanded', 'true');
    second.click();
    second.should('have.attr', 'aria-expanded', 'false');
  });

  it('should navigate to the table detail page', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="sr-navigate-report-detail"]').should('not.exist');

    const first = cy.get('[data-cy="sr-table-overview-btn"]').first();
    first.click();

    const navigateBtn = cy
      .get('[data-cy="sr-navigate-report-detail"]')
      .should('exist');
    navigateBtn.click();

    cy.url().should('include', '/tables/ACTION');
  });

  it('should navigate to the table detail page and back to overview page', () => {
    cy.visit('http://localhost:3000');

    const first = cy.get('[data-cy="sr-table-overview-btn"]').first();
    first.click();

    const navigateBtn = cy
      .get('[data-cy="sr-navigate-report-detail"]')
      .should('exist');
    navigateBtn.click();

    cy.url().should('include', '/tables/ACTION');

    const backLink = cy.get('[data-cy="sr-report-breadcrumb-back"]');
    backLink.click();
    cy.url().should('equal', 'http://localhost:3000/#/');
  });

  it('should navigate to table detail page and toggle tests tab', () => {
    cy.visit('http://localhost:3000/#/tables/ACTION');

    const testsTab = cy.get('[data-cy="sr-report-tests-tab"]');
    testsTab.should('have.attr', 'aria-selected', 'false');
    testsTab.click();
    testsTab.should('have.attr', 'aria-selected', 'true');
  });

  it('should get the default list view and toggle to schema view', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-attached]').should('have.attr', 'data-attached', 'summary');

    const toggleToSchema = cy.get('[data-cy="schema-view"]');
    toggleToSchema.click();
    cy.get('[data-attached]').should('have.attr', 'data-attached', 'schema');
  });

  it('should open and close the feedback modal', () => {
    cy.visit('http://localhost:3000');

    const feebackIcon = cy.get('[data-cy="open-feedback-modal"]');
    feebackIcon.click();
    cy.get('[data-cy="feedback-modal"]').should('be.visible');

    const closeButton = cy.get('[data-cy="close-feedback-modal"]');
    closeButton.click();
    cy.get('[data-cy="feedback-modal"]').should('not.exist');
  });
});