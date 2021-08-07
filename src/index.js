'use strict';

import browser from './browser';
import dateScraper from './dateScraper';

const TRAVEL_GOV_URL = process.env['TRAVEL_GOV_URL'];

module.exports = async () => {

	let browserInstance;

	try {
		browserInstance = await browser.startBrowser();
	} catch(err) {
		console.log("Could not resolve the browser instance => ", err);
	}

	const scraper = dateScraper(browserInstance);
	const update = await scraper.apply(TRAVEL_GOV_URL);

	browserInstance.close();

	return update;

}