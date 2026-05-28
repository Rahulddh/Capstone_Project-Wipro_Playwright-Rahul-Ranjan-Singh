export class SignupPage{
    constructor(page) {
        this.page = page;
        this.firstInput = page.locator('#firstname');
        this.lastInput = page.locator('#lastname');
        this.emailInput = page.locator('#email_address');
        this.passwordInput = page.locator('#password');
        this.conpasswordInput = page.locator('#password-confirmation');
        this.CreateButton = page.getByRole('button', {name: 'Create an Account'});
        
    }

     async openSignupPage() {
        await this.page.goto('https://demo-m2.bird.eu/customer/account/create/');

    }

    async signup(first_name,last_name, email, password, confirm_password) {
        await this.firstInput.fill(first_name);
        await this.lastInput.fill(last_name);   
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.conpasswordInput.fill(confirm_password);
    }

    async submit() {
        await this.CreateButton.click();
    }

}