import { test, expect } from '@playwright/test';
import { LoginPage } from "../../POM/loginPage.js";
import { SearchPage } from '../../POM/search.js';
import { ProductPage } from '../../POM/product.js';

test.describe('Product', () => {
    let loginpage
    let searchpage
    let productpage

    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
        searchpage = new SearchPage(page);
        productpage = new ProductPage(page);
        await loginpage.openLoginPage();
        //enter the email and password
        await loginpage.login(process.env.EMAIL, process.env.PASSWORD);
        await loginpage.submit();
    });

    // // ===================================
    // // PRODUCT-01 Verify product page
    // // ===================================

    // test('PRODUCT-01 Verify product page opens', async ({ page }) => {

    //     //enter the product name in search bar
    //     await searchpage.searchProduct('Shirt');

    //     //click the 1st product
    //     await page.locator('.product-item-link').first().click();

    //     // Verify product page opened
    //     await expect(page).toHaveURL("https://demo-m2.bird.eu/radiant-tee.html");

    // });

    // // ===================================
    // // PRODUCT-02 Verify product title
    // // ===================================

    // test('PRODUCT-02 Verify product title', async ({ page }) => {

    //     await searchpage.searchProduct('Shirt');
    //     await page.locator('.product-item-link').first().click();
    //     await expect(productpage.productTitle).toBeVisible();

    // });

    // // ===================================
    // // PRODUCT-03 Verify product Price
    // // ===================================

    // test('PRODUCT-03 Verify product Price', async ({ page }) => {

    //     await searchpage.searchProduct('Shirt');
    //     await page.locator('.product-item-link').first().click();
    //     await expect(productpage.productPrice).toBeVisible();

    // });

    // // ===================================
    // // PRODUCT-04 Verify product Image
    // // ===================================

    // test('PRODUCT-04 Verify product Image', async ({ page }) => {

    //     await searchpage.searchProduct('Shirt');
    //     await page.locator('.product-item-link').first().click();
    //     await expect(productpage.productImage).toBeVisible();

    // });

    // // ===================================
    // // PRODUCT-05 Verify Size Selector
    // // ===================================

    // test('PRODUCT-05 Verify Size Selector', async ({ page }) => {

    //     await searchpage.searchProduct('Shirt');
    //     await page.locator('.product-item-link').first().click();
    //     await expect(page.locator('.swatch-attribute.size')).toBeVisible();
    //     await expect(page.locator('.swatch-attribute.size')).toBeEnabled();

    // });

    // // ===================================
    // // PRODUCT-06 Verify Colour Selector
    // // ===================================

    // test('PRODUCT-06 Verify Colour Selector', async ({ page }) => {

    //     await searchpage.searchProduct('Shirt');
    //     await page.locator('.product-item-link').first().click();
    //     await expect(page.locator('.swatch-attribute.color')).toBeVisible();
    //     await expect(page.locator('.swatch-attribute.color')).toBeEnabled();

    // });

    // // ===================================
    // // PRODUCT-07 Verify quantity update
    // // ===================================

    // test('PRODUCT-07 Verify quantity update', async ({ page }) => {
    //     await searchpage.searchProduct('Shirt');
    //     await page.locator('.product-item-link').first().click();
    //     await expect(page.locator('.field.qty')).toBeVisible();
    //     await expect(page.locator('.field.qty')).toBeEnabled();
    
    // });

    // // ===================================
    // // PRODUCT-08 Verify add to cart
    // // ===================================

    // test('PRODUCT-08 Verify add to cart',
    //     async ({ page }) => {
    //         await searchpage.searchProduct('Shirt');
    //         await page.locator('.product-item-link').first().click();
    //         await expect(page.locator('#product-addtocart-button')).toBeVisible();
    //         await expect(page.locator('#product-addtocart-button')).toBeEnabled();

    //     });

    // // ===================================
    // // PRODUCT-09 Verify add to WishList
    // // ===================================

    // test('PRODUCT-09 Verify add to WishList', async ({ page }) => {
    //         await searchpage.searchProduct('Shirt');
    //         await page.locator('.product-item-link').first().click();
    //         await page.locator('.action.towishlist').click();
    //         await expect(page).toHaveURL(/wishlist/);

    //     });

    // // ===================================
    // // PRODUCT-10 Verify add to WishList
    // // ===================================

    // test('PRODUCT-10 Verify add to Compare', async ({ page }) => {
    //         await searchpage.searchProduct('Shirt');
    //         await page.locator('.product-item-link').first().click();
    //         await page.locator('.action.tocompare').click();
    //         await expect(page.locator('[data-ui-id="message-success"]')).toContainText('You added product Radiant Tee to the');

    //     });

    // // ===================================
    // // PRODUCT-11 Verify Add Your Review
    // // ===================================

    test('PRODUCT-11 Verify Add Your Review', async ({ page }) => {
            await searchpage.searchProduct('Shirt');
            await page.locator('.product-item-link').first().click();
             await page.getByRole('link', { name: 'Add Your Review' });
            await expect(page.locator('.legend.review-legend')).toContainText(`You're reviewing:`);

        });
});