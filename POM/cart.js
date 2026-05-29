export class CartPage {

    constructor(page) {

        this.page = page;
        // Product
        this.productLink = page.locator('.product-item-link');
        // Size
        this.sizeM = page.locator('[data-option-label="M"]');
        // Color
        this.colorchoice = page.locator('.swatch-option.color').first();
        // Quantity
        this.qtyField = page.locator('#qty');
        // Add To Cart
        this.addToCartBtn = page.locator('#product-addtocart-button');
        // Cart
        this.cartIcon = page.locator('.showcart');
        // Cart Counter
        this.cartCounter = page.locator('.counter.qty');
        // Mini Cart
        this.miniCart = page.locator('[data-block="minicart"]');
        // Product Name
        this.productName = page.locator('.product-item-name');
        // Checkout Button
        this.checkoutBtn = page.locator('#top-cart-btn-checkout');
        // Remove Product
        this.removeBtn =page.locator('.action.delete');
        // Empty Cart Message
        this.emptyCartMessage = page.locator('.subtitle.empty');

    }

    async openFirstProduct() {

        await this.productLink.first().click();
    }

    async selectSize() {
         await this.sizeM.click();
    }

    async selectColor() {
        await this.colorchoice.click();
    }

    async updateQuantity(qty) {
        await this.qtyField.fill(qty);
    }

    async addToCart() {
        await this.addToCartBtn.click();
    }

    async openMiniCart() {
        await this.miniCart.click();
    }

    async removeProduct() {
        await this.removeBtn.click();
    }

}