

import Loginpage from '../pageObjects/loginpage'
import points from '../pageObjects/points'


describe('LMS', () => {




   it('verify the Login', () => {


       // Below form pageobjectModel

        const obj=new Loginpage()

        const obj1=new points()

       obj.visit()

       obj.fillemail('admin@organizationretain.co')

       obj.fillpassword('admin')

       obj.submit()

       cy.title().should("eq", 'Fabric')

       obj1.points()

       obj1.pointsManagement()

       cy.get('#3-link').click()

       obj1.AddButton()

       obj1.Duration()
       
       obj1.Navigation()
       
       obj1.SelectDuration()

       obj1.Club()

       obj1.Dropdown()

       obj1.container() 
       
       obj1.create()

              
      
   
   })

  
 })