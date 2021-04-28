import Loginpage from '../pageObjects/loginpage'

describe('MyTestSuit', () => 
{
    it('verify the title of page login', () => {

        const ob=new Loginpage()

        ob.visit()

        ob.fillemail('admin@organizationretain.co')

        ob.fillpassword('admin')

        ob.submit()

        cy.title().should("eq", 'Fabric')
      
    })

  })