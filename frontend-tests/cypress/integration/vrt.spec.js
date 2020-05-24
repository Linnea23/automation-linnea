/// <reference types="cypress" />

import * as target from '../targets/targets'
import * as loginData from '../targets/loginData'
import * as indexPageFuncs from '../pages/indexPage'
import * as overviewPageFuncs from '../pages/overviewPage'
import * as roomsPageFuncs from '../pages/roomsPage'
import * as billsPageFuncs from '../pages/billsPage'



/* Test suite based on Test Case 3 from Assignment 01 */
describe('Visual Regression Test Suite', function(){
   
    /* Test case 3: Visual regression navigation test */ 
    it('TC 3: Navigation test from the Overview page', function(){
        cy.visit(target.applicationUrl);
            // Screeenshot 1
            cy.percySnapshot('LOGIN_PAGE');

        // Perform login attempt using correct data 
        indexPageFuncs.attemptLogin(cy, loginData.username, loginData.correctPassword);
            overviewPageFuncs.assertOverviewPageUrl(cy);
            // Screenshot 2
            cy.percySnapshot('OVERVIEW_PAGE');

        // Navigate to Rooms page    
        overviewPageFuncs.navigateToRoomsPage(cy);
            roomsPageFuncs.assertRoomsPageUrl(cy);
            // Screenshot 3
            cy.percySnapshot('ROOMS_PAGE');

            // Return to overview page
            roomsPageFuncs.clickBtnBackToOverviewPage(cy);
        overviewPageFuncs.assertOverviewPageUrl(cy);
           
        // Navigate to Bills page
        overviewPageFuncs.navigateToBillsPage(cy);
            billsPageFuncs.assertBillsPageUrl(cy);
            // Screenshot 4
            cy.percySnapshot('BILLS_PAGE');

            // Return to overview
            billsPageFuncs.clickBtnBackToOverviewPage(cy);
        overviewPageFuncs.assertOverviewPageUrl(cy);    

        // Added log-out to create an end to the test case
        overviewPageFuncs.attemptLogout(cy, loginData.url);
            indexPageFuncs.assertLoginPageUrl(cy);
            // Screenshot 5
            cy.percySnapshot('SUCCESSFUL_LOGOUT_PAGE');

    })

})