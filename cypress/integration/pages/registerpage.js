require('cypress-xpath')
export class RegisterPage{

    navigate(){
        cy.visit('/')
        cy.xpath("//a[contains(text(),'Register')]").click()
    }

    clickSubmitButton(){
        cy.xpath("//button[@type='submit']").click()
    }

    insertvalid_name(){
        const uuid = () => Cypress._.random(0, 1e3)
        const id = uuid()
        const testname = `RafiaTest${id}`
        cy.xpath("//input[@name='name']").type(testname)
    }

    insert_invalidusername(){
        cy.xpath("//input[@name='username']").clear()
        cy.xpath("//input[@name='username']").type("A")
    }

    insert_username(){
        const uuid = () => Cypress._.random(0, 1e2)
        const id = uuid()
        const testusrname = `TestUser${id}`
        cy.xpath("//input[@name='username']").type(testusrname)
    }

    insert_email(){
        const uuid = () => Cypress._.random(0, 1e2)
        const id = uuid()
        const testemail = `rafiatest${id}@gmail.com`
        cy.xpath("//input[@name='email']").type(testemail)
    }


    insert_password(){
        const uuid = () => Cypress._.random(0, 1e3)
        const id = uuid()
        const testpwd = `${id}`
        cy.xpath("//input[@name='password']").type(testpwd)
    }
}