const puppeteer = require('puppeteer');

try {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.type('#email', 'wrong@testeur.fr');
        await page.type('#password', "wrong");
        await page.click('#login'); 
        await page.waitForSelector('#errorMessage');
        let element = await page.$('#errorMessage');
        let value = await page.evaluate(el => el.textContent, element);
        await browser.close();
        console.log(value);
    })();
} catch (err) {
    console.err(err);
}