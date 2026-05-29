import { test, expect } from '@playwright/test';
import {LoginPage} from "../../POM/loginpage.js";

test.describe('AUTHENTICATION Login Test', () => {
    let loginpage

    test.beforeEach(async ({page}) => {
        loginpage = new LoginPage(page);
        await loginpage.openLoginPage();
    });

    // ================================
    // 1. VALID LOGIN
    // ================================

    test('LOGIN-01 valid login', async({page}) => {
       
        //enter the email and password
        await loginpage.login(process.env.EMAIL,process.env.PASSWORD);
       
        //click the signin button
        await loginpage.submit();

        //result
        await expect(page.locator('.page-title-wrapper')).toContainText(/My Account/i);



    })

    // // ================================
    // // 2. INVALID SIGNIN
    // // ================================

    test('LOGIN-02 Invalid login', async({page}) => {


        // fill the details
        await loginpage.login('wrong@gmail.com', 'Wrong123')

        //click the signin button
        await loginpage.submit();
        
        //result
        await expect(page.getByText(/The account sign-in was incorrect/)).toBeVisible;
        //await expect(page.locator('[data-ui-id="message-error"]')).toHaveText(/The account sign-in was incorrect/)
        //await expect(page.locator('.message-error ')).toContainText(/The account sign-in was incorrect/)
 
     });

    // // ================================
    // // 3. MANDATORY FEILD
    // // ================================

    test('LOGIN-03 Mandatory Feild', async ({ page }) => {
        
        //click the signin button
        await loginpage.submit();

        //Verify validation messages      
        await expect(page.locator('#email-error')).toContainText('This is a required field.');  
        await expect(page.locator('#password-error')).toContainText('This is a required field.');
    });

    // ================================
    // 4. INVALID EMAIL FORMAT
    // ================================

    const invalidEmails = [
        'rahulgmail.com',
        'rahul@gmail',
        '@gmail.com',
        'rahul@.com',
        'rahul.com',
        'rahul@@gmail.com',
        'rahul gmail@gmail.com',
        'rahul#gmail.com'];

    invalidEmails.forEach(email => {
        test('LOGIN-04 Invalid Email Format' + email, async ({ page }) => {

            // fill the details
            await loginpage.login(email, process.env.PASSWORD);

            // click the sign in button
            await loginpage.submit();

            // result
            await expect(page.locator('#email-error')).toContainText('Please enter a valid email address')
        })

    });
        
    // ================================
    // 5. VERIFY LOGOUT
    // ================================

    test('LOGIN-05 Verify LogOut', async({page}) => {

        //login
        await loginpage.login(process.env.EMAIL,process.env.PASSWORD);
        await loginpage.submit();

        // account page
        await page.goto('https://demo-m2.bird.eu/customer/account/');

        await page.getByRole('listitem').filter({ hasText: 'Change My Account My Wish' }).locator('button').click();
        await page.getByRole('link', { name: 'Sign Out' }).click();

        await expect(page).toHaveURL("https://demo-m2.bird.eu/customer/account/logoutSuccess/");



    })

});