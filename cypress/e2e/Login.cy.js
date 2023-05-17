import 'cypress-xpath';

describe('Login Story', () => {
    it("Login with Success and Failure", () => {


    cy.viewport(1280, 616);
    cy.visit('https://demo.evershop.io/');

    cy.fixture("indentityLogin").then((data) => {
        data.forEach((loginData) => {
            if (loginData.LoginCase == "Success"){
                cy.xpath("//a[@href='/account/login']").click({ multiple: true });
                cy.xpath("//input[@placeholder='Email']").type(loginData.email)
                cy.xpath("//input[@placeholder='Password']").type(loginData.password)
                cy.xpath("//button[@type='submit']").click({ multiple: true })  
                cy.xpath("//a[@href='/account']//*[name()='svg']").click({ multiple: true })  
                cy.xpath("//a[normalize-space()='Logout']").click()
                cy.wait(3000);
            }
            else if(loginData.LoginCase == "Empty"){
                cy.xpath("//a[@href='/account/login']").click({ multiple: true });
                cy.xpath("//button[@type='submit']").click({ multiple: true })
                cy.wait(3000);
            }
            else if(loginData.LoginCase == "emailFail"){
                cy.xpath("//a[@href='/account/login']").click({ multiple: true });
                cy.xpath("//input[@placeholder='Email']").type(loginData.email)
                cy.xpath("//input[@placeholder='Password']").type(loginData.password)
                cy.xpath("//button[@type='submit']").click({ multiple: true })
                cy.wait(3000);
            }
            else if(loginData.LoginCase == "passFail"){
                cy.xpath("//a[@href='/account/login']").click({ multiple: true });
                cy.xpath("//input[@placeholder='Email']").type(loginData.email)
                cy.xpath("//input[@placeholder='Password']").type(loginData.password)
                cy.xpath("//button[@type='submit']").click({ multiple: true })
                cy.wait(3000);
            }
        }) 
    })


})
})