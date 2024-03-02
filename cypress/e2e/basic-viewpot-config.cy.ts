describe("viewport demo", ()=>{
    beforeEach("open the url", ()=>{
        cy.visit(`${Cypress.env("Angular")}`)
    })
    it("device name", () =>{
        cy.viewport("iphone-8") //magic of changing view
        cy.get('#mobile_menu_toggler').should('be.visible')
        //took the path form cypress and it "should" "be visible"

    })
    it("spec viewport", () =>{
        cy.viewport(500,600)  //the the scale of the view
        cy.get('#mobile_menu_toggler').should('be.visible')
    })
})