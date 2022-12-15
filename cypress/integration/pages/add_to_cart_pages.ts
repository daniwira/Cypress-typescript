export class AddToCartPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    
    addCartSauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    }
}