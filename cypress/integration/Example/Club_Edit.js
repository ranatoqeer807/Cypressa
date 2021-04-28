import Loginpage from '../pageObjects/loginpage'


describe('LMS', () => 
{
    it('verify the Login', () => {

        // cy.visit('https://lms-development.shopdev.co/')

        // cy.title().should("eq", 'Fabric')

        // cy.get('#username').type('admin@organizationretain.co')

        // cy.get('#password').type('admin')

        // cy.get(":nth-child(3) > .btn").click()

        // const obj=new Loginpage()

        // obj.visit()

        // obj.fillemail('admin@organizationretain.co')

        // obj.fillpassword('admin')

        // obj.submit()

        cy.login('admin@organizationretain.co','admin')

        cy.title().should("eq", 'Fabric')

        cy.get(".hierarchy").click()

        cy.get(".club").click() 

        cy.get(':nth-child(2) > .card-block > .card-controls > .ng-star-inserted > .btn').click() 
        
        cy.get ("[placeholder='Title of the Club']").clear().type("NewEditNewAutomateclubEdit")

        cy.get('.row > :nth-child(1) > .btn').click()

        



    
    })

   
  })