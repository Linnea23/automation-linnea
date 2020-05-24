/// <reference types="cypress" />

import * as target from '../targets/targets'
import * as loginData from '../targets/loginData'
import * as indexPageFuncs from '../pages/indexPage'
import * as overviewPageFuncs from '../pages/overviewPage'

const applicationUrl = 'http://localhost:3000';

/* Test suite from Assignment 01 */
describe('Assigment 01 Test Suite', function(){

    beforeEach( ()=>{
        cy.visit(target.applicationUrl);
    })
    
    /* Test case 1: Attempt login using known user in the database */ 
    it('TC 1: Attempt login with correct user data', function(){

        // Pre-condition: browser navigated to http://localhost:3000/login
        indexPageFuncs.gotoLoginPageUrl(cy);

        // Perform login attempt using correct data 
        indexPageFuncs.attemptLogin(cy, loginData.username, loginData.correctPassword);
            overviewPageFuncs.assertOverviewPageUrl(cy);

        // Added log-out to create an end to the test case
        overviewPageFuncs.attemptLogout(cy, loginData.url);
            indexPageFuncs.assertLoginPageUrl(cy);

    })

    /* Test case 2: Attempt login using incorrect login data */
    it('TC 2: Attempt login using incorrect login data', function(){
        
        // Pre-condition: browser navigated to http://localhost:3000/login
        indexPageFuncs.gotoLoginPageUrl(cy);

        // Perform login attempt using incorrect data 
        indexPageFuncs.attemptLogin(cy, loginData.username, loginData.incorrectPassword);
            indexPageFuncs.assertErrMsgBoxAndContent(cy, loginData.failedLogInMessage);

        // After-condition: user still at the log in page
        indexPageFuncs.assertLoginPageUrl(cy);
        
    })
})