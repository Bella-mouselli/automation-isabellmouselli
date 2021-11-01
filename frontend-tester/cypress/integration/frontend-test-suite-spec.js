/// <reference types="cypress" />

before(() => {//visit localhost3000

    cy.visit('http://localhost:3000')

  })
  // en test suite
describe('Frontend test suite 1', function(){

    beforeEach(() => {

        cy.get(':nth-child(1) > input').type('tester01') //type in username
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c') //password
        cy.get('.btn').click() //Click log in
    })

        afterEach(() => {
            cy.get('.user > .btn').click() //log out
          })

      
    // ett test case
         it('check title URL' , function(){
            cy.get(':nth-child(1) > .btn') .click()
            cy.get('h1 > .router-link-active') .click()
            cy.contains ('Tester Hotel Overview') //kolla så du är på rätt sida (home page)
            

         })

         it('edit client email' , function(){
            cy.get('.blocks > :nth-child(2) > .btn') .click()
            cy.get(':nth-child(1) > .action > img') .click() //edit/delete option
            cy.get('.menu > :nth-child(1)') .click() // click on edit
            cy.get(':nth-child(4) > input').clear() .type('Jonas.H@example.se') //clear old text and type in new text
            cy.get('.blue') .click() //save button
            
            
            

         })

         it('go to edit room and press back' , function(){
            cy.get(':nth-child(1) > .btn').click()
            cy.get('h2 > .btn').click()
            cy.get('[href="/rooms"]').click() //back
            cy.contains('Rooms') //check the right page
            

         })

         it('create reservation' , function(){
            cy.get(':nth-child(4) > .btn').click()
            cy.get('h2 > .btn').click()
            cy.get(':nth-child(1) > input') .type('1995-09-09')
            cy.get(':nth-child(2) > input') .type('1995-09-10')
            cy.get(':nth-child(3) > select').select('Jonas Hellman (#1)') //select option from dropdown
            cy.get(':nth-child(4) > select').select('Floor 1, Room 101')
            cy.get(':nth-child(5) > select').select('ID: 1')
            cy.get('.blue').click()//save

         
            
         })

         it('delete reservation' , function(){
            cy.get(':nth-child(4) > .btn').click()
            cy.get('img').click() //edit/delete menu
            cy.get('.menu > :nth-child(2)').click()//click on delete
            
            

     
         })

         it('create new client - delete client' , function(){
            cy.get('.blocks > :nth-child(2) > .btn') .click()
            cy.get('h2 > .btn').click() //create new 
            cy.get(':nth-child(1) > input') .type('Isabell Mouselli')
            cy.get(':nth-child(2) > input').type('isabell@example.se')
            cy.get(':nth-child(3) > input') .type('1111111111')
            cy.get('.blue') .click()
            cy.get(':nth-child(3) > .action > img').click()
            cy.get('.menu > :nth-child(2)').click()//delete


         })

         it('create new bill - delete bill' , function(){
            cy.get('div.block:nth-child(3) > a:nth-child(4)').click()
            cy.get('h2 > .btn').click()
            cy.get('input').type('1500')// value for the new bill
            cy.get('.checkbox').click()//mark the checkbox for paid bill
            cy.get('.blue').click()//save
            cy.get(':nth-child(2) > .action > img').click()
            cy.get('.menu > :nth-child(2)').click()//delete

         })   
    })