/// <reference types="cypress" />

// elements
const nameInput = ':nth-child(1) > input'
const emailInput = ':nth-child(2) > input'
const telInput = ':nth-child(3) > input'
const saveButton = 'a.btn:nth-child(2)'

// actions/functions

function createNewClient(name, email, tel) {
    cy.get('h2 > .btn').click()
    cy.contains('New Client')
    cy.get(nameInput).type(name)
    cy.get(emailInput).type(email)
    cy.get(telInput).type(tel)

    cy.get(saveButton).click()
}


// exports
module.exports = {
    createNewClient
}