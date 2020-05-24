/// <reference types="cypress" />

const roomsPageUrl = 'http://localhost:3000/rooms';
const btnBackToOverviewPage = '#app > div > div:nth-child(3) > a';

function assertRoomsPageUrl(cy){
    cy.log("Assert rooms page url.");
    cy.url().should('eq', roomsPageUrl);
}

function clickBtnBackToOverviewPage(cy){
    cy.log("Click the navigation button to return to the Overview page.");
    cy.get(btnBackToOverviewPage).click();
}

module.exports = {
    assertRoomsPageUrl,
    clickBtnBackToOverviewPage
}