/// <reference types="cypress" />

const billsPageUrl = 'http://localhost:3000/bills';
const btnBackToOverviewPage = '#app > div > div:nth-child(3) > a';

function assertBillsPageUrl(cy){
    cy.log("Assert rooms page url.");
    cy.url().should('eq', billsPageUrl);
}

function clickBtnBackToOverviewPage(cy){
    cy.log("Click the navigation button to return to the Overview page.");
    cy.get(btnBackToOverviewPage).click();
}

module.exports = {
    assertBillsPageUrl,
    clickBtnBackToOverviewPage
}