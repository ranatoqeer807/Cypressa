describe('MyTestSuit', () => {

  

        before(() => {
          // runs once before all tests in the block

          cy.log("***************This is Setup Block******************")
        })


        after(() => {
          // runs once after all tests in the block

          cy.log("***************This is Tier Down Block******************")
        })
      
        beforeEach(() => {
          // runs before each test in the block

          cy.log("***************This is LOGIN BLock******************")
        })
      
        afterEach(() => {
          // runs after each test in the block

          cy.log("***************This is LOGOUT BLock******************")
        })
      
      
      


    it('Searching', () => {

        cy.log("***************This is Searching Test******************")

        })


        it('Advance Searching', () => {

            cy.log("***************This is Advance Searching Test******************")
    
            })


            it('Listing products', () => {

                cy.log("***************This is Listing products Test******************")
        
                })
        
    

})