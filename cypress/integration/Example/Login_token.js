describe("postToken", ()=> {
    before(() => {
      cy.postToken();
      cy.saveLocalStorage();
    });
  
    beforeEach(() => {
      cy.restoreLocalStorage();
    });
  
    it("should exist identity in localStorage", () => {
      cy.getLocalStorage("identity_token").should("exist");
      cy.getLocalStorage("identity_token").then(token => {
        console.log("token", token);
      });
    });
  
    it("should still exist identity in localStorage", () => {
      cy.getLocalStorage("identity_token").should("exist");
      cy.getLocalStorage("identity_token").then(token => {
        console.log("Identity token", token);
      });
    });
  });