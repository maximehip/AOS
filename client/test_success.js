const puppeteer = require('puppeteer');

try {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.type('#email', 'test@testeur.fr');
        await page.type('#password', "azerty");
        await page.click('#login'); 
        await page.waitForSelector('#message');
        let element = await page.$('#message');
        let value = await page.evaluate(el => el.textContent, element);
        await browser.close();
        console.log(value);
    })();
} catch (err) {
    console.err(err);
}