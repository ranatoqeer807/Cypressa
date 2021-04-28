describe('API', () => 
{
   beforeEach(()=>{
   cy.request('https://lms-development.shopdev.co/').as("user")

   })
   it('API TESTING', () => {

    cy.get('@user')
    .its('header')
    .its('content-type')
    .should('include, application\json; charset=utf=8')

})

it('API TESTING', () => {

    cy.get('@user') 
    .its('header')
    .its('status')
    .should('equal',200)

})

it('API TESTING', () => {

    cy.get('@user')
    .its('header')
    .its('body')
    .should('contains',{'total_page':2})

})


it('API TESTING', () => {

    cy.get('@user')
    .its('header')
    .its('body').then((res)=>{

        expect(res.data[0]).has.property('first_name', 'toqeer')


    })
  })
})