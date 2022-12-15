import {LoginPage} from "./pages/login_pages"
import {CartPage} from "./pages/cart_pages"

let loginPage = new LoginPage()
let cartPage = new CartPage()

const URL = 'https://www.saucedemo.com/'

it('Test Cart Page', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    cartPage.cartPage()
})