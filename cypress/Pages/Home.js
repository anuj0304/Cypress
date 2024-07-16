// Home.js

export default class Home {
  visit() {
    cy.visit('https://www.amazon.in/');
  }

  login() {
    // Click on account list link
    cy.get('#nav-link-accountList-nav-line-1').click();

    // Wait for email input field to be visible and interactable
    cy.get('#ap_email_login').click();
    cy.get('#ap_email_login').type("anujnagaich@gmail.com");

    // Click on continue button
    cy.get('#continue', { timeout: 10000 }).should('be.visible').click();

    // Enter password
    cy.get('#ap_password', { timeout: 10000 }).should('be.visible').click().type('Anuj@1994');

    // Click on sign-in button
    cy.get('#signInSubmit', { timeout: 10000 }).should('be.visible').click();

    // Wait for login process to complete
    cy.wait(2000); // Adjust timing as necessary
  }
}
