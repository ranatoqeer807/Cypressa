
import Loginpage from '../pageObjects/loginpage'
import partner from '../pageObjects/partner'
const obj=new Loginpage()
const obj1=new partner()


Given('I Navigate to the Website',()=>{


obj.visit()

})

And ('Validate the page title',()=>{

    cy.title().should("eq", 'Fabric')


})

And ('I enter the username',()=>{

    obj.fillemail('admin@organizationretain.co')


})

And ('I enter the password',()=>{

    obj.fillpassword('admin')

})

And ('I click on login page',()=>{

    obj.submit()

})

And ('I click on hierarchy',()=>{

    cy.get('.hierarchy').click()

        

})

And ('I click on partner',()=>{

    cy.get('.partner').click()

})



And ('I click on add new club button',()=>{

    obj1.card()

})

And ('I Enter partner name',()=>{

    obj1.Titlepartner("cucumber")

})

And ('I Enter partner reference name',()=>{

    obj1.Titlepartnerref("cucumber_ref")
})



And ('I scroll page to select hierarchy',()=>{

    cy.get('#NewEditNewAutomateclubEdit').scrollIntoView()
})

And ('I click on checkbutton',()=>{

    obj1.button()
})
 
And ('I click on create button',()=>{

    cy.get('.btn > .ng-star-inserted').click()

})
 

        
       
        
       


