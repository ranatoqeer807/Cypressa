
import Loginpage from '../pageObjects/loginpage'
 import Partner from '../pageObjects/partner'



 describe('LMS', () => {




    it('verify the Login', () => {


        // Below form pageobjectModel

         const obj=new Loginpage()

         const objp=new Partner()


         

        obj.visit()

        obj.fillemail('admin@organizationretain.co')

        obj.fillpassword('admin')

        obj.submit()

        cy.title().should("eq", 'Fabric')

        cy.get('.hierarchy').click()

        cy.get('.partner').click()

        objp.card()

        objp.Titlepartner("test")

        objp.Titlepartnerref("test_ref")

        cy.get('#NewEditNewAutomateclubEdit').scrollIntoView()
        
        objp.button()
        
        cy.get('.btn > .ng-star-inserted').click()


        

        


        


      






       

    
    })

   
  })