/// <reference types="cypress" />


// elements
const startDate = ':nth-child(1) > input'
const endDate = ':nth-child(2) > input'
const clientInput = ':nth-child(3) > select'
const roomInput = ':nth-child(4) > select'
const billInput = ':nth-child(5) > select'
const saveButton = 'a.btn:nth-child(2)'


// actions/functions

function createNewReservation(startD, endD, client, room, bill) {
    cy.contains('Reservations') //check the right page
    cy.get('h2 > .btn').click() //create new
    cy.contains('New Reservation')

    cy.get(startDate).type(startD) //type in field for start date
    cy.get(endDate).type(endD) //field for end date

    cy.get(clientInput).select(client) // select client for reservation
    cy.get(roomInput).select(room) //select room
    cy.get(billInput).select(bill) //Select room 

    cy.get(saveButton).click()// save the new reservation
  
}


// exports
module.exports = {
    createNewReservation
}