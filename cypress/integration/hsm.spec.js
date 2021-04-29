describe("UI for the Hardware Security Module", () => {
  it("Should connect to HSM", () => {

    cy.visit("/hsm");

    cy.get("[data-test='iConnectUri']").type("test");
    cy.get("[data-test='btnConnect']").click();
    cy.get("[data-test='sStatus']").should("have.text", "false");

  });

  it("Should export seed phrase", () => {

    cy.visit("/hsm");
    cy.get("[data-test='btnSeed']").click();
    cy.get("[data-test='sSeed']").should("not.eq", "");

  });

  it("Generate new public key", () => {

    cy.visit("/hsm");

    // save state of initial select list
    cy.get('select').invoke('val').then((val1) => {
      // create a new public key
      cy.get("[data-test='pubKeySelect']").select("new")
      // check that the key options have been updated
      cy.get('select').invoke('val').should((val2) => {
        expect(val1).not.to.eq(val2)
      });
    });
  });
});
