/// <reference types="cypress" />


// elements
const categoryIn = 'div.field:nth-child(1) > select:nth-child(2)'
const roomNumberIn = 'div.field:nth-child(2) > input:nth-child(2)'
const floorIn = 'div.field:nth-child(3) > input:nth-child(2)'
const availableInput = '.checkbox'
const priceIn = 'div.field:nth-child(5) > input:nth-child(2)'
const featuresIn = 'div.field:nth-child(6) > select'
const saveButton = 'a.btn:nth-child(2)'


// actions/functions

function createNewRoom(category, roomNumber, floor, available, price, feature) {
    cy.get('h2 > .btn').click()
    cy.contains('New Room')

   // cy.contains('CATEGORY')
    cy.get(categoryIn).select(category)

   // cy.contains('NUMBER')
    cy.get(roomNumberIn).type(roomNumber)

    //cy.contains('FLOOR')
    cy.get(floorIn).type(floor)

   
    cy.get(availableInput).click()
    

    //cy.contains('PRICE')
    cy.get(priceIn).type(price)

   // cy.contains('FEATURES')
    cy.get(featuresIn).select('Penthouse')

    cy.get(saveButton).click()
}



// exports
module.exports = {
    createNewRoom
}