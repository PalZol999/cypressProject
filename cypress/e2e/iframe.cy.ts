

describe("download a file form site", ()=>{
    beforeEach("url", ()=>{
        cy.visit(`${Cypress.env("demoQA")}nestedframes`)
    })
    it("download the file", ()=>{
        cy.get('#frame1').then(function($iframe){
            const $body= $iframe.contents().find("body")
            cy.wrap($body).should("have.text", "Parent frame")
            cy.wrap($body).find('iframe').then(($childframe)=>{
                const $childBody= $childframe.contents().find("body")
                cy.wrap($body).should("have.text", "Parent frame")
                cy.wrap($childBody).find("p").should("have.text", "Child Iframe")
            })
    })
})
})
