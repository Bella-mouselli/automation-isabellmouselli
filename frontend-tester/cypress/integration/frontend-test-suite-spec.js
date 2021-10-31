/// <reference types="cypress" />
// en test suite
describe('Frontend test suite', function(){
    // ett test case
        it('valid login', function(){
            cy.visit('http://localhost:3000')
            cy.contains('Login') 
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type ('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.contains ('Tester Hotel Overview')
            cy.get('.user > .btn') .click()
            cy.contains ('Login')
         })

         it('check title URL' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type ('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get(':nth-child(1) > .btn') .click()
            cy.get('h1 > .router-link-active') .click()
            cy.contains ('Tester Hotel Overview')
            cy.get('.user > .btn') .click()

         })

         it('edit client email' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type ('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get('.blocks > :nth-child(2) > .btn') .click()
            cy.get(':nth-child(1) > .action > img') .click()
            cy.get('.menu > :nth-child(1)') .click()
            cy.get(':nth-child(4) > input').clear() .type('Jonas.H@example.se')
            cy.get('.blue') .click()
            cy.get('.user > .btn') .click()
            
            

         })

         it('go to edit room and press back' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get(':nth-child(1) > .btn').click()
            cy.get('h2 > .btn').click()
            cy.get('[href="/rooms"]').click()
            cy.contains('Rooms')
            cy.get('.user > .btn') .click()

         })

         //it('delete reservation' , function(){
           // cy.get(':nth-child(1) > input') .type('tester01')
            //cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            //cy.get('.btn') .click()
            //cy.get(':nth-child(4) > .btn').click()
            //cy.get('img').click()
            //cy.get('.menu > :nth-child(2)').click()
            //cy.contains('Reservations')
            //cy.get('.user > .btn') .click()
            
        // })

         it('create reservation' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get(':nth-child(4) > .btn').click()
            cy.get('h2 > .btn').click()
            cy.get('#app').select('Jonas Hellman')
           
            
         })
    
    })