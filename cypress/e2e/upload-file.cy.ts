describe("upload a file form site", ()=>{
    beforeEach("url", ()=>{
        cy.visit(`${Cypress.env("demoQA")}upload-download`)
    })
    it("upload the file", ()=>{
        cy.xpath(`//*[@id="uploadFile"]`).attachFile('example.json')
        cy.get('#uploadedFilePath').should('contain', 'json')

    })
})

//cypress-file-upload
//cy-verify-downloads