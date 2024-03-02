/// <reference types="cypress-xpath" />

describe("dynamic table challenge", ()=>{
    beforeEach("open the url", ()=>{
        cy.visit('/dynamictable')
    })
    it("chrome CPU test", ()=>{
        cy.get(`div[role="row"] span`).each(($cell)=>{
            if($cell.text().includes('Chrome')){
                cy.log(`I have found the ${$cell.text()} row`)
                let chromeRowValues: string[] = []
                chromeRowValues.push($cell.next().text());
                chromeRowValues.push($cell.next().text());
                chromeRowValues.push($cell.next().next().text());
                chromeRowValues.push($cell.next().next().next().text());
                chromeRowValues.push($cell.next().next().next().next().text());
               
                cy.log("Chrome", chromeRowValues)
                chromeRowValues.forEach((chromeValues)=> {
                    if(chromeValues.includes('%')){
                        cy.log(chromeValues)
                        cy.get('.bg-warning').should("have.text", `Chrome CPU: ${chromeValues}`)
                    }
                })
            }
        })
    })



    it("same but with Xpath: CPU test", ()=>{
        const path= cy.xpath("/html/body/section/div/div/div[3]") //this is the path to the table
        if(path.contains("Chrome")){
            cy.log(`I have found the Chrome row`)
        }
    })
})