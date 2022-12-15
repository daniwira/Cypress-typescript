export class CartPage{    
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    cartPage(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container > a').click()
    }
}