beforeEach(() => {
  cy.visit("/");
});


  it('passes', () => {
  });

describe('tests for page content', () => {
/*
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
    cy.get("button").click();     
  });
    
    //cy.get("h3").contains("Nemo"); 

  it("should get one movie", () => {
    cy.get("input").type("Rambo").should("have.value","Rambo");
    cy.get("button").click();
    cy.get("img:first").should("exist");        //????????
  }); 
*/
});


describe('tests with mock', () => {   

   it("should get mock data", () => { 
    cy.intercept("GET", "http://omdbapi.com/*", 
    {"title": "Perfect stranger"}).as ("omdbCall");

    cy.get("input").type("Perfect stranger");
    cy.get("button").click();

    cy.wait("@omdbCall").its("request.url").should("contain", "Perfect%20stranger");
  }); 

  it("should get mock data with correct url", () => {   
    cy.intercept("GET", "http://omdbapi.com/*",   
    { fixture:"movies" }).as ("omdbCall");

    cy.get("input").type("Perfect stranger").should("have.value", "Perfect stranger");
    cy.get("button").click();
  
    cy.wait("@omdbCall").its('request.url').should("contain", "Perfect%20stranger");    
  });
 
  it("should create resource correctly", () => {
    cy.intercept("GET", "http://omdbapi.com/?apikey=416ed51a&s=/*",  
    { fixture: "movies" }).as("omdbCall");

    cy.get("input").type("Perfect stranger").should("have.value", "Perfect%20stranger");
    cy.get("button").click();
  
  

    cy.wait("@omdbCall").its('request.url');  
  }); 
});  