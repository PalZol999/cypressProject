/// <reference types="cypress-xpath" />

describe('Writre any description', ()=>{
    beforeEach(()=>{
        cy.visit("/classattr")
    })
    it('found the xpath',()=>{
        cy.xpath('/html/body/section/div/button[3]').should('contain.text', 'Button')
    })
})