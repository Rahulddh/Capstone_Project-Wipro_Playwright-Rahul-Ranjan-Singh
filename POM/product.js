export class ProductPage {
    constructor(page) {
        this.page = page;
        this.productTitle = page.locator('.page-title');
        this.productPrice = page.locator('.price').first();
        this.productImage = page.locator('.fotorama__img');
        this.productDescription = page.locator('#description');
        this.productSKU = page.locator('.product.attribute.sku');
        this.stockStatus = page.locator('.stock.available');
        this.quantityInput =page.locator('#qty');
        this.addToCartButton =page.locator('#product-addtocart-button');
        this.successMessage =page.locator('.message-success');
        this.cartCounter = page.locator('.counter-number');

    }

    
}