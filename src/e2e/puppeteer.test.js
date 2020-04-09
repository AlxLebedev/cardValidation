import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Card validation form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('Card validation form', () => {
    test('should add .valid class to pay system img', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[class=card-validation-form]');
      const input = await form.$('[id=input]');
      await input.type('30569309025904');
      const submit = await form.$('[id=validate-button]');
      submit.click();
      await page.waitForSelector('[id=input].valid');
    });

    test('should add .invalid class to pay system img', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[class=card-validation-form]');
      const input = await form.$('[id=input]');
      await input.type('601111111111');
      const submit = await form.$('[id=validate-button]');
      submit.click();
      await page.waitForSelector('[id=input].invalid');
    });
  });
});
