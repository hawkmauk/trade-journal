describe("UI for the Data Access Object", () => {

  it("Should connect to Data", () => {

    cy.visit("/dao");

    cy.get("[data-test='iConnectUri']").type("test");
    cy.get("[data-test='btnConnect']").click();
    cy.get("[data-test='sStatus']").should("have.text", "false");

  });

});
