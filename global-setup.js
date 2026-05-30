import { chromium } from '@playwright/test';

async function globalSetup(config) {
  // If credentials are already provided in the environment, use them
  if (process.env.EMAIL && process.env.PASSWORD) {
    console.log('[Global Setup] Using existing EMAIL and PASSWORD from environment.');
    return;
  }

  // Generate a random email to register a new user
  const email = `rahul_test_${Date.now()}@gmail.com`;
  const password = 'Test@12345';

  console.log(`[Global Setup] Registering fallback test user: ${email}`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://demo-m2.bird.eu/customer/account/create/');
    await page.locator('#firstname').fill('rahul');
    await page.locator('#lastname').fill('Singh');
    await page.locator('#email_address').fill(email);
    await page.locator('#password').fill(password);
    await page.locator('#password-confirmation').fill(password);
    await page.getByRole('button', { name: 'Create an Account' }).click();
    
    // Wait for registration to complete and redirect to the account page
    await page.waitForURL('https://demo-m2.bird.eu/customer/account/');
    console.log('[Global Setup] Fallback test user registered successfully.');
    
    // Set environment variables for all workers
    process.env.EMAIL = email;
    process.env.PASSWORD = password;
  } catch (error) {
    console.error('[Global Setup] Failed to register fallback test user:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

export default globalSetup;
