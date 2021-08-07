const selector = 'div.contentbody';
const dateRe = new RegExp('Last updated: (.*), 2021');

async function loadPage(browser, url) {
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    return page;
}

async function lookupText(page) {
    return await page.evaluate(() => {
        return document.querySelector('div.contentbody').textContent;
    });
}

function lookupDate(text) {
    return dateRe.exec(text)[1];
}

module.exports = (browser) => { 
    return {
        apply: async function(url) {
            const page = await loadPage(browser, url);
            const text = await lookupText(page);
            const date = lookupDate(text)
            return date;  
       } 
    }
}