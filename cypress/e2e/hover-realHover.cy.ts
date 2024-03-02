describe("Hover challenge", () =>{
    beforeEach(()=>{
        cy.visit("/mouseover")
    })
    it('hover with cypress  workaround', ()=>{
        cy.get(".text-primary").trigger("mouseover")
    })
    it('hover with real-cypress', ()=>{
        cy.get(".text-primary").realHover()
    })

})

//npm i cypress-real-events