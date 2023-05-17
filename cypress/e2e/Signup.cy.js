import 'cypress-xpath';

describe('Signup Story', () => {
    it("Signup with Success and Exist Email", () => {


    cy.viewport(1280, 616);
    cy.visit('https://demo.evershop.io/');

    cy.fixture("identity").then((data) => {
        data.forEach((signupData) => {
            if (signupData.SignupCase == "Success"){
                cy.xpath("//a[@href='/account/login']").click({ multiple: true });
                cy.xpath("//a[normalize-space()='Create an account']").click({ multiple: true })
                cy.xpath("//input[@placeholder='Full Name']").type(signupData.fullname)
                cy.xpath("//input[@placeholder='Email']").type(signupData.email)
                cy.xpath("//input[@placeholder='Password']").type(signupData.password)
                cy.xpath("//button[@type='button']").click({ multiple: true })  
                cy.xpath("//a[@href='/account']//*[name()='svg']").click();
                cy.xpath("//a[normalize-space()='Logout']").click()
                cy.wait(3000);
            }
            else if(signupData.SignupCase == "existEmail"){
                cy.xpath("//a[@href='/account/login']").click({ multiple: true });
                cy.xpath("//a[normalize-space()='Create an account']").click({ multiple: true })
                cy.xpath("//input[@placeholder='Full Name']").type(signupData.fullname)
                cy.xpath("//input[@placeholder='Email']").type(signupData.email)
                cy.xpath("//input[@placeholder='Password']").type(signupData.password)
                cy.xpath("//button[@type='button']").click({ multiple: true })
                cy.wait(3000);
            }
        }) 
    })


})
})