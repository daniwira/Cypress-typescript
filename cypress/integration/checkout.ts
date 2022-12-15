import {LoginPage} from "./pages/login_pages"
import {CartPage} from "./pages/cart_pages"
import {CheckoutPage} from "./pages/checkout_pages"

let loginPage = new LoginPage()
let cartPage = new CartPage()
let checkoutPage = new CheckoutPage()

const URL = 'https://www.saucedemo.com/'

it('Checkout Page Success', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    cartPage.cartPage()
    checkoutPage.checkoutPage()
})