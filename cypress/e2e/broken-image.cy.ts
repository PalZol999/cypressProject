/// <reference types="cypress-xpath" />
let img:HTMLImageElement

describe("links", ()=>{
    beforeEach("Open the URL", ()=>{
        cy.visit(`${Cypress.env("demoQA")}broken`)
    })
    it("not broken image", ()=>{
        cy.xpath('//*[@id="app"]/div/div/div/div[2]/div[2]/img[1]')
        .should('be.visible')
        .and(($img) =>{ //$img = const img -> so the name of the variable
            img = $img[0] as unknown as HTMLImageElement // some sort of black magic to make belive the type that naturalWidth si part of the global element
            expect(img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
    it("broken image", ()=>{
        cy.xpath('//*[@id="app"]/div/div/div/div[2]/div[2]/img[2]')
        .should('be.visible')
        .and(($img) =>{
            img = $img[0] as unknown as HTMLImageElement
            expect(img[0].naturalWidth).to.be.greaterThan(0)
        })
    })

})
