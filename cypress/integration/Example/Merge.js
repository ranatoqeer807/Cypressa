

import Loginpage from '../pageObjects/loginpage'


describe('LMS', () => {




   it('verify the Login', () => {


       // Below form pageobjectModel

        const obj=new Loginpage()

       obj.visit()

       obj.fillemail('admin@organizationretain.co')

       obj.fillpassword('admin')

       obj.submit()

       cy.title().should("eq", 'Fabric')

       cy.get(':nth-child(5) > a.ng-star-inserted > .member').click()

       cy.get('.member-merge').click()
     
       cy.xpath("/html/body/app-root/panel/div/div[3]/div/members/merge-list/div[2]/div[2]/div/div/form/div/div[1]/input").scrollIntoView()

       cy.xpath("/html/body/app-root/panel/div/div[3]/div/members/merge-list/div[2]/div[2]/div/div/form/div/div[1]/input").type("888859547820")

      
       cy.get(':nth-child(2) > .form-section-block > .section-content > form.ng-valid > .row > :nth-child(2) > .btn').click()
      
       cy.get('.hierarchy-list > .form-check > .form-check-input').click()

       cy.xpath("/html/body/app-root/panel/div/div[3]/div/members/merge-list/div[2]/div[4]/div/div/form/div/div[1]/input").type("888861786053")

       cy.get(':nth-child(4) > .form-section-block > .section-content > form.ng-valid > .row > :nth-child(2) > .btn').click()

       cy.xpath("/html/body/app-root/panel/div/div[3]/div/members/merge-list/div[2]/div[4]/div/div[2]/div[2]/div/input").click()
       
       cy.get('.reason-block-wrap > form.ng-untouched > .no-gutters')

       cy.get(':nth-child(2) > .reasons-checklist').click()

       cy.get(':nth-child(2) > .reasons-checklist')
    



      

   
   })

  
 })