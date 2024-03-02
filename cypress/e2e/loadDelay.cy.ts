Cypress.config("defaultCommandTimeout", 16000) //I've change the time to wait with this line
describe('load delay', ()=>{
    it('visit with delay', ()=>{
        cy.visit('/loaddelay') 
    })
    /*it('client dealy button', ()=>{
        cy.visit('/clientdelay')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.')   //delayed result
    }) */
    it('visit the progress bar', ()=>{
        cy.visit('/progressbar') 
        cy.get('#startButton').click()
        cy.get("progressBar", {timeout:30000}).should("have.text", "100%") //cypress doesn't wait for the full time for the assertion

    })
    
})