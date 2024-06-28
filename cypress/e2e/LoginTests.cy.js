import {LoginPage} from '../e2e/LoginPage.cy'; 

describe('Login Page Tests', () => {

    const loginPage = new LoginPage();

    beforeEach(() => {
       cy.visit('https://the-internet.herokuapp.com/login'); // visit url
    });

    it('should login successfully with valid credentials', () => {

        loginPage.enterUsername('tomsmith');
        loginPage.enterPassword('SuperSecretPassword!');
        loginPage.clickLoginButton();

        cy.wait(1000)
        loginPage.getSuccessMessage().should('have.text', '\n            You logged into a secure area!\n            ×\n          '); // verify success message contains this text

    });

    it('should fail to login with invalid credentials', () => {

        loginPage.enterUsername('tomsmith');
        loginPage.enterPassword('SuperSecretPassword');
        loginPage.clickLoginButton();

       loginPage.getErrorMessage().should('have.text', '\n            Your password is invalid!\n            ×\n          '); // Verify error message contains this text

    });

    it('should display error message when login fails', () => {

        loginPage.enterUsername('tom');
        loginPage.enterPassword('SuperSecretPassword');
        loginPage.clickLoginButton();
  
    
        loginPage.getErrorMessage().should('have.text', '\n            Your username is invalid!\n            ×\n          '); // Verify error message contains this text

    });

});