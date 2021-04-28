describe('MyTestSuit', () => 
{
    it('file upload', () => {

       const filePath='file.png';


       cy.visit("https://the-internet.herokuapp.com/upload")

       cy.get('#file-upload').attachFile(filePath)
       cy.get("#file-submit").click()
       cy.get("#uploaded-files").contains('file.png')
      
    })

  

  })