import 'cypress-xpath';

describe('Shopping Story', () => {
    it("Shopping Without Login", () => {


    cy.viewport(1280, 616);
    cy.visit('https://demo.evershop.io/');

    cy.fixture("basket").then((data) => {
        data.forEach((basketData) => {
            if (basketData.basketCase == "lihatProduct"){
                cy.xpath("//a[normalize-space()='Kids']").click({ multiple: true });
                cy.xpath("//img[@alt='Continental 80 shoes']").click({ multiple: true })  
                cy.wait(1500);
             }
            else if(basketData.basketCase == "tambahProduct"){
                cy.xpath("//a[normalize-space()='XL']").click({ multiple: true });
                cy.xpath("//a[normalize-space()='Pink']").click({ multiple: true })
                cy.wait(1500);
                cy.get("button[type='button']").click({ multiple: true })
                cy.xpath("//a[normalize-space()='VIEW CART (1)']").click({ multiple: true })
                cy.xpath("//a[normalize-space()='Women']").click({ multiple: true })
                cy.xpath("//img[@alt='Lite racer adapt 3.0 shoes']").click({ multiple: true })
                cy.xpath("//a[normalize-space()='L']").click({ multiple: true })
                cy.xpath("//a[normalize-space()='White']").click({ multiple: true })
                cy.wait(1500);
                cy.xpath("//button[@type='button']").click({ multiple: true })
                cy.get(".add-cart-popup-button").click({ multiple: true })
                cy.xpath(" //img[@alt='Lite racer adapt 3.0 shoes']").click({ multiple: true })
            }
            else if(basketData.basketCase == "updateQuantity"){
                cy.xpath("//a[normalize-space()='Lite racer adapt 3.0 shoes']").click({ multiple: true });
                cy.xpath("//input[@placeholder='Qty']").clear()
                cy.xpath("//input[@placeholder='Qty']").type(basketData.qty)
                //enath kenapa size L nya harus diketik ulang biar gk nambah baru
                cy.wait(1500);
                cy.xpath("//a[normalize-space()='L']").click({ multiple: true })
                cy.xpath("//a[normalize-space()='White']").click({ multiple: true })
                cy.wait(1500);
                cy.xpath("//button[@type='button']").click({ multiple: true })
                cy.get(".add-cart-popup-button").click({ multiple: true })
                cy.wait(1500);
            }
            else if(basketData.basketCase == "hapusQuantity"){
                cy.xpath("(//span[contains(text(),'Remove')])[1]").click({ multiple: true });
                cy.wait(1500);
            }
            else if(basketData.basketCase == "checkout"){
                cy.xpath("//a[@class='button primary']").click({ multiple: true });
                cy.xpath("//input[@placeholder='Email']").type(basketData.email)
                cy.xpath("//button[@type='button']").click({ multiple: true });
                cy.xpath("//input[@placeholder='Full name']").type(basketData.fullname)
                cy.xpath("//input[@placeholder='Telephone']").type(basketData.telepon)
                cy.xpath("//input[@placeholder='Address']").type(basketData.alamat)
                cy.xpath("//input[@placeholder='City']").type(basketData.city)
                // Select Country
                cy.get("body > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)").select("China");
                // Select Province
                cy.get("body > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)").select("Beijing");
                // Postcode
                cy.xpath("//input[@placeholder='Postcode']").type(basketData.postcode)
                //Shipping method
                cy.get("label[for='method1'] span[class='pl-1']").type('Standard Delivery - $5.00')
                cy.wait(1500);
                cy.xpath("//button[@type='button']").click({ multiple: true })
                //select payment method
                cy.wait(1500);
                cy.xpath("//div[@class='checkout-payment checkout-step']//div//div[1]//div[1]//div[1]//div[1]//div[1]//a[1]//*[name()='svg']").click({ force: true });
                cy.xpath("//button[@type='button']").click({ multiple: true })
                cy.wait(4000);

            }
        }) 
    })


})
})