/// <reference types="cypress-xpath" />

describe("double click", ()=>{
    beforeEach("Open the URL", ()=>{
        cy.visit(`${Cypress.env("demoQA")}buttons`)
    })
    it("dbl click", ()=>{
        cy.xpath(`//*[@id="doubleClickBtn"]`).dblclick();
        cy.get('#doubleClickMessage').should("have.text", "You have done a double click");
    })
    it("right click", ()=>{
        cy.xpath(`//*[@id="rightClickBtn"]`).rightclick().should("contain.text", "Right Click Me");
    })
})