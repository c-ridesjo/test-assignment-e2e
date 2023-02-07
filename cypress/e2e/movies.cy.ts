beforeEach(() => {
  cy.visit("http://localhost:1234");
});

describe('movies application', () => {
  it('passes', () => {
    //cy.visit("http://localhost:1234");
  });

  it("should contain a button", () => {
    //cy.visit("http://localhost:1234");

    cy.get("button").contains("Sök").should("exist");
  });

  it("should be able to type", () => {

    cy.get("input").type("Hallå").should("have.value", "Hallå");
  });

  it("should find movies", () => {

    cy.get("input").type("Finding Nemo").should("have.value", "Finding Nemo");

    cy.get("button").contains("Sök").click();


  });
});