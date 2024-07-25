class NavigationElements{
    constructor(page) {
        this.page = page;
        this.mobile = page.locator('.nav-1');
        this.tv = page.locator('.nav-2');
        this.account = page.locator('#header-account .label');
        this.cartBtn = page.locator('#header-cart .label');
        this.comparedItemsList = page.locator('ol#recently-compared-items');
        this.searchBox = page.locator('.search');
        this.newsLetterBox = page.locator('input[type="email"]');
        this.btnSubscribe = page.getByRole('button', {name: "Subscribe"});
        this.aboutUs = page.getByRole('a', {name : 'About Us'});
        this.contactUs = page.getByRole('a', {name : 'Contact Us'})
        this.customerService = page.getByRole('a', {name : 'Customer Service'})
        this.privacyPolicy = page.getByRole('a', {name : 'Privacy Policy'})
        this.myAccount = page.getByRole('a', {name : 'My Account'})
        this.ordersAndReturns = page.getByRole('a', {name : 'Orders and Returns'})
        //this.btnAccount = page.locator('.skip-account span.label');     
        this.successMsgPlaceholder = page.locator('li.success-msg');   
    }

    async clickOnMobile() {
        await this.mobile.click();
    }

    async clickOnTV() {
        await this.tv.click();        
    }
    
    async clickOnAccount() {
        await this.account.click();
    }

    async clickOnCart() {
        await this.cartBtn.click();
    }

    async clickOnComparedItemsList() {
        await this.comparedItemsList.click();
    }

    async fillDataInSearchBox(deviceName) {
        return await this.searchBox.fill(deviceName);
    }

    async fillDataInNewsLetterBox(email) {
        await this.newsLetterBox.fill(email);
    }

    async clickOnSubscribeBtn() {
        await this.btnSubscribe.click();
    }

    async clickOnAboutUs() {
        await this.aboutUs.click();
    }

    async clickOnContactUs() {
        await this.contactUs.click();
    }

    async clickOnCustomerService() {
        await this.customerService.click();
    }

    async clickOnPrivacyPolicy() {
        await this.privacyPolicy.click();
    }

    async clickOnMyAccout() {
        await this.aboutUs.click();
    }    
}

module.exports = {NavigatioElements};