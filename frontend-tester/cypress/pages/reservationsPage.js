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
    cy.contains('Reservations')
    cy.get('h2 > .btn').click()
    cy.contains('New Reservation')

    cy.get(startDate).type(startD)
    cy.get(endDate).type(endD)

    cy.get(clientInput).select(client)
    cy.get(roomInput).select(room)
    cy.get(billInput).select(bill)

    cy.get(saveButton).click()
}


// exports
module.exports = {
    createNewReservation
}