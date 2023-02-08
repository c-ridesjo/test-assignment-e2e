beforeEach(() => {
  cy.visit("http://localhost:1234");
});

  it('passes', () => {
  });

describe('tests for page content', () => {

  it("should contain a button", () => {  
    cy.get("button").should("exist");
  });

  it("should have a button with search text", () => {    
    cy.get("button").contains("Sök").should("exist");
  });

  it("should contain an input", () => {    
    cy.get("input").should("exist");
  });

  it("should contain an empty input field", () => {
    cy.get("input").should("contain", "");
  });

});

describe('tests for input and button', () => {

  it("should be able to type", () => {
    cy.get("input").type("Hallå").should("have.value", "Hallå");
  });

  it("should display text in input field", () => {
    cy.get("#searchText").type("Hejsan").should("have.value", "Hejsan")
  });

  it("should be able to press button", () => {    
    cy.get("button").click();
  });

  it("should find movie titles containing the text typed below", () => {
    cy.get("input").type("Finding Nemo").should("have.value", "Finding Nemo");
    cy.get("button").contains("Sök").click();  
  });

});
