describe("download a file form site", ()=>{
    beforeEach("url", ()=>{
        cy.visit(`${Cypress.env("demoQA")}upload-download`)
    })
    it("download the file", ()=>{
        cy.xpath(`//*[@id="downloadButton"]`).click()
        cy.verifyDownload('sampleFile.jpeg')

    })
})

//cy-verify-downloads