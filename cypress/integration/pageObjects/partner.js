class Partner {



    card() {
        const field = cy.get('.card-block > .btn')
        field.click()
        return this

    }

    Titlepartner(value) {

        const field = cy.get("[placeholder='Title of the Partner']")




        field.clear()
        field.type(value)
        return this

    }

    Titlepartnerref(value) {



        const fieldt = cy.get(':nth-child(2) > .form-group > .input-group > .form-control')


        fieldt.clear()
        fieldt.type(value)
        return this



    }


    button() {
        const field = cy.get('#NewEditNewAutomateclubEdit')

        field.click()
        return this

    }









}

export default Partner