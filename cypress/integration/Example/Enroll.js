
describe('HTTP Example', () => {

    before(() => {
        cy.postToken();
        cy.saveLocalStorage();
      });
    
      beforeEach(() => {
        cy.restoreLocalStorage();
      });

    it('POST', function() {

        var data = Math.floor((Math.random() * 10000) + 1);

        cy.getLocalStorage("identity_token").should("exist");
        cy.getLocalStorage("identity_token").then(token => {
        var authHeader='JWT '+token+'';
        console.log("token", token);
        
        cy.request({
            
            method:'POST',
            url:'https://lms-development.shopdev.co/backend/core/member/',
            body:{
                "suffix": "Mr.",
                "first_name": "Ali",
                "middle_name": null,
                "last_name": "Ahmed",
                "email": 'zaminiaz'+data+'@test.com',
                "phone": "00971-3204880",
                "address2": null,
                "country": 12,
                "region": null,
                "nationality": null,
                "city": null,
                "postal_code": null,
                "DOB": null,
                "gender": null,
                "tier_id":177,
                "reason": {
                    "id": 185,
                    "code": "8751",
                    "reason": "Call center",
                    "action": 18,
                    "company_id": 1,
                    "created_at": "",
                    "updated_at": "",
                    "deleted_at": "",
                    "disabled_at": "",
                    "deleted_by": 0,
                    "code_description": ""
                },
                "enroll_eht_id": 2624,
                "terms_and_condition":true
                
            },
            headers:{

                'content-type' : 'application/json',
                'Authorization' : authHeader,



            }

    
        });
        })
      
    });

    

  

  });