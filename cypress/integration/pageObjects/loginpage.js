class Loginpage {


    visit() {

        cy.visit('https://lms-development.shopdev.co/')

    }


    fillemail(value) {

        const field = cy.get('#username')
        field.clear()
        field.type(value)
        return this

    }


    fillpassword(value) {

        
        const field = cy.get('#password')
        field.clear()
        field.type(value)
        return this


    }

    submit() {

        const button = cy.get(":nth-child(3) > .btn")
        button.click()

    }


}

export default Loginpage