/// <reference types="cypress" />

const overviewPageUrl = 'http://localhost:3000/';

const logOutBtn = '.user > .btn';


/* Trigger pre-condition: go to overview page */
function assertOverviewPageUrl(cy){   
    cy.url().should('eq', overviewPageUrl);
}

/* Attempt log out */
function attemptLogout(cy){
    cy.log("Attempt log out.");
    cy.get(logOutBtn).click();  
}

module.exports = {
    assertOverviewPageUrl,
    attemptLogout
}