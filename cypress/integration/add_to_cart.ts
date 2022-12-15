import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {AddToCartPage} from "./pages/add_to_cart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let addtocartPage = new AddToCartPage()
const URL = 'https://www.saucedemo.com/'

it('Test Add to Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.sauceLabsBackpack() 
    addtocartPage.addCartSauceLabsBackpack()
})