/// <reference types="cypress" />

const loginPageUrl = 'http://localhost:3000/login';

const smallContainerDiv = '#app > .container.small';

const usernameTextfield = ':nth-child(1) > input';
const passwordTextfield = ':nth-child(2) > input';
const loginBtn = '.btn';

const errMsgBox  = '#app > div > div'; 

/* Trigger pre-condition: go to login page and assert url */
function gotoLoginPageUrl(cy){
    cy.log("Visit login page url.");
    cy.visit(loginPageUrl);
}

function assertLoginPageUrl(cy){
    cy.log("Assert login page url.");
    cy.url().should('eq', loginPageUrl);
}

/* Attempt login */
function attemptLogin(cy, username, password){

    cy.log("Assert visibilty of the login container.");
    cy.get(smallContainerDiv).should('be.visible');

    cy.log("Attempt login.");
    cy.get(usernameTextfield).type(username);
    cy.get(passwordTextfield).type(password);
    cy.get(loginBtn).click();

}

/* Assert error message box and content */
function assertErrMsgBoxAndContent(cy, errMsg){
    cy.get(errMsgBox).should('be.visible');
    cy.get(errMsgBox).contains(errMsg);
}

module.exports = {
    assertLoginPageUrl,
    gotoLoginPageUrl,
    attemptLogin,
    assertErrMsgBoxAndContent
}