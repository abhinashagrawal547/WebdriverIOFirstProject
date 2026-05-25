import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import allure from '@wdio/allure-reporter';

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await allure.addStep('Open login page');
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.pageTitle).toBeDisplayed()
        await expect(InventoryPage.pageTitle).toHaveText('Products')
    })
})