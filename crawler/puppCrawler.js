const puppeteer = require('puppeteer');

(async () => {
    try { 
        // Initial
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Go to url http://localhost:3000/
        const url = 'https://news.yahoo.co.jp/categories/sports';
        const response = await page.goto(url, {
            waitUntil: ['load'],
            timeout: 30000
        });

        if (!response) {
            throw new Error(`Cannot access to url ${url}`);
        }

        if (response.status() !== 200) {
            throw new Error(`Failed to access to url ${url} with status = ${response.status()}`);
        }

        // console.log("This is a content that was crawled from a website: localhost:3000", await page.content());

        // // Get a list of articles
        const selector = "a.newsFeed_item_link";
        await page.waitForSelector(selector);
        const urls = await page.$$eval(selector, (list) => list.map((a) => a.href));
        console.log(`This is a list of articles that was crawled from ${url}`, urls);

        browser.close();
    } catch (error) {
        console.log('Error Exception', error);
    }
})();