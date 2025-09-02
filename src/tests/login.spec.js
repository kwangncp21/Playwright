import {test,expect} from "@playwright/test";
import {LoginPage} from "../tests/pages/login.page"

test('Add 1 item', async({page}) => {
    const loginPage = new LoginPage(page);

        await loginPage.goto();

        page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();      //close pop-up dialog

        });

        await loginPage.fillLoginForm('kw.nichapa@gmail.com','Demo_001')
        await loginPage.addToCart()
        await loginPage.addNewAddress('Thailand','Mary','0862264889','10120','82/98 Bangkuntheain','Bangkok')
    
});

test('Add 2 items', async({page}) => {

    const loginPage = new LoginPage(page);

        await loginPage.goto();

        page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();      //close pop-up dialog

        });
        await loginPage.fillLoginForm('kw.nichapa@gmail.com','Demo_001')
        await loginPage.addToCart()
        await loginPage.addNewAddress('Thailand','Test_02','0862264889','10120','82/98 Bangkuntheain','Bangkok')

});

test('SearchItem', async({page}) => {

    const loginPage = new LoginPage(page);

        await loginPage.goto();

        page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();      //close pop-up dialog

        });
        await loginPage.fillLoginForm('kw.nichapa@gmail.com','Demo_001')
        await loginPage.SearchItem('apple')

});