import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test(`I can play a round`, async () => {
    let cell = await (await driver).findElement(By.id('cell-4'))
    await cell.click()
});

test(`Add an O`, async () => {
    let cell = await (await driver).findElement(By.id('cell-4'))
    await cell.click()
    let o = await (await driver).findElement(By.id('cell-1'))
    await o.getText()
});

test(`Display winner`, async () => {
    let cell = await (await driver).findElement(By.id('cell-2'))
    await cell.click()
    let cellTwo = await (await driver).findElement(By.id('cell-5'))
    await cellTwo.click() 
    let cellThree = await (await driver).findElement(By.id('cell-8'))
    await cellThree.click()

    await driver.sleep(2000)

    let winnerDisplay = await (await driver).findElement(By.xpath(`//h1`))
    await winnerDisplay.getText()
});