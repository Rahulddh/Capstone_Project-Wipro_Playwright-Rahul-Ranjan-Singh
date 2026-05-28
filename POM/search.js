export class SearchPage {

    constructor(page) {

        this.page = page;

        // Search
        this.searchInput = page.locator('#search');
        this.searchButton =page.locator('button[title="Search"]');

        // Products
        this.productTitle = page.locator('.product-item-link');
        this.productImage =page.locator('.product-image-photo');
        this.productPrice =page.locator('.price');

        // Sort
        this.sortDropdown =page.locator('#sorter');

         // Compare
        this.compareButton =page.locator('.action compare primary');

        this.compareLink =page.getByRole('link',{ name: /comparison list/i })

    }

    // Open Homepage
    async openHomePage() {
        await this.page.goto(process.env.BASE_URL);
    }

    // Search Product
    async searchProduct(product) {
        await this.searchInput.fill(product);
        await this.searchButton.press('Enter');

    }

    // Sort Product
    async sortProduct(value) {
        await this.sortDropdown.selectOption(value);

    }

    // sorting

}