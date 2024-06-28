export class LoginPage {

  navigate(){
    cy.visit('https://the-internet.herokuapp.com/login');
  }

  // Locators
  getUsernameField() {
    return cy.get('#username');
  }

  getPasswordField() {
    return cy.get('#password');
  }

  getLoginButton() {
    return cy.get('.radius');
  }

  getErrorMessage() {
    return cy.get('#flash');
  }

  getSuccessMessage() {
      return cy.get('#flash').should('be.visible');
  }


  // Methods for Actions
  enterUsername(username) {
    this.getUsernameField().type(username);
  }

  enterPassword(password) {
    this.getPasswordField().type(password);
  }

  clickLoginButton() {
    this.getLoginButton().click();
  }

  verifyErrorMessage() {
    this.getErrorMessage().should('be.visible');
  }

  //verifySuccessMessage() {
   //   this.getSuccessMessage().should('be.visible');
   // }
}