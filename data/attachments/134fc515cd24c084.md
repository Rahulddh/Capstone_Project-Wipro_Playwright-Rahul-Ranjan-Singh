# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Authentication/signup.spec.js >> AUTHENTICATION SIGNUP TEST >> AUTH-02 Signup with Existing Email
- Location: tests/Authentication/signup.spec.js:43:9

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - paragraph [ref=e4]: This is a demo store. No orders will be fulfilled.
  - generic [ref=e5]:
    - banner [ref=e6]:
      - generic [ref=e8]:
        - link "Skip to Content" [ref=e9] [cursor=pointer]:
          - /url: "#contentarea"
        - generic [ref=e10]:
          - strong [ref=e11]: Language
          - button "English " [ref=e13] [cursor=pointer]:
            - strong [ref=e14]: English
            - text: 
        - list [ref=e15]:
          - listitem [ref=e16]: Default welcome msg!
          - listitem [ref=e17]:
            - link "Sign In" [ref=e18] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/customer/account/login/referer/aHR0cHM6Ly9kZW1vLW0yLmJpcmQuZXUvY3VzdG9tZXIvYWNjb3VudC9jcmVhdGUv/
            - text: or
          - listitem [ref=e19]:
            - link "Create an Account" [ref=e20] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/customer/account/create/
      - generic [ref=e21]:
        - text: 
        - link "store logo" [ref=e22] [cursor=pointer]:
          - /url: https://demo-m2.bird.eu/
          - img "Magento Commerce" [ref=e23]
        - generic [ref=e24]:
          - link " My Cart" [ref=e25] [cursor=pointer]:
            - /url: https://demo-m2.bird.eu/checkout/cart/
            - text: 
            - generic [ref=e26]: My Cart
          - text: 
        - generic [ref=e29]:
          - generic [ref=e30]:
            - generic [ref=e31]:
              - text: 
              - generic [ref=e32]: Search
            - combobox " Search" [ref=e34]
          - generic:
            - button "Search" [disabled]:
              - text: 
              - generic: Search
        - list:
          - listitem: ()
    - tablist [ref=e36]:
      - tabpanel [ref=e37]:
        - navigation [ref=e38]:
          - menu [ref=e39]:
            - listitem [ref=e40]:
              - menuitem "Home" [ref=e41] [cursor=pointer]
            - listitem [ref=e42]:
              - menuitem "Women" [ref=e43]: Women
            - listitem [ref=e44]:
              - menuitem "Men" [ref=e45]: Men
            - listitem [ref=e46]:
              - menuitem "Bags" [ref=e47] [cursor=pointer]: Bags
            - listitem [ref=e48]:
              - menuitem "Blog" [ref=e49] [cursor=pointer]: Blog
            - listitem [ref=e50]:
              - menuitem "Lookbook" [ref=e51] [cursor=pointer]: Lookbook
            - listitem [ref=e52]:
              - menuitem "Contact" [ref=e53] [cursor=pointer]
            - listitem [ref=e54]:
              - menuitem "ACM page" [ref=e55] [cursor=pointer]
    - main [ref=e56]:
      - heading "Create New Customer Account" [level=1] [ref=e58]
      - generic:
        - generic:
          - alert
      - generic [ref=e60]:
        - text: or * *
        - generic [ref=e61]:
          - group "Personal Information" [ref=e62]:
            - generic [ref=e63]: Personal Information
            - generic [ref=e64]:
              - generic [ref=e65]: First Name *
              - textbox "First Name *" [ref=e67]: rahul
            - generic [ref=e68]:
              - generic [ref=e69]: Last Name *
              - textbox "Last Name *" [active] [ref=e71]: Singh
            - generic [ref=e72]:
              - checkbox "Sign Up for Newsletter" [ref=e73]
              - generic [ref=e74]: Sign Up for Newsletter
            - generic [ref=e75]:
              - checkbox "Allow remote shopping assistance" [ref=e76]
              - generic [ref=e77]: Allow remote shopping assistance
              - generic [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: Tooltip
                - button "Tooltip" [ref=e80]: 
          - group "Sign-in Information" [ref=e81]:
            - generic [ref=e82]: Sign-in Information
            - generic [ref=e83]:
              - generic [ref=e84]: Email*
              - textbox "Email*" [ref=e86]
            - generic [ref=e87]:
              - generic [ref=e88]: Password*
              - generic [ref=e89]:
                - textbox "Password*" [ref=e90]
                - generic [ref=e92]: "Password Strength: No Password"
            - generic [ref=e93]:
              - generic [ref=e94]: Confirm Password *
              - textbox "Confirm Password *" [ref=e96]
            - generic [ref=e97]:
              - checkbox "Show Password" [ref=e98]
              - generic [ref=e99]: Show Password
            - text: "* Required Fields"
          - group
          - button "Create an Account" [ref=e102] [cursor=pointer]
    - contentinfo [ref=e103]:
      - generic [ref=e104]:
        - generic [ref=e107]:
          - generic [ref=e109]:
            - text: 
            - generic [ref=e110]:
              - generic [ref=e111]: "Sign Up for Our Newsletter:"
              - textbox "Sign Up for Our Newsletter:" [ref=e112]:
                - /placeholder: Enter your email address
          - button "Subscribe" [ref=e114] [cursor=pointer]
        - list [ref=e115]:
          - listitem [ref=e116]:
            - link "Privacy and Cookie Policy" [ref=e117] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/privacy-policy-cookie-restriction-mode/
          - listitem [ref=e118]:
            - link "Search Terms" [ref=e119] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/search/term/popular/
          - listitem [ref=e120]:
            - link "Advanced Search" [ref=e121] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/catalogsearch/advanced/
          - listitem [ref=e122]:
            - link "Orders and Returns" [ref=e123] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/sales/guest/form/
          - listitem [ref=e124]:
            - link "Contact Us" [ref=e125] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/contact/
    - generic [ref=e126]: Copyright © 2016 Magento. All rights reserved.
```

# Test source

```ts
  1  | export class SignupPage{
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.firstInput = page.locator('#firstname');
  5  |         this.lastInput = page.locator('#lastname');
  6  |         this.emailInput = page.locator('#email_address');
  7  |         this.passwordInput = page.locator('#password');
  8  |         this.conpasswordInput = page.locator('#password-confirmation');
  9  |         this.CreateButton = page.getByRole('button', {name: 'Create an Account'});
  10 |         
  11 |     }
  12 | 
  13 |      async openSignupPage() {
  14 |         await this.page.goto('https://demo-m2.bird.eu/customer/account/create/');
  15 | 
  16 |     }
  17 | 
  18 |     async signup(first_name,last_name, email, password, confirm_password) {
  19 |         await this.firstInput.fill(first_name);
  20 |         await this.lastInput.fill(last_name);   
> 21 |         await this.emailInput.fill(email);
     |                               ^ Error: locator.fill: value: expected string, got undefined
  22 |         await this.passwordInput.fill(password);
  23 |         await this.conpasswordInput.fill(confirm_password);
  24 |     }
  25 | 
  26 |     async submit() {
  27 |         await this.CreateButton.click();
  28 |     }
  29 | 
  30 | }
```