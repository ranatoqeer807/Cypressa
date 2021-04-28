
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
            url:'https://httpbin.org/post',
            body:  {

                "name":'toqeer',
                "age": 24
            },
            header:{

                'content-type' : 'application/json'

            }

        }).then(function(response){
         
            expect(response.body).have.property('json');

            expect(response.body.json).to.deep.equal({



                "name":'toqeer',
                "age": 24

            });
    
        });
      
    });

  

  });