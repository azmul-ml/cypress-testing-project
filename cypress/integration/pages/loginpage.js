require('cypress-xpath')
export class LoginPage{

    navigate(){
        cy.visit('/')
        cy.xpath("//a[contains(text(),'Login')]").click()
    }

    fillusername_validuser(){
        cy.xpath("//input[@name='email']").type("email1@email.com")
    }

    fillusername_invaliduser(){
        cy.xpath("//input[@name='email']").type("email12@email")
    }

    fillpassword_validuser(){
        cy.xpath("//input[@name='password']").type("123456789")
    }

    fillpassword_invaliduser(){
        cy.xpath("//input[@name='password']").type("12345")
    }

    fillusername_validadmin(){
        cy.xpath("//input[@name='email']").type("email0@email.com")
    }

    fillusername_invalidadmin(){
        cy.xpath("//input[@name='email']").type("email03.com")
    }

    fillpassword_validadmin(){
        cy.xpath("//input[@name='password']").type("123456789")
    }

    fillpassword_invalidadmin(){
        cy.xpath("//input[@name='password']").type("12345")
    }

    btnlogin(){
        cy.xpath("//button[@type='submit']").click()
    }

}
