import Loginpage from '../pageObjects/loginpage'

 describe('LMS', () => {


//     before(() => {
//         // runs once before all tests in the block

//         cy.fixture('example').then((data)=>{

//             this.data=data


//         })
//       })


    it('verify the Login', () => {


        // Below form pageobjectModel

        const obj=new Loginpage()

        obj.visit()

        obj.fillemail('admin@organizationretain.co')

        obj.fillpassword('admin')

        obj.submit()

        cy.title().should("eq", 'Fabric')

        // Below from fixture file

        // cy.visit('https://lms-development.shopdev.co/')

        // cy.title().should("eq", 'Fabric')

        // cy.get('#username').type(this.data.email)

        // cy.get('#password').type(this.data.password)

        //  cy.wait(5000)

        // cy.get(":nth-child(3) > .btn").click()

        // Below from Custom command
    
         cy.login('admin@organizationretain.co','admin')

        cy.get(".hierarchy").click()

        cy.get(".club").click() 

        cy.get(".card-block > .btn").click() 

        cy.get ("[placeholder='Title of the Club']").type("autonewclub")

        cy.get (":nth-child(1) > :nth-child(2) > .form-group > .input-group > .form-control").type("autonewclub_club")

        cy.get(':nth-child(1) > .formarray-row > :nth-child(1) > .form-group > .input-group > .form-control').type("brightnesnewclub")

        cy.get('.tier-form.ng-dirty > .formarray-row > :nth-child(2) > .form-group > .input-group > .form-control').type("NewClubbirghtness_tier")

        cy.get('.tier-form.ng-dirty > .formarray-row > :nth-child(3) > .form-group > .input-group > .form-control').type("5555")

        cy.get('.tier-form.ng-dirty > .formarray-row > :nth-child(5) > .form-group > .input-group > .col-5').type('1')

        cy.get('.tier-form.ng-dirty > .formarray-row > :nth-child(5) > .form-group > .input-group > .custom-dropdownlist > .ng-select-container > .ng-arrow-wrapper').click()
        
        cy.get('.ng-dropdown-panel-items').contains('Year').click()

        cy.get('.hierarchy-list-header > .form-check > .form-check-label > .col-12 > .row').click()

        // cy.get('#Organization Retain Loyalty Program').check().should('be.checked')

        // cy.get('#Organization Retain Loyalty Program').check().should('be.checked')

        cy.get("#1").click()

        cy.get('.modal-body > .row > :nth-child(1) > .btn > span').click()


        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        

        cy.get('.btn > .ng-star-inserted').click()


        //Edit club 

    
    })

   
  })