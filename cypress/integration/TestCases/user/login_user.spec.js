import {LoginPage} from "../../pages/loginpage"

const loginpage = new LoginPage()

describe('Login without inserting any data',()=>{

    before(()=>{
        loginpage.navigate()
    })

    it('Verify the Url',()=>{

        cy.url().should('eq', Cypress.config().baseUrl + '/login')
    })

    it("clicking on login button",()=>{
        loginpage.btnlogin()
    })

    it("verify that the error text is showing when email address field is empty",()=>{
        cy.xpath("//*[@id='root']/div/div/form/div[1]/p[1]").should("have.text","Required")
    })

    it("verify that the error text is showing when password field is empty",()=>{
        cy.xpath("//*[@id='root']/div/div/form/div[1]/p[2]").should("have.text","Required")
    })
})
context("Try login with valid email and invalid password",()=>{
    it('Verify the Url',()=>{

        cy.url().should('eq', Cypress.config().baseUrl + '/login')
    })

    it("valid email but invalid password",()=>{
        loginpage.fillusername_validuser()
        loginpage.fillpassword_invaliduser()
        cy.get('.error').should("have.text","Must be 6 characters at minimum")
        cy.xpath("//button[@type='submit']").should("be.disabled")
    })
})

context("Try login with invalid email and valid password",()=>{
    it('Verify the Url',()=>{

        cy.url().should('eq', Cypress.config().baseUrl + '/login')
    })

    it("valid email but invalid password",()=>{
        cy.xpath("//input[@name='email']").clear()
        loginpage.fillusername_invaliduser()
        cy.xpath("//*[@id='root']/div/div/form/div[1]/p[1]").should("have.text","Invalid email address")
        cy.xpath("//input[@name='password']").clear()
        loginpage.fillpassword_validuser()
        cy.xpath("//button[@type='submit']").should("be.disabled")
    })
})

context("Try login with valid email and password",()=>{
    it('Verify the Url',()=>{

        cy.url().should('eq', Cypress.config().baseUrl + '/login')
    })

    it("invalid email but valid password",()=>{
        cy.xpath("//input[@name='email']").clear()
       try{loginpage.fillusername_validuser()}catch{
        cy.xpath("//*[@id='root']/div/div/form/div[1]/p[1]").should("have.text","Invalid email address")}
        cy.xpath("//input[@name='password']").clear()
        loginpage.fillpassword_validuser()
        cy.xpath("//button[@type='submit']").should("be.enabled")
        loginpage.btnlogin()
    })
    it("Check the url after login",()=>{
        cy.url().should("eq", Cypress.config().baseUrl + "/");
    })
})