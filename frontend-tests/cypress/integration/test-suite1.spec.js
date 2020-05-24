/// <reference types="cypress" />

import * as indexPageFuncs from '../pages/indexPage'

const applicationUrl = 'http://localhost:3000';

/* Test suite from Assignment 01 */
describe('Assigment 01 Test Suite', function(){

    beforeEach( ()=>{
        cy.visit(applicationUrl);
    })
    
    /* Test case 1: Attempt login using known user in the database */ 
    it('Attempt login with known user data', function(){

        // Pre-condition: browser navigated to http://localhost:3000/login
        indexPageFuncs.gotoLoginPageUrl(cy);

    })
})