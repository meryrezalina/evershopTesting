import 'cypress-xpath';


describe('Shopping Login Story kemudian Logout', () => {
    it("Shopping With Login", () => {
    
    //Untuk sesi Loginnya selanjutnya ada di TC shoppingLoginKembali
    cy.viewport(1280, 616);
    cy.visit('https://demo.evershop.io/');
    cy.xpath("//a[@href='/account/login']").click();
    cy.xpath("//input[@placeholder='Email']").type('opah@gmail.com')
    cy.xpath("//input[@placeholder='Password']").type('Qwerty456')
    cy.get("button[type='submit']").click() 
    cy.wait(1500);
    cy.xpath("(//a[normalize-space()='Men'])[1]").click()  
    cy.xpath("//img[@alt='Swift run x shoes']").click()
    cy.xpath("//a[normalize-space()='XL']").click()
    cy.xpath("//a[normalize-space()='Pink']").click()
    cy.wait(1500);
    cy.xpath("//button[@type='button']").click()
    cy.get(".add-cart-popup-button").click()
    cy.xpath("//a[normalize-space()='Kids']").click()  
    cy.xpath("//img[@alt='Nizza trefoil shoes']").click()
    cy.xpath("//a[normalize-space()='L']").click()
    cy.xpath("//a[normalize-space()='Black']").click()
    cy.xpath("//input[@placeholder='Qty']").clear()
    cy.xpath("//input[@placeholder='Qty']").type('5')
    cy.wait(1500);
    cy.xpath("//button[@type='button']").click()
    cy.get(".add-cart-popup-button").click()
    cy.wait(1500);
    cy.xpath("//a[@href='/account']//*[name()='svg']").click()  
    cy.xpath("//a[normalize-space()='Logout']").click()
    cy.wait(1500);

    

})
})