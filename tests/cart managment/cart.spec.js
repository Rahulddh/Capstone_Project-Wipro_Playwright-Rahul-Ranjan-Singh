import { test, expect }from '@playwright/test';
import { LoginPage }from '../../POM/loginPage.js';
import { SearchPage }from '../../POM/search.js';
import { ProductPage }from '../../POM/product.js';
import { CartPage }from '../../POM/cart.js';

test.describe('Cart Service', () => {
    let loginpage;
    let searchpage;
    let productpage;
    let cartpage;
    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
        searchpage = new SearchPage(page);
        productpage = new ProductPage(page);
        cartpage = new CartPage(page);
        await loginpage.openLoginPage();
        await loginpage.login(process.env.EMAIL,process.env.PASSWORD);

    });

    // // ======================================
    // // CART-01 Verify Add To Cart
    // // ======================================

    // test('CART-01 Verify Add To Cart',async ({ page }) => {
    //     await searchpage.searchProduct('Shirt');
    //     await cartpage.openFirstProduct();
    //     await cartpage.selectSize();
    //     await cartpage.selectColor();
    //     await cartpage.addToCart();
    //     await expect(page.locator('[data-ui-id="message-success"]')).toContainText('You added');

    // });

    // // ======================================
    // // CART-02 Verify Cart Counter
    // // ======================================

    // test('CART-02 Verify Cart Counter',async ({ page }) => {
    //     await searchpage.searchProduct('Shirt');
    //     await cartpage.openFirstProduct();
    //     await cartpage.selectSize();
    //     await cartpage.selectColor();
    //     await cartpage.addToCart();
    //     await expect(page.locator('.counter-number')).toContainText('1');

    // });

    // // ======================================
    // // CART-03 Verify Mini Cart Opens
    // // ======================================

    // test('CART-03 Verify Mini Cart Opens',async ({ page }) => {
    //     await cartpage.openMiniCart();
    //     // await cartpage.miniCart.click();
    //     await page.locator('.action.showcart').click();
    //     await expect(page.locator('.action.showcart.active')).toBeVisible();
    //     //await expect(page.locator('.block.block-minicart')).toBeVisible();
    // });

    // // ======================================
    // // CART-04 Verify Product In Cart
    // // ======================================

    // test('CART-04 Verify Product In Cart',async ({ page }) => {
    //     await searchpage.searchProduct('Shirt');
    //     await cartpage.openFirstProduct();
    //     await cartpage.selectSize();
    //     await cartpage.selectColor();
    //     await cartpage.addToCart();
    //     await cartpage.openMiniCart();
    //     await expect(page.locator(cartpage.productName)).toBeVisible();
    // });

    // // ======================================
    // // CART-05 Verify Quantity Update
    // // ======================================

    // test('CART-05 Verify Quantity Update', async ({ page }) => {
    //     await searchpage.searchProduct('Shirt');
    //     await cartpage.openFirstProduct();
    //     await cartpage.selectSize();
    //     await cartpage.selectColor();
    //     await cartpage.updateQuantity('2');
    //     await expect(page.locator(cartpage.qtyField)).toHaveValue('2');
    // });

    // // ======================================
    // // CART-06 Verify Checkout Button
    // // ======================================

    // test('CART-06 Verify Checkout Button',async ({ page }) => {
    //     await searchpage.searchProduct('Shirt');
    //     await cartpage.openFirstProduct();
    //     await cartpage.selectSize();
    //     await cartpage.selectColor();
    //     await cartpage.addToCart();
    //     await cartpage.openMiniCart();
    //     await expect(page.locator(cartpage.checkoutBtn)).toBeVisible();
    // });

    // // ======================================
    // // CART-07 Verify Remove Product
    // // ======================================

    // test('CART-07 Verify Remove Product', async ({ page }) => {
    //     await searchpage.searchProduct('Shirt');
    //     await cartpage.openFirstProduct();
    //     await cartpage.selectSize();
    //     await cartpage.selectColor();
    //     await cartpage.addToCart();
    //     await cartpage.openMiniCart();
    //     await cartpage.removeProduct();
    // });

    // // ======================================
    // // CART-08 Verify Empty Cart
    // // ======================================

    // test('CART-08 Verify Empty Cart', async ({ page }) => {
    //     await cartpage.openMiniCart();
    //     await expect(page.locator(cartpage.emptyCartMessage)).toBeVisible();
    // });

});