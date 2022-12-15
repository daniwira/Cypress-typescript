export class CheckoutPage{    
    // link_sauceLabsBackpack = 'Sauce Labs Backpack'

    checkoutPage(){
        // cy.contains(this.link_sauceLabsBackpack).click()
        cy.get('#shopping_cart_container > a').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('dani')
        cy.get('#last-name').type('wira')
        cy.get('#postal-code').type('31515')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get("#checkout_complete_container > h2");
    }
}