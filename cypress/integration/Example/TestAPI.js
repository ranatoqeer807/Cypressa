
describe('HTTP Example', () => {
    it('Get', function() {

        cy.request({


            method:'GET',
            url:'https://httpbin.org/get',

        }).then(function(response){
         
            expect(response.body).have.property('url');
    
        });
      
    });

    it('POST', function() {

        cy.request({


            method:'POST',
            url:'https://lms-development.shopdev.co/backend/core/auth/login/',
            body:  {

                "email":'admin@organizationretain.co',
                "password": 'admin'
            },
            header:{

                'content-type' : 'application/JSON'

            }
            
            
        }).then(function(response){
         
                expect(response.body).have.property('token');

                
            })

        })

    })