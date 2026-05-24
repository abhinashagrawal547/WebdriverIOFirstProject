import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import allure from '@wdio/allure-reporter';

describe('My Login application and first cart item verification', () => {

    it('should login with valid credentials and validate home screen', async () => {
        await LoginPage.open()
        await allure.addStep('Open login page');
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.firstCartItem).toBeDisplayed()
        await browser.pause(10000)
        await expect(InventoryPage.firstCartItem).toHaveText('Sauce Labs Backpack');
    })
})