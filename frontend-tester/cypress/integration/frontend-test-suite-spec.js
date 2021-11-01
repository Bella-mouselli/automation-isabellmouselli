/// <reference types="cypress" />

before(() => {

    cy.visit('http://localhost:3000/%27')

  })
  // en test suite
describe('Frontend test suite', function(){
    // ett test case
         it.skip('check title URL' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type ('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get(':nth-child(1) > .btn') .click()
            cy.get('h1 > .router-link-active') .click()
            cy.contains ('Tester Hotel Overview')
            cy.get('.user > .btn') .click()

         })

         it.skip('edit client email' , function(){
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

         it.skip('go to edit room and press back' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get(':nth-child(1) > .btn').click()
            cy.get('h2 > .btn').click()
            cy.get('[href="/rooms"]').click()
            cy.contains('Rooms')
            cy.get('.user > .btn') .click()

         })

         it.skip('create reservation' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get(':nth-child(4) > .btn').click()
            cy.get('h2 > .btn').click()
            cy.get(':nth-child(3) > select').select('Jonas Hellman (#1)')
            cy.get(':nth-child(4) > select').select('Floor 1, Room 101')
            cy.get(':nth-child(5) > select').select('ID: 1')
            cy.get('.blue').click()

         
            
         })

         it.skip('delete reservation' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get(':nth-child(4) > .btn').click()
            cy.get('img').click()
            cy.get('.menu > :nth-child(2)').click()
            cy.contains('Reservations')
            cy.get('.user > .btn') .click()

     
         })

         it.skip('create new client - delete client' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get('.blocks > :nth-child(2) > .btn') .click()
            cy.get('h2 > .btn').click()
            cy.get(':nth-child(1) > input') .type('Isabell Mouselli')
            cy.get(':nth-child(2) > input').type('isabell@example.se')
            cy.get(':nth-child(3) > input') .type('1111111111')
            cy.get('.blue') .click()
            cy.get(':nth-child(3) > .action > img').click()
            cy.get('.menu > :nth-child(2)').click()


         })

         it('create new bill - delete bill' , function(){
            cy.get(':nth-child(1) > input') .type('tester01')
            cy.get(':nth-child(2) > input') .type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn') .click()
            cy.get('div.block:nth-child(3) > a:nth-child(4)').click()
            cy.get('h2 > .btn').click()
            cy.get('input').type('1500')
            cy.get('.checkbox').click()
            cy.get('.blue').click()
            cy.get(':nth-child(2) > .action > img').click()
            cy.get('.menu > :nth-child(2)').click()



         })   
    })