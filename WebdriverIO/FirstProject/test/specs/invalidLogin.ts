import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'

describe('My Login application invalid login', () => {

     it('should fail login with invalid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('invalid_user', 'wrong_password')
        const errorMsg = await $('[data-test="error"]')
        await expect(errorMsg).toBeDisplayed()
        await expect(errorMsg).toHaveText(
            expect.stringContaining('Username and password do not match'))
    })
})