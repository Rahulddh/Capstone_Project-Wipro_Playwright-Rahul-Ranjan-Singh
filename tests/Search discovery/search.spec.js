import { test, expect } from '@playwright/test';
import { LoginPage } from "../../POM/loginpage.js";
import { SearchPage } from '../../POM/search.js';

test.describe('Search & Discovery', () => {

    let loginPage;
    let searchPage;

    test.beforeEach(async ({ page }) => {

        // Login Page Object
        loginPage = new LoginPage(page);

        // Search Page Object
        searchPage = new SearchPage(page);

        // Open Website
        await loginPage.openLoginPage();

        // Login
        await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

        // Submit Login
        await loginPage.submit();

    });

    // ====================================
    // SEARCH-01 Valid Search
    // ====================================

    const validdata = [
        'shirt',
        'SHIRT',
        'Shirt',
        'sHIRT',

    ];

    validdata.forEach(data => {
        test('SEARCH-01 valid Search' + data, async ({ page }) => {
            await searchPage.searchProduct(data);

            //await expect(searchPage.productTitle.first()).toBeVisible();
            await expect(page.locator('[data-ui-id="page-title-wrapper"]')).toHaveText(`Search results for: '${data}'`)

        });
    });

    // ====================================
    // SEARCH-02 Invalid Search
    // ====================================

    const invaliddata = [
        'fgdjy',
        '1234',
        '!@#$',
        'shirt123',

    ];

    invaliddata.forEach(data => {
        test('SEARCH-02 Invalid Search' + data, async ({ page }) => {
            await searchPage.searchProduct(data);

            await expect(page.locator('.message.notice')).toContainText('Your search returned no results.');

        });
    });


    // ====================================
    // SEARCH-03 Partial Search
    // ====================================

    test(
        'SEARCH-03 Partial Search', async ({ page }) => {

            await searchPage.searchProduct('shi');

            await expect(page.locator('dt.title').nth(1)).toContainText('Related search terms');
            //await expect(page.locator('dt.title', {hasText: 'Related search terms'})).toBeVisible();
            //await expect(page.getByText('Related search terms')).toBeVisible();

        });

    // ====================================
    // SEARCH-04 Product Price Visible
    // ====================================

    test('SEARCH-04 Product Price Visible', async ({ page }) => {

        await searchPage.searchProduct('shirt');

        await expect(searchPage.productPrice.first()).toBeVisible();

    });

    // ====================================
    // SEARCH-05 Product Image Visible
    // ====================================

    test('SEARCH-05 Product Image Visible', async ({ page }) => {

        await searchPage.searchProduct('shirt');

        await expect(searchPage.productImage.first()).toBeVisible();

    });

    // ===================================================
    // SEARCH-06 Product Title Visible
    // ===================================================

    test('SEARCH-06 Product Title Visible', async ({ page }) => {

        await searchPage.searchProduct('shirt');

        await expect(searchPage.productTitle.first()).toBeVisible();

    });

    


    //     // ====================================================
    //     // SEARCH-07 Sort Product By Price In Ascending Order
    //     // ====================================================

    // test('SEARCH-07 Sort Product By Price In Ascending Order', async ({ page }) => {

    //     await searchPage.searchProduct('shirt');
    //     await searchPage.sortProduct('price');
    //     await page.getByRole('link', { name: ' Set Ascending Direction' }).click();
    //     // Get prices
    //     const prices = await page.locator('.price').allTextContents();

    //     // Convert to number
    //     const actualPrices = prices.map(price => Number(price.replace(/[^0-9.]/g, '')));

    //     // Expected sorted array
    //     const sortedPrices =[...actualPrices].sort((a, b) => a - b);

    //     // Compare
    //     await expect(actualPrices).toEqual(sortedPrices);

    // });

    //     // ===================================================
    //     // SEARCH-08 Sort Product By Price In Descending Order
    //     // ===================================================

    // test('SEARCH-08 Sort Product By Price In Descending Order', async ({ page }) => {

    //     await searchPage.searchProduct('pant');
    //     await searchPage.sortProduct('price');
    //     await page.locator('.sorter-action').click();
    //     //await page.getByRole('link', { name: ' Set Descending Direction' }).click();
    //     await page.waitForLoadState('networkidle');
    //     // Get prices
    //     const prices = await page.locator('.price').allTextContents();
    //     //await page.waitForLoadState('networkidle');


    //     // Convert to number
    //     const actualPrices = prices.map(price => Number(price.replace(/[^0-9.]/g, '')));

    //     // Expected sorted array
    //     const sortedPrices =[...actualPrices].sort((a, b) => b - a);

    //     // Compare
    //     await expect(actualPrices).toEqual(sortedPrices);

    // });

    //     // ====================================
    //     // SEARCH-09 Sort Product By Product Name
    //     // ====================================

    // test('SEARCH-09 Sort Product by Product Name Ascending Order', async ({ page }) => {

    //     await searchPage.searchProduct('shirt');
    //     await searchPage.sortProduct('Product Name');
    //     await page.getByRole('link', { name: ' Set Ascending Direction' }).click();

    //     //get name
    //     const names = await page.locator('.product-item-link').allTextContents();

    //     const actualNames = names.map(name => name.trim()).filter(name => name !== '');

    //     //get sort
    //     const sortedAsc = [...actualNames].sort((a, b) => a.localeCompare(b));

    //     // result
    //     await expect(actualNames).toEqual(sortedAsc);


    //  });

    //     // =======================================
    //     // SEARCH-10 Sort Product By Product Name
    //     // =======================================

    //     test('SEARCH-10 Sort Product by Product Name Descending Order', async ({ page }) => {

    //     await searchPage.searchProduct('shirt');
    //     await searchPage.sortProduct('Product Name');
    //     await page.getByRole('link', { name: ' Set Descending Direction' }).click();

    //     //get name
    //     const names = await page.locator('.product name product-item-name');

    //     //get sort
    //     const sortedAsc = [...names].sort((a, b) => b.localeCompare(a));

    //     // result
    //     await expect(names).toEqual(sortedAsc);


    // });



});