/// <reference types="cypress-xpath" />

describe("links", ()=>{
    beforeEach("Open the URL", ()=>{
        cy.visit(`${Cypress.env("demoQA")}links`)
    })
    it("1st approach -> not click the link", ()=>{
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com');
        cy.get('#simpleLink').should('have.attr', 'target', '_blank');
    })
    it("2sd approach -> remove the target", ()=>{
        cy.get('#simpleLink').invoke('removeAttr', "target").click() //it remove the option of opening a new tab!
        cy.url().then((url)=>{
            expect(url).to.be.equal('https://demoqa.com/')
        })
    })
})


describe.only("intercepting API(spy) req", ()=>{
    beforeEach("Open the URL", ()=>{
        cy.visit(`${Cypress.env("demoQA")}links`)
        cy.intercept("GET", `${Cypress.env("demoQA")}created`).as('linkStatus')
    })
    
    it(()=>{
        cy.get('a#created').click()
        cy.wait('@linkStatus').then((req)=>{
            cy.log('This is the request intercepted', req)
            expect(req.response.statusCode).to.be.equal(201) //req (is an object).response(is an object's object).statusCode (key in an object's object)
            expect(req.response.statusMessage).to.be.equal("Created")
        })
    })
})