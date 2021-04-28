describe('MyTestSuit', () => 
{
    it('verify the title of page Positive', () => {

        cy.visit('https://lms-development.shopdev.co/dashboard')
        cy.title().should("eq", 'Fabric')
      
    })

  

  })