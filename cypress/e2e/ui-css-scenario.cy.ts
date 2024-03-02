describe('click challenge', ()=>{
    beforeEach(()=>{
        cy.visit("/click")
    })
    it('class assertion',()=>{
        cy.xpath('//*[@id="badButton"]').click().should("have.class", "btn-success")
    })
    it('background color', ()=>{
        cy.get('#badButton').click().should('have.css', 'background-color', "rgb(40, 167, 69)")
    })
})

