import { chromium } from 'playwright';

(async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://www.amazon.com');

    console.log('Amazon opened successfully');

    await page.waitForTimeout(5000);

    await browser.close();

})();
