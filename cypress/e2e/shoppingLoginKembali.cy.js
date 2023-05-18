import 'cypress-xpath';

describe('Shopping Login ke 2', () => {
    it("Shopping With Login sesudah Logout", () => {
        //ini adalah Story setelah Logout dari Test Case Shopping Login

        cy.viewport(1280, 616);     
        cy.visit('https://demo.evershop.io/');
        cy.xpath("//a[@href='/account/login']").click();
        cy.xpath("//input[@placeholder='Email']").type('opah@gmail.com')
        cy.xpath("//input[@placeholder='Password']").type('Qwerty456')
        cy.get("button[type='submit']").click() 
        cy.wait(1500);
        cy.xpath("(//*[name()='svg'])[2]").click() 
        cy.xpath("//a[@class='button primary']").click() 
        //isi data
        cy.xpath("//input[@placeholder='Full name']").type('Naruto')
        cy.xpath("//input[@placeholder='Telephone']").type('2334456')
        cy.xpath("//input[@placeholder='Address']").type('Konoha')
        cy.xpath("//input[@placeholder='City']").type('Konohagakure')
        // Select Country
        cy.get("body > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)").select("China");
        // Select Province
        cy.get("body > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)").select("Beijing");
        // Postcode
        cy.xpath("//input[@placeholder='Postcode']").type('456789')
        //Shipping method
        cy.get("label[for='method1'] span[class='pl-1']").type('Standard Delivery - $5.00')
        cy.wait(1500);
        cy.xpath("//button[@type='button']").click({ multiple: true })
        //select payment method
        cy.wait(1500);
        cy.xpath("//div[@class='checkout-payment checkout-step']//div//div[1]//div[1]//div[1]//div[1]//div[1]//a[1]//*[name()='svg']").click({ force: true });
        cy.xpath("//button[@type='button']").click()
        cy.wait(4000);


})
})