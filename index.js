const browser = require('./browser');
const dateScraper = require('./dateScraper');

const TRAVEL_GOV_URL = process.env['TRAVEL_GOV_URL'];
const LAST_UPDATE = process.env['LAST_UPDATE'];

async function run() {

	let browserInstance;

	try {
		browserInstance = await browser.startBrowser();
	} catch(err) {
		console.log("Could not resolve the browser instance => ", err);
	}

	const scraper = dateScraper(browserInstance);
	const update = await scraper.apply(TRAVEL_GOV_URL);
	
	if (LAST_UPDATE === update) {
		console.log("Not updated yet.")
	} else {
		console.log("Updated!");
	}

	browserInstance.close();

}

run();