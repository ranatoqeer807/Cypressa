class Points {




    points() {

        const field = cy.get('a.ng-star-inserted > .points')
        field.click()
        return this

    }

    pointsManagement() {

        const field = cy.get(':nth-child(1) > .ng-tns-c4-0 > .points')
        field.click()
        return this

    }
    
    
    
    
    AddButton() {

        cy.xpath("//*[@id='3']/table-list/div[2]/div/button").click()
        
        return this

    }


    Duration() {
        cy.xpath("//*[@id='3']/div/div/generic-form/div/div/form/div/div[1]/div/div[1]/input").type("1")
        return this

    }


    Navigation(){

        const field = cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(2) > .form-group > .input-group > .custom-dropdownlist > .ng-select-container > .ng-value-container > .ng-input')

        field.click()
        return this 


        
    }

    SelectDuration(){
        
      
        // An array of values
        var values = cy.get('.ng-dropdown-panel-items');
          
        // Object created
        var obj = {};
          
        // Using loop to insert key
        // value in Object
        for(var i = 0; i < values.length; i++){
            obj = values[i];
            var randomItem = obj[Math.floor(Math.random()*obj.length)]
            cy.get('.ng-dropdown-panel-items').contains(randomItem)
        }
        
        // var myArray = [
        //     "Month",
        //     "Year"
        //   ];
        //   var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
        //   cy.get('.ng-dropdown-panel-items').contains(randomItem).click()
        //   return this 


        
    }

    Club(){

        const field = cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(3) > .form-group > .input-group > .custom-dropdownlist > .ng-select-container > .ng-arrow-wrapper')

        field.click()
        return this 


        
    }

    Dropdown(){

        cy.get('.ng-dropdown-panel-items').contains("new club").click()
        return this 
        
    }


   container()

   {
   const field = cy.get('body > app-root > panel > div > div.main-wrapper > div > points > set-points-expiry > div > tabset > div')
   field.click()



   }


   create () {

   const field = cy.get('form.ng-dirty > :nth-child(1) > :nth-child(4) > .row > :nth-child(1) > .btn > .ng-star-inserted')

   field.click()
   }



 
}

export default Points