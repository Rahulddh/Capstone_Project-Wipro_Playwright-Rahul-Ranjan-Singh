export class LoginPage{
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        
    }

    async openLoginPage() {
        await this.page.goto('https://demo-m2.bird.eu/customer/account/login/');

    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async submit() {
        await this.signInButton.click();
    }
}

