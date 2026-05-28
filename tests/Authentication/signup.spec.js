import { test, expect } from '@playwright/test';
import { SignupPage } from "../../POM/singup.js";

test.describe('AUTHENTICATION SIGNUP TEST', () => {

    let signuppage

    test.beforeEach(async ({ page }) => {
        signuppage = new SignupPage(page);
        await signuppage.openSignupPage();

    });

    // ================================
    // AUTH-01 Signup with valid data
    // ================================

    test('AUTH-01 Verify signup with valid data', async ({ page }) => {

        // Verify signup page
        await expect(page.locator('.page-title')).toContainText('Create New Customer Account');

        // Fill signup form
        await signuppage.signup('rahul', 'Singh', `rahul${Date.now()}@gmail.com`, 'Test@12345', 'Test@12345');

        // Click Create Account button
        await signuppage.submit();
        //await page.locator('button[title="Create an Account"]').click();



        // Verify account page
        await expect(page).toHaveURL("https://demo-m2.bird.eu/customer/account/");
        //await expect(page.locator('.page-title-wrapper')).toContainText('My Account');
        //await expect(page.locator('h1')).toContainText('My Account');
    });

    // ================================
    // AUTH-02 Signup with Existing Email
    // ================================


    test('AUTH-02 Signup with Existing Email', async ({ page }) => {

        //  // Verify signup page
        await expect(page.locator('.page-title')).toContainText('Create New Customer Account');

        //  // Fill signup form
        await signuppage.signup('rahul', 'Singh', process.env.EMAIL, 'Test@12345', 'Test@12345');

        // // Click Create Account button
        await signuppage.submit();

        // // Error validation

        await expect(page.locator('.message-error')).toContainText('There is already an account with this email address');


    });

    // ================================
    // AUTH-03 Signup with Invalid Email
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

        test('AUTH-03 Invalid Email Login' + email, async ({ page }) => {

            await expect(page.locator('.page-title')).toContainText('Create New Customer Account');

            await signuppage.signup('rahul', 'Singh', email, 'Test@12345', 'Test@12345');

            // Submit
            await signuppage.submit();

            // Validation 
            await expect(page.locator('#email_address-error')).toContainText('Please enter a valid email address');

        })

    })


    // =======================================
    // AUTH-04 Empty Mandatory Fields
    // =======================================

    test('AUTH-04 Empty Mandatory Fields',
        async ({ page }) => {

            await expect(page.locator('.page-title')).toContainText('Create New Customer Account');

            // Click Create Account button
            await signuppage.submit();

            // Verify validation messages
            await expect(page.locator('#firstname-error')).toContainText('This is a required field',);

            await expect(page.locator('#lastname-error')).toContainText('This is a required field');

            await expect(page.locator('#email_address-error')).toContainText('This is a required field');

            await expect(page.locator('#password-error')).toContainText('This is a required field');

            await expect(page.locator('#password-confirmation-error')).toContainText('This is a required field');

        });


    // ============================
    // AUTH-05 Password Mismatch
    // ============================

    test('AUTH-05 Password Mismatch', async ({ page }) => {


        // Verify signup page
        await expect(page.locator('.page-title')).toContainText('Create New Customer Account');

        // Fill signup form
        await signuppage.signup('rahul', 'Singh', `rahul${Date.now()}@gmail.com`, 'Test@12345', 'Test@1234');


        // Click Create Account button
        await page.locator('button[title="Create an Account"]').click();

        // Validation
        await expect(page.locator('#password-confirmation-error')).toContainText('Please enter the same value again');

    });

    //     // =================================
    //     // AUTH-06 Invalid Name
    //     // =================================


    test('AUTH-06 Invalid Name', async ({ page }) => {

        await expect(page.locator('.page-title')).toContainText('Create New Customer Account');

        await signuppage.signup('rahul@', 'Singh@', `rahul${Date.now()}@gmail.com`, 'Test@12345', 'Test@12345');

        // Submit
        await page.locator('button[title="Create an Account"]').click();

        // Validation 
        await expect(page.locator('.message-error')).toContainText('First Name is not valid');

    })

});









