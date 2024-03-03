/// <reference types="cypress-xpath" />

describe("check box chalenge", ()=>{
    beforeEach("Open the URL", ()=>{
        cy.visit(`${Cypress.env("demoQA")}checkbox`)
    })
    it("checkbox senario", ()=>{
        cy.get(`.rct-checkbox`).click({ force: true });
    })
})

describe.only("the internet app", ()=>{
    beforeEach("Open the URL", ()=>{
        cy.visit(`${Cypress.env("theInternet")}checkboxes`)
    })
    it("checkbox senario", ()=>{
        cy.get('#checkboxes > :nth-child(1)').eq(0).click().should("be.checked");
    })
})