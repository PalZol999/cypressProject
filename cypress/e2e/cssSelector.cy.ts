

describe('find CSS element', ()=> {
    beforeEach('open the url', ()=>{
        cy.visit("/dynamicid")
    })
    it('find the dynamic locator', ()=>{
        cy.contains('Button with Dynamic ID')
    })
    it('get and find example', ()=>{
        cy.get('div').find('button')  //parent 'div', child 'button'
    })
})