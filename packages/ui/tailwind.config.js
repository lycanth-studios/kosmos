const { resolve } = require("path");

const WORKSPACE = resolve(__dirname, "../../");

module.exports = function (app) {
	let config = {
		content: [
			resolve(WORKSPACE, "packages/*/src/**/*.{ts,tsx}"),
			resolve(WORKSPACE, `apps/${app}/src/**/*.{ts,tsx}`),
		],
	};

	return config;
};
