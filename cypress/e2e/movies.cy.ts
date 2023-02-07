describe('movies application', () => {
  it('passes', () => {
    cy.visit("http://localhost:1234");
  });

  it("should contain a button", () => {
    cy.visit("http://localhost:1234");

    cy.get("button");
  })
})