# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Product Page/product.spec.js >> Product >> PRODUCT-04 Verify product Image
- Location: tests/Product Page/product.spec.js:66:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.fotorama__img')
Expected: visible
Error: strict mode violation: locator('.fotorama__img') resolved to 4 elements:
    1) <img alt="Radiant Tee" aria-hidden="false" class="fotorama__img" src="https://demo-m2.bird.eu/media/catalog/product/cache/00d5f4c4be32dd6972e5a4316b89309a/w/s/ws12-orange_main.jpg"/> aka getByRole('img', { name: 'Radiant Tee' }).first()
    2) <img alt="Radiant Tee" aria-hidden="false" class="fotorama__img" src="https://demo-m2.bird.eu/media/catalog/product/cache/00d5f4c4be32dd6972e5a4316b89309a/w/s/ws12-orange_back.jpg"/> aka getByAltText('Radiant Tee').nth(1)
    ...

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.fotorama__img')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - listitem [ref=e16]: Welcome, rahul Singh!
          - listitem [ref=e17]:
            - button "Change " [ref=e18] [cursor=pointer]:
              - button "Change " [ref=e19]:
                - generic [ref=e20]: Change
                - text: 
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
      - text: 
    - list [ref=e57]:
      - listitem [ref=e58]:
        - link "Home" [ref=e59] [cursor=pointer]:
          - /url: https://demo-m2.bird.eu/
        - text: 
      - listitem [ref=e60]:
        - strong [ref=e61]: Radiant Tee
    - main [ref=e62]:
      - generic:
        - generic:
          - alert
      - generic [ref=e64]:
        - text: or * *
        - generic [ref=e65]:
          - link "Skip to the end of the images gallery" [ref=e66] [cursor=pointer]:
            - /url: "#gallery-next-area"
          - generic [ref=e69]:
            - generic [ref=e70]:
              - button "Previous"
              - generic [ref=e71]:
                - img "Radiant Tee" [ref=e73]
                - img [ref=e75]
              - button "Next" [ref=e76] [cursor=pointer]
            - generic [ref=e79]:
              - button "Previous"
              - generic [ref=e80]:
                - button "Radiant Tee" [ref=e82]:
                  - img "Radiant Tee" [ref=e84]
                - button "Radiant Tee" [ref=e85]:
                  - img "Radiant Tee" [ref=e87]
              - button "Next"
          - link "Skip to the beginning of the images gallery" [ref=e88] [cursor=pointer]:
            - /url: "#gallery-prev-area"
        - generic [ref=e89]:
          - heading "Radiant Tee" [level=1] [ref=e91]
          - generic [ref=e92]:
            - generic [ref=e93]:
              - generic [ref=e94]: "Rating:"
              - generic "60%" [ref=e95]:
                - text: 
                - generic [ref=e96]:
                  - text: 
                  - generic [ref=e97]:
                    - generic [ref=e98]: "60"
                    - text: "% of"
                    - generic [ref=e99]: "100"
            - generic [ref=e100]:
              - link "3 Reviews" [ref=e101] [cursor=pointer]:
                - /url: https://demo-m2.bird.eu/radiant-tee.html#reviews
              - link "Add Your Review" [ref=e102] [cursor=pointer]:
                - /url: https://demo-m2.bird.eu/radiant-tee.html#review-form
          - generic [ref=e103]:
            - generic [ref=e107]: €22.00
            - generic [ref=e108]:
              - generic "Availability" [ref=e109]: In stock
              - generic [ref=e110]:
                - strong [ref=e111]: "SKU#:"
                - generic [ref=e112]: WS12
          - generic [ref=e113]:
            - text: Subtotal
            - generic [ref=e115]: €22.00
          - generic [ref=e117]:
            - generic [ref=e120]:
              - generic [ref=e121]:
                - text: Color
                - listbox "Color" [ref=e123]:
                  - option "Blue" [ref=e124] [cursor=pointer]
                  - option "Orange" [ref=e125] [cursor=pointer]
                  - option "Purple" [ref=e126] [cursor=pointer]
              - generic [ref=e127]:
                - text: Size
                - listbox "Size" [ref=e129]:
                  - option "XS" [ref=e130] [cursor=pointer]
                  - option "S" [ref=e131] [cursor=pointer]
                  - option "M" [ref=e132] [cursor=pointer]
                  - option "L" [ref=e133] [cursor=pointer]
                  - option "XL" [ref=e134] [cursor=pointer]
            - generic [ref=e135]:
              - generic [ref=e136]: "Estimated Shipping Date : 6/16/26"
              - generic [ref=e138]:
                - generic [ref=e139]:
                  - generic [ref=e140]: Qty
                  - spinbutton "Qty" [ref=e142]: "1"
                - button "Add to Cart" [ref=e144] [cursor=pointer]
          - generic [ref=e146]:
            - link " Add to Wish List" [ref=e147] [cursor=pointer]:
              - /url: "#"
            - link " Add to Compare" [ref=e148] [cursor=pointer]:
              - /url: "#"
        - tablist [ref=e150]:
          - tab "Details" [expanded] [ref=e151]:
            - link "Details" [ref=e152] [cursor=pointer]:
              - /url: "#description"
          - tabpanel "Details" [ref=e153]:
            - generic [ref=e155]:
              - paragraph [ref=e156]: So light and comfy, you'll love the Radiant Tee's organic fabric, feel, performance and style. You may never want to stop moving in this shirt.
              - paragraph [ref=e157]:
                - text: • Salmon soft scoop neck tee.
                - text: • Athletic, semi-form fit.
                - text: • Flat seams prevent chafing.
                - text: • 67% Organic Cotton / 28% Hemp / 5% Spandex.
          - tab "More Information" [ref=e158]:
            - link "More Information" [ref=e159] [cursor=pointer]:
              - /url: "#additional"
          - tab "Reviews (3)" [ref=e160]:
            - link "Reviews (3)" [ref=e161] [cursor=pointer]:
              - /url: "#reviews"
          - text: "*       * * *"
    - contentinfo [ref=e162]:
      - generic [ref=e163]:
        - generic [ref=e166]:
          - generic [ref=e168]:
            - text: 
            - generic [ref=e169]:
              - generic [ref=e170]: "Sign Up for Our Newsletter:"
              - textbox "Sign Up for Our Newsletter:" [ref=e171]:
                - /placeholder: Enter your email address
          - button "Subscribe" [ref=e173] [cursor=pointer]
        - list [ref=e174]:
          - listitem [ref=e175]:
            - link "Privacy and Cookie Policy" [ref=e176] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/privacy-policy-cookie-restriction-mode/
          - listitem [ref=e177]:
            - link "Search Terms" [ref=e178] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/search/term/popular/
          - listitem [ref=e179]:
            - link "Advanced Search" [ref=e180] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/catalogsearch/advanced/
          - listitem [ref=e181]:
            - link "Contact Us" [ref=e182] [cursor=pointer]:
              - /url: https://demo-m2.bird.eu/contact/
    - generic [ref=e183]: Copyright © 2016 Magento. All rights reserved.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { LoginPage } from "../../POM/loginpage.js";
  3   | import { SearchPage } from '../../POM/search.js';
  4   | import { ProductPage } from '../../POM/product.js';
  5   | 
  6   | test.describe('Product', () => {
  7   |     let loginpage
  8   |     let searchpage
  9   |     let productpage
  10  | 
  11  |     test.beforeEach(async ({ page }) => {
  12  |         loginpage = new LoginPage(page);
  13  |         searchpage = new SearchPage(page);
  14  |         productpage = new ProductPage(page);
  15  |         await loginpage.openLoginPage();
  16  |         //enter the email and password
  17  |         await loginpage.login(process.env.EMAIL, process.env.PASSWORD);
  18  |         await loginpage.submit();
  19  |     });
  20  | 
  21  |     // ===================================
  22  |     // PRODUCT-01 Verify product page
  23  |     // ===================================
  24  | 
  25  |     test('PRODUCT-01 Verify product page opens', async ({ page }) => {
  26  | 
  27  |         //enter the product name in search bar
  28  |         await searchpage.searchProduct('Shirt');
  29  | 
  30  |         //click the 1st product
  31  |         await page.locator('.product-item-link').first().click();
  32  | 
  33  |         // Verify product page opened
  34  |         await expect(page).toHaveURL("https://demo-m2.bird.eu/radiant-tee.html");
  35  | 
  36  |     });
  37  | 
  38  |     // ===================================
  39  |     // PRODUCT-02 Verify product title
  40  |     // ===================================
  41  | 
  42  |     test('PRODUCT-02 Verify product title', async ({ page }) => {
  43  | 
  44  |         await searchpage.searchProduct('Shirt');
  45  |         await page.locator('.product-item-link').first().click();
  46  |         await expect(productpage.productTitle).toBeVisible();
  47  | 
  48  |     });
  49  | 
  50  |     // ===================================
  51  |     // PRODUCT-03 Verify product Price
  52  |     // ===================================
  53  | 
  54  |     test('PRODUCT-03 Verify product Price', async ({ page }) => {
  55  | 
  56  |         await searchpage.searchProduct('Shirt');
  57  |         await page.locator('.product-item-link').first().click();
  58  |         await expect(productpage.productPrice).toBeVisible();
  59  | 
  60  |     });
  61  | 
  62  |     // ===================================
  63  |     // PRODUCT-04 Verify product Image
  64  |     // ===================================
  65  | 
  66  |     test('PRODUCT-04 Verify product Image', async ({ page }) => {
  67  | 
  68  |         await searchpage.searchProduct('Shirt');
  69  |         await page.locator('.product-item-link').first().click();
> 70  |         await expect(productpage.productImage).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
  71  | 
  72  |     });
  73  | 
  74  |     // ===================================
  75  |     // PRODUCT-05 Verify Size Selector
  76  |     // ===================================
  77  | 
  78  |     test('PRODUCT-05 Verify Size Selector', async ({ page }) => {
  79  | 
  80  |         await searchpage.searchProduct('Shirt');
  81  |         await page.locator('.product-item-link').first().click();
  82  |         await expect(page.locator('.swatch-attribute.size')).toBeVisible();
  83  |         await expect(page.locator('.swatch-attribute.size')).toBeEnabled();
  84  | 
  85  |     });
  86  | 
  87  |     // ===================================
  88  |     // PRODUCT-06 Verify Colour Selector
  89  |     // ===================================
  90  | 
  91  |     test('PRODUCT-06 Verify Colour Selector', async ({ page }) => {
  92  | 
  93  |         await searchpage.searchProduct('Shirt');
  94  |         await page.locator('.product-item-link').first().click();
  95  |         await expect(page.locator('.swatch-attribute.color')).toBeVisible();
  96  |         await expect(page.locator('.swatch-attribute.color')).toBeEnabled();
  97  | 
  98  |     });
  99  | 
  100 |     // ===================================
  101 |     // PRODUCT-07 Verify quantity update
  102 |     // ===================================
  103 | 
  104 |     test('PRODUCT-07 Verify quantity update', async ({ page }) => {
  105 |         await searchpage.searchProduct('Shirt');
  106 |         await page.locator('.product-item-link').first().click();
  107 |         await expect(page.locator('.field.qty')).toBeVisible();
  108 |         await expect(page.locator('.field.qty')).toBeEnabled();
  109 |     
  110 |     });
  111 | 
  112 |     // ===================================
  113 |     // PRODUCT-08 Verify add to cart
  114 |     // ===================================
  115 | 
  116 |     test('PRODUCT-08 Verify add to cart',
  117 |         async ({ page }) => {
  118 |             await searchpage.searchProduct('Shirt');
  119 |             await page.locator('.product-item-link').first().click();
  120 |             await expect(page.locator('#product-addtocart-button')).toBeVisible();
  121 |             await expect(page.locator('#product-addtocart-button')).toBeEnabled();
  122 | 
  123 |         });
  124 | 
  125 |     // ===================================
  126 |     // PRODUCT-09 Verify add to WishList
  127 |     // ===================================
  128 | 
  129 |     test('PRODUCT-09 Verify add to WishList', async ({ page }) => {
  130 |             await searchpage.searchProduct('Shirt');
  131 |             await page.locator('.product-item-link').first().click();
  132 |             await page.locator('.action.towishlist').click();
  133 |             await expect(page).toHaveURL(/wishlist/);
  134 | 
  135 |         });
  136 | 
  137 |     // ===================================
  138 |     // PRODUCT-10 Verify add to Compare
  139 |     // ===================================
  140 | 
  141 |     test('PRODUCT-10 Verify add to Compare', async ({ page }) => {
  142 |             await searchpage.searchProduct('Shirt');
  143 |             await page.locator('.product-item-link').first().click();
  144 |             await page.locator('.action.tocompare').click();
  145 |             await expect(page.locator('[data-ui-id="message-success"]')).toContainText('You added product Radiant Tee to the');
  146 | 
  147 |         });
  148 | 
  149 |     // // ===================================
  150 |     // // PRODUCT-11 Verify Add Your Review
  151 |     // // ===================================
  152 | 
  153 |     test('PRODUCT-11 Verify Add Your Review', async ({ page }) => {
  154 |             await searchpage.searchProduct('Shirt');
  155 |             await page.locator('.product-item-link').first().click();
  156 |              await page.getByRole('link', { name: 'Add Your Review' });
  157 |             await expect(page.locator('.legend.review-legend')).toContainText(`You're reviewing:`);
  158 | 
  159 |         });
  160 | });
```