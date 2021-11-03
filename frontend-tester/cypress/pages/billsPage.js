/// <reference types="cypress" />

// Elements
const valueInput = ':nth-child(1) > input'
const paidInput = '.checkbox'
const saveButton = 'a.btn:nth-child(2)'

// Actions

function createNewBill(value, paid) {
    cy.contains('Bills')
    cy.get('h2 > .btn').click()
    cy.contains('New Bill')
    cy.get(valueInput).type(value)
    cy.get(paidInput).click()
    cy.get(saveButton).click()
}


// exports
module.exports = {
    createNewBill
}