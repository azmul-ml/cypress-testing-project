describe('Verifying Login pages Elements', ()=>{
    before("Invoking the login page",()=>{
        cy.visit('http://localhost:3000/register')
    })
    
    it("Verify the url is correct", ()=>{
        cy.url().should('eq','http://localhost:3000/register');
    })

    it("Welcome tag of the page, homepage return link and Login link",()=>{
        cy.contains("h1","Register page");
        cy.contains("Home page").should("have.attr","href","/")
    })

    it("Verify the sub-heading of the page",()=>{
        cy.contains("h2","Create new account")
    })

    it("verifying input fields name, username, email address & password",()=>{
        cy.xpath("//input[@name='name']").should("have.attr","placeholder","Name")
        cy.xpath("//input[@name='username']").should("have.attr","placeholder","Username")
        cy.xpath("//input[@name='email']").should("have.attr","placeholder","Email address")
        cy.xpath("//input[@name='password']").should("have.attr","placeholder","Password")
    })

    it("Verify that there is Sign up button and Register link present", ()=>{
        cy.contains("Sign up now").should("have.attr","class","btn submit")
        cy.contains("Log In").should("have.attr","href","/login")
    })
})