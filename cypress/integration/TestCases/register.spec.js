import { Context } from "mocha"
import { RegisterPage } from "../pages/registerpage"

const registerpage = new RegisterPage()

describe('register pages url verify', ()=>{
before(()=>{

    registerpage.navigate()
})

it('Verify the Url',()=>{

    cy.url().should('eq', Cypress.config().baseUrl + '/register')  
})
})

context("Try to sign up without inserting any input data",()=>{

    it('Click on the signup button keeping all field empty',()=>{

        cy.get('.btn').then(($btn) => {
            if ($btn.is(":disabled")) {
                cy.xpath("//*[@id='root']/div/div/form/div[1]/p[1]").should("have.text","Required")
                cy.xpath("//*[@id='root']/div/div/form/div[1]/p[2]").should("have.text","Required")
                cy.xpath("//*[@id='root']/div/div/form/div[1]/p[3]").should("have.text","Required")
                cy.xpath("//*[@id='root']/div/div/form/div[1]/p[4]").should("have.text","Required")
            } else {
              cy.wrap($btn).click()
            }
          })
    })
})


context("Insert less than required username character",()=>{
    it("Try to validate whether it's taking less than 2 character username or not",()=>{
        registerpage.insert_invalidusername()
        registerpage.insertvalid_name()
        cy.xpath("//*[@id='root']/div/div/form/div[1]/p[1]").should("have.text","Must be 2 characters at minimum")
        cy.xpath("//input[@name='username']").clear()
    })
})

context("try to sign up by inserting only name and keeping other fields empty", ()=>{

    it("click on submit button after inserting name",()=>{
        cy.xpath("//input[@name='name']").clear()
        registerpage.insertvalid_name()

        cy.get('.btn').then(($btn) => {
            if ($btn.is(":disabled")) {
                cy.xpath("//*[@id='root']/div/div/form/div[1]/p[1]").should("have.text","Required")
                cy.xpath("//*[@id='root']/div/div/form/div[1]/p[2]").should("have.text","Required")
                cy.xpath("//*[@id='root']/div/div/form/div[1]/p[3]").should("have.text","Required")
            } else {
              cy.wrap($btn).click()
            }

    })
})
})

context("try to sign up by inserting name, username and keeping other fields empty", ()=>{

    it("click on submit button after inserting name",()=>{
        cy.xpath("//input[@name='name']").clear()
        registerpage.insertvalid_name()

        cy.xpath("//input[@name='username']").clear()
        registerpage.insert_username()


        cy.get('.btn').then(($btn) => {
            if ($btn.is(":disabled")) {
              return
            } else {
              cy.wrap($btn).click()
            }
          })

        })

    })

context("",()=>{
    
})

