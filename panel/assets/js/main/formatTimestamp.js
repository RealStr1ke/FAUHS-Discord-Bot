/**
 * @file formatTimestamp.js
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

function formatTimestamp(timestamp) {
	let date = new Date(timestamp);
	return `${date.toLocaleDateString(
		translation.langCode
	)} ${date.toLocaleTimeString(translation.langCode)}`;
}
