describe("Env var demo", ()=>{
    it("Demos", ()=>{
        cy.log(`Printing variable Value: ${Cypress.env("demoVar")}`)
    })
})