describe('template spec', () => {
  before(()=>{                            // only appears on the begin - no repeat
    cy.log("Hello from the before hooks")
  })
  beforeEach(()=>{                         //  appears on the begin - repeat
    cy.log("Before each hook")
  })
  afterEach(()=>{                         //  appears at the end - repeat
    cy.log("After each hook")
  })
  it('testcase1', () => {                  //  first arg describe, the second arg is the func
    cy.log('This is the first test')
  })
  it('testcase2', () => {
    cy.log('This is the second test')
  })
  it.skip('intermediaireTest', () => {     //  skip the dedicated test -> 'only' is the oposit
    cy.log("I don't want to run this test")
  })
  it('testcase3', () => {
    cy.log('This is the third test')
  })
  after(()=>{                            // only appears at the end - no repeat
    cy.log('Hello from the after hook')
  })
})