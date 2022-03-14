/// <reference types="Cypress" />

describe("Components of Home page verification", ()=>{
    before(()=>{
        cy.visit("/");
    })

    it("Verify the url is correct", ()=>{
        cy.hash().should('eq','');
    })

    it('Verify the Homepage heading', ()=>{
        cy.contains('h1','Home page')
    })

    it('Verify on header there is login and home link', ()=> {
        cy.contains('Login')
        .should('have.attr', 'href', '/login')

        cy.contains('Home')
        .should('have.attr', 'href', '/')
    })

    it('Verify body has greatings text, Login, Register, eseed Database button', ()=>{
        cy.contains("p","Welcome guest!")

        cy.contains('Log in')
        .should("have.attr",'href','/login')

        cy.contains('Register')
        .should('have.attr','href','/register')

        cy.contains('Reseed Database')
        .should('have.text', 'Reseed Database')
    })

    it('Verify the Message section', ()=>{

        cy.contains('h2','Messages:')

        cy.get('.avatar').should('have.attr','src')
        cy.get('.name').should('have.attr','href','/user0')
        cy.get(':nth-child(1) > .message-header > div > .time').should('contains.text','ago')
        
    })

})