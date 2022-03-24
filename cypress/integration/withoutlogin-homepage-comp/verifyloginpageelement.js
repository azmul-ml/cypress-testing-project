describe('Verifying Login pages Elements', ()=>{
    before("Invoking the login page",()=>{
        cy.visit(Cypress.config().baseUrl + "/login")
    })

    it("Verify the url is correct", ()=>{
        cy.url().should('eq', Cypress.config().baseUrl + "/login");
    })

    it("Welcome tag of the page and homepage return link",()=>{
        cy.contains("h1","Log in page");
        cy.contains("Home page").should("have.attr","href","/")
    })

    it("Verify the sub-heading of the page",()=>{
        cy.contains("h2","Login with email address")
    })

    it("Verify there is admin and user email and password is present",()=>{
        cy.contains("Admin: email0@email.com 123456789").should("have.attr","class","logins")
        cy.contains("User: email1@email.com 123456789").should("have.attr","class","logins")
    })

    it("Verify that it has an input field email and password with placeholder",()=>{
        cy.xpath("//input[@name='email']").should("have.attr","placeholder","Email address")
        cy.xpath("//input[@name='password']").should("have.attr","placeholder","Password")
    })

    it("Verify that there is Login button and Register link present", ()=>{
        cy.contains("Log in now").should("have.attr","class","btn submit")
        cy.contains("Register").should("have.attr","href","/register")
    })

})