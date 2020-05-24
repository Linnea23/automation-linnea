/// <reference types="cypress" />

const overviewPageUrl = 'http://localhost:3000/';

const logOutBtn = '.user > .btn';
const roomsViewButton = '#app > div > div > div:nth-child(1) > a.btn'; 
const clientsViewButton = '#app > div > div > div:nth-child(2) > a.btn';
const billsViewButton = '#app > div > div > div:nth-child(3) > a.btn';
const reservationsViewButton = '#app > div > div > div:nth-child(4) > a.btn';


/* Trigger pre-condition: go to overview page */
function assertOverviewPageUrl(cy){   
    cy.url().should('eq', overviewPageUrl);
}

/* Attempt log out */
function attemptLogout(cy){
    cy.log("Attempt log out.");
    cy.get(logOutBtn).click();  
}

/* Navigate to rooms page */
function navigateToRoomsPage(cy){
    cy.log("Click view button for the Rooms page");
    cy.get(roomsViewButton).click();
}

/* Navigate to bills page */
function navigateToBillsPage(cy){
    cy.log("Click view button for the Bills page");
    cy.get(billsViewButton).click();
}

module.exports = {
    assertOverviewPageUrl,
    attemptLogout,
    navigateToRoomsPage,
    navigateToBillsPage
}