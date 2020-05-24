/// <reference types="cypress" />

const loginPageUrl = 'http://localhost:3000/login';

const usernameTextfield = 'nth-child(1) > input';
const passwordTextfield = 'nth-child(2) > input';
const loginBtn = '.btn';

/* Trigger pre-condition: go to Login page */
function gotoLoginPageUrl(cy){
    cy.visit(loginPageUrl);
    
    cy.url().should('include', loginPageUrl);
}

module.exports = {
    gotoLoginPageUrl
}