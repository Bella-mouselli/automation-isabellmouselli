/// <reference types="cypress" />

//elements 
const dashboardTitle = 'Tester Hotel Overview'
const roomsButton =  ':nth-child(1) > .btn'
const clientsButton = '.blocks > :nth-child(2) > .btn'
const billsButton = 'div.block:nth-child(3) > a:nth-child(4)'
const reservationsButton = ':nth-child(4) > .btn'

//actions/functions
function backToOverview() {
    cy.contains('.btn', 'Back').click()
    cy.contains(dashboardTitle)

}
function goToRooms() {
    var name = 'Rooms'
    cy.contains('div.blocks', name) //div.block is the class for all the categorys
    cy.get(roomsButton).click()
    cy.contains('h2', name) //h2 is dashboard title, name is rooms
}

function goToClients() {
    var name = 'Clients'
    cy.contains('div.blocks', name)
    cy.get(clientsButton).click()
    cy.contains(name)
}
function goToBills() {
    var name = 'Bills'
    cy.contains('div.blocks', name)
    cy.get(billsButton).click()
    cy.contains(name)
}
function goToReservations() {
    var name = 'Reservations'
    cy.contains('div.blocks', name)
    cy.get(reservationsButton).click()
    cy.contains(name)
}

//exports
module.exports={
backToOverview,
 goToRooms,
  goToClients,
   goToBills,
    goToReservations


}