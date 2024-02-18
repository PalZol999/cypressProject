
describe('basic', () => {
    beforeEach(()=>{
        cy.visit("/textinput")
    })
  it("visit explaine", ()=>{                            
      cy.url().then((url) => {      //the 1st process(url) is yield not returned, the the .then uses it
        cy.log(`The url is: ${url}`)
        expect(url).to.contains("/textinput")   // this "assert" (it is good/pased/ok)
      })
    })

    /*it("not assert", ()=>{
        cy.url().then((url) =>{
            expect(url).to.contains("Aragorn") 
        })                            
     
      })
    */
    it("title validation", ()=>{
        cy.title().then((title)=>{
            expect(title).to.be.equal("Text Input")
        })
    } )  
    it("find element", ()=>{
        cy.get("input#newButtonName").type("Welcome")
        cy.get("button#updatingButton").click().should('have.text', 'Welcome')
    })
})