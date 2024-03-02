describe("Env var demo", ()=>{
    it("Demo", ()=>{
        cy.log(`Printing variable Value: ${Cypress.env("demoVar")}`)
    })
})