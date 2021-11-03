/// <reference types="cypress" />
//imports all the js files
import * as loginFuncs from '../pages/loginPage'
import * as dashboardfuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as billsFuncs from '../pages/billsPage'
import * as reservationsFuncs from '../pages/reservationsPage'



  // en test suite
describe('Frontend test suite 1', function(){
    before(() => {//visit localhost3000

        cy.visit('http://localhost:3000')
    
      })

     //test setup
    beforeEach(() => {
        loginFuncs.performValidLogin(cy)// login before new test 

    })

        afterEach(() => {
            cy.get('.user > .btn').click() //log out after test
          })
          
          it('checkAllRooms', function(){
              dashboardfuncs.goToRooms(cy)// views page rooms 
              dashboardfuncs.backToOverview(cy)//goes back to dashboard page

              dashboardfuncs.goToClients(cy)
              dashboardfuncs.backToOverview(cy)

              dashboardfuncs.goToBills(cy)
              dashboardfuncs.backToOverview(cy)

              dashboardfuncs.goToReservations(cy)
              dashboardfuncs.backToOverview(cy)
          })

    it('Create new room', function () { // creates a new room

        let category = 1//gives the category field its value
        let roomNumber = 5
        let floor = 4
        let available = true
        let price = 500
        

        dashboardfuncs.goToRooms()
        roomsFuncs.createNewRoom(category, roomNumber, floor, available, price,)
        cy.contains('div.card', roomNumber)
        dashboardfuncs.backToOverview()

    })

    it('New Client', function () {

        let name = 'Isabell Mouselli'// types in isabell mouselli in the input field for name
        let email = 'Mouselli@hotmail.com'
        let tel = '1234567890'

        dashboardfuncs.goToClients()
        clientsFuncs.createNewClient(name, email, tel)
        cy.contains('div.card', name)
        dashboardfuncs.backToOverview()

    })
    it('New Bill', function () {

        let value = 500
        let paid = true//checks the checkbox field

        dashboardfuncs.goToBills()
        billsFuncs.createNewBill(value, paid)
        cy.contains('div.card', value)
        dashboardfuncs.backToOverview()

    })
    it('New reservation', function () {

        let startD = '1995-09-09'
        let endD = '2021-09-09'
        let client = 3
        let room = 4
        let bill = 1

        dashboardfuncs.goToReservations()
        reservationsFuncs.createNewReservation(startD, endD, client, room, bill)
        cy.contains('div.card', startD, endD)
        dashboardfuncs.backToOverview()

    })
  
    

})