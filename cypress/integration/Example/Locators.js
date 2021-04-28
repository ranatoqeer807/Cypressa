


describe('Locating Elements', () => 
{


    it('verify types of locators', () => {

      cy.visit("https://demo.nopcommerce.com/") //open the URL

      cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //searhing Product

      cy.get("[type='submit']").click() //click on search button 

      cy.get(".product-box-add-to-cart-button[type='button']").click()

      cy.get("#product_enteredQuantity_4").clear().type('2') //quantity 

      cy.wait(3000)


      cy.get("#add-to-cart-button-4").click() //shoping cart link

      cy.wait(5000)

      cy.get("#topcartlink > a").click()
      
      cy.wait(3000)

      cy.get(".product-unit-price").contains('$1,800.00') //validation points

    }
    
    )
 
  }
  
  )