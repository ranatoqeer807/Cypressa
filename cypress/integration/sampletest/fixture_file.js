var demo = require('../../fixtures/demo.json')



describe('MyTestSuit', () => 
{
    
  before(() => {
    
    // runs once before all tests in the block
  
    cy.fixture('demo').then((data)=>{
  
        demo = data
  
  
    })
  })
    it('Fixtures', () => {

        cy.visit('https://lms-development.shopdev.co/')

        cy.title().should("eq", 'Fabric')

        cy.get('#username').type(demo.email)

        cy.get('#password').type(demo.password)

         cy.wait(5000)

        cy.get(":nth-child(3) > .btn").click()
      
    })

 
  })