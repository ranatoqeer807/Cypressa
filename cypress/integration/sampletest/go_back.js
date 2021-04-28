describe('NavigationCheck', () => {
    it('verify the farword and back title', () => {

        cy.visit('https://lms-development.shopdev.co/dashboard')

        cy.get('#username').type('admin@organizationretain.co')

        cy.get('#password').type('admin')

        cy.wait(2000)

        cy.get(":nth-child(3) > .btn").click()

        cy.get(".hierarchy").click()

        // cy.go('back')

        cy.get(':nth-child(1) > .ng-tns-c4-0 > .program').click()

        cy.go('back')

        cy.go('forward')


        // cy.get('.club').click()

        // cy.go('forward')


    })

})