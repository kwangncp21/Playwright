import {Page, expect} from "@playwright/test";

export class LoginPage{

    baseUrl = 'https://juice-shop.herokuapp.com/#/';


    /**
     * 
     * @param {Page} page 
     */

    constructor(page){
        this.page = page;
        this.locatorUsername = this.page.getByLabel('Text field for the login email');
        this.locatorPassword = this.page.getByLabel('Text field for the login password');
        this.locatorWelcomeBanner = this.page.getByRole('button', { name: 'Close Welcome Banner' });
        this.locatorAccount = this.page.getByRole('button', { name: 'Show/hide account menu' });
        this.locatorLoginform = this.page.getByRole('menuitem', { name: 'Go to login page' });
        this.locatorSubmitLoginForm = this.page.getByRole('button', { name: 'Login' });
        
        //AddNewAddress
        // this.locatorCheckOut = this.page.locator('#checkoutButton');
        // this.locatorCheckOut = this.page.getByRole('button', { name: /Checkout/ });
        this.locatorAddNewAddress = this.page.getByRole('button', { name: 'Add a new address' });
        this.locatorCountry = this.page.getByLabel('Country');
        this.locatorName = this.page.getByLabel('Name');
        this.locatorMobileNum = this.page.locator('#mat-input-6');
        this.locatorZIPcode = this.page.getByLabel('ZIP Code');
        this.locatorAddress = this.page.getByLabel('Address');
        this.locatorCity = this.page.getByLabel('City');

        //Search
        this.locatorSearchButton = this.page.locator('.mat-search_icon-search');
        this.locatorSearchBox = this.page.locator('#mat-input-1');


    }
    async goto(){
        await this.page.goto(this.baseUrl);
    }

    async fillLoginForm(username,password){
        await this.locatorWelcomeBanner.click();
        await this.locatorAccount.click('Account');
        await this.locatorLoginform.click();
        await this.locatorUsername.fill(username);
        await this.locatorPassword.fill(password);
        await this.locatorSubmitLoginForm.click();
        
    }

    async addToCart(){
        
       await this.page.locator('mat-card', { hasText: 'Apple Juice' })
            .getByRole('button', { name: 'Add to Basket' })
            .click();
        await this.page.getByRole('button', { name: 'Show the shopping cart' }).click();
        // await page.getByRole('button', { name: /Checkout/ });
        await expect(this.page.locator('#checkoutButton', { hasText: ' Checkout ' })).toBeEnabled();
        await this.page.locator('#checkoutButton', { hasText: ' Checkout ' }).click();
        // await page.getByRole('button', { name: /Checkout/ }).click();
        
        // await loginPage.addNewAddress('Thailand','Mary','0862264889','10120','82/98 Bangkuntheain','Bangkok')    //delete
    }

     async addNewAddress(Country,Name,MobileNumber,ZIPCode,Address,City){
        
        await this.locatorAddNewAddress.click();
        await this.locatorCountry.fill(Country);
        await this.locatorName.fill(Name);

        // await this.page.getByLabel('Mobile Number').fill('MobileNumber');
        await this.locatorMobileNum.fill(MobileNumber);

        await this.locatorZIPcode.fill(ZIPCode);
        await this.locatorAddress.fill(Address);
        await this.locatorCity.fill(City);

        await expect(this.page.getByRole('button', { name: 'Submit' })).toBeEnabled();
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async SearchItem(Fruit){

        await this.locatorSearchButton.click();

        await this.page.waitForSelector('#mat-input-1');
        await this.locatorSearchBox.click();
        await this.locatorSearchBox.fill(Fruit);
        await this.locatorSearchBox.press('Enter');

        await expect(this.page.locator('.item-name', { hasText: 'Apple Juice (1000ml)' })).toBeVisible();
        await expect(this.page.locator('.item-name', { hasText: 'Apple Pomace' })).toBeVisible();
        await expect(this.page.locator('.item-name', { hasText: 'Banana Juice (1000ml)' })).toHaveCount(0);
        await this.page.waitForTimeout(2000);
    }
  
}